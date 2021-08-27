const { json } = require('express');
var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
const cors = require('cors');

router.get('/todos', function (req, res, next) {
    Todo.find({}).lean().exec((err, ok) => {
        return res.json(ok);
    });
});

router.post('/create', function (req, res, next) {
    const newTodo = new Todo({
        text: req.body.todo.value
    });
    newTodo.save((err,ok) => {
        return err? console.err(err) : console.log('ok');
    });
});

router.post('/update', function (req, res, next) {
    const id = req.body.id;
    const newVal = req.body.newText.value
    // console.log(req);
    Todo.findByIdAndUpdate(id, {$set: {text: newVal}}, {new: true}, (err, ok) => {
        return err? console.err(err) : console.log('ok');
    });
    // console.log(doc)
});

router.post('/delete', function (req, res, next) {
    const id = req.body.id;
    Todo.findByIdAndDelete(id, (err, ok) => {
        return err ? console.err(err) : console.log('ok');
    })
})

module.exports = router;

