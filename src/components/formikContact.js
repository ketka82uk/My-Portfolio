import React from 'react';
import { useFormik } from 'formik'
import emailjs from 'emailjs-com'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export default function SignupForm() {

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
    validate,
    onSubmit: e => {
      e.preventDefault();
      emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_sS1sEZGCrVRU1Lir7w3O5')
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
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
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
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
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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

