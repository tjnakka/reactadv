import React,{ Component } from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import logo from '../image/logo-full.png';

class ErrorContainer extends Component{
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
                            <h2 id="heading-text">Error 404!!!</h2>
                        </Cell>
                    </Row>

                    <Row>
                        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                            <p id="error-body-text">Page Not Found.</p>
                        </Cell>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default ErrorContainer;