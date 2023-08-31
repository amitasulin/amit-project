import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./SignInForm.css";
import { toast } from "react-toastify";
import Joi from "joi";

const validation = Joi.object({
  email: Joi.string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .required(),
  password: Joi.string().min(6).max(20).required(),
});

export default function SignInForm() {
  const navigate = useNavigate();

  const { signIn } = useContext(UserContext);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validation.validate({ email, password });

    if (isValid.error) {
      setError(true);
    } else {
      try {
        await signIn(email, password);
        navigate("/");
        toast.success("Welcome back!", { position: "bottom-right" });
      } catch (e) {
        toast.error("Failed to sign in", { position: "bottom-right" });
      }
    }
  };

  return (
    <div className="signInForm">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font18">Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            className="mb-2"
            isInvalid={error}
          />
          <Form.Text className="font18">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font18">Password</Form.Label>
          <Form.Control
            isInvalid={error}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback type="invalid">{`One of the fields does not meet the requirements`}</Form.Control.Feedback>
        </Form.Group>
        <Button className="submitButton" variant="primary" type="submit">
          Submit
        </Button>
        <br></br>
        <br></br>
        <Link className="font18" to="/signup">
          Not registered? Sign me up
        </Link>
      </Form>
    </div>
  );
}
