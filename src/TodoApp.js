import React, { Component } from 'react'
import ShowTodos from './components/ShowTodos'
import AddTodo from './components/AddTodo'

class TodoApp extends Component {
  state = {
    todo: '',
    todos: []
  }

  clearInput = () => {
    this.setState({ todo: '' })
  }

  addTodo = () => {
    const nextTodos = Array.from(this.state.todos)
    nextTodos.push(this.state.todo)
    this.setState({ todos: nextTodos })
    this.clearInput()
  }

  removeTodo = index => {
    const nextTodos = Array.from(this.state.todos)
    nextTodos.splice(index, 1)
    this.setState({ todos: nextTodos })
  }

  handleChange = e => {
    this.setState({
      todo: e.target.value
    })
  }

  render() {
    return (
      <div>
        <AddTodo
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          todo={this.state.todo}
        />
        <ShowTodos todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    )
  }
}

export default TodoApp