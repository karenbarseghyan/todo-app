import React, { Component } from 'react'

class TodoList extends Component {
    todoId = 1;
    render() {
        const todoList = this.props.todoList.map((todo) =>{
            this.todoId++;
            return(<div key = {this.todoId}>{todo}</div>)
          })
        return (
            <>
                {todoList}
            </>
        )
    }
}

export default TodoList
