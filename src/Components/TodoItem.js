import React from 'react'
import {IconDelete} from "../SVG/Icons.js"

function TodoItem (props) {
    return (
            <div className = "TodoItem-Item">
                <span>{props.todo.text}</span>
                <button onClick = {props.handleDelete}> 
                    <IconDelete height = '25px' width = '20px'/>
                </button>
            </div>
        )
}
export default TodoItem
