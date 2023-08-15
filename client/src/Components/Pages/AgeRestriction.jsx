import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgeRestriction = () => {
  const [age, setAge] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);

  const navigate = useNavigate();
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCheckAge = () => {
    const parsedAge = parseInt(age, 10);
    if (parsedAge >= 18) {
      localStorage.setItem("isAllowed", "true");
      navigate("/home");
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  };

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <h1>Age Restriction</h1> <br></br>
      <p>
        You must be 18 years of age or older to access this website and/or to
        purchase non-medical cannabis. Products on this website will only be
        delivered to addresses within the Province of Newfoundland and Labrador
      </p>
      <label htmlFor="age-input">Enter your age:</label>
      <input
        id="age-input"
        type="number"
        value={age}
        onChange={handleAgeChange}
      />
      <button onClick={handleCheckAge}>Check Age</button>
      {isAllowed ? (
        <p>You are allowed to access the content.</p>
      ) : (
        <p>Sorry, you must be 18 years or older to access the content.</p>
      )}
    </div>
  );
};

export default AgeRestriction;
