var express    = require('express');
var router = express.Router();
const User = require('../models/user');
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../validation')
router.post('/register', async (req, res) =>{
     const {error} = registerValidation(req.body);
    // console.log(req.body);
     if (error) return res.status(400).send(error.details[0].message);
     
     //Check if user is already in the database
     const emailExist = await User.findOne({email: req.body.email});
     if(emailExist) return res.status(400).send("Email already exists");
     
     //Hash passwords
     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(req.body.password, salt);


     const user = new User({
            username: req.body.email,
            password: hashPassword,
            email: req.body.email,
            managerialPriviliges: false,
            isActivated: true
         });
    user.save((error, registeredUser) => {
        if(error){
            console.log(error);
        }else{
            let payload = {subject: registeredUser.id};
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token}); 
        }
    })
    //  try{
    //      const savedUser = await user.save();
    //      res.send({user: user.id});
    //  } catch (err){
    //      res.status(400).send(err);
    //  } 
    }
    );

    // //Login
    router.post('/login',async(req, res) => {
        const {error} = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        //Checking if email exists 
        User.findOne({email: req.body.email}, async(error, user) => {
        if(!user) return res.status(400).send("Email doesn't exist");
        //PASSWORD IS CORRECT
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send("Password is incorrect");
        else{
            let payload = {subject: user.id};
            let token1 = jwt.sign(payload, 'secretKey')
            var data= {
                token: token1,
                user1 : user.managerialPriviliges,
                user2 : user.isActivated
            }
            res.status(200).json(data);
        };

    });
        // //Create and assign a token
        //  const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
        //  res.header('auth-token', token).send(({token}));
    }); 
module.exports = router;