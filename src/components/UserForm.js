import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success from './Success'



export class UserForm extends Component {
    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:'',
        education:'',
        skills:'',


    }
    //next
    nextStep=()=>{
        const { step }= this.state;
        this.setState({
            step: step + 1
        });
    }
//prev
    prevStep=()=>{
        const { step }= this.state;
        this.setState({
            step: step - 1
        });
    }
    //field change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
  render() {
      const { step } = this.state;
      const {firstName, lastName,email,occupation,city,bio,education,skills}= this.state;
    const values= {firstName, lastName,email,occupation,city,bio,education,skills}
   
    
    switch(step){
        case 1:
            return(
                <FormUserDetails
               
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                
                />
            )
        case 2:
            return(
                <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}

                handleChange={this.handleChange}
                values={values}
                
                />
            )
        case 3:
            return(
                <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                
                />
            )
        case 4:
            return(
                <Success
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                
                />
            )
            

    }
  }
}

export default UserForm