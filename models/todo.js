const mongoose = require('mongoose');

const todoShema = mongoose.Schema({
    title: {type: String, required: true},
    description:  {type: String, required: true},
    deadline:  {type: Date, required: true},
    isCompleted:  {type: Boolean, required: true}
}, {timestamps: true});


const todo = mongoose.model('todo', todoShema);

module.exports = todo;