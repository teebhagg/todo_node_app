require('dotenv').config();
const express = require('express');
const todoController = require('./controllers/todoController');
const server = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

// const mongo_db_url = ''

server.use(express.json())

server.listen(PORT, function () {
    console.log('Server has started running in express');
    mongoose.connect(process.env.MONGO_DB_ATLAS).then(function () {
        console.log('DB is connected');
        server.get('/',function (req, res) {
            res.status(200).json({success: true, message: 'Welcome to Tee Bhaggs Todo API'})
        })
        server.get('/todo', todoController.getAllTodo);
        server.get('/todo/:id', todoController.getTodoById);
        server.post('/todo', todoController.insertTodo);
        server.put('/todo/:id', todoController.updateTodoById);
        server.delete('/todo/:id', todoController.deleteTodoById);

    }).catch(function (error) {
        console.log('DB is not connected: ', error.message);
    });
})