import {forgotstate} from '../gvariables';

const ForgotReducer =(state = forgotstate,action) =>{
    switch(action.type){
        case 'SET_EMAIL':
            state ={
                ...state,
                email: action.email
            }
        break;
        case 'SET_FLP_STATE':
            state = {
                ...state,
                flpstate: action.flpstate,
            }
        break;

    }
    return state;
};
export default ForgotReducer