import {registrationstate} from '../gvariables';

const RegisterReducer = (state = registrationstate, action) => {
    switch (action.type) {
        case 'SET_REGFORM_STEP':
            state = {
                ...state,
                regstep: action.nxtregstep,
            }
            break;
        case 'SET_REGFORM_STEPVAL_1':
            state = {
                ...state,
                step1val: action.step1val,
            }
            break;
        case 'SET_REGFORM_STEPVAL_2':
            state = {
                ...state,
                step2val: action.step2val,
            }
            break;
        
    }

    return state;   
};

export default RegisterReducer;