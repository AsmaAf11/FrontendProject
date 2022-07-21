import { useState, useEffect } from "react";
import unstar from "./img/unstar.png";
import star from "./img/star.png";
import Home from './Home'
import _ from "lodash";
import "../App.css";
import Button from 'react-bootstrap/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';

function RatingStars({ initRating, onRatingChanged }) {
  const [rating, setRating] = useState(initRating);


  
  useEffect(() => {
    // if prop changed, we want to reflect that.
    setRating(initRating);
  }, [initRating]);

  function changeRating(newRating) {
    setRating(newRating);
    onRatingChanged(newRating);
  }

//   const Submit=()=>setRating(newRating)

  return (
    <div>
      {_.times(5, (index) => (
        <img class="star"
          alt="rating stars"
          src={rating >= index + 1 ? star : unstar}
          key={index}
          onClick={() => changeRating(index + 1)}
        />
      ))}{" "}
      <span> {rating} of 5 stars</span>
    </div>
  );
}

export default function App() {
    const navigate = useNavigate();

    const navigateHome = () => {
     
      navigate('/');
    };

  return (
    <div className="App">
      <RatingStars
        initRating={3}
        onRatingChanged={(newRating) => {
          console.log(
            `NEW RATING (${newRating}) DETECTED FOR 1.. SAVING TO DB`
            
          );
            
        }}
      />
      
      <br/>
      <Button variant="secondary" onClick={navigateHome} >Return Home</Button>{' '}

    </div>
  );
}
