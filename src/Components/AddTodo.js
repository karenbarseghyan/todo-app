import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text: '',
        }
    }
    
    handleChange = (ev) => {
        console.log(ev.target.value);
        this.setState({
          [ev.target.name]: ev.target.value,
        })
      }
    
    handleSubmit = (ev) => {
        ev.preventDefault();
        if(this.state.text.trim()){
        this.props.handleSubmit(this.state.text);
        this.setState({text: ''})
        }
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input name = 'text'
                    placeholder = 'Enter Text Here' 
                    onChange ={this.handleChange} 
                    value = {this.state.text}/>
                <button onClick = {this.handleSubmit}>Add</button>
                
            </form>
        )
    }
}

export default AddTodo
