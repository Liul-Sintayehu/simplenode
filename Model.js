const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    }
})

const UserModel = mongoose.model('UserModel',userSchema)

module.exports = UserModel