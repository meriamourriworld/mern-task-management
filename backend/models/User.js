const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuid } = require('uuid');

const UserSchema = new Schema({
    username : 
    {
        type: String,
        unique : true
    },
    email:
    {
        type: String,
        unique : true
    },
    password:
    {
        type: String
    }
});

module.exports.User = mongoose.model("User", UserSchema);