const mongoose = require ("mongoose");
const schema = mongoose.Schema;

const DoctorSchema =new schema({
    FirstName: {
        type: String,
        require: true,
    },
    LastName: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
    }, 
    Password: {
        type: String,
        require: true,
    },
    Phone: {
        type: Number,
        require: true,
    },
    TypesOfUser : {
        type: String,
        require: true,
    },
});
module.exports = doctor = mongoose.model("Doctor" , DoctorSchema);