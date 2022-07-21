import React from 'react'
import '../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import plus from "./img/plus.png";
function HomeBody() {
  const navigate = useNavigate();

  const navigateToForm = () => {
     
    navigate('/UserForm');
  };
  
  return (
    <div class="containerr">
      <br/>
        <div class="centered"><i>Build Your Resume </i></div><br/>

        <img src={plus} onClick={navigateToForm} className="start"/>{' '}<br/>
        
        <img class="review-item__image" decoding="auto" src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@2x.png" srcset="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image-m@1x.png 260w, https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image-m@2x.png 520w, https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image-m@3x.png 780w, https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@1x.png 498w, https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@2x.png 978w, https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png 1467w" sizes="(max-width: 767px) 260px, 498px" alt="Resumes made online with Zety Resume Builder" width="486" height="489"/>
    {/* <img src="https://www.pngitem.com/pimgs/m/495-4952609_resume-builder-icon-purchase-gif-transparent-hd-png.png"
        className="myimg"/> */}
   
  </div>
  
  )
}

export default HomeBody