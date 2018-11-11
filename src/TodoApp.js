import React, { Component } from 'react'
import ShowTodos from './components/ShowTodos'
import AddTodo from './components/AddTodo'
import axios from 'axios';

class TodoApp extends Component {
  state = {
    todo: '',
    todos: []
  }

  componentDidMount() {
    this.refresh();
  }

  clearInput = () => {
    this.setState({ todo: '' })
  }

  refresh = async () => {
    try {
      // 1. GET /todos to get all todos
      const response = await axios.get('/todos');
      // 2. Put todos in state
      const todos = response.data.data;
      this.setState({ todos });
      console.log(response.data.data);
      // code after will not run until the above is finished
    }
    catch (e) {
      console.log(e);
    }  
  }

  addTodo = async () => {
    // Don't need these anymore
    // const nextTodos = Array.from(this.state.todos)
    // nextTodos.push(this.state.todo)
    // this.setState({ todos: nextTodos })
    try {
      await axios.post('/todos',  {
        todo: this.state.todo
      })
      this.refresh();
    } catch(e) {
      console.log(e);
    } // finally is the third part try/catch
    this.clearInput()
  }

  removeTodo = async index => {
    try {
      await axios.delete(`/todos/${index}`);
      this.refresh();
    } catch(e) {
      console.log(e);
    }
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