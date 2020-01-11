import React, {Component} from 'react';
import {connect} from 'react-redux';
import ForgotResetContainer from './component/Container1';
import './css/forgetreset.css';
import LinearProgress from '@material/react-linear-progress';
import '@material/react-linear-progress/dist/linear-progress.css'
import {forgot_lp_state} from '../../../redux/dispatch/dispatch'
 
class ResetPage extends Component{

    render(){
        return(
            <div id="forgot-container">
                <LinearProgress
                    closed = {this.props.flpstate} 
                    indeterminate = 'true'
                />
                <ForgotResetContainer location={this.props.location}/>
            </div>      
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        flpstate: state.fresetreduce.flpstate,
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPage);