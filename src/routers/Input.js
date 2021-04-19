import React, { useState } from 'react';

function Input() {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText("");
    }

    return (
        <div>
            <h1> Input Component </h1>
            
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}> Reset </button>

            <h2> Value : {text} </h2>
        </div>
    )
}

export default Input;