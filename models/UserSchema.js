const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name:String,
    email:String,
    favorite:String,
    mobile:String,
    role:String,
    password:String,
    upload_count:{type:Number,default:0},
    download_count:{type:Number,default:0}
});


module.exports = mongoose.model('User', UserSchema);