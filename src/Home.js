import { useState } from "react";
import { data } from "./Projects/data";
import './App.css';
import MyPhoto from "./MyPhoto";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ForAbout from "./About/ForAbout";
import MyStack from "./About/MyStack";
import Pr from "./Pr";




function App (){
 
/*Состояние для проектов */  
const [staff,setStuff]=useState(data);

    return (<div>   
        <div>     
    <MyPhoto />

    <ForAbout />

    <MyStack />

   

   <Pr />
   
   <Testimonials />

   <ContactForm />

    <Footer />   

  
    
    </div>
    
    </div>
           
    )
}


export default App;