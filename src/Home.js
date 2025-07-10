import './App.css';
import MyNav from './Navbar/MyNav';
import MyPhoto from "./MyPhoto/MyPhoto";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Pr from "./Pr";
import MyStack from './MyStack/MyStack';








function Home (){
   


    return ( 
        <div>  
    <MyNav/>     
    <MyPhoto /> 
   <MyStack /> 
    <Pr />


    <Testimonials />
    <Footer />   
    
    </div>
    
    
           
    )
}


export default Home;