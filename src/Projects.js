import { useState } from "react";
import { data } from "./Projects/data";
import Buttons from "./Buttons";
import Footer from "./Footer";
import styled from "styled-components";


const BtnPosition = styled.div`
  display:flex;
  justify-content:center;
  margin-top:5%;
  margin-bottom:30px;

  @media (max-width: 500px) {
    margin-top:17%;
 }

`;

const Picture = styled.img`
  width:400px;

  @media (max-width: 500px) {
width:300px;
 }

`;



const Button = styled.button`
  text-decoration: none;
  font-size:15px;
  padding:15px;
  border:1px solid white;
  background-color:#3E7C17;
  `;

const Link = styled.a`
text-decoration: none;
color:white;
font-family: "Mulish", sans-serif;
  `;

const Name=styled.h3`
color:black;
font-size:25px;
font-family: "Mulish", sans-serif;
`
;

const Description=styled.h3`
color:#7D7C7C;
font-size:17px;
font-family: "Mulish", sans-serif;
font-weight:400;
`





function Projects(){

    const [staff,setStuff]=useState(data);

 
    const chosenProject =(searchTerm) =>{
        const newProject=data.filter(element=>element.searchTerm===searchTerm)
        setStuff(newProject);
    }

    return(

      <div>
         <BtnPosition>
         <Buttons filteredStuff={chosenProject} />
         </BtnPosition>
<div className="products">

{staff.map((item=>{
const{id,name,description, recipe, source, descriptionTwo}=item;
return <div className="product-card"key={id}>



<Picture src={recipe} width="400px"  alt="pictures"/>
<div className="product-info">
<Name>{name}</Name>
<Description>Description: {description}</Description>
<Description>{descriptionTwo}</Description>

<Button className="btn-pro"><Link href={source} target="_blank" rel="noopener noreferrer">Watch the project</Link></Button>

</div>

    </div>
}))}

</div>

<Footer />  

</div>
)}


export default Projects;