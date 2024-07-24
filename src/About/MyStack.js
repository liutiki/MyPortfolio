import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect} from "react";



const LI=styled.li`
border:1px solid black;
font-family: "Roboto Mono", monospace;
text-align:center;
color:black;
font-size: 19px;
font-weight:200;
border-radius:5px;
width:170px;
padding:15px;
margin:10px;
list-style-type: none;
background:linear-gradient(to right, #00e1ff, #ff57fc, #b40293);
filter:drop-shadow(0 0 20px);
transition: all 0.8s ease; 
opacity: 0;

&:hover{
background:linear-gradient(to right, #ff57fc, #00e1ff, #b40293);
   transform: translateY(10px);
    box-shadow: 0 0 60px #817d7d;
    background-color: #ffffff;

}

      @media (max-width: 500px) {
            width:110px;
            font-size: 11px;
            padding: 12px;
    }

`
;

const Stack=styled.ul`
display:flex;
justify-content:center;
`
;

function MyStack(){

    useEffect(() => {
        gsap.to('.header, .hurt', {
          duration: 3,
         opacity:1,
          delay: 0.5,
          stagger:{
          amount: 0.6,
          },
         
        });
      }, []);


      useEffect(() => {
        gsap.to('li', {
          duration: 3,
         opacity:1,
          delay: 0.7,
          y:20,
          stagger:{
           each: 0.2,
        from: "start",
          },
         
        });
      }, []);

    return(<div>
<Stack>
<h2 className="header">My stack is:</h2>
</Stack>
<ul className="function">
<LI>HTML/SCC</LI>
<LI>React</LI>
<LI>Redux toolkit</LI>
<LI>Javascript</LI>
<LI>Bootstrap</LI>
<LI>Figma</LI>
</ul>

    </div>)
}

export default MyStack;