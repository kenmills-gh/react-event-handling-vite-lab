// Code PasswordInput Component Here

import React from "react";

// PasswordInput Component
const PasswordInput = () => {
  const handleChange = () => {
    // Corrected to use three standard periods
    console.log("Entering password...");
  };

  return <input type="password" onChange={handleChange} />;
};

export default PasswordInput;
