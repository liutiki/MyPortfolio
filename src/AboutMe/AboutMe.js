import './AboutMe.css';
import { dataAboutMe } from './dataAboutMe';
import ForAbout from '../About/ForAbout.js';
import MyStack from '../About/MyStack';
import { gsap } from "gsap";
import { useEffect } from 'react';

function AboutMe () {

    useEffect(() => {
        gsap.to('.brick', {
          duration: 3,
         opacity:1,
          delay: 0.5,
          x:17,
          stagger:{
           amount: 0.6,
          },
         
        });
      }, []);

      useEffect(() => {
        gsap.to('.textAbout', {
          duration: 3,
         opacity:1,
          delay: 0.5,
          x:-17,
          stagger:{
           amount: 0.6,
          },
         
        });
      }, []);


    return( 
    
        <div>
                   
            
                <div className="go" >
                {dataAboutMe.map((item) => {
                const {image} = item;
                return (
                    <div>
                    <div className="stop">
                     
                        <div className="brick">
                        <img className="brickTwo" src={`./${image}.jpg`} alt="giftcards" />              
                        </div>
                   
                        <div className='textAbout'>
                        <ForAbout/> 
                        <MyStack />
                        </div>
                     
                    </div>

             
            
                     </div>
               
                    
                );

                
            })}


 </div>


 
        </div>

                
      


    )
   
  
}


export default AboutMe;