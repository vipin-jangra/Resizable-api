const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
    article : {
        type : String,
        required : true
    },
},{
    timestamps : true,
}); 

module.exports = mongoose.model('Article',modelSchema);