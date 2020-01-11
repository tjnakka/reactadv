import {forgotresetstate} from '../gvariables'
const ForgotResetReducer =(state = forgotresetstate,action) =>{
    switch(action.type){
        case 'SET_PASSWORD1':
        state ={
            ...state,
            password1: action.password1
        }
        break;
        case 'SET_PASSWORD2':
            state={
                ...state,
                password2:action.password2
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
export default ForgotResetReducer