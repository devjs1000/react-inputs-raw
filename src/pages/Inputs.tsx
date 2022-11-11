import React from "react";
import Email from "../components/Inputs/Email";
import GrayContainer from "../components/tools/GrayContainer";

const Inputs = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <GrayContainer>
      <Email
        label="Email"
        helperText="This is a helper text"
        onChange={handleChange}
      />
    </GrayContainer>
  );
};

export default Inputs;
