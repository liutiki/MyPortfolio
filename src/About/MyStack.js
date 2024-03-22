import styled from "styled-components";

const Card=styled.ul`
display:flex;
flex-direction:row;
justify-content:center;
flex-wrap:wrap;

`;

const LI=styled.li`
border:1px solid black;
width:180px;
padding:30px;
margin:10px;
list-style-type: none;
background:linear-gradient(to right, #ffcc00, #ff6600, #cc3300);
`;

const Stack=styled.ul`
display:flex;
justify-content:center;
`
;

function MyStack(){

    

    return(<div>
<Stack>
<h2 className="header">My stack is:</h2>
</Stack>
<Card>
<LI>HTML/SCC</LI>
<LI>React</LI>
<LI>Redux</LI>
<LI>Javascript</LI>
<LI>Bootstrap</LI>
</Card>
        
    </div>)
}

export default MyStack;