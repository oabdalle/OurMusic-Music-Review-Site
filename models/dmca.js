var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let DmcaSchema = new Schema({
    text:{type:String, required:true}
})

const Dmca = mongoose.model('dmca', DmcaSchema);

module.exports = Dmca;