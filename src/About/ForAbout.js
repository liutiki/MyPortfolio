import { dataForAbout } from "./dataForAbout";
import './ForAbout.css';
import { useTranslation } from 'react-i18next';




function ForAbout(){


 


const {t}=useTranslation()




    return(

<div>
    {dataForAbout.map((item) => {
      const { id, description, name,  image } = item;
      return (
        <div>
        <div className="hurtPosition">
         <img className="hurt" src={`./${image}.jpg`} alt="JuliaPhoto" /> 
         </div>
        <div className="TextPosition"key={id}>
          <p className="header">{t(name)}</p>
          <p className="aboutMeText">{description}</p>
        </div>
        </div>
      )
    })}
  </div>

)
 

    
}

export default ForAbout;