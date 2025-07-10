import { useState } from "react";
import { DataTestimonials } from "./DataTestimonials";
import styled from 'styled-components';
import next from './Projects/assets/next.png';
import back from './Projects/assets/back.png'
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  max-width:700px;
  border:2px solid #ff57fc;
   padding: 20px;
   margin-top:10%;
   margin-bottom:10%;

   @media (max-width: 768px) {
    max-width: 370px;
}`
;

const Position = styled.div`
display:flex;
justify-content:center;
`
;

const StarContainer = styled.div`
display:flex;
flex-direction:row;
`
;

const Description = styled.h2`
font-size:18px;
font-family: "Exo 2", sans-serif;
line-height:35px;

@media (max-width: 768px) {
    font-size:16px;
    line-height:30px;
}`
;

const Image = styled.img`
  width: 200px;`
;
const ButtonPosition = styled.div`
display:flex;
flex-direction:row;
justify-content:center;

`
;

const Button = styled.button`
background-color: #FFFFFF;
border:none;
cursor: 'pointer';

&:hover{
    background-color: #F5F5F5;
    border-radius:70px;
}
`
;



function Testimonials(){

const [person, setPerson]=useState(0);
const {name, description, image,star} = DataTestimonials[person];


const previousPerson=() =>{
    setPerson(person=>{
        person--;
        if(person < 0){
            return DataTestimonials.length-1;
        }
        return person;
    })
}

const nextPerson=() =>{
   setPerson(person=>{
    person++;
    if (person > DataTestimonials.length -1){
        person=0;
    }
    return person;
   })
}

const {t}=useTranslation()

return(<Position>

<Container>
<div>
    <Image src={image} width='200px'alt="lady"/>
</div>

<StarContainer>
   <div>
       <img src={star} width="20px" alt="star"/>
    </div>
    <div>
       <img src={star} width="20px" alt="star"/>
    </div>
    <div>
       <img src={star} width="20px" alt="star"/>
    </div>
    <div>
       <img src={star} width="20px" alt="star"/>
    </div>
    <div>
       <img src={star} width="20px" alt="star"/>
    </div>
</StarContainer>

    <div>
        <h1>{t(name)}</h1>
    </div>


    <div>
        <Description>{t(description)}</Description>
    </div>

   

<ButtonPosition>
    <Button  onClick={previousPerson}><img src={back} width="50px" alt="back"/></Button>
    <Button onClick={nextPerson}><img src={next} width="50px" alt="next"/></Button>
</ButtonPosition>

</Container>
</Position>

)

}

export default Testimonials;