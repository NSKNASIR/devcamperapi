const ErrorResponse  =require('../utils/errorResponse');
const Bootcamp  = require('../models/Bootcamp')


//Get All Bootcamps
exports.getBootcamps = async (req,res,next)=>{
    try {
        const bootcamp = await Bootcamp.find();
        res.status(404).json({success:true,data:bootcamp});
    } catch (err) {
        res.status({success:false});
    }
}

//Get Single Bootcamps
exports.getBootcamp = async (req,res,next)=>{
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        if(! bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
        }
        res.status(200).json({success:true,data:bootcamp});
        } catch (err) {
        // res.status(404).json({success:false});
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
    }  
}

//Post bootcamps
exports.createBootcamp = async (req,res,next)=>{
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({success:true,data:bootcamp});
    } catch (err) {
        res.status(404).json({success:false});
    }   
}

//Put bootcamps
exports.updateBootcamp = async (req,res,next)=>{
    try{const bootcamp  = await Bootcamp.findByIdAndUpdate(req.params.id);
    res.status(200).json({success:true,data:bootcamp});   
    } catch (err){
        res.status(404).json({success:false})
    }
}
//Delete bootcamps
exports.deleteBootcamp = async (req,res,next)=>{
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true,data:bootcamp});   

    } catch (err) {
        
    }
}