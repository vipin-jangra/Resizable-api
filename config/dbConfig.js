const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const connectionResult = mongoose.connection;

connectionResult.on('error',(error)=>{
    console.log(console, 'Error connectiong to MongoDB', error);
});

connectionResult.on('connected',()=>{
    console.log("MongoDB connected successfully");
});

module.exports = connectionResult;