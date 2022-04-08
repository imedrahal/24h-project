const mongoose = require('mongoose');
// const db = require("./index.js");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	complete: {
		type: Boolean,
		default: false
	},
	timestamp: {
		type: String,
		default:  new Date()
	}
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;