import {createStore, combineReducers} from 'redux';
import LoginReducer from './reducer/loginreducer';
import RegisterReducer from './reducer/registerreducer';
import ForgotReducer from './reducer/forgotreducer';
import ForgotResetReducer from './reducer/forgotresetreducer';

const store = createStore(
    combineReducers({lreduce:LoginReducer, rreduce:RegisterReducer,freduce:ForgotReducer,fresetreduce:ForgotResetReducer}),
    {}
);

store.subscribe(() => {
    console.log(store.getState());
});
export default store;