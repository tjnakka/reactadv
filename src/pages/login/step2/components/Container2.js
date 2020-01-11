import React,{ Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import logo from '../image/logo-full.png';
import LoginFrom from './LoginForm2';

class LoginContainer2 extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Row id="logo-row"> 
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} id="logo-container">
                            <img src={logo} alt="Logo" />
                        </Cell>    
                    </Row>

                    <Row>
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                            <h2 id="heading-text">Welcome</h2>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} style={{marginBottom:8+'px'}}>
                            <label id="request-text">
                                Please Enter the Code Sent to your Registered Email.
                            </label>
                        </Cell>
                    </Row>

                    <LoginFrom />
                </Grid>
            </div>
        );
    }
}

export default LoginContainer2;