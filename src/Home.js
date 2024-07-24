import './App.css';
import MyPhoto from "./MyPhoto";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

import Pr from "./Pr";
import MyRecentProjects from './MyRecentProjects/MyRecentProjects';






function Home (){
   


    return ( 
        <div>  
             
    <MyPhoto />

    <MyRecentProjects />
  
    <Pr />
   
    <Testimonials />

    <ContactForm />

    <Footer />   
    
    </div>
    
    
           
    )
}


export default Home;