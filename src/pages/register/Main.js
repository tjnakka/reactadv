import React,{Component} from 'react';
import RegisterPage1 from './step1/Main';
import RegisterPage2 from './step2/Main';
import RegisterPage3 from './step3/Main';
import RegisterPage4 from './step4/Main';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import logo from './image/logo-full.png';
import {reg_step} from '../../redux/dispatch/dispatch'
import {connect} from 'react-redux';


function PageDecider(props){
    if(props.regstep === 'first'){
        return <RegisterPage1 />
    }else if(props.regstep === 'second'){
        return <RegisterPage2 />
    }else if(props.regstep === 'third'){
        return <RegisterPage3 />
    }else if(props.regstep === 'fourth'){
        return <RegisterPage4 />
    }
    else{
        return <RegisterPage1 />
    }
}

class RegisterPage extends Component{
    render(){
        return(
            <div id='register-container'>
                <Grid>
                    <Row id="logo-row"> 
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} id="logo-container">
                            <img src={logo} alt="Logo" />
                        </Cell>    
                    </Row>

                    <Row>
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                            <h2 id="heading-text">Registration</h2>
                        </Cell>
                    </Row>

                    {/* Expected number progressbar here */}

                    <PageDecider regstep = {this.props.regstep} />
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
        regstep: state.rreduce.regstep,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        regStep: (nxtregstep) =>{
            dispatch(
                reg_step(nxtregstep)
            );
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);