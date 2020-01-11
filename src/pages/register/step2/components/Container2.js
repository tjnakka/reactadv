import React,{ Component } from 'react';
import {Cell,Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import RegisterFrom2 from './RegisterForm2';
import '@material/react-button/dist/button.css';

class RegisterContainer2 extends Component{
    render(){
        return(
            <div id='step1'>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <h2 id="heading-text" style={{fontSize:24+'px'}}>Company Details</h2>
                    </Cell>
                </Row>
                
                <RegisterFrom2 />                
            </div>
        );
    }
}

export default RegisterContainer2;