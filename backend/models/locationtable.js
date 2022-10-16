const mongoose = require('mongoose')


const locationTemplate = new mongoose.Schema({
    location_id:{
        type:String,
        require:true
    },
    location_name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },

},
{collection:'location-data'}
)
const modle=mongoose.model('location-data',locationTemplate)
module.exports=modle
