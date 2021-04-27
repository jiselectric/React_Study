import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserLogin } from '../api';
import { UserAction } from '../actions';

function Login() {
    const dispatch = useDispatch();
    const [info, setInfo] = useState({username : '', password : ''});
    const { username, password } = info;

    const onChangeHandler = (ev) => {
        const { target : {value, name}} = ev;
        setInfo({
            ...info, 
            [name] : value
        });
    };

    const login = async (ev) => {
        ev.preventDefault();
        dispatch(UserAction.login(info));
        // try {
        //     const result = await UserLogin(info);
        //     console.log(result);
        // }
        // catch (error){
        //     console.log('failure', error);
        // }
    };

    const {logged, status} = useSelector(state => state.UserReducer);

    useEffect(() => {
        if (status > 0) {
            alert('Login Fail');
            dispatch(UserAction.setStatus());
        }
    }, [status])

    useEffect(() => {
        if (logged) {
            alert('Log In')
        }
    }, [logged])

    return (
        <div>
            <h1> Login Component </h1>
            <form onSubmit={login}>
                <input type="text" name="username" value={username} onChange={onChangeHandler}/>
                <input type="password" name="password" value={password} onChange={onChangeHandler}/>
                <button> Login </button>
            </form>
        </div>
    )
}

export default Login;