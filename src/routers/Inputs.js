import React, { useRef, useState } from 'react';

function Inputs() {
    const [inputs, setInputs] = useState({
        name : "",
        nickname : "",
    });

    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;

        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const onReset = () => {
        setInputs({
            name : "",
            nickname : "",
        });
        nameInput.current.focus();
    }

    return (
        <div>
            <h1> Inputs Component </h1>

            <input name="name" placeholder="Name" value={name} onChange={onChange} ref={nameInput}/>
            <input name="nickname" placeholder="Nickname" value={nickname} onChange={onChange}/> 
            <button onClick={onReset}> Reset </button>

            <div>
                <h2> Values : {name} ({nickname}) </h2>
            </div>
        </div>
    );
}

export default Inputs;