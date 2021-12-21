
const { status } = require('express/lib/response');
const todo = require('../models/todo');


function insertTodo(req,res) {
    todo.create(req.body)
    .then(function (data) {
        res.status(200).json({success: true, message:'Data has been created', data});
    })
    .catch(function (error) {
        res.status(404).json({success:false, message: 'Not created :'+error.message});
    })
}
function updateTodoById(req,res) {
    const {id} = req.params;
    const {isCompleted} = req.body;
    todo.updateTodoById(id, {isCompleted: isCompleted})
    .then(function(){
        res.status(200).json({success:true, message:'Task Updated'})
    }
    ).catch(function(error){
        res.status(404).json({success:false, message:'Cant Update: '+error.message})
    }
    )
    
}
function deleteTodoById(req,res) {
    const {id} = req.params;
    todo.findByIdAndDelete(id).then(function () {
        res.status(200).json({success: true, message: 'Deleted Successfully'})
    }).catch(function (error) {
        res.status(404).json({success: false, message:'Unable to Delete: '+error.message})
    })
    
}
function getAllTodo(req,res) {
    todo.find({})
    .then(function (data) {
        res.status(200).json({success: true, data });
    })
    .catch(function (error) {
        res.status(404).json({success: false, message: 'data not derived: '+error.message });
    })
}
function getTodoById(req,res) {
    const {id} = req.params;
    todo.findById(id)
    .then(function () {
        res.status(200).json({success:true, message:'Item found'});
    })
    .then(function (error){
        res.status(404).json({success:false, message:'Cannot get item: '+error.message})
    })
}


module.exports = {

    insertTodo, updateTodoById, deleteTodoById, getAllTodo,  getTodoById
}


        // title:'My todo title',
        // description:'',
        // deadline:'2022-12-14',
        // isCompleted:false