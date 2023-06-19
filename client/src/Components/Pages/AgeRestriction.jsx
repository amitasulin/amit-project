import React, { useState } from 'react';

const AgeRestriction = () => {
  const [age, setAge] = useState('');
  const [isAllowed, setIsAllowed] = useState(false);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCheckAge = () => {
    const parsedAge = parseInt(age, 10);
    if (parsedAge >= 18) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  };

  return (
    <div>
      <h1>Age Restriction</h1>
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
