const todos = []

const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    // 1. Respond with the array of todos
    res.status(200).json(todos)
  })

router.route('/')
  .post((req, res) => {
    // 1. Grab the new todo from the request body
    const { todo } = req.body
    // 2. Push it into our todo array
    todos.push(todo)
    // 3. Respond with the updated todos array
    res.status(201).json(todo)
  })

  router.route('/:index')
    .put((req, res) => {
      // 1. Grab the index from the query params
      const { index } = req.params
      // 2. Grab the new todo from the request body
      const newTodo = req.body.todo
      // 3. Grab the old todo using the index
      const oldTodo = todos[index]

      // 4. Replace the old todo with the new one
      if (!oldTodo) {
        res.status(404).json('Todo does not exist')
      } else {
        todos[index] = newTodo
        res.status(200).json(todos[index])
      }
    })

  router.route('/:index')
    .delete((req, res) => {
      // 1. Grab the todo index from the query params.
      const { index } = req.params
      // 2. Splice the old todo out of the todos array
      const removedTodo = todos.splice(index, 1)

      // 3. Respond with the updated list of todos
      if (removedTodo.length) {
        res.status(200).json(removedTodo)
      } else {
        res.status(404).json('Not found')
      }
    })

exports.router = router