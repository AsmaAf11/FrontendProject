import logo from './logo.svg';
import './App.css';
import {UserForm} from './components/UserForm';
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import RatingPage from './components/RatingPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomeBody from './components/HomeBody'

import Examples from './components/Examples.js'




function App() {
  return (
    <>
    <div className="App">


<Home/>
    <Router>
       <Routes>
       <Route path="/" element={ <HomeBody/>}></Route>
    
         <Route path="/UserForm" element={ <UserForm/>}></Route>
         <Route path="/ContactUs" element={ <ContactUs/>}></Route>
         <Route path="/RatingPage" element={ <RatingPage/>}></Route>


         <Route path="/Examples" element={ <Examples/>}></Route>
        








       

         
       

       </Routes>
     </Router>
    </div></>
  );
}

export default App;
