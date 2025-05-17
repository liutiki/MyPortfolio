import './App.css';
import MyPhoto from "./MyPhoto/MyPhoto";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

import Pr from "./Pr";
import MyRecentProjects from './MyRecentProjects/MyRecentProjects';
import MyStack from './MyStack/MyStack';






function Home (){
   


    return ( 
        <div>  
             
    <MyPhoto />
    <MyStack />
    <MyRecentProjects />
  
    <Pr />
   
    <Testimonials />

    <ContactForm />

    <Footer />   
    
    </div>
    
    
           
    )
}


export default Home;