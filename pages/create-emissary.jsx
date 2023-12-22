import React, { useState } from "react";
import styled from "styled-components";
import CreatEmissary from "@/components/CreatEmissary";

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
      <CreateEmissaryStyles>
        <CreatEmissary />
      </CreateEmissaryStyles>
    </>
  );
};

export default CreateEmissary;
