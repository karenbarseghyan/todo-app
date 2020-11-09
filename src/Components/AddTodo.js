import React, {useState} from 'react'

function AddTodo (props) {
    const [text, settext] = useState('')
    const handleChange = (ev) => {
        console.log(ev.target.value);
        settext(ev.target.value)
        
    }
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        if(text.trim()){
        props.handleSubmit(text);
        settext('');
        }
    }
        return (
            <form onSubmit = {handleSubmit}>
                <input name = 'text'
                    placeholder = 'Enter Text Here' 
                    onChange ={handleChange} 
                    value = {text}/>
                <button onClick = {handleSubmit}>Add</button>
                
            </form>
        )
}

export default AddTodo
