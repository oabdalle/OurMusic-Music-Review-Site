var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let SongSchema = new Schema({
    songTitle:{type:String,require:true},
    artist:{type:String,require:true},
    album:{type:String,require:true},
    year:{type:String,require:true},
    comment:{type:String,require:true},
    genre:{type:String,require:true},
    avgRating:{type:Number},
    numReviews:{type:Number},
    numRating:{type:Number},
    isHidden:{type: Boolean, require:true}
})

const Song = mongoose.model('song',SongSchema);

module.exports = Song;