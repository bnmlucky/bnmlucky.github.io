// Dependencies
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const methodOverride = require("method-override")
const todosController = require("./controllers/todos.js") //I don't have that yet
const port = 3000;

// DB Setup
const dbName = "todos"
mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true })
mongoose.connection.once("open", () => {
    console.log("connected to mongo")
})

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/todos", todosController);

// Listener
app.listen(port, (req, res) => {
    console.log("listening on port ", port)
})