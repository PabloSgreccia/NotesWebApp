const express = require('express');
const router = express.Router(); 
const Task = require('../models/Task');
const { isAuthenticated } = require('../helpers/auth')

router.get('/tasks', isAuthenticated, async (req, res) =>{
    const tasks = await Task.find({"user": req.user.id}).lean().sort({date: -1});
    const userName = req.user.name;
    if(tasks.length == 0){
        res.render('tasks/tasks',  { userName });
    }
    else{
        res.render('tasks/tasks',  { tasks, userName });
    }
});

router.post('/tasks/newTask', isAuthenticated, async (req, res) => {
    const {description} = req.body;
    const newTask = new Task({description});
    console.log(newTask.date.getFullYear());
    newTask.user = req.user.id;
    await newTask.save();   

    res.redirect('/tasks');

})

module.exports = router;