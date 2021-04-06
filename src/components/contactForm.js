import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ContactUs() {

  const [sendStatus, setSendStatus] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    event.target.name === "first_name" 
    ? setFirstName(event.target.value)
    : event.target.name === "last_name" 
    ? setLastName(event.target.value)
    : event.target.name === "company" 
    ? setCompany(event.target.value)
    : event.target.name === "user_email"
    ? setEmail(event.target.value)
    : event.target.name === "message"
    ? setMessage(event.target.value)
    : console.log("error")
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_sS1sEZGCrVRU1Lir7w3O5')
      .then((result) => {
          console.log(result.text);
          setSendStatus(!sendStatus)
          setFirstName('')
          setLastName('')
          setCompany('')
          setEmail('')
          setMessage('')
      }, (error) => {
          console.log(error.text);
      });
  }

  return (<div>
    <Form onSubmit={sendEmail}>
      <Form.Row>
        <Form.Label htmlFor="firstName" srOnly>
          First name
        </Form.Label>
        <Form.Control 
        placeholder="First name"
        type="text"
        name="first_name" 
        value={firstName}
        onChange={(e) => handleChange(e)}  />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="lastName" srOnly>
          Last name
        </Form.Label>
        <Form.Control 
        placeholder="Last name"
        type="text"
        name="last_name" 
        value={lastName}
        onChange={(e) => handleChange(e)}  />  
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="company" srOnly>
          Company
        </Form.Label>
        <Form.Control 
        placeholder="Company"
        type="text" 
        name="company" 
        value={company}
        onChange={(e) => handleChange(e)}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="email" srOnly>
          Email
        </Form.Label>
        <Form.Control 
        placeholder="Email address"
        type="text" 
        name="user_email" 
        value={email}
        onChange={(e) => handleChange(e)}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="message" srOnly>
          Message
        </Form.Label>
        <Form.Control 
        placeholder="Your message"
        as="textarea"
        rows={5} 
        name="message" 
        value={message}
        onChange={(e) => handleChange(e)}
        />
      </Form.Row>
      <Form.Row>
      <Button variant="primary" type="submit" id="submit-button" block>
        Submit
      </Button>
      </Form.Row>
    </Form>
  
    {sendStatus && <p>Form submitted - thanks for getting in touch!</p>}
    </div>
  );
}