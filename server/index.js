// // TODO: Update this
// // UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// // var items = require('./database-mysql');
// var items = require('./database-mongo');

// const app = express();
// const PORT = process.env.PORT || 3000


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/../client/public"));
// app.use(bodyParser.json())
// app.use(cors());

// app.use("/api/items", itemRoutes);
const express =require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const itemRoutes = require('./routes/item.routes')
const bodyParser = require('body-parser')
const Todo= require ('./database-mongo');
const app= express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(bodyParser.json())
app.use(cors());

app.use(itemRoutes)
app.listen(3000, function () {
  console.log("listening on port 3000!");
});
