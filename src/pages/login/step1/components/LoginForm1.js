import React, {Component} from 'react';
import TextField, {Input, HelperText} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import {Cell, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import {connect} from 'react-redux';
import {login_log_state, login_username, login_lp_state} from '../../../../redux/dispatch/dispatch'
import md5 from 'js-md5';
import validate_main from '../../../../func/validate';
import {urls} from '../../../../redux/gvariables'

class LoginForm1 extends Component{
    
    constructor(props){
        super(props);
        this.state={
            values:[this.props.username1,''],
            req:[['req','email'],['req','pass']],
            valid:[true,true],
            buttonstate: false,
        };
    }
    
    componentWillMount(){
        if(!localStorage.getItem('no_of_attempts')){
            localStorage.setItem('no_of_attempts',3)
        }
        if(!localStorage.getItem('step1_complete')){
            localStorage.setItem('step1_complete',false)
        }else{
            if(localStorage.getItem('date')){
                var diff = Math.round(((new Date()-new Date(localStorage.getItem('date'))% 86400000) % 3600000) / 60000)
                if(diff>=10){
                    localStorage.removeItem('date');
                }else{
                    if(localStorage.getItem('step1_complete') === 'true'){
                        this.props.logState(true)
                    }
                }
            }
        }
    }

    handleSubmit(){
        // disabling button
        this.setState({buttonstate: true})

        var final_valid = validate_main(this.state.values,this.state.req) 
        this.setState({valid: final_valid})

        if(final_valid.indexOf(false)===-1){
            // Truning on Linear Progress & disabling button
            this.props.setLpstate(false)

            // API call to login api
            fetch(urls.loginurl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.values[0],
                    password: md5(this.state.values[1]),
                    step: 1,
                })
            })
            .then(response => {
                return response.json();
            
            }).then(data => {
                if(data.verified){
                    this.props.setUsername(this.state.values[0])
                    localStorage.removeItem('no_of_attempts')
                    localStorage.setItem('step1_complete',true)
                    localStorage.setItem('username',this.state.values[0])
                    localStorage.setItem('date',new Date())
                    this.props.logState(true)
                }else{
                    this.props.setLpstate(true)
                    alert(data.message)
                    let newState = Object.assign({}, this.state.valid);
                    newState[0] = false;
                    this.setState({valid: newState});
                    localStorage.setItem('no_of_attempts',localStorage.getItem('no_of_attempts')-1)
                    if(localStorage.getItem('no_of_attempts') == 0){
                        // API call to BLOCK API
                        console.log('block')
                    }
                    if(localStorage.getItem('no_of_attempts') != 0){
                        // Enabling the button again.
                        this.setState({buttonstate: false})
                    }
                }
            }); 
        }else{
            // Enabling the button again.
            this.setState({buttonstate: false})
        }
    }

    render(){
        return(
            <div>
                <Row style={{marginBottom:5+'px'}}>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <TextField
                            label= {
                                this.state.req[0].indexOf('req')==-1
                                ? 'UserName'
                                : 'UserName*'
                            }
                            outlined = "true"
                            className = "inputs"
                            helperText={<HelperText isValidationMessage validation>Please Check Credentials.</HelperText>}
                        >
                            <Input 
                                value={this.state.values[0]}
                                onChange={(e) => {
                                    let newState = Object.assign({}, this.state);
                                    newState.values[0] = e.currentTarget.value;
                                    this.setState(newState);
                                }}
                                inputType = "text"
                                name='username'
                                isValid={this.state.valid[0]}
                            />
                            
                        </TextField>
                    </Cell>
                </Row>
                <Row style={{marginBottom:10+'px'}}>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>

                        <TextField
                            label= {
                                this.state.req[0].indexOf('req')==-1
                                ? 'Password'
                                : 'Password*'
                            }
                            outlined = "true"
                            className = "inputs"
                            helperText={<HelperText isValidationMessage validation>Please Check Credentials.</HelperText>}
                        >
                            <Input 
                                value={this.state.values[1]}
                                onChange={(e) => {
                                    let newState = Object.assign({}, this.state);
                                    newState.values[1] = e.currentTarget.value;
                                    this.setState(newState);
                                }}
                                name='password'
                                type='password'
                                isValid={this.state.valid[1]}
                            />
                            
                        </TextField>
                    </Cell>
                </Row>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} style={{marginTop:8+'px'}}>
                        <Button
                            raised
                            id='button-login'
                            onClick={(props) => {this.handleSubmit(props)}}
                            disabled={this.state.buttonstate}
                            // style={{backgroundColor:'#4a148c'}}
                        >
                            Log In
                        </Button>
                    </Cell>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        username1: state.lreduce.username,
        logstate: state.lreduce.logged,
        lpstate: state.lreduce.lpstate,
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        logState: (logstate) =>{
            dispatch(
                login_log_state(logstate)
            );
        },

        setUsername: (username) =>{
            dispatch(
                login_username(username)
            );
        },

        setLpstate: (lpstate) =>{
            dispatch(
                login_lp_state(lpstate)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm1);