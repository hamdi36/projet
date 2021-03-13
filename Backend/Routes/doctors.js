const express=require("express");
const router=express.Router();
const doctor=require("../models/doctor");


// test router
router.get("/test" , (req , res)=> {
    res.send("hello")
})
// @POST method
// @desc post a doctor
// @path : http://localhost:6000/api/doctor/post
// Params  Body

router.post("/post", async (req,res)=> {
    try {
        const newdoctor = new doctor ({...req.body});
       const response =  await newdoctor.save();
       res.send (response);
}  catch (error) {
    res.status(400).send({message : "can not save it"});
}
});
// // @GET method
// // @desc GET ALL doctor
// // @path: http://localhost:6000/api/doctor/get
router.get("/get", async (req,res)=> {
    try {
        const result= await doctor.find();
        res.send({ response : result, message : "getting contacts successfuly"});
    } catch (error) {
        res.status(400).json({message : "can not get contacts"});
    }
    });
//     // @GET method
//     // @desc GET one doctor by id
//     // @path: http://localhost:6000/api/doctor/:id
//     // @Params id
router.get("/:id", async (req,res)=> {
    try {
        const result= await doctor.findOne({_id: req.params.id});
        res.send({ response : result, message : "getting contact successfuly"});
    } catch (error) {
        res.status(400).send({message : "there is no contact with this id"});
    }
    });
// @DELETE method
//     // @desc delete one doctor by id
//     // @path: http://localhost:6000/api/doctor/:id
//     // @Params id
router.delete("/:id", async (req,res)=> {
    try {
        const result= await  doctor.deleteOne({_id: req.params.id});
        res.send({ response : result, message : "deleted"});
    } catch (error) {
        res.status(400).send({message : "not deleted"});
    }
    });
    // @put method
//     // @desc update one contact by id
//     // @path: http://localhost:6000/api/doctor/:id
//     // @Params id body
router.put("/:id", async (req,res)=> {
    try {
        const result= await doctor.updateOne({_id: req.params.id}, {$set: {...req.body}});
        res.send("updated");
    } catch (error) {
        res.status(400).send({message : "not updated"});
    }
    });


module.exports = router;