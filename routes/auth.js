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
            email: req.body.email
         });
    user.save((error, registeredUser) => {
        if(error){
            console.log(error);
        }else{
            let payload = {subject: registeredUser.id};
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
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
    router.post('/login', (req, res) => {
        const {error} = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        //Checking if email exists 
        User.findOne({email: req.body.email}, (error, user) => {
        if(!user) return res.status(400).send("Email doesn't exist");
        //PASSWORD IS CORRECT
        const validPass = bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send("Password is incorrect");
        else{
            let payload = {subject: user.id};
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }

    });
        // //Create and assign a token
        //  const token = jwt.sign({_id: user.id}, process.env.TOKEN_SECRET);
        //  res.header('auth-token', token).send(({token}));
    }); 
module.exports = router;