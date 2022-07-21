import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' ;
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const{ values ,handleChange} = this.props;

    return (
      <MuiThemeProvider>
          <React.Fragment>
          <h1>Enter Personal Deatails</h1><br/>
              <TextField
                hintText="Enter your Occupation "
                floatingLabelText="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
                />
                <br/>
                <TextField
                hintText="Enter your City "
                floatingLabelText="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                />
                <br/>
                <TextField
                hintText="Enter your Bio "
                floatingLabelText="Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
                /><br/>
                  <TextField
                hintText="Enter your Education "
                floatingLabelText="Education"
                onChange={handleChange('education')}
                defaultValue={values.education}
                /><br/>
                  <TextField
                hintText="Enter your Skills "
                floatingLabelText="Skills"
                onChange={handleChange('skills')}
                defaultValue={values.skills}
                />
                <br/>
                <RaisedButton
                label="Continue"
                class="backk"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                <RaisedButton
                label="Back"
                class="backk"
                primary={false}
                style={styles.button}
                onClick={this.back}
                />

          </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles={
    button:{
        margin:15
    }
}
export default FormPersonalDetails