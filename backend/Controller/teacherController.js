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
const updateTeacher = async(req, res) => {
    const updateData = await teacherModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    );
    if(updateData){
        res.send("updated Updated Teacher Succesfully")
    }
};
const deleteTeacher = async(req, res) => {
    const deleteData = await teacherModel.deleteOne();
    {_id: req.params.id}
    if(deleteData){
        res.send("Deleted Teacher...")
    }
}

// // single get
// const single= async (req, res) => {
//     const singleData = await superModel.find({_id : req.params.id})
//     if(singleData)
//     res.send(singleData)
//   }

// search
const searchTeacher = async(req, res) => {
    
    const SearchData = await teacherModel.find({
        $or:[
            {name: {$regex: req.params.key}}
        ]
    })
    if(SearchData)
     res.send(SearchData)

}




module.exports =
 {createTeacher, getAllTeacher,updateTeacher,deleteTeacher ,searchTeacher};
