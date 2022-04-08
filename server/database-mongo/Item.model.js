const mongoose = require("mongoose");
const db = require("./index.js");

const TodoSchema = new mongoose.Schema({
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
		default: Date.now()
	}
});

const Todo = mongoose.model("Item", TodoSchema);

module.exports = Todo;