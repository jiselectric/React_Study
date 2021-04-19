// Props 
import React from 'react';

function Hello({color, name}) {
    return (
        <div>
            <h1 style={{color}}> {name} are from Parents to Child </h1>        
        </div>
    );
}

Hello.defaultProps = {
    name : "No Name"
}

export default Hello;