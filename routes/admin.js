var express    = require('express');
var router = express.Router();
const Song = require('../models/song');
const Review = require('../models/review');
const User = require('../models/user');
const Policy = require('../models/policy');
const Dmca = require('../models/dmca');
const Log = require('../models/log');
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
router.route('/takedown/:song_id').post(async function(req, res) {
    try{
    console.log(req.params.song_id);
    await Song.findById(req.params.song_id, function(err, song) {
        var log = new Log();
         log.songTitle= song.songTitle;
         log.year = new Date();
         log.takedownRequest = true;
         log.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('Takedown');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});
router.route('/removetakedown/:song_id').post(async function(req, res) {
    try{
    console.log(req.params.song_id);
    await Song.findById(req.params.song_id, function(err, song) {
        var log = new Log();
         log.songTitle= song.songTitle;
         log.year = new Date();
         log.takedownRequest = false;
         log.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('Removed Takedown');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});
router.route('/dispute/:song_id').post(async function(req, res) {
    try{
    console.log(req.params.song_id);
    await Song.findById(req.params.song_id, function(err, song) {
        var log = new Log();
         log.songTitle= song.songTitle;
         log.year = new Date();
         log.disputed = true;
         log.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('Disputed');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});
router.route('/removedispute/:song_id').post(async function(req, res) {
    try{
    console.log(req.params.song_id);
    await Song.findById(req.params.song_id, function(err, song) {
        var log = new Log();
         log.songTitle= song.songTitle;
         log.year = new Date();
         log.disputed = false;
         log.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('Removed Dispute');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});
router.route('/notice/:song_id').post(async function(req, res) {
    try{
    console.log(req.params.song_id);
    await Song.findById(req.params.song_id, function(err, song) {
        var log = new Log();
         log.songTitle= song.songTitle;
         log.year = new Date();
         log.infringementNotice = true;
         log.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('Notice Given');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});
router.route('/removenotice/:song_id').post(async function(req, res) {
    try{
    console.log(req.params.song_id);
    await Song.findById(req.params.song_id, function(err, song) {
        var log = new Log();
         log.songTitle= song.songTitle;
         log.year = new Date();
         log.infringementNotice = false;
         log.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('Notice Removed');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});
router.route('/logs').get(async(req, res) => {
    try{
        const log = await Log.find({}).sort({'year': 1})
        res.json(log);
        console.log(log);
    } catch(e) {
      console.log('error:-', e)
    }
});



module.exports = router;