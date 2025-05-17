import { useEffect, useState } from 'react';
import Photo from '../Projects/Scrinshots/Julia-photo.png';
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';
import flowerTwo from '../Projects/Scrinshots/flowerTwo.png';
import flower from '../Projects/Scrinshots/flower.png';
import './MyPhoto.css';


function MyPhoto  () {

    useEffect(() => {
        setTimeout(() => {
            animateButton();
        },1000);
    }, []);
    
    
    const animateButton = () => {
        gsap.to('.Hello', { y:0, duration: 3, opacity: 1 });
    };
    

    const {t}=useTranslation()

    const [showImage, setShowImage] = useState(false);

return(

<div className='frontend'>
<div className='Hello'>
<h3 className='Name'>{t('Hi, My Name is')}</h3>
<h3 className='Julia'>{t('Khakimova Julia')}</h3>
<h3 className='Front'>{t('Front-end developer')}</h3>




<button
        className="button-contact"
        onClick={() => window.open('https://t.me/JuliaKhakimova', '_blank')}
        onMouseEnter={() => setShowImage(true)}
        onMouseLeave={() => setShowImage(false)}
      >
        {t('Contact me')}
      </button>
      {showImage && <img className="flowerTwo"src={flowerTwo} alt="flowerTwo" />}
      {showImage && <img className="flower" src={flower} alt="flower" />}


</div>

<img className="Myphoto" src={Photo} alt="myphoto"/>



</div>

)
}

export default MyPhoto;