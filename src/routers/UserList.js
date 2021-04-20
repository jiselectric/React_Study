import React, { useState } from 'react';

function Users({ user }) {
    return(
        <div>
            <b> {user.username} </b> <span> {user.email} </span>
        </div>
    );
}
function UserList() {
    const users = [
        {
            id : 1, 
            username : 'kun',
            email : 'aguero@gmail.com'
        },
        {
            id : 2, 
            username : 'kevin',
            email : 'kdb@gmail.com'
        },
        {
            id : 3, 
            username : 'ruben',
            email : 'dias@gmail.com'
        }
    ]
    return(
        <div>
            <h1> UserList Component </h1>
            {users.map((user, index) => (
                <Users user={user} key={index}/>
            ))}
        </div>
    );
}

export default UserList;