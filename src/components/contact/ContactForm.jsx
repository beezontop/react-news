import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  return (
    <div className="contact-form container">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control type="text" placeholder="Name *" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="email" placeholder="Email *" />
          </Form.Group>
        </Form.Row>

        <Form.Group>
          <Form.Control placeholder="Subject" />
        </Form.Group>

        <Form.Group>
          <Form.Control as="textarea" rows="3" placeholder="Comments" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
