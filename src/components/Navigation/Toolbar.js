import React from "react"
import { PropTypes } from "prop-types"
import styled from "styled-components"

import colors from "../Framework/colors"

import Hamburger from "../../images/menu.svg"

const HamburgerIcon = styled(Hamburger)`
  height: 3.3rem;
  width: 4rem;
  cursor: pointer;
  fill: ${props =>
    props.isdark === "true"
      ? `${colors.white} !important`
      : `${colors.black} !important`};

  transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:focus {
    outline: none;
  }

  &:hover {
    fill: ${props =>
      props.isdark === "true"
        ? `${colors.secondaryWhite} !important`
        : `${colors.secondaryBlack} !important`};
  }
`

const Header = styled.header`
  top: 6.66%;
  left: 11%;
  position: fixed;
  z-index: 99;
`

const Toolbar = ({ isDark, hamburgerClickHandler }) => (
  <Header>
    <span onClick={hamburgerClickHandler}>
      <HamburgerIcon isdark={isDark.toString()} />
    </span>
  </Header>
)

Toolbar.propTypes = {
  isDark: PropTypes.bool,
}

Toolbar.defaultProps = {
  isDark: false,
}

export default Toolbar
