var express    = require('express');
var router = express.Router();
const Song = require('../models/song');
const Review = require('../models/review');

router.route('/songs').get(async(req, res) => {
        try{
            const songs = await Song.find({}).sort({'numRating': -1})
            res.json(songs);
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
        song.songTitle = req.body. songTitle;  
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
router.route('/review').post(function(req, res) {
    console.log(req)
    var review = new Review();     
        song.songTitle = req.body. songTitle;  
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


module.exports = router;