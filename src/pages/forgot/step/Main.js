import React, {Component} from 'react';
import {connect} from 'react-redux';
import ForgotContainer from './component/Container';
import LinearProgress from '@material/react-linear-progress';
import '@material/react-linear-progress/dist/linear-progress.css'
import './css/forgot.css';
import {forgot_lp_state} from '../../../redux/dispatch/dispatch'

class ForgotPage extends Component{
    render(){
        return(
            <div id="forgot-container">
                <LinearProgress
                    closed = {this.props.flpstate} 
                    indeterminate = 'true'
                />
                <ForgotContainer/>
            </div>
              
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        flpstate: state.freduce.flpstate,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        setLpstate: (lpstate) =>{
            dispatch(
                forgot_lp_state(lpstate)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPage);