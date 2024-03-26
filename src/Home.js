import './App.css';
import MyPhoto from "./MyPhoto";
import ContactForm from "./ContactForm";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ForAbout from "./About/ForAbout";
import MyStack from "./About/MyStack";
import Pr from "./Pr";





function Home (){
   


    return ( 
        <div>  
             
    <MyPhoto />

    <ForAbout />

    <MyStack /> 

    <Pr />
   
    <Testimonials />

    <ContactForm />

    <Footer />   
    
    </div>
    
    
           
    )
}


export default Home;