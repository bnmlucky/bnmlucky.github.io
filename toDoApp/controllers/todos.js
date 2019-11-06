// Dependecies
const express = require("express")
const router = express.Router();

// Model
const ToDo = require("../models/todos.js")

// Routes:

// Index
router.get("/", (req, res) => {
    ToDo.find({}, (error, allToDos) => {
        if (error) {
            res.send(error)
        } else {
            res.render("index.ejs", {
                todos: allToDos
            })
        }
    })
})

// New
router.get("/new", (req, res) => {
    res.render("new.ejs")
})

// Edit

// Show

// Create
router.post("/", (req, res) => {
    if (req.body.completed === "on") {
        req.body.completed = true
    } else {
        req.body.completed = false
    }
    ToDo.create(req.body, (error, createdToDo) => {
        if (error) {
            res.send(error)
        } else {
            res.send(createdToDo)
        }
    })
})

// Delete

// Put/Update

module.exports = router;