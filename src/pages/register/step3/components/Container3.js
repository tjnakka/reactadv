import React,{ Component } from 'react';
import {Cell,Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import RegisterFrom3 from './RegisterForm3';
import '@material/react-button/dist/button.css';

class RegisterContainer3 extends Component{
    render(){
        return(
            <div id='step1'>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <h2 id="heading-text" style={{fontSize:24+'px'}}>Company Information</h2>
                    </Cell>
                </Row>
                
                <RegisterFrom3 />                
            </div>
        );
    }
}

export default RegisterContainer3;