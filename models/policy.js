var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let PolicySchema = new Schema({
    text:{type:String, required:true}
})

const Policy = mongoose.model('policy', PolicySchema);

module.exports = Policy;