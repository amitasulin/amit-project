import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./contactUs.css";
import { MyContainer } from "../../components/MyContainer";
import Joi from "joi";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendMail } from "../../services/userService";
import img from "../../assets/ContactUs-960x555.jpg";

const contactUsValidation = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  message: Joi.string().min(2).max(1024).required(),
  city: Joi.string().min(2).max(20),
  zip: Joi.number(),
}).options({ allowUnknown: true });

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  return (
    <MyContainer>
      <Form style={{ maxWidth: 400 }} className="m-auto">
        <img className="img-fluid" src={img} alt="logo" />

        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.currentTarget.target)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.currentTarget.target)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            value={message}
            onChange={(e) => setMessage(e.currentTarget.target)}
            style={{ maxHeight: 200 }}
            as="textarea"
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.currentTarget.target)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              value={zip}
              onChange={(e) => setZip(e.currentTarget.target)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 d-flex justify-content-center">
          <Form.Check type="checkbox" label="I am a human" />
        </Form.Group>

        <Button
          onClick={(e) => {
            e.preventDefault();
            const isValid = contactUsValidation.validate({
              name,
              email,
              message,
              city,
              zip,
            });

            if (!isValid) {
              toast.error("Form validation failed");
            } else {
              try {
                console.log(email, message);
                sendMail(email, message);
                toast.success("Mail sent successfully");
              } catch (e) {
                toast.error("Mail sending error");
              }
            }
          }}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </MyContainer>
  );
}

export default ContactUs;
