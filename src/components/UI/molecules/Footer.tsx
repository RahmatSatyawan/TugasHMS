import React from "react";
import styled from "styled-components";
import WrapperFooter from "../atom/wrapperFooter";


const StyledFooter = styled.footer`
  background-color: #4f4d53;
  height: 10vh;
  display: flex;
  padding-left: 40px;
  justify-content: start;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
        <WrapperFooter></WrapperFooter>
    </StyledFooter>
  );
};

export default Footer;
