const studentModel = require("../Model/studentModel");

// get 
const GetStudent = async (req, res)=> {
  const getData = await studentModel.find();
  if(getData){
    res.send(getData);
  }
};

// post
const createStudent = async(req, res) => {
    const newData = await studentModel(req.body);
    const saveData = newData.save();
    if(saveData){
        res.send(newData);
    }
};

// put 
const updateStudent = async(req, res) => {
    const updateData = await studentModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    );
    if(updateData){
        res.send("Student Has been updated successfully")
    }
};

// delete
const deleteStudent = async(req, res) => {
    const deleteData = await studentModel.deleteOne();
    {_id: req.params.id}
    if(deleteData){
        res.send("Student has been  Deleted Succesfully")
    }
}

const SearchStudents = async(req, res) => {
    
    const SearchData = await studentModel.find({
        $or:[
            {name: {$regex: req.params.key}}
        ]
    })
    if(SearchData)
     res.send(SearchData)

}


// export all function 
module.exports = 
{GetStudent, createStudent, updateStudent,deleteStudent,SearchStudents}