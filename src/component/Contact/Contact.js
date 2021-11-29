import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import sectionBg from './../../component/assets/sectionBg.png';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

const Contact = () => {
    return (
        <div
        style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      >
        <ContactForm />
      </div>
    );
  };
  const formStyle = { background: "transparent", color: "white" };
  function ContactForm() {
    return (
      <div style={{ padding: "58px 0 40px" }}>
          
        <Bounce right>
          <h2 className="text-center text-white">Contact Us</h2>
        </Bounce>
  
        <Bounce left>
          <p className="text-center text-muted mb-4">
            You can easily reach us through filling up the form.
          </p>
        </Bounce>
       <div className='d-flex'>
       <div className='w-50 col-6 ml-5'>
          <Container>
            <Slide bottom>
              <Form>
        
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicText"
                    >
                      <Form.Label>Your Name </Form.Label>
                      <Form.Control
                        style={formStyle}
                        type="text"
                        placeholder="Enter Your Name"
                      />
                    </Form.Group>
                 
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Your Email </Form.Label>
                      <Form.Control
                        style={formStyle}
                        type="email"
                        placeholder="Enter Your Email"
                      />
                    </Form.Group>
                 
                <Form.Group
                  className="mb-3 text-white"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Messages</Form.Label>
                  <Form.Control
                    style={formStyle}
                    placeholder="Write you message..."
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button className="mb-5 px-4" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Slide>
          </Container>
        </div>
        <Slide bottom>
        <div className='text-white mx-5 mapBox'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26682.68596021355!2d88.45873795321258!3d26.031484829542503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4c00fae515037%3A0xc354ad492e9e6874!2sThakurgaon!5e0!3m2!1sen!2sbd!4v1641843856222!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
        </div>
        </Slide>
       </div>
     </div>
    );
};

export default Contact;