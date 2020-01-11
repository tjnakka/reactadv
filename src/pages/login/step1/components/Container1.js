import React,{ Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import logo from '../image/logo-full.png';
import LoginFrom1 from './LoginForm1';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';

class LoginContainer1 extends Component{
    render(){
        return(
            <div id='step1'>
                <Grid>
                    <Row id="logo-row"> 
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} id="logo-container">
                            <img src={logo} alt="Logo" />
                        </Cell>    
                    </Row>

                    <Row>
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                            <h2 id="heading-text">Sign In</h2>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} style={{marginBottom:8+'px'}}>
                            <label id="request-text">Not A Member?
                                <Button
                                    // dense="true"
                                    href='/register'
                                >
                                    Sign Up
                                </Button>
                            </label>
                        </Cell>
                    </Row>

                    <LoginFrom1 />
                </Grid>
            </div>
        );
    }
}

export default LoginContainer1;