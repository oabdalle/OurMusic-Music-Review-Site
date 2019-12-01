var express    = require('express');
var router = express.Router();
const Song = require('../models/song');
const Review = require('../models/review');
const User = require('../models/user')
router.route('/songs').get(async(req, res) => {
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
      
        // this would usually adjust your database query
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
                if(song.genre.toString() == req.query.genre){
                response.push(song);
                }
            })
        }
        if(typeof req.query.comment != 'undefined'){
            songs.filter(function(song){
                if(song.comment.toString() == req.query.comment){
                response.push(song);
                }
            })
        }
        // de-duplication:
        // response = _.uniqBy(response, 'id');
      
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

            res.json({ message: 'Song Created!' });
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
    //console.log(reviews.length);
    Song.findById(req.params.song_id, function(err, song) {
        for(let i = 0; i < reviews.length; i++ ){
            // console.log("Hi");
            // console.log(reviews[i].songReviewed.toString());
            // console.log(song.songTitle.toString());
            if(reviews[i].songReviewed.toString() == song.songTitle.toString()){   
               // console.log("Made it!");
                response.push(reviews[i]);
            }
        }
       // console.log(response);
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



// router.route('/review/:song_id').post(function(req, res) {
//         Song.findById(req.params.song_id, function(err, song) {
//                 if (err)
//                     res.send(err);
//                 book.quantity = req.body.quantity;  
//                 console.log(req.body.quantity)
//                 book.save(function(err) {
//                     if (err)
//                         res.send(err);
    
//                     res.json({ message: 'Book updated!' });
//                 });
    
//             });
//  });


module.exports = router;