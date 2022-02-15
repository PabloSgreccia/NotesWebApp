const mongoose = require('mongoose');
const {Schema} = mongoose;

const FeedbackSchema = Schema({
    comment: {type: String, required: true},
    userEmail: {type: String},
    isPositive: {type: Boolean, required: true}
});

module.exports = mongoose.model('Feedback', FeedbackSchema);