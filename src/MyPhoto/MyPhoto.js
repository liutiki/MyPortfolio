import { useEffect} from 'react';
import Photo from '../Projects/assets/Julia-photo.png';
import { gsap } from "gsap";
import { useTranslation } from 'react-i18next';
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

  

return(

<div className='frontend'>
<div className='Hello'>
<h3 className='Name'>{t('Hi, My Name is')}</h3>
<h3 className='Julia'>{t('Khakimova Julia')}</h3>
<h3 className='Front'>{t('Front-end developer')}</h3>




<button
        className="button-contact"
        onClick={() => window.open('https://t.me/JuliaKhakimova', '_blank')}
      
      >
        {t('Contact me')}
      </button>
     


</div>

<img className="Myphoto" src={Photo} alt="myphoto"/>



</div>

)
}

export default MyPhoto;