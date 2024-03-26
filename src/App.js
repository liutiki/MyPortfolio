import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import AboutMe from './AboutMe';
import Home from './Home';
import Contacts from './Contacts';
import './App.css';
import Projects from './Projects';
import MyNav from "./Navbar/MyNav";
import 'bootstrap/dist/css/bootstrap.min.css';





function App(){
  

  return <Router>
    <MyNav />
   
    <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/aboutMe" element={<AboutMe />} />
    <Route path="/projects" element={<Projects />}/>
    <Route path="/contacts" element={<Contacts />}/>
    </Routes>
  
    </Router>


    }




export default App;