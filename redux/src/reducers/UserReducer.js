import { UserAction } from '../actions';
const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SET_STATUS } = UserAction;

const initialState = {
    userinfo : {},
    logged : false,
    status : 0
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN : {
            console.log('LOGIN EXEC');
            return {
                ...state,
            };
        }
        case LOGIN_SUCCESS : {
            console.log('LOGIN SUCC');
            return {
                ...state, 
                logged : true,
            }
        }
        case LOGIN_FAILURE : {
            console.log('LOGIN FAIL');
            return {
                ...state, 
                logged : false,
                status : 1, 
            }
        }
        case SET_STATUS : {
            return {
                ...state, 
                status : 0,
            }
        }
        default : {
            return state;
        }
    }
}

export default UserReducer;