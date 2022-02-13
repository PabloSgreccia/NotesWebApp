const express = require('express');
const router = express.Router(); 
const Note = require('../models/Note'); 
const { isAuthenticated } = require('../helpers/auth')

// init screen
router.get('/notes/add', isAuthenticated, async (req, res) =>{
    // const notes = await Note.find().lean().sort({date: -1});
    const notes = await Note.find({"user": req.user.id}).lean().sort({date: -1});
    const userName = req.user.name;
    if(notes.length == 0){
        const title = `Hi ${req.user.name}`;
        const description = "Yo don't have any notes.";
        const newNote = new Note({title, description});
        newNote.user = req.user.id;
        await newNote.save();   
        const notes = await Note.find({"user": req.user.id}).lean().sort({date: -1});
        res.render('notes/newNote',  { notes, userName })
    }
    else{
        res.render('notes/newNote',  { notes, userName })
    }
});

// add note
router.post('/notes/newNote', isAuthenticated, async (req, res) =>{ 
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    newNote.user = req.user.id;
    await newNote.save();   
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes/add');
})

// edit note
router.post('/notes/editNote', isAuthenticated, async (req, res) =>{
    console.log(req.body);
    const {titleEdit, descriptionEdit, noteIdEdit} = req.body;
    await Note.findByIdAndUpdate(noteIdEdit,             
        {title: titleEdit, description: descriptionEdit}
        )
    req.flash('success_msg', 'Note Edited Successfully');
    res.redirect('/notes/add');
});

// delete note
router.get('/notes/deleteNote/:id', isAuthenticated, async (req, res) =>{
    console.log(req.params.id);
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes/add');
})

module.exports = router;

