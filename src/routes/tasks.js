const express = require('express');
const router = express.Router(); 
const Task = require('../models/Task');
const { isAuthenticated } = require('../helpers/auth')

// Show Tasks
router.get('/tasks', isAuthenticated, async (req, res) =>{
    const tasks = await Task.find({"user": req.user.id}).lean().sort({date: -1});
    const userName = req.user.name;

    tasks.forEach(element => {
        formatedDate = element.date.getDate() + ' / ' + element.date.getMonth() + ' / ' + element.date.getFullYear()  
        element.date = formatedDate;
    });

    if(tasks.length == 0){
        res.render('tasks/tasks',  { userName });
    }
    else{
        res.render('tasks/tasks',  { tasks, userName });
    }
});

// Add Task
router.post('/tasks/newTask', isAuthenticated, async (req, res) => {
    const {description} = req.body;
    const newTask = new Task({description});
    newTask.user = req.user.id;
    await newTask.save();   
    req.flash('success_msg', 'Task Added Successfully');
    res.redirect('/tasks');
})

// Delete Task
router.get('/tasks/deleteTask/:id', isAuthenticated, async(req, res) =>{
    await Task.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Task Deleted Successfully');
    res.redirect('/tasks');
})

module.exports = router;