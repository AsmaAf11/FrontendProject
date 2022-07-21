import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' ;
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import '../App.css' 

export class Confirm extends Component {
    continue = e =>{
        e.preventDefault();
        //process form
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const{ values:{firstName,lastName,email,occupation,city ,bio,education,skills}} = this.props;

    return (
      <MuiThemeProvider>
          <React.Fragment>
          <h1>Confirm User Data</h1><br/>
              <List>
              <ListItem 
                  primaryText="First Name"
                  secondaryText={firstName}
                  />
                  <ListItem 
                  primaryText="Last Name"
                  secondaryText={lastName}
                  />
                   <ListItem 
                  primaryText="email"
                  secondaryText={email}
                  />
                   <ListItem 
                  primaryText="occupation"
                  secondaryText={occupation}
                  />
                   <ListItem 
                  primaryText="city"
                  secondaryText={city}
                  />
                   <ListItem 
                  primaryText="Bio"
                  secondaryText={bio}
                  />
                   <ListItem 
                  primaryText="Education"
                  secondaryText={education}
                  />
                   <ListItem 
                  primaryText="Skills"
                  secondaryText={skills}
                  />
                      
                 
              </List>
             
                <RaisedButton
                class="backk"
                label="Confirm & Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                 <RaisedButton
                 class="backk"
                label="Back"
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
        margin:15,
     
    }
}
export default Confirm