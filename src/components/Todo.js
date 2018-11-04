import React from 'react'
import PropTypes from 'prop-types'

const Todo = props => {
  const { description, index, removeTodo } = props
  return (
    <li key={description}>
      {description}
      <button onClick={() => removeTodo(index)}>Remove Todo</button>
    </li>
  )
}

Todo.propTypes = {
  description: PropTypes.string.isRequired
}

export default Todo