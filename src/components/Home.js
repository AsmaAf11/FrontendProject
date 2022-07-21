import React from 'react'
import UserForm from './UserForm.js'
import ContactUs from './ContactUs'
import RatingPage from './RatingPage'

import Examples from './Examples.js'

import resume from "./img/resume.png";



import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar} from 'react-bootstrap';

function Home() {

  return (
    <div className="Home">
        <div class="header1">
        
      <Navbar  variant="dark" className="Nav">
            <img src={resume}  width="40" height="45" className='homeicon'/>
        <Container >
          
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/UserForm">UserForm</Nav.Link>
            <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
            <Nav.Link href="/RatingPage">RatingPage</Nav.Link>
            <Nav.Link href="/Examples">Examples</Nav.Link>




       
            
          </Nav>
        </Container>

      </Navbar>

        
    </div>

    </div>
  )
}

export default Home