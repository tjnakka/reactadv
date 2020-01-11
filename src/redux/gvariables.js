const urls = {
    loginurl:'http://54.93.231.54:3080/login',
    registerurl:'http://54.93.231.54:3080/register',
    forgoturl:'http://54.93.231.54:3080/forgot_pwd',
    reseturl:'http://54.93.231.54:3080/reset_pwd',
    resendurl:'http://54.93.231.54:3080/resend',
}

const loginstate = {
    username: '',
    password: '',
    logged: false,
    lpstate: true,
};

const registrationstate = {
    step1val:[],
    step2val:[],
    regstep:'first',
};

const forgotstate ={
    email: '',
    flpstate:true
}

const forgotresetstate={
    password1:'',
    password2:'',
    flpstate:true
}

export {
    loginstate,
    registrationstate,
    forgotstate,
    forgotresetstate,
    urls
};