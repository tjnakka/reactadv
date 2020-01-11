import React, {Component} from 'react';
import TextField, {Input, HelperText} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import {Cell, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import {connect} from 'react-redux';
import {reg_step,reg_stepval_1} from '../../../../redux/dispatch/dispatch'
import md5 from 'js-md5';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'
import validate_main from '../../../../func/validate'
import {addopt} from '../../../../func/phone&curr'
import Select from '@material/react-select';
import '@material/react-select/dist/select.css';


class RegisterForm1 extends Component{
    
    constructor(props){
        super(props);
        this.state={
            values:['','','','','','','','','91'],
            valid:[true,true,true,true,true,true,true,true],
            mess:['Please Check','Please Check','Please Check your','Please Check','Please Check','Please Check','Please Check','Please Check'],
            vmess:['','','','','','','PASSWORD should contain 1 capital, 1 small aplhabet and 1 number','PASSWORD should contain 1 capital, 1 small aplhabet and 1 number',''],
            req:[['req'],['req'],['req','email'],['req'],['req'],['req','phno'],['req','pass'],['req','pass']],
        };
    }

    textfield(inplabel, type, name, index){
        return(
            <div>
                <Row style={{marginBottom:5+'px'}}>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <TextField
                            label= {
                                this.state.req[index].indexOf('req')==-1
                                ? inplabel
                                : inplabel+'*'
                            }
                            outlined = "true"
                            className = "inputs"
                            helperText={
                                <HelperText validation={
                                    this.state.valid[index]===false
                                    ? true
                                    : false
                                }>{ 
                                    this.state.valid[index]===false
                                    ? this.state.mess[index]
                                    : this.state.vmess[index]
                                }</HelperText>
                            }
                        >
                            <Input 
                                value={this.state.values[index]}
                                onChange={(e) => {
                                    let newState = Object.assign({}, this.state);
                                    newState.values[index] = e.currentTarget.value;
                                    this.setState(newState);
                                }}
                                isValid={this.state.valid[index]}
                                inputType = 'text'
                                type = {type}
                                name= {name}
                            />
                        </TextField>
                    </Cell>
                </Row>
            </div>
        )
    }

    componentWillMount(){
        if(localStorage.getItem('step1val')){
            if(localStorage.getItem('date')){
                var diff = Math.round(((new Date()-new Date(localStorage.getItem('date'))% 86400000) % 3600000) / 60000)
                if(diff>=15){
                    localStorage.removeItem('date');
                    localStorage.removeItem('step1val');
                }else{
                    var valuesx = JSON.parse(localStorage.getItem('step1val'))
                    this.setState({values: valuesx})
                }
            }
        }
    }

    handleSubmit(props){
        if(this.state.values[6] === this.state.values[7]){
            var final_valid = validate_main(this.state.values,this.state.req) 
            this.setState({valid: final_valid})
            
            if(final_valid.indexOf(false)==-1){
                let newState = Object.assign([], this.state.values);
                newState[6] = md5(newState[6]);
                newState[7] = md5(newState[7]);
                this.setState({values:newState});
                localStorage.setItem('step1val',JSON.stringify(newState))
                if(!localStorage.getItem('date')){
                    localStorage.setItem('date',new Date())
                }
                this.props.regStep('second')
            }
        }else{
            this.setState({valid: [true,true,true,true,true,true,false,false,true]})
        }
    }

    render(){
        return(
            <div>
                {this.textfield('FirstName','text','firstname','0')}
                {this.textfield('LastName','text','lastname','1')}
                {this.textfield('Email','email','email','2')}
                {this.textfield('Designation','text','designation','3')}
                {this.textfield('Department','text','department','4')}
                <Row style={{marginBottom:5+'px'}}>
                    <Cell desktopColumns={4} tabletColumns={2} phoneColumns={1}>
                        <Select
                            label='Code'
                            value={this.state.values[8]}
                            onChange={(e) => {
                                let newState = Object.assign({}, this.state);
                                newState.values[8] = e.currentTarget.value;
                                this.setState(newState);
                            }}
                            outlined={true}
                            style={{width:100+'%'}}
                        >
                            {addopt()}
                        </Select>
                    </Cell>
                    <Cell desktopColumns={8} tabletColumns={6} phoneColumns={3}>
                        <TextField
                            label= {
                                'Phone No'
                            }
                            outlined = "true"
                            className = "inputs"
                            helperText={<HelperText isValidationMessage validation>{this.state.mess[5]}</HelperText>}
                        >
                            <Input 
                                value={this.state.values[5]}
                                onChange={(e) => {
                                    let newState = Object.assign({}, this.state);
                                    newState.values[5] = e.currentTarget.value;
                                    this.setState(newState);
                                }}
                                inputType = "text"
                                name='phno'
                                isValid={this.state.valid[5]}
                            />
                            
                        </TextField>
                    </Cell>
                </Row>
                
                {this.textfield('Password','password','password','6')}
                {this.textfield('Confirm Password','password','confpassword','7')}

    
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} style={{marginTop:8+'px'}}>
                        <Button
                            raised
                            id='button-login'
                            onClick={(props) => {this.handleSubmit(props)}}
                            // style={{backgroundColor:'#4a148c'}}
                        >
                            Next
                        </Button>
                    </Cell>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        values1: state.rreduce.step1val,
        regformstep: state.rreduce.regstep,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        regStep: (nxtregstep) =>{
            dispatch(
                reg_step(nxtregstep)
            );
        },

        regStepval1: (stepval1) =>{
            dispatch(
                reg_stepval_1(stepval1)
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm1);