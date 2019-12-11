import React from "react"
import { PropTypes } from "prop-types"
import styled from "styled-components"

import colors from "../Framework/colors"
import screens from "../Framework/Screens"

import Hamburger from "../../images/svgs/menu.svg"

const HamburgerIcon = styled(Hamburger)`
  height: 2.5rem;
  width: 3rem;

  cursor: pointer;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  fill: ${props =>
    props.isdark === "true"
      ? `${colors.white} !important`
      : `${colors.black} !important`};

  &.theme__dark {
    fill: ${props =>
      props.isdark === "false"
        ? `${colors.white} !important`
        : `${colors.black} !important`};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    fill: ${props =>
      props.isdark === "true"
        ? `${colors.secondaryWhite} !important`
        : `${colors.secondaryBlack} !important`};
    &.theme__dark {
      fill: ${props =>
        props.isdark === "false"
          ? `${colors.secondaryWhite} !important`
          : `${colors.secondaryBlack} !important`};
    }
  }

  @media ${screens.laptop} {
    height: 3.3rem;
    width: 4rem;
  }
`

const Header = styled.header`
  top: 5vh;
  left: 5vh;
  position: fixed;
  z-index: 99;

  @media ${screens.laptop} {
    top: 10vh;
    left: 10vh;
  }
`

const Toolbar = ({ isDark, hamburgerClickHandler }) => (
  <Header>
    <span
      onClick={hamburgerClickHandler}
      onKeyDown={hamburgerClickHandler}
      aria-pressed="false"
      tabIndex="0"
      role="button"
    >
      <HamburgerIcon isdark={isDark.toString()} id="hamburger" />
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
