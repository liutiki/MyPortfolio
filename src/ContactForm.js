import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';


const HI=styled.h2`
display:flex;
justify-content:center;
margin-left:10%;
font-size:20px;
font-family: "Roboto Mono", monospace;

`
;
const Join=styled.label`
display:flex;
justfy-conteny:center;`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 300px;
    margin-top: 3%;
}`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  padding: 5px;
  margin-bottom: 30px;
  height: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;



function ContactForm() {
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
    </div>
  );
}

export default ContactForm;