import React, {Component} from 'react';
import LinearProgress from '@material/react-linear-progress';
import '@material/react-linear-progress/dist/linear-progress.css'
import {connect} from 'react-redux';
import LoginPage1 from './step1/Main';
import LoginPage2 from './step2/Main';
import {login_username, login_lp_state} from '../../redux/dispatch/dispatch'

function Loginstep(props) {
    if (!props.logstate) {
      return <LoginPage1 />;
    }
    return <LoginPage2 />;
}

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.props.setLpstate(true);
    }

    render(){
        return( 
            <div id="login-container">
                <LinearProgress
                    closed = {this.props.lpstate} 
                    indeterminate = 'true'
                />
                <Loginstep logstate={this.props.logstate} />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        username: state.lreduce.username,
        logstate: state.lreduce.logged,
        lpstate: state.lreduce.lpstate,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        login_username: (name) =>{
            login_username(name);
        },

        setLpstate: (lpstate) =>{
            dispatch(
                login_lp_state(lpstate)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);