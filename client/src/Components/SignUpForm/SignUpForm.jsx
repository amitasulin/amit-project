import "./SignUpForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import { toast } from "react-toastify";
import { Col } from "react-bootstrap";

const validation = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().min(6).max(20).required(),
});

export default function SignUpForm() {
  const navigate = useNavigate();

  const { signUp } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validation.validate({
      email,
      password,
      firstName,
      lastName,
    });

    console.log(isValid);
    if (isValid.error) {
      setError(true);
    } else {
      try {
        await signUp({ email, password, firstName, lastName });
        return navigate("/");
      } catch (e) {
        toast.error("Sign up failed");
      }
    }
  };

  return (
    <div className="signUpForm">
      <Form className="mb-4" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-4" controlId="formBasicFirstName">
          <Form.Label className="font18">First Name</Form.Label>
          <Form.Control
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Enter first Name"
            isInvalid={error}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicLastName">
          <Form.Label className="font18">Last Name</Form.Label>
          <Form.Control
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Enter last Name"
            isInvalid={error}
          />

          <Form.Text className="font18">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="font18">Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            isInvalid={error}
          />

          <Form.Text className="font18">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label className="font18">Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            isInvalid={error}
          />
          <Form.Control.Feedback type="invalid">{`One of the fields does not meet the requirements`}</Form.Control.Feedback>
        </Form.Group>

        <Link className="font18" to="/signin">
          Already registered? Sign me in
        </Link>
      </Form>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}
