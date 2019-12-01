var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let LogSchema = new Schema({
    takedownRequest:{type:Boolean},
    infringementNotice:{type:Boolean},
    disputed:{type:Boolean},
    songTitle:{type:String, required:true},
    year:{type:String, required:true}
})

const Log = mongoose.model('log', LogSchema);

module.exports = Log;