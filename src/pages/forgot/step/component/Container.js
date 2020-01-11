import React,{ Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import logo from '../images/logo-full.png';
import ForgotForm from './ForgotForm';

class ForgotContainer extends Component{
    render(){
        return(
            <div id='page1'>
            <Grid>
                <Row id="logo-row"> 
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} id="logo-container">
                        <img src={logo} alt="Logo" />
                    </Cell>    
                </Row>

                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <h2 id="heading-text">Forgot your password</h2>
                    </Cell>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                     <p id="paratext">Please enter the email address registred on your account</p>
                    </Cell>
                </Row>
                <ForgotForm/>
            </Grid>
        </div>

        )
    }
}
export default ForgotContainer


