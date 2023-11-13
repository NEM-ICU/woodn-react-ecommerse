// src/components/PaymentSuccessPage.js

import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  color: #333333;
  font-family: "Arial", sans-serif;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const SuccessMessage = styled.h2`
  color: teal;
  font-size: 2.5rem;
  margin-bottom: 20px;
  animation: ${bounce} 1s ease infinite;
`;

const SubMessage = styled.p`
  font-size: 1.2rem;
  margin-top: 0;
`;

const PaymentSuccessPage = () => {
  return (
    <Wrapper>
      <SuccessMessage>Payment Successful!</SuccessMessage>
      <SubMessage>Thank you for your purchase.</SubMessage>
    </Wrapper>
  );
};

export default PaymentSuccessPage;
