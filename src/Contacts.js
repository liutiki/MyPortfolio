import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import Footer from './Footer';


const HI=styled.h2`
display:flex;
justify-content:center;
margin-left:10%;
margin-top:10%;
font-size:20px;
font-family: "Roboto Mono", monospace;

@media (max-width: 768px) {
  margin-top: 18%; 
  font-size:17px;
}`;


const Join=styled.label`
display:flex;
justfy-conteny:center;`

const Form = styled.form`
  border:1px solid #F6F5F5;
  box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.6);
  padding:5%;
  border-radius:20px;
  background-color:white;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom:10%;

  &:hover {
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  }
 
 @media (max-width: 768px) {
  max-width: 370px;
 }`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius:10px;
  border:1px solid #B6BBC4;
`;

const TextArea = styled.textarea`
  padding: 5px;
  margin-bottom: 30px;
  height: 200px;
  border-radius:10px;
  border:1px solid #B6BBC4;
  `;

const Button = styled.button`
  padding: 20px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius:10px;
  cursor: pointer;
  font-size:20px;
  font-family: "Roboto Mono", monospace;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function Contacts() {
  const [state, handleSubmit] = useForm("xgegyzoo");
  
  if (state.succeeded) {
    return <Join>Thanks for joining!</Join>;
  }
  
  return (<div>

    <HI>
   <p>If you want to say "Hi" or build a project with me, please use this form.</p>
    </HI>

    <Form onSubmit={handleSubmit} 
    action="https://formspree.io/f/xgegyzoo" 
    method="POST">
      <Label htmlFor="email"></Label>

      <Input placeholder="Your Name" id="name" type="name" name="name" />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <Input placeholder="Your email" id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      
      <TextArea placeholder="Your message" id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      
      <Button type="submit" disabled={state.submitting}>Submit</Button>
    </Form>

    <Footer />   

    </div>
  );
}

export default Contacts;