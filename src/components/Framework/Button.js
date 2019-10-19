import React from "react"
import styled from "styled-components"

import colors from "./colors"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  color: ${colors.accent};
  text-decoration: none;
  font-family: "Open Sans";
  font-weight: 500;
  text-transform: uppercase;
  border: 2px solid ${colors.accent};
  border-radius: 2px;
  padding: 0.8em 2.2em;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:hover,
  &:focus {
    color: ${colors.secondaryWhite};
    border: 2px solid ${colors.secondaryWhite};
  }

  &:focus {
    transform: scale(0.95);
  }
`

const Button = ({ text, to }) => {
  return <StyledButton to={to || "/"}>{text || "Learn More"}</StyledButton>
}

export default Button
