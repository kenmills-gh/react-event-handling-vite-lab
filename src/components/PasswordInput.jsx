// Code PasswordInput Component Here

import React from "react";

// PasswordInput Component
const PasswordInput = () => {
  const handleChange = () => {
    console.log("Entering password…");
  };

  return <input type="password" onChange={handleChange} />;
};

export default PasswordInput;
