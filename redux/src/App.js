import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import { List, Cart } from "./routers"

function App() {
    return (
        <BrowserRouter>
            <h1> React Component </h1>
            <hr/>
            <nav>
                <ul>
                    <li>
                        <Link to="/list"> List </Link>
                    </li>
                    <li>
                        <Link to="/cart"> Cart </Link>
                    </li>
                </ul>
                <hr/>
            </nav>
            <div>
                <Route path="/list" component={List} exact/>
                <Route path="/cart" component={Cart}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
