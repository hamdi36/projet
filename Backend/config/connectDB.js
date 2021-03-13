const mongoose = require ("mongoose");

const connectDB =async() => {
    try {
           await mongoose.connect(process.env.Database_URI, {
               useNewUrlParser: true,
               useUnifiedTopology: true ,
               useFindAndModify:false ,
               useCreateIndex:true});
            console.log("data base connected")

    } catch (error) {
        console.log("can not connected to data base")
    }

}
module.exports = connectDB;