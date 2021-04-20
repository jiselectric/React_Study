import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './routers/Home';
import About from './routers/About';
import Address from './routers/Address'
//import CreateUser from './routers/CreateUser'
//import UserList from './routers/UserList'
//import Inputs from './routers/Inputs'
//import Input from './routers/Input'
//import Counter from './routers/Counter';
//import Hello from './routers/Hello';

// const App = () => {
//     return(
//         <div>
//             <ul>
//                 <Link to="/"> Home </Link>
//             </ul>
//             <ul>
//                 <Link to="/about"> About </Link>
//             </ul>
//             <hr/>
//             <Route path="/" exact={true} component={Home}/>
//             <Route path="/about" component={About}/>
//         </div>
//     );
// }

function App () {
    return (
        <div>
            <Address/>
        </div>
    )
}
export default App;