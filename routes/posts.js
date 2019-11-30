//Ones you need to verify
var express    = require('express');
var router = express.Router();
const Song = require('../models/song');
const Review = require('../models/review');

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
router.route('/song').post(function(req, res) {
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

module.exports = router;