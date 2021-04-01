const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RingtoneSchema = new Schema({
    name:{type:String,required:true},
    type:String,
    length:String,
    no_download:String,
    link:String,
    upload_id:String,
    upload_time:String
});

module.exports = mongoose.model('Ringtone', RingtoneSchema);