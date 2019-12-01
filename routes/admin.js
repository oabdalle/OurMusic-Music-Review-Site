var express    = require('express');
var router = express.Router();
const Song = require('../models/song');
const Review = require('../models/review');
const User = require('../models/user');
const Policy = require('../models/policy');
const Dmca = require('../models/dmca');
router.route('/policy').post(async function(req, res) {
    try{
        const policy = await Policy.find({}).sort({'text': -1})
        policy[0].text = req.body.text;
        policy[0].save(function(err2) {
            if (err2)
                res.send(err2);
    
        })
        res.json(policy[0].text);
    } catch(e) {
      console.log('error:-', e)
    }
});
router.route('/policy').get(async(req, res) => {
    try{
        const policy = await Policy.find({}).sort({'text': -1})
        res.json(policy);
        console.log(policy);
    } catch(e) {
      console.log('error:-', e)
    }
});
router.route('/dmca').post(async function(req, res) {
    // var dmca = new Dmca();     
    // dmca.text = req.body.text;  
    // dmca.save(function(err) {
    //     if (err)
    //         res.send(err);

    //     res.json({ message: 'DMCA Created!' });
    // })
    try{
        const dmca = await Dmca.find({}).sort({'text': -1})
        dmca[0].text = req.body.text;
        dmca[0].save(function(err2) {
            if (err2)
                res.send(err2);
    
        })
        res.json(dmca[0].text);
    } catch(e) {
      console.log('error:-', e)
    }
});
router.route('/dmca').get(async(req, res) => {
    try{
        const dmca = await Dmca.find({}).sort({'text': -1})
        res.json(dmca);
    } catch(e) {
      console.log('error:-', e)
    }
});
module.exports = router;