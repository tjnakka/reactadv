import React, {Component} from 'react';
import TextField, {HelperText,Input} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import MaterialIcon from '@material/react-material-icon';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import {Cell, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import {connect} from 'react-redux';
import validate_main from '../../../../func/validate'
import {forgot_reset_password1,forgor_reset_password2,forgot_lp_state} from '../../../../redux/dispatch/dispatch'
import md5 from 'js-md5'
import {urls} from '../../../../redux/gvariables'


class ForgotResetForm extends Component{
    constructor(props){
        super(props);
        this.state={
            show1:false,show2:false,
            values:['',''],
            valid:[true,true],
            mess:['Please Check','Please Check','Password do not match!'],
            vmess:['PASSWORD should contain 1 capital, 1 small aplhabet and 1 number',''],
            req:[['req','pass'],['req','pass']],
            buttonstate:false,
        };
        this.showpassword1=this.showpassword1.bind(this);
        this.showpassword2=this.showpassword2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    showpassword1 =()=>{
        const {show1}=this.state;
        this.setState({
            show1:!show1
        })
    }
    componentWillMount(){
        const param = new URLSearchParams(this.props.location.search)
        this.setState({username: atob(param.get('un'))})
    }
    showpassword2 =()=>{
        const {show2}=this.state;
        this.setState({
            show2:!show2
        })
     }
    Pasword_match(){
        if(this.state.values[0]!==this.state.values[1]){
            return(this.password_match_error())
        }
        return true
    }
    password_match_error(){
        return(<div>{this.state.mess[2]}</div>)
    }
    handleSubmit(){
        // Disabling the button.
        this.setState({buttonstate: true})

        var final_valid = validate_main(this.state.values,this.state.req) 
        this.setState({valid: final_valid})
        
        if(this.Pasword_match()){
            if(final_valid.indexOf(false)==-1){
                // setting linear progress
                this.props.setLpstate(false) 
            
                //call api here... 
                fetch(urls.reseturl,{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: this.state.username,
                        password: md5(this.state.values[0]),
                    })
                })
                .then(response => {
                    return response.json();
                }).then(data => {
                    if(data.verified){
                        alert(data.message)
                    }else{
                        alert(data.message)
                    }
                    // Enabling the button.
                    this.setState({buttonstate: false})
                    this.props.setLpstate(true)
                });
            }else{
                // Enabling the button.
                this.setState({buttonstate: false})
            }
        }else{
            // Enabling the button.
            this.setState({buttonstate: false})
        }
    }

    render(){
        return(
            <div>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <div className="error">{this.Pasword_match()}</div>
                        <TextField
                            label={this.state.req[0].indexOf('req')==-1
                            ? "New password":"New password"+'*'}
                            outlined = "true"
                            className = "inputs"
                            trailingIcon={<MaterialIcon role="button" icon= {this.state.show1 ? 'visibility':'visibility_off'}/>}
                            onTrailingIconSelect={this.showpassword1}   
                            helperText={
                                <HelperText validation={
                                    this.state.valid[0]===false
                                    ? true
                                    : false
                                }>{ 
                                    this.state.valid[0]===false
                                    ? this.state.mess[0]
                                    : this.state.vmess[0]
                                }</HelperText>
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
                                type = {this.state.show1 ? 'text': 'password'}
                                name='password1'
                            />   
                        
                        </TextField>
                    </Cell>
                </Row>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                        <TextField
                            label={this.state.req[1].indexOf('req')==-1
                            ? " Confirm New password":" Confirm New password"+'*'}
                            outlined = "true"
                            className = "inputs"
                            trailingIcon={<MaterialIcon role="button" icon= {this.state.show2 ? 'visibility':'visibility_off'}/>}
                            onTrailingIconSelect={this.showpassword2}                            
                            helperText={
                                <HelperText validation>{this.state.mess[1]}</HelperText>
                            } 
                        >
                        <Input 
                                isValid={this.state.valid[1]}
                                value={this.state.values[1]}
                                onChange={(e) => {
                                    let newState = Object.assign({}, this.state);
                                    newState.values[1] = e.currentTarget.value;
                                    this.setState(newState);
                                }}
                                type = {this.state.show2 ? 'text': 'password'}
                                name='password2'
                            />   
                        </TextField>
                    </Cell>

                </Row>
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} style={{marginTop:8+'px'}}>
                        <Button
                            raised
                            id='button-forgot1'
                            onClick={(props) => {this.handleSubmit(props)}}
                            disabled={this.state.buttonstate}
                        >
                         Submit
                        </Button>
                    </Cell>
                </Row>

            </div>
        )
    }
          
}

const mapStateToProps = (state) =>{
    return{
        password1: state.fresetreduce.password1  ,
        password2: state.fresetreduce.password2
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        setpassword1: (password1) =>{
            dispatch(
                forgot_reset_password1(password1)
            );
        },
        setpassword2:(password2) =>{
            dispatch(
                forgor_reset_password2(password2)
            );
        },
        setLpstate: (flpstate) =>{
            dispatch(
                forgot_lp_state(flpstate)
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotResetForm);
