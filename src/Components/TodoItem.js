import React, { Component } from 'react'
import {IconDelete} from "../SVG/Icons.js"

class TodoItem extends Component {
       
    
    render() {
        return (
            <div className = "TodoItem-Item">
                <span>{this.props.todo.text}</span>
                <button onClick = {this.props.handleDelete}> 
                    <IconDelete height = '25px' width = '20px'/>
                </button>
            </div>
        )
    }
}

export default TodoItem
