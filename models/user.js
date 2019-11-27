var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let UserSchema = new Schema({
    username:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    email:{type:String}
})

const User = mongoose.model('user',UserSchema);

module.exports = User;