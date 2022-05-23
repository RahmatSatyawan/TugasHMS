import React from "react";
import styled from "styled-components";
import ImageHeader from "../atom/ImageHeader";

const StyledHeader = styled.header`
  background-color: #4f4d53;
  height: 5vh;
  display: flex;
  padding-left: 40px;
  justify-content: start;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <ImageHeader />
    </StyledHeader>
  );
};

export default Header;
