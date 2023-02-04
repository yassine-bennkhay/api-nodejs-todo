const asyncHandler = require("express-async-handler");
const { update } = require("../models/todoModel");
const Task = require("../models/todoModel");
/*
Description     get todos
Route           GET api/todos
*/


const getToDos = asyncHandler(async (req, res) => {
  const todos = await Task.find();
  res.status(200).json(todos);
  res.end();
});
/*
Description     add todo
Route           POST api/todo/add
*/
const setToDo = asyncHandler(async (req, res) => {
  if (!req.body.mytask) {
   res.status(400).json({message:"Error: Please type something"})
  }
  const todo = await Task.create({
    task: req.body.mytask,
  });
  res.status(200).json(todo);
  res.end();
});

/*
Description     update todo
Route           PUT api/todo/update
*/
const updateToDo=asyncHandler(async(req,res)=>{
    const todo= await Task.findById(req.params.id)
    if(!todo){
        res.status(404).json({message:"todo not found"})
    }
    const updatedToDo=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedToDo)
    res.end()
})

/*
Description     delete todo
Route           DELETE api/todo/delete
*/

const deleteToDo=asyncHandler(async(req,res)=>{
    const todo=await Task.findById(req.params.id)
    if(!todo){
        res.status(404).json({message:"todo not found"})

    }
    await Task.findByIdAndRemove(req.params.id)
    res.status(200).json({id:req.params.id})
})

module.exports = {
  setToDo,
  getToDos,
  updateToDo,
  deleteToDo
};
