import React from 'react';
import CartReducer from '../reducers/CartReducer';
import { useSelector } from 'react-redux'; //useSelector is Subscribe 

function Cart() {
    const cart = useSelector(({CartReducer}) => CartReducer);
    // CartReducer는 Cart Reducer의 state 
    return (
       <div>
           <h1>Cart Component</h1>
           <h1> Cart : {cart.length} 개 </h1>
       </div> 
    )
}

export default Cart;

// 1. Actions 
// 2. Reducers
// 3. Index.js에 Provider랑 Store 
// 4. Dispatch 보내기  
// 4. useSelector로 구독 