import React, { Component } from 'react'
import '../Styles/main.css'
import AddTodo from './AddTodo'
import TodoList from './TodoList.js'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
       todoList: [],
    }
  }
  
  handleSubmit = (text) => {
    this.setState ({
      todoList : [ text,...this.state.todoList],
    })
  }

  render() {
    return (
      <main  className = "app-wrapper">
        <header>
          <h1>ToDo List</h1>
        </header>

        <AddTodo handleSubmit = {this.handleSubmit}/>
        <TodoList todoList = {this.state.todoList} />
      </main>
    );
  }
}

export default App
