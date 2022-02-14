const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    description: { type: String, required: true},
    date: {type: Date, default: Date.now},
    user: {type: String }
})

module.exports = mongoose.model('Task', TaskSchema); 