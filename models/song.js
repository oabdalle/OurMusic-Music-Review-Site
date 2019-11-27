var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let SongSchema = new Schema({
    submittedBy:{type:String,require:true},
    submittedOn:{type:String,require:true},
    avgRating:{type:String,require:true},
    ratingForObject:{type:String,require:true},
    description:{type:String,require:true},
    numRating:{type:Number}
})

const Song = mongoose.model('song',SongSchema);

module.exports = Song;