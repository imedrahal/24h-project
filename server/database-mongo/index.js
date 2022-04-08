const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/todo";

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log('Connected to db'))
.catch(console.error);

const db = mongoose.connection;

module.exports = db