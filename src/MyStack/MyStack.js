import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect} from "react";
import './MyStack.css';


const LI=styled.li`
border:1px solid black;
font-family: "Roboto Mono", monospace;
text-align:center;
color:black;
font-size: 19px;
font-weight:200;
border-radius:5px;
width:130px;
padding:9px;
margin:10px;
list-style-type: none;
background:linear-gradient(to right,rgb(235, 240, 247),rgb(158, 190, 224),rgb(38, 208, 231));
filter:drop-shadow(0 0 20px);
transition: all 0.8s ease; 
opacity: 0;

&:hover{
background:linear-gradient(to right,rgb(226, 232, 243),rgb(123, 169, 217),rgb(38, 208, 231));
   transform: translateY(10px);
    box-shadow: 0 0 60px rgb(205, 234, 143);
    background-color:rgb(198, 234, 188);

}

      @media (max-width: 500px) {
            width:60px;
            font-size: 9px;
            padding: 10px;
         
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
<ul className="Stack">
<LI>HTML5</LI>
<LI>CSS 3</LI>
<LI>React</LI>
<LI>Redux toolkit</LI>
<LI>Javascript</LI>
<LI>Bootstrap</LI>
<LI>Styled components</LI>
<LI>Prime React</LI>

</ul>

    </div>)
}

export default MyStack;