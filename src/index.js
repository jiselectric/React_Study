import React from 'react';
import ReactDom from "react-dom";
import App from './App';
import CounterReducer from './routers/CounterReducer'

ReactDom.render(<CounterReducer />, document.getElementById('root'));
