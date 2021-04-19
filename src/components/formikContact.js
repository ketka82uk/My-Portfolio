import React from 'react';
import { useFormik } from 'formik'
import emailjs from 'emailjs-com'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SignupForm() {

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_sS1sEZGCrVRU1Lir7w3O5')
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit, sendEmail}>
      <Form.Row>
        <Form.Label htmlFor="firstName" srOnly>
          First Name
        </Form.Label>
        <Form.Control
          className="contact"
          placeholder="First name*"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="lastName" srOnly>
          Last Name
        </Form.Label>
        <Form.Control
          className="contact"
          placeholder="Last name"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="email" srOnly>
          Email Address
        </Form.Label>
        <Form.Control
          className="contact"
          placeholder="Email address*"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.user_email}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="company" srOnly>
          Email Address
        </Form.Label>
        <Form.Control
          className="contact"
          placeholder="Company"
          id="company"
          name="company"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.company}
        />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="message" srOnly>
          Message
        </Form.Label>
        <Form.Control
        className="contact"  
        placeholder="Your message"
        as="textarea"
        rows={4} 
        name="message" 
        onChange={formik.handleChange}
        value={formik.values.message}
        />
      </Form.Row>
      <Form.Row>
        <Button variant="primary" type="submit" id="submit-button" block>Submit</Button>
      </Form.Row>
    </Form>
  );
};