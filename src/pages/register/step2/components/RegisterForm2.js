import React, {Component} from 'react';
import TextField, {Input, HelperText} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import {Cell, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import {connect} from 'react-redux';
import {reg_step} from '../../../../redux/dispatch/dispatch'
import validate_main from '../../../../func/validate'


class RegisterForm2 extends Component{

    constructor(props){
        super(props);
        this.state={
            values:['','','','',''],
            valid:[true,true,true,true,true],
            mess:['Please Check','Please Check','Please Check','Please Check','Please Check'],
            req:[['req'],['req'],['req'],['req'],['req']],
        };
        this.textfield = this.textfield.bind(this);
        
    }

    componentWillMount(){
        if(localStorage.getItem('step2val')){
            if(localStorage.getItem('date')){
                var diff = Math.round(((new Date()-new Date(localStorage.getItem('date'))% 86400000) % 3600000) / 60000)
                if(diff>=15){
                    localStorage.removeItem('date');
                    localStorage.removeItem('step2val');
                    localStorage.removeItem('step1val');
                    this.props.regStep('first');
                }else{
                    var valuesx = JSON.parse(localStorage.getItem('step2val'))
                    this.setState({values: valuesx})
                }
            }
        }
    }

    validate(){
        var final_valid = validate_main(this.state.values,this.state.req) 
        this.setState({valid: final_valid})
        
        if(final_valid.indexOf(false)==-1){
            return true
        }
        return false
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
                                <HelperText validation>{this.state.mess[index]}</HelperText>
                            }
                        >
                            <Input 
                                value={this.state.values[index]}
                                onChange={(e) => {
                                    let newState = Object.assign({}, this.state);
                                    newState.values[index] = e.currentTarget.value;
                                    this.setState(newState);
                                }}
                                inputType='text'
                                isValid={this.state.valid[index]}
                                type = {type}
                                name= {name}
                            />
                        </TextField>
                    </Cell>
                </Row>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.textfield('Purpose of Use','text','pou','0')}
                {this.textfield('Company Name','text','companyname','1')}
                {this.textfield('Company Registration Number','text','companyregno','2')}
                {this.textfield('Comapany Registered Address','text','companyaddr','3')}
                {this.textfield('Company Headquaters','text','companyheadqtr','4')}
                
                <Row>
                    <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2} style={{marginTop:8+'px'}}>
                        <Button
                            raised
                            id='button-prev-regform'
                            name='prev'
                            onClick={
                                (props) => {
                                    localStorage.setItem('step2val',JSON.stringify(this.state.values))
                                    this.props.regStep('first')
                                }
                            }
                            // style={{backgroundColor:'#4a148c'}}
                        >
                            Prev
                        </Button>
                    </Cell>
                    <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2} style={{marginTop:8+'px'}}>
                        <Button
                            raised
                            id='button-next-regform'
                            name='next'
                            onClick={(props) => {
                                    if(this.validate()){
                                        localStorage.setItem('step2val',JSON.stringify(this.state.values));
                                        this.props.regStep('third')
                                    }
                                }
                            }
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
        values2: state.rreduce.step2val,
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

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm2);