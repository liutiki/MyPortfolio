import { useEffect } from 'react';
import Photo from './Projects/Scrinshots/Julia-photo.png';
import { gsap } from "gsap";



function MyPhoto  () {

    useEffect(() => {
        setTimeout(() => {
            animateButton();
        },1000);
    }, []);
    
    
    const animateButton = () => {
        gsap.to('.Hello', { y:0, duration: 3, opacity: 1 });
    }
    

return(

<div className='frontend'>
<div className='Hello'>
<h3 className='Name'>Hi, My name is</h3>
<h3 className='Julia'>Khakimova Julia</h3>
<h3 className='Front'>Front-end developer</h3>
<button className="button-contact" onClick={() => window.open('https://t.me/JuliaKhakimova', '_blank')}>Contact me</button>
</div>
<img className="Myphoto" src={Photo} alt="myphoto"/>



</div>

)
}

export default MyPhoto;