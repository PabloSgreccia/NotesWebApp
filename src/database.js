const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/notesDbWebApp';
//settings to run mongoose
mongoose.connect(mongoDB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('---->DataBase connected.<----'))
  .catch(err => console.error(err));



