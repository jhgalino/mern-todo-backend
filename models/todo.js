var mongoose = require('mongoose');
const {Schema} = mongoose;

const todoSchema = new Schema({
    text: String
});

module.exports = mongoose.model('Todo', todoSchema);