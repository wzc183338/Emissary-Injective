import React, { useState } from "react";
import styled from "styled-components";
import SuccessfullyCreated from "@/components/SuccessfullyCreated";

const CreateEmissaryStyles = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 30px 15px;
`;

const CreateEmissary = () => {
  // const [steps, setSteps] = useState(1);

  return (
    <>
      <SuccessfullyCreated />
    </>
  );
};

export default CreateEmissary;
