import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        const todoList = this.props.todoList.map((todo) =>{
            return(
                <TodoItem key={todo.todoId} 
                        handleDelete = {() => {this.props.handleDelete(todo.todoId)}}
                        todo = {todo}/>)
          })

        return (
            <section className="TodoList-wrapper">
                {todoList}
            </section>
        )
    }
}

export default TodoList
