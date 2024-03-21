import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import AboutMe from './AboutMe';
import Home from './Home';
import Contacts from './Contacts';
import './App.css';
import Projects from './Projects';




function App(){

  return <Router>
  <nav>
  <Link to="/"className="link">Home</Link>
  <Link to="/AboutMe" className="link">AboutMe</Link>
  <Link to="/Projects" className="link">Projects</Link>
  <Link to="/Contacts" className="link">Contacts</Link>
  </nav >
  <Routes>
    <Route path="/"element={<Home/>}/>
      <Route path="/aboutMe"element={<AboutMe/>}/>
      <Route path="/projects"element={<Projects/>}/>
      <Route path="/contacts"element={<Contacts/>}/>
     </Routes>
    
    </Router>
    }




export default App;