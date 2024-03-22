import { useState } from "react";
import { dataForAbout } from "./dataForAbout";






function ForAbout(){


const [about, setAbout] = useState(dataForAbout);
const [showText,setShowText]=useState(false);




const showTextClick = (item) => {
    item.showMore=!item.showMore
    setShowText(!showText)
  }

    return(<div>

<div>
    {about.map((item) => {
      const { id, description, name, showMore } = item;
      return (
        <div className="TextPosition"key={id}>
            <p className="header">{name}</p>
          <p className="aboutMeText">{showMore ? description : description.substring(0, 220) + "...."}<button className="button-pointer"onClick={()=>showTextClick(item)}>{showMore ? "Show Less" : "Show More"}</button></p>
        </div>
      )
    })}
  </div>



    </div>)
 

    
}

export default ForAbout;