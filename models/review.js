var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
const Song = require('./song');
let ReviewSchema = new Schema({
    submittedBy: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'song' },
    submittedOn:{type:String,require:true},
    avgRating:{type:String,require:true},
    ratingForObject:{type:String,require:true},
    description:{type:String,require:true},
    numRating:{type:Number}
})

const Review = mongoose.model('review',ReviewSchema);

module.exports = Review;