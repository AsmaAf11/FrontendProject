import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' ;
import AppBar from 'material-ui/AppBar'
import {List,ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Success.css'
import Button from 'react-bootstrap/Button';
import ResDownload from './ResDownload.js'


export class Success extends Component {




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
      <>
      <MuiThemeProvider>
        
          <React.Fragment>
          <h1>Success</h1><br/>

           <div class="center">
    {/* <button id="button" onClick="randomColor()" class="button">Click me to change color!</button> */}
    
  </div><br/>
          
         
          <div className="resume">
          
      <Container>
      <Row>
        <Col sm={8} className="right">
          <i>Occupation:</i> 
          <br/>
        {occupation}<br></br><hr/>
        <i>City:</i> 
        <br/>
        {city}<br></br><hr/>
       
        <i> Education:</i>
        <br/>
        {education}
        <br>
        </br><hr/>
        <i>Skills:</i> 
        <br/>
        
          {skills}
       
        
        <br>
        </br><hr/>
        <i> Bio:</i>
        <br/>
        {bio}

        </Col>
        <Col sm={4}className="left">
          <h3>Contact info:</h3>
         <i> First Name:</i>
          <br/>
        {firstName}<br>
        </br><hr/>
        <i>Last Name:</i> 
        <br/>
        {lastName}
        <br>
        </br><hr/>
       <i> Email:</i>
        <br/>
        {email}
       
        </Col>
      </Row>
     
    </Container>
      </div>
  
                 <RaisedButton
                 class="backk"
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
                />
                
                <Button variant="secondary" onClick={ResDownload} >Download</Button>{' '}

          </React.Fragment>
       
 

      </MuiThemeProvider>
     
      </>
    )
  }
}
const styles={
    button:{
        margin:15
    }
}
export default Success