// LOGIN RELATED FUNCTIONS
export function login_username(username){
    return{
        type: 'SET_USERNAME',
        username: username
    };
}

export function login_password(password){
    return{
        type: 'SET_PASSWORD',
        password: password
    };
}

export function login_log_state(logstate){
    return{
        type: 'SET_LOG_STATE',
        logged: logstate
    };
}

export function login_lp_state(lpstate){
    return{
        type: 'SET_LP_STATE',
        lpstate: lpstate
    };
}


// REGISTRATION RELATED FUNCTIONS
export function reg_step(nxtregstep){
    return{
        type: 'SET_REGFORM_STEP',
        nxtregstep: nxtregstep
    };
}

export function reg_stepval_1(step1val){
    return{
        type: 'SET_REGFORM_STEPVAL_1',
        step1val: step1val
    };
}

export function reg_stepval_2(step2val){
    return{
        type: 'SET_REGFORM_STEPVAL_2',
        step2val: step2val
    };
}

//FORGOT RELATED FUNCTIONS
export function forgot_email(email){
    return {
        type:'SET_EMAIL',
        email:email
    }
}

//FORGOT RESET PASSWORD FUNCTION
export function forgot_reset_password1(password1){
    return {
        type:'SET_PASSWORD1',
        password1:password1
    }
}

export function forgor_reset_password2(password2){
    return{
        type:'SET_PASSWORD2',
        password2:password2
    }
}
//FORGOT LINEAR PROGRESS FUNCTION
export function forgot_lp_state(flpstate){
    return{
        type: 'SET_FLP_STATE',
        flpstate:flpstate
    };
}

export function forgot_log_state(flogstate){
    return{
        type: 'SET_LOG_STATE',
        flogged: flogstate
    };
}