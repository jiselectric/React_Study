import CartReducer from './CartReducer';
import UserReducer from './UserReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    CartReducer,
    UserReducer
});

export default rootReducer;