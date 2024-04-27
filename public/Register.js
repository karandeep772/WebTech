const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
    FName:{
        type:String,
        required:true,
        trim: true
    },
    LName:{
        type:String,
        required:true,
        trim: true
    },
    Age:{
        type:Number,
        required:true,
        trim: true
    },
    Gender:{
        type:String,
        required:true,
        trim: true,
    },

    MobileNo:{
        type:Number,
        required:true,
        trim: true,
    },

    Email:{
        type:String,
        required:true,
        trim: true,
    },

    State:{
        type:String,
        required:true,
        trim: true,
    },
    District:{
        type:String,
        required:true,
        trim: true,
    },

    Tehsil:{
        type:String,
        required:true,
        trim: true,
    },
    Pincode:{
        type:Number,
        required:true,
        trim: true,
    },
    Password:{
        type:String,
        required:true,
        trim: true,
    },
},{
    collection: 'Register'
});

const ChannelModel = mongoose.model("Channel",channelSchema);

module.exports = ChannelModel;