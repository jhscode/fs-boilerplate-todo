const todos = []

const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    // 1. Respond with the array of todos
  })

router.route('/')
  .post((req, res) => {
    // 1. Grab the new todo from the request body
    // 2. Push it into our todo array
    // 3. Respond with the updated todos array
  })

router.route('/:index')
  .delete((req, res) => {
    // 1. Grab the todo index from the query params.
    // 2. Splice the old todo out of the todos array
    // 3. Respond with the updated list of todos
  })

exports.router = router