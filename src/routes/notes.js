const express = require('express');
const router = express.Router(); 
const Note = require('../models/Note'); 
const { isAuthenticated } = require('../helpers/auth')

// init screen
router.get('/notes', isAuthenticated, async (req, res) =>{
    // const notes = await Note.find().lean().sort({date: -1});
    const notes = await Note.find({"user": req.user.id}).lean().sort({date: -1});
    const userName = req.user.name;
    if(notes.length == 0){
        res.render('notes/notes',  { userName })
    }
    else{
        res.render('notes/notes',  { notes, userName })
    }
});

// add note
router.post('/notes/newNote', isAuthenticated, async (req, res) =>{ 
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    newNote.user = req.user.id;
    await newNote.save();   
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes');
})

// edit note
router.post('/notes/editNote', isAuthenticated, async (req, res) =>{
    const {titleEdit, descriptionEdit, noteIdEdit} = req.body;
    await Note.findByIdAndUpdate(noteIdEdit,             
        {title: titleEdit, description: descriptionEdit}
        )
    req.flash('success_msg', 'Note Edited Successfully');
    res.redirect('/notes');
});

// delete note
router.get('/notes/deleteNote/:id', isAuthenticated, async (req, res) =>{
    console.log(req.params.id);
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes');
})

module.exports = router;

