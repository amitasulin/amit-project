import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AgeRestriction = ({ setIsAllowed }) => {
  const [age, setAge] = useState("");

  const navigate = useNavigate();
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCheckAge = () => {
    const parsedAge = parseInt(age, 10);
    if (parsedAge >= 18) {
      localStorage.setItem("isAllowed", "true");
      navigate("/");
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  };

  return (
    <div style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
      <h1>Age Restriction</h1> <br></br>
      <p>
        You must be 18 years of age or older to access this website and/or to
        purchase non-medical cannabis.{" "}
      </p>
      <p>
        Products on this website will only be delivered to addresses within the
        Province of New found land and Labrador{" "}
      </p>
      <label htmlFor="age-input">Enter your age:</label>
      <input
        id="age-input"
        type="number"
        value={age}
        onChange={handleAgeChange}
      />
      <button onClick={handleCheckAge}>Check Age</button>
    </div>
  );
};

export default AgeRestriction;
