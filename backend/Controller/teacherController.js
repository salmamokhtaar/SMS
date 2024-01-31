const teacherModel = require("../Model/teacherModel");

const createTeacher = async(req,res)=>{
    const newData =  await teacherModel(req.body)
    const saveData =  newData.save()
    if(saveData)
       res.send(saveData)
}
const getAllTeacher = async(req, res)=>{
    const get= await teacherModel.find()
    if(get)
    res.send(get)
}





module.exports = {createTeacher,getAllTeacher};
