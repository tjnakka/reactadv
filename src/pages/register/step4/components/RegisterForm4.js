import React, {Component} from 'react';
import TextField, {Input, HelperText} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import Button from '@material/react-button';
import '@material/react-button/dist/button.css';
import {Cell, Row} from '@material/react-layout-grid';
import '@material/react-layout-grid/dist/layout-grid.css';
import {connect} from 'react-redux';
import {reg_step} from '../../../../redux/dispatch/dispatch'
import List, {
    ListItem, ListItemText, ListGroup, 
    ListGroupSubheader,ListDivider,ListItemGraphic,ListItemMeta
} from '@material/react-list';
import '@material/react-list/dist/list.css'
import MaterialIcon from '@material/react-material-icon';
import '@material/react-material-icon/dist/material-icon.css'
import Select from '@material/react-select';
import '@material/react-select/dist/select.css';
import validate_main from '../../../../func/validate'
import {urls} from '../../../../redux/gvariables'
import {addopt} from '../../../../func/phone&curr'


class RegisterForm4 extends Component{
    
    constructor(props){
        super(props);
        this.state={
            values:['','','','','Business','91'],
            valid:[true,true,true,true,true],
            mess:['Please Check','Please Check','Please Check','Please Check','Please Check'],
            persons:[],
            update:'',
            req:[['req'],['req','email'],['req','phno'],['req'],['req']],
            buttonstate:false,
        };
        this.textfield = this.textfield.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addtolist = this.addtolist.bind(this);
    }

    componentWillMount(){
        if(localStorage.getItem('step4val')){
            if(localStorage.getItem('date')){
                var diff = Math.round(((new Date()-new Date(localStorage.getItem('date'))% 86400000) % 3600000) / 60000)
                if(diff>=15){
                    localStorage.removeItem('date');
                    localStorage.removeItem('step4val');
                    localStorage.removeItem('step3val');
                    localStorage.removeItem('step2val');
                    localStorage.removeItem('step1val');
                    this.props.regStep('first');
                }else{
                    var valuesx = JSON.parse(localStorage.getItem('step4val'))
                    this.setState({persons: valuesx})
                }
            }
        }
    }
    
    handleSubmit(event){
        //Disabling Button.
        this.setState({buttonstate:true})

        var keyconobj = [];
        var i = 0;
        while (i<this.state.persons.length) {
            keyconobj.push({
                name:this.state.persons[i][0],
                email:this.state.persons[i][1],
                designation:this.state.persons[i][3],
                phone_number:this.state.persons[i][2],
                contact_type:this.state.persons[i][4],
                country_code:this.state.persons[i][5],
            })
            i++
        }

        // Post data for Register API.
        fetch(urls.registerurl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Body of the Data.
                user:{
                    first_name: JSON.parse(localStorage.getItem('step1val'))[0],
                    last_name: JSON.parse(localStorage.getItem('step1val'))[1],
                    email: JSON.parse(localStorage.getItem('step1val'))[2],
                    password: JSON.parse(localStorage.getItem('step1val'))[6],
                    designation: JSON.parse(localStorage.getItem('step1val'))[3],
                    department: JSON.parse(localStorage.getItem('step1val'))[4],
                    phone_number: JSON.parse(localStorage.getItem('step1val'))[5],
                    alternate_phone_number: null,
                    country_code: JSON.parse(localStorage.getItem('step1val'))[8],
                },
                company_detail1: {
                    purpose_of_use: JSON.parse(localStorage.getItem('step2val'))[0], 
                    company_name: JSON.parse(localStorage.getItem('step2val'))[1],
                    company_register_number: JSON.parse(localStorage.getItem('step2val'))[2],
                    company_address: JSON.parse(localStorage.getItem('step2val'))[3],
                    company_headquarter: JSON.parse(localStorage.getItem('step2val'))[4],
                },
                company_detail2: {
                    market_value: JSON.parse(localStorage.getItem('step3val'))[0],
                    total_assest: JSON.parse(localStorage.getItem('step3val'))[1],
                    aum: JSON.parse(localStorage.getItem('step3val'))[2],
                    curreny: JSON.parse(localStorage.getItem('step3val'))[3],
                    auditors: JSON.parse(localStorage.getItem('step3val'))[4],
                    first_largest_shareholder: JSON.parse(localStorage.getItem('step3val'))[5],
                    second_largest_shareholder: JSON.parse(localStorage.getItem('step3val'))[6],
                    immediate_parent: JSON.parse(localStorage.getItem('step3val'))[7],
                    ultimate_parent: JSON.parse(localStorage.getItem('step3val'))[8],
                    subsidiaries: JSON.parse(localStorage.getItem('step3val'))[9],
                },
                key_val:keyconobj,
            })
        })
        .then(response => {
            return response.json();
        
        }).then(data => {
            if(data.verified){
                localStorage.removeItem('date');
                localStorage.removeItem('step4val');
                localStorage.removeItem('step3val');
                localStorage.removeItem('step2val');
                localStorage.removeItem('step1val');
                alert('User Has been Registered.\nPlease Wait for Actiation.')
                this.props.regStep('first');
            }else{
                alert(data.message)
            }
            //Enabling Button.
            this.setState({buttonstate:false})
        });
    }

    addtolist(update){
        const add = this.state.persons.map(function(item, i){
            return(<ListItem key={i}>
                <ListItemText
                    primaryText={item[0]}
                    secondaryText={item[1]+' | '+item[2]+' | '+item[3]} 
                />
                <ListItemMeta meta={item[4]} />
            </ListItem>)
        })

        return add
    }

    validate(){
        var final_valid = validate_main(this.state.values,this.state.req) 
        this.setState({valid: final_valid})
        
        if(final_valid.indexOf(false)==-1){
            return true
        }
        return false
    }

    checkkeycon(){
        var valcheck = [0,0,0]
        var i = 0
        while(i< this.state.persons.length){
            var type = this.state.persons[i][4]
            if(type === 'Business'){
                valcheck[0] = 1
            }else if(type === 'IT'){
                valcheck[1] = 1
            }else if(type === 'Auth. Signatory'){
                valcheck[2] = 1
            }
            i++;
        }
        if(valcheck.indexOf(0) !== -1){
            alert('Please Add Atleast One Key Contact from each Department.')
            return false
        }
        return true
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
                <Row>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} style={{marginTop:8+'px'}}>
                        <List twoLine nonInteractive={true}>
                            {this.addtolist(this.state.update)}
                        </List>
                    </Cell>
                </Row>
                <Row style={{outline:1+'px solid lightgrey',padding:10+'px'}}>
                    <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4} style={{marginTop:8+'px'}}>
                        {this.textfield('Name','text','name','0')}
                        {this.textfield('Email','email','email','1')}

                        <Row style={{marginBottom:5+'px'}}>
                            <Cell desktopColumns={4} tabletColumns={2} phoneColumns={1}>
                                <Select
                                    label='Code'
                                    value={this.state.values[5]}
                                    onChange={(e) => {
                                        let newState = Object.assign({}, this.state);
                                        newState.values[5] = e.currentTarget.value;
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
                                    helperText={<HelperText isValidationMessage validation>{this.state.mess[2]}</HelperText>}
                                >
                                    <Input 
                                        value={this.state.values[2]}
                                        onChange={(e) => {
                                            let newState = Object.assign({}, this.state);
                                            newState.values[2] = e.currentTarget.value;
                                            this.setState(newState);
                                        }}
                                        inputType = "text"
                                        name='phno'
                                        isValid={this.state.valid[2]}
                                    />
                                    
                                </TextField>
                            </Cell>
                        </Row>

                        {this.textfield('Designation','text','desg','3')}
                        <Select
                            label='Contact Type'
                            value={this.state.values[4]}
                            onChange={(e) => {
                                let newState = Object.assign({}, this.state);
                                newState.values[4] = e.currentTarget.value;
                                this.setState(newState);
                            }}
                            outlined={true}
                            style={{width:100+'%'}}
                        >
                            <option value='Business'>Business</option>
                            <option value='IT'>IT</option>
                            <option value='Auth. Signatory'>Authorized Signatory</option>
                        </Select>
                        <Button
                            id='button-add'
                            name='add'
                            onClick={(props) => {
                                if(this.validate()){
                                    var i = 0
                                    var flag = true
                                    while(i<this.state.persons.length){
                                        if(this.state.persons[i][1] === this.state.values[1]){
                                            flag = false
                                            alert('Email Id Is same as Some of Key Contacts')
                                            break
                                        }
                                        i++
                                    }
                                    if(flag){
                                        let newpersons = Object.assign([], this.state.persons);
                                        newpersons.push(this.state.values);
                                        this.setState({persons:newpersons});

                                        this.setState({values:['','','','','Business','91']});

                                        this.setState({update:'one'})
                                    }
                                }
                            }}
                            // style={{backgroundColor:'#4a148c'}}
                        >
                            Add
                        </Button>
                    </Cell>
                </Row>
                <Row>
                    {/* Button for Submit */}
                    <Cell desktopColumns={6} tabletColumns={4} phoneColumns={2} style={{marginTop:8+'px'}}>
                        <Button
                            raised
                            id='button-next-regform'
                            name='prev'
                            onClick={
                                (props) => {
                                    localStorage.setItem('step4val',JSON.stringify(this.state.persons))
                                    this.props.regStep('third')
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
                                if(this.checkkeycon()){
                                    this.handleSubmit();
                                }
                            }}
                            disabled={this.state.buttonstate}
                        >
                            Submit
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm4);