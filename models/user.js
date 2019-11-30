var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

let UserSchema = new Schema({
    username:{type:String, unique:true},
    password:{type:String,require:true},
    email:{type:String, require:true,unique:true},
})

const User = mongoose.model('user',UserSchema);

module.exports = User;