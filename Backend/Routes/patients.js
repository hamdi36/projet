const express=require("express");
const router=express.Router();
const patient=require("../Models/patient");


// test router
router.get("/test" , (req , res)=> {
    res.send("hello")
})
// @POST method
// @desc post a patient
// @path : http://localhost:6000/api/patient/
// Params  Body

router.post("/", async (req,res)=> {
    try {
        const newpatient = new patient ({...req.body});
       const response =  await newpatient.save();
       res.send (response);
}  catch (error) {
    res.status(400).send({message : "can not save it"});
}
});
// // @GET method
// // @desc GET ALL patients
// // @path: http://localhost:6000/api/patient/
router.get("/", async (req,res)=> {
    try {
        const result= await patient.find();
        res.send({ response : result, message : "getting contacts successfuly"});
    } catch (error) {
        res.status(400).json({message : "can not get contacts"});
    }
    });
//     // @GET method
//     // @desc GET one patient by id
//     // @path: http://localhost:6000/api/patient/:id
//     // @Params id
router.get("/:id", async (req,res)=> {
    try {
        const result= await patient.findOne({_id: req.params.id});
        res.send({ response : result, message : "getting contact successfuly"});
    } catch (error) {
        res.status(400).send({message : "there is no contact with this id"});
    }
    });
// @DELETE method
//     // @desc delete one patient by id
//     // @path: http://localhost:6000/api/patient/:id
//     // @Params id
router.delete("/:id", async (req,res)=> {
    try {
        const result= await  patient.deleteOne({_id: req.params.id});
        res.send({ response : result, message : "deleted"});
    } catch (error) {
        res.status(400).send({message : "not deleted"});
    }
    });
    // @put method
//     // @desc update one patient by id
//     // @path: http://localhost:6000/api/patient/:id
//     // @Params id body
router.put("/:id", async (req,res)=> {
    try {
        const result= await patient.updateOne({_id: req.params.id}, {$set: {...req.body}});
        res.send({ response : result, message : "updated"});
    } catch (error) {
        res.status(400).send({message : "not updated"});
    }
    });


module.exports = router;