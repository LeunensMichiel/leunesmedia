import React from "react"
import { PropTypes } from "prop-types"
import styled from "styled-components"

import colors from "../Framework/colors"
import margins from "../Framework/margins"

import Hamburger from "../../images/menu.svg"

const HamburgerIcon = styled(Hamburger)`
  height: 3.3rem;
  width: 4rem;
  cursor: pointer;
  fill: ${props =>
    props.isdark === "true"
      ? `${colors.white} !important`
      : `${colors.black} !important`};

  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.02);
  }
`

const Header = styled.header`
  top: ${margins.LargeTop};
  left: ${margins.LargeLeftRight};
  position: fixed;
`

const Toolbar = ({ btnColor, isDark, hamburgerClickHandler }) => (
  <Header>
    <a onClick={hamburgerClickHandler}>
      <HamburgerIcon isdark={isDark.toString()} />
    </a>
  </Header>
)

Toolbar.propTypes = {
  isDark: PropTypes.bool,
}

Toolbar.defaultProps = {
  isDark: false,
}

export default Toolbar
