import React, {Component} from 'react';
import TextField, {Input, HelperText} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import {Cell, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import {connect} from 'react-redux';
import {login_lp_state} from '../../../../redux/dispatch/dispatch'
import validate_main from '../../../../func/validate';
import {urls} from '../../../../redux/gvariables'


class LoginForm2 extends Component{
    
    constructor(props){
        super(props);
        this.props.setLpstate(true);
        this.state={
            buttonstate: false,
            sendbuttonstate: true,
            username2:localStorage.getItem('username'),
            values:[''],
            req:[['req']],
            valid:[true],
        };
    }

    handleSubmit(props){
        // disabling button.
        this.setState({buttonstate: true})

        if(this.props.username1){
            this.setState({username2: this.props.username1})
            console.log('props')
        }
    
        var final_valid = validate_main(this.state.values,this.state.req) 
        this.setState({valid: final_valid})

        if(final_valid.indexOf(false)==-1){
            //turning on linear progress
            this.props.setLpstate(false)

            fetch(urls.loginurl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username2,
                    code: this.state.values[0],
                    step: 2,
                })
            })
            .then(response => {
                return response.json();
            
            }).then(data => {
                if(data.verified){
                    localStorage.removeItem('username')
                    localStorage.removeItem('step1_complete')
                    localStorage.removeItem('date')
                    localStorage.removeItem('date1')
                    localStorage.removeItem('sent')
                    localStorage.setItem('AT',data.token)
                    alert(data.message)
                }else{
                    alert(data.message)
                    this.setState({valid: false})
                }
                //Disabling and Enabling linear progress and button respectively.
                this.setState({buttonstate: false})
                this.props.setLpstate(true)
            });
        }else{
            //Disabling and Enabling linear progress and button respectively.
            this.setState({buttonstate: false})
            this.props.setLpstate(true)
        }
    }

    componentWillMount(){
        if(!localStorage.getItem('date')){
            localStorage.setItem('date',new Date())
        }else{
            var diff = Math.round(((new Date()-new Date(localStorage.getItem('date'))% 86400000) % 3600000) / 60000)
            if(diff>=5){
                this.setState({sendbuttonstate:false})
            }else{
                this.actbu()
            }
        }
        if(localStorage.getItem('sent') === 'true'){
            this.setState({sendbuttonstate:true})
        }
    }
    
    actbu(){
        setTimeout(()=>{
            this.setState({sendbuttonstate:false})
        },(300-Math.round(( new Date()-new Date(localStorage.getItem('date')))/ 1000))*1000)
    }
    
    resend(){
        // disabling button.
        this.setState({sendbuttonstate: true})
        this.props.setLpstate(false)

        if(this.props.username1){
            this.setState({username2: this.props.username1})
        }

        fetch(urls.resendurl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username2,
            })
        })
        .then(response => {
            return response.json();
        
        }).then(data => {
            //turning on linear progress
            this.props.setLpstate(true)
            if(data.verified){
                alert(data.message)
                localStorage.setItem('sent',true)
            }else{
                alert(data.message)
                this.setState({sendbuttonstate:false})
            }
            console.log(data)
        })
    }

    render(){
        return(
            <div>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <TextField
                            label='Code*'
                            outlined = "true"
                            className = "inputs"
                            helperText={<HelperText isValidationMessage validation>Please Check Code.</HelperText>}
                        >
                            <Input 
                                value={this.state.values[0]}
                                onChange={(e) => {
                                    let newState = Object.assign({}, this.state);
                                    newState.values[0] = e.currentTarget.value;
                                    this.setState(newState);
                                }}
                                inputType = "text"
                                name='code'
                                isValid={this.state.valid[0]}
                            />
                            
                        </TextField>
                    </Cell>
                </Row>
                
                <Row>
                    <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2} style={{marginTop:8+'px'}}>
                        <Button
                            id='button-resend'
                            onClick={(props) => {this.resend(props)}}
                            disabled={this.state.sendbuttonstate}
                            // style={{backgroundColor:'#4a148c'}}
                        >
                            Resend
                        </Button>
                    </Cell>
                    <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2} style={{marginTop:8+'px'}}>
                        <Button
                            raised
                            id='button-login'
                            onClick={(props) => {this.handleSubmit(props)}}
                            disabled={this.state.buttonstate}
                            // style={{backgroundColor:'#4a148c'}}
                        >
                            Submit
                        </Button>
                    </Cell>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        lpstate: state.lreduce.lpstate,
        username1: state.lreduce.username,
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setLpstate: (lpstate) =>{
            dispatch(
                login_lp_state(lpstate)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm2);