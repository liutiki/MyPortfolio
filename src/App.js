import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Home from './Home';
import Contacts from './Contacts';
import './App.css';
import Projects from './Projects/Projects';
import MyNav from "./Navbar/MyNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './AboutMe/AboutMe';





function App(){
  


  return <Router>
   
   
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/AboutMe" element={<AboutMe />}/>
    <Route path="/Projects" element={<Projects />}/>
    <Route path="/Contacts" element={<Contacts />}/>
    </Routes>
  
    </Router>


    }




export default App;