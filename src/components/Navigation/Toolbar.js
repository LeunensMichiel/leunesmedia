import React from "react"
import { PropTypes } from "prop-types"
import styled from "styled-components"

import colors from "../Framework/colors"

import Hamburger from "../../images/menu.svg"

const HamburgerIcon = styled(Hamburger)`
  height: 38.12px;
  width: 61px;
  cursor: pointer;
  fill: ${props =>
    props.isdark === "true"
      ? `${colors.white} !important`
      : `${colors.black} !important`};
`

const Header = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.1);
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
