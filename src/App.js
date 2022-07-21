import logo from './logo.svg';
import './App.css';
import {UserForm} from './components/UserForm';
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import RatingPage from './components/RatingPage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Template1 from './components/templates/Template1'
import Templatess from './components/Templatess'
import HomeBody from './components/HomeBody'
import ResDownload from './components/ResDownload.js'
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
         {/* <Route path="/Templatess" element={ <Templatess/>}></Route>
         <Route path="/Template1" element={ <Template1/>}></Route> */}
         <Route path="/ResDownload" element={ <ResDownload/>}></Route>
         <Route path="/Examples" element={ <Examples/>}></Route>
        








       

         
       

       </Routes>
     </Router>
    </div></>
  );
}

export default App;
