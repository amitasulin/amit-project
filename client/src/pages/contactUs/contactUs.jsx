import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
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
  checkbox: true,
}).options({ allowUnknown: true });

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const [error, setError] = useState(false);

  const [checkbox, setCheckbox] = useState(false);

  const onSubmit = async () => {
    const isValid = contactUsValidation.validate({
      name,
      email,
      message,
      city,
      zip,
      checkbox,
    });

    if (isValid.error) {
      setError(true);
      toast.error("Form validation failed");
    } else {
      setError(false);

      try {
        await sendMail({
          name,
          email,
          message,
          city,
          zip,
          checkbox,
        });
        toast.success("Mail sent successfully");
      } catch (e) {
        toast.error("Mail sending error");
      }
    }
  };

  return (
    <MyContainer>
      <Form
        style={{ maxWidth: 400, padding: 20 }}
        className="m-auto d-flex flex-column justify-content-center align-items-center"
      >
        <img className="img-fluid" src={img} alt="logo" />

        <div className="row">
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              isInvalid={error}
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              isInvalid={error}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              isInvalid={error}
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              style={{ maxHeight: 200 }}
              as="textarea"
            />
          </Form.Group>

          <Form.Group className="col-12 col-md-6 mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              isInvalid={error}
              value={city}
              onChange={(e) => setCity(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="col-12 col-md-6 mb-3">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              isInvalid={error}
              value={zip}
              onChange={(e) => setZip(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex justify-content-center">
            <Form.Check
              isInvalid={error}
              value={checkbox}
              onChange={() => setCheckbox(!checkbox)}
              type="checkbox"
              label="I am a human"
            />
          </Form.Group>

          <div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </MyContainer>
  );
}

export default ContactUs;
