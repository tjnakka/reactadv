import React, {Component} from 'react';
import TextField, {HelperText,Input} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import {Cell, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import {connect} from 'react-redux';
import validate_main from '../../../../func/validate';
import {forgot_email,forgot_lp_state} from '../../../../redux/dispatch/dispatch'
import {urls} from '../../../../redux/gvariables'

class ForgotForm extends Component{
    constructor(props){
        super(props);
        this.state={
            values:[''],
            valid:[true],
            mess:['Please Check'],
            req:[['req','email']],
            buttonstate: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        // disabling the button
        this.setState({buttonstate: true})

        var final_valid = validate_main(this.state.values,this.state.req) 
        this.setState({valid: final_valid})
        if(final_valid.indexOf(false)==-1){
            // setting linear progress
            this.props.setLpstate(false) 
            
            //call api here... 
            fetch(urls.forgoturl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.values[0],
                })
            })
            .then(response => {
                return response.json();
            }).then(data => {
                if(data.verified){
                    alert('Reset Link is Sent to your Registered Mail Id\nPlease Check Your Mail.')
                }else{
                    alert(data.message)
                }
                // enabling the button & turing off linear progress. 
                this.setState({buttonstate: false})
                this.props.setLpstate(true)
            });
        }else{
            // enabling the button & turing off linear progress. 
            this.setState({buttonstate: false})
        }
    }

    render(){
        return(
            <div>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <TextField
                        label={this.state.req[0].indexOf('req')==-1
                        ? "Enter the Email":"Enter the Email"+'*'}
                            outlined = "true"
                            className = "inputs"
                            helperText={
                                <HelperText validation>{this.state.mess[0]}</HelperText>
                            }         
                        >
                        <Input 
                                isValid={this.state.valid[0]}
                                value={this.state.values[0]}
                                onChange={(e) => {
                                    let newState = Object.assign({}, this.state);
                                    newState.values[0] = e.currentTarget.value;
                                    this.setState(newState);
                                }}
                                inputType = "text"
                                name='email'
                            />   
                        </TextField>
                    </Cell>
                </Row>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} style={{marginTop:8+'px'}}>
                        <Button
                            raised
                            id='button-forgot'
                            onClick={(e)=>this.handleSubmit(e)}
                            disabled={this.state.buttonstate}
                        >
                            Reset Password
                        </Button>
                    </Cell>
                </Row>

            </div>
        )
    }
          
}

const mapStateToProps = (state) =>{
    return{
        email: state.lreduce.email    
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        setEmail: (email) =>{
            dispatch(
                forgot_email(email)
            );
        },
        setLpstate: (flpstate) =>{
            dispatch(
                forgot_lp_state(flpstate)
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotForm);