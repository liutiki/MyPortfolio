import { useState } from "react";
import { dataForAbout } from "./dataForAbout";
import './ForAbout.css';
import { useTranslation } from 'react-i18next';




function ForAbout(){


 
const [showText,setShowText]=useState(false);

const {t}=useTranslation()


const showTextClick = (item) => {
    item.showMore=!item.showMore
    setShowText(!showText)
  }

    return(

<div>
    {dataForAbout.map((item) => {
      const { id, description, name, showMore, image } = item;
      return (
        <div>
         <div className="hurtPosition">
         <img className="hurt" src={`./${image}.jpg`} alt="JuliaPhoto" /> 
         </div>
        <div className="TextPosition"key={id}>
          <p className="header">{t(name)}</p>
          <p className="aboutMeText">{showMore ? description : description.substring(0, 220) + "...."}<button className="button-pointer"onClick={()=>showTextClick(item)}>{showMore ? "Show Less" : "Show More"}</button></p>
        </div>
        </div>
      )
    })}
  </div>

)
 

    
}

export default ForAbout;