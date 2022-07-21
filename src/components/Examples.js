import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../App.css";
import cv1 from "./img/cv1.png";
import cv2 from "./img/cv2.png";
import cv3 from "./img/cv3.png";
import cv4 from "./img/cv4.png";




const images = [
    cv1,
    cv2,
    cv3,
    cv4,

    
];

export default function Examples() {
    const [currentImageIndex, setCurrentImageIndex] = useState(Math.floor(Math.random() * images.length))
    const changeImage = () => {
      const randomNumber = currentImageIndex;
      setCurrentImageIndex(randomNumber);
    }
    useEffect(() => changeImage(), [])
  
    return (
        <div className="cards">
        <Card style={{ width: '18rem' }} className="cards1">
        <Card.Title><h1> CV Examples</h1></Card.Title>
      <Card.Img variant="top" src={images[currentImageIndex]}/>
      <Card.Body>
       <br/>
        <Button variant="secondary"onClick={changeImage}>Next Example</Button>{' '}
      </Card.Body>
    </Card>


    

     
      </div>
      
    )
  }