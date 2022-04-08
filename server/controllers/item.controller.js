// DELETE THIS LINEvar selectAll = () => {};

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var db = require("../database-mysql");
var Todo = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// var selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// var selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// var selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };
var getAllTodos =   async (req,res) => {
    const todos = await Todo.find();

	res.json(todos);
} ; 

var createTodo = async (req, res) => {
    const todo = new Todo({
		text: req.body.text
	})

	todo.save();

	res.json(todo);
};

var deleteTodo = async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);

	res.json({result});
};
var updateTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);

	todo.text = req.body.text;

	todo.save();

	res.json(todo);
};

var getCompletedTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);

	todo.complete = !todo.complete;

	todo.save();

	res.json(todo);
};
module.exports = { getAllTodos, createTodo , deleteTodo, updateTodo, getCompletedTodo};
