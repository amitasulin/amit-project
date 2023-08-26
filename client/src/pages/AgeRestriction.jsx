import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/Cannabis-Age-Restrictions.webp";
import { Form, Button } from "react-bootstrap";
import { AppContext } from "../context/appContext";
import { MyContainer } from "../components/MyContainer";

function diff_years(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.abs(Math.round(diff / 365.25));
}

const AgeRestriction = () => {
  const navigate = useNavigate();

  const ageRef = useRef(null);

  const { setIsAdult } = useContext(AppContext);

  const handleCheckAge = (e) => {
    const now = new Date();
    const selectedDate = new Date(ageRef.current.value);
    const age = diff_years(now, selectedDate);
    if (age >= 18) {
      localStorage.setItem("isAdult", "true");
      navigate("/");
      setIsAdult(true);
    } else {
      setIsAdult(false);
    }
  };

  return (
    <MyContainer>
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          display: "flex",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <img
          className="img-fluid"
          src={img}
          alt="logo"
          style={{ width: 300 }}
        />
        <p className="font18">
          You must be 18 years of age or older to access this website and/or to
          purchase non-medical cannabis.
        </p>
        <div style={{ maxWidth: 250 }}>
          <Form.Label className="font18">
            Please enter your birthdate
          </Form.Label>
          <Form.Control ref={ageRef} type="date" />
        </div>

        <Button onClick={handleCheckAge}>Submit</Button>
      </div>
    </MyContainer>
  );
};

export default AgeRestriction;
