import React from "react";
import styled from "styled-components";
import bg from "../media/img_hero.jpg";

const StyledBg = styled.img`

`;
const Background = () => {
  return (
    // <img src={bg} alt="" />
    <StyledBg>
        <img src={bg} alt="" />
    </StyledBg>
  );
};

export default Background;
