import {loginstate} from '../gvariables';

const LoginReducer = (state = loginstate, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            state = {
                ...state,
                username: action.username,
            }
            break;
        case 'SET_PASSWORD':
            state = {
                ...state,
                password: action.password,
            }
            break;
        case 'SET_LOG_STATE':
            state = {
                ...state,
                logged: action.logged,
            }
            break;
        case 'SET_LP_STATE':
        state = {
            ...state,
            lpstate: action.lpstate,
        }
        break;
    }

    return state;   
};

export default LoginReducer;