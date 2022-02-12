const express = require('express');
const router = express.Router(); 
const Note = require('../models/Note'); 

// pantalla principal
router.get('/notes/add', async (req, res) =>{
    const notes = await Note.find().lean().sort({date: -1});
    res.render('notes/newNote',  { notes })
});

//al agregar una nota
router.post('/notes/newNote', async (req, res) =>{ 
    //console.log(req.body);
    const {title, description} = req.body;
    const newNote = new Note({title, description});
    //console.log(newNote);
    await newNote.save();   
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes/add');
})

//al editar una nota
router.post('/notes/editNote', async (req, res) =>{
    console.log(req.body);
    //var ObjectId = require('mongodb').ObjectID;
    const {titleEdit, descriptionEdit, noteIdEdit} = req.body;
    await Note.findByIdAndUpdate(noteIdEdit,             
        {title: titleEdit, description: descriptionEdit}
        )
    req.flash('success_msg', 'Note Edited Successfully');
    res.redirect('/notes/add');
});

//al eliminar una nota
router.get('/notes/deleteNote/:id', async (req, res) =>{
    console.log(req.params.id);
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes/add');
})

module.exports = router;

