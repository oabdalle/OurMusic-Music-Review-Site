var express    = require('express');
var router = express.Router();
const Song = require('../models/song');
const Review = require('../models/review');
const User = require('../models/user');
const Log = require('../models/log');
router.route('/songs').get(async(req, res) => {
    try{
        var flagtake;
        var flagdisp;
        var flagnotice
        var shown= [];
        const songs = await Song.find({}).sort({'numRating': -1})
        const logs = await Log.find({}).sort({'year': 1})
        console.log(logs);
        songs.filter(function(song){
        for(var i=0; i<logs.length; i++){
            if(logs[i].songTitle == song.songTitle){
                if(logs[i].takedownRequest == true){
                    flagtake = false;
                }
                if(logs[i].infringementNotice == true){
                    flagdisp = false;
                }
                if(logs[i].disputed){
                    flagnotice = false;
                }
                if(logs[i].takedownRequest == false){
                    flagtake = true;
                }
                if(logs[i].infringementNotice == false){
                    flagdisp = true;
                }
                if(logs[i].disputed == false){
                    flagnotice = true;
                }
                if(!flagdisp || !flagtake || !flagnotice){
                    song.isHidden = true;
                }
                if(flagdisp && flagnotice && flagtake){
                    song.isHidden = false
                }
                if(typeof flagdisp == 'undefined'&& typeof flagnotice == 'undefined' && flagtake == true){
                    song.isHidden = false
                    console.log("I made it");
                }
                if(typeof flagdisp == 'undefined'&& flagnotice==true && typeof flagtake =='undefined' ){
                    song.isHidden = false
                    console.log("I made it");
                }
                if(flagdisp == true && typeof flagnotice == 'undefined' && typeof flagtake =='undefined'){
                    song.isHidden = false
                    console.log("I made it");
                }
            }
        }
        
            if(song.isHidden == false){
                shown.push(song);
            }
        })
        console.log(flagdisp);
        console.log(flagtake);
        console.log(flagnotice);
        res.json(shown);
    } catch(e) {
      console.log('error:-', e)
    }
});
router.route('/adminsongs').get(async(req, res) => {
    try{
        const songs = await Song.find({}).sort({'numRating': -1})
        res.json(songs);
        console.log(songs);
    } catch(e) {
      console.log('error:-', e)
    }
});
router.route('/user').get(async(req, res) => {
    try{
        const users = await User.find({}).sort({'username': -1})
        res.json(users);
    } catch(e) {
      console.log('error:-', e)
    }
});
router.get('/search', async (req,res) => {

    try{
     const songs = await Song.find({}).sort({'numRating': 1});

        var response = [];
      
        if(typeof req.query.songTitle != 'undefined'){
            songs.filter(function(song){
                if(song.songTitle.toString() == req.query.songTitle){
                response.push(song);
                }
            })
        }
        if(typeof req.query.artist != 'undefined'){
            songs.filter(function(song){
                if(song.artist.toString() == req.query.artist){
                response.push(song);
                }
            })
        }
        if(typeof req.query.avgRating != 'undefined'){
            songs.filter(function(song){
                if(song.avgRating.toString() == req.query.avgRating){
                response.push(song);
                }
            })
        }
        if(typeof req.query.album != 'undefined'){
            songs.filter(function(song){
                if(song.album.toString() == req.query.album){
                response.push(song);
                }
            })
        }
        if(typeof req.query.year != 'undefined'){
            songs.filter(function(song){
                if(song.year.toString() == req.query.year){
                response.push(song);
                }
            })
        }
        if(typeof req.query.numRating != 'undefined'){
            songs.filter(function(song){
                if(song.numRating.toString() == req.query.numRating){
                response.push(song);
                }
            })
        }
        if(typeof req.query.genre != 'undefined'){
            songs.filter(function(song){
                if(typeof song.genre != 'undefined'){
                if(song.genre.toString() == req.query.genre){
                response.push(song);
                }}
            })
        }
        if(typeof req.query.comment != 'undefined'){
            songs.filter(function(song){
                if(song.comment.toString() == req.query.comment){
                response.push(song);
                }
            })
        }
        res.json(response);
    }catch(e) {
        console.log('error:-', e)
      }
});
router.route('/create').post(function(req, res) {
    console.log(req)
    var song = new Song(); 
    
        song.songTitle = req.body.songTitle;  
        song.artist = req.body.artist;
        song.album = req.body.album;
        song.year = req.body.year;
        song.comment= req.body.comment;
        song.genre = req.body.genre;
        song.avgRating = req.body.avgRating;
        song.numReviews = req.body.numReviews;
        song.numRating = req.body.numRating;
        
        song.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Song and log Created!' });
        })
});
router.route('/review/:song_id').post(function(req, res) {
    console.log(req)
    var review = new Review();     
    Song.findById(req.params.song_id, function(err, song) {
        review.songReviewed = song.songTitle;
        review.submittedBy = req.body.submittedBy;  
        review.submittedOn = req.body.submittedOn;
        review.avgRating= req.body.avgRating;
        review.ratingForObject = req.body.ratingForObject;
        review.description= req.body.description;
        review.numRating = req.body.numRating;
       review.save(function(err2) {
            if (err2)
                res.send(err2);

            res.json({ message: 'Review Created!' });
        })
    });
});
router.route('/review/:song_id').get(async function(req, res) {
    try{
    var response = [];
    const reviews = await Review.find({}).sort({'numRating': -1});
    Song.findById(req.params.song_id, function(err, song) {
        for(let i = 0; i < reviews.length; i++ ){
            if(reviews[i].songReviewed.toString() == song.songTitle.toString()){   
                response.push(reviews[i]);
            }
        }
        res.json(response);
    });
        }catch(e) {
        console.log('error:-', e)
         }
});

router.route('/user/:user_id').post(async function(req, res) {
    try{
    console.log(req.params.user_id);
    await User.findById(req.params.user_id, function(err, user) {
     user.managerialPriviliges = true;
     user.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('User Updated');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});

router.route('/deactivateuser/:user_id').post(async function(req, res) {
    try{
    console.log(req.params.user_id);
    await User.findById(req.params.user_id, function(err, user) {
     user.isActivated = false;
     user.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('User Updated');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});

router.route('/activateuser/:user_id').post(async function(req, res) {
    try{
    console.log(req.params.user_id);
    await User.findById(req.params.user_id, function(err, user) {
     user.isActivated = true;
     user.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('User Updated');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});

router.route('/makehidden/:song_id').post(async function(req, res) {
    try{
    console.log(req.params.song);
    await Song.findById(req.params.song_id, function(err, song) {
     song.isHidden = true;
     song.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('Song Updated');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});

router.route('/unhidden/:song_id').post(async function(req, res) {
    try{
    console.log(req.params.song);
    await Song.findById(req.params.song_id, function(err, song) {
     song.isHidden = false;
     song.save(function(err2) {
        if (err2)
            res.send(err2);

        res.json('Song Updated');
    })
        });
    }catch(e) {
        console.log('error:-', e)
         }
});



module.exports = router;