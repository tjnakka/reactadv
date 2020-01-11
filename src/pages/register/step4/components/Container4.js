import React,{ Component } from 'react';
import {Cell,Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import RegisterFrom4 from './RegisterForm4';
import '@material/react-button/dist/button.css';

class RegisterContainer4 extends Component{
    render(){
        return(
            <div id='step1'>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <h2 id="heading-text" style={{fontSize:24+'px'}}>Key Contacts</h2>
                    </Cell>
                </Row>
                
                <RegisterFrom4 />                
            </div>
        );
    }
}

export default RegisterContainer4;