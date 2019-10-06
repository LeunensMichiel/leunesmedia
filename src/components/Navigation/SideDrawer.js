import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../Framework/colors"

import CrossIcon from "../../images/svgs/cross-out.svg"

const Cross = styled(CrossIcon)`
  position: absolute;
  top: 1.66em;
  left: 1.66em;
  height: 45px;
  width: 45px;
  cursor: pointer;
  fill: ${colors.white} !important;
  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    transform: scale(0.95);
  }
`

const Navigation = styled.nav`
  height: 100%;
  background: ${colors.black};
  box-shadow: ${props =>
    props.show === "true"
      ? " 0 14px 28px rgba(0, 0, 0, 0.33), 0 10px 10px rgba(0, 0, 0, 0.33)"
      : ""};
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;

  transform: ${props =>
    props.show === "true" ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
`
const NavigationItems = styled.ul`
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 1.66em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const NavigationItem = styled.li`
  margin-bottom: 1.33em;
  padding-bottom: 1.28em;
  border-bottom: ${props => (props.last ? "0" : "1px")} solid ${colors.white};

  &:hover > a,
  &:focus > a {
    color: ${colors.white};
  }

  a {
    font-size: 1.33em;
    font-weight: 300;
    text-transform: uppercase;
    color: ${colors.secondaryWhite};
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    padding-bottom: 1.28em;
  }

  .activeLink {
    color: ${colors.accent};
  }
`

const StyledLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`

const LangContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 1.66em;
  width: 100%;
  justify-content: center;
  color: ${colors.secondaryBlack};
`

const StyledSpan = styled.span`
  border-bottom: 1px solid
    ${props =>
      props.active === "true" ? `${colors.secondaryBlack}` : "transparent"};
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    color: ${colors.secondaryWhite};
  }
`

const SideDrawer = ({ show, click }) => {
  return (
    <Navigation show={show.toString()}>
      <span onClick={click}>
        <Cross />
      </span>
      <NavigationItems>
        <NavigationItem>
          <StyledLink to="/" activeClassName="activeLink">
            Home
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/about" activeClassName="activeLink">
            About
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/photography" activeClassName="activeLink">
            Photography
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/development" activeClassName="activeLink">
            Development
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/filmmaking" activeClassName="activeLink">
            Filmmaking
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/socials" activeClassName="activeLink">
            Socials
          </StyledLink>
        </NavigationItem>
        <NavigationItem last>
          <StyledLink to="/contact" activeClassName="activeLink">
            Contact
          </StyledLink>
        </NavigationItem>
      </NavigationItems>
      <LangContainer>
        <StyledSpan active="false">nl</StyledSpan>
        &nbsp;|&nbsp;
        <StyledSpan active="true">en</StyledSpan>
      </LangContainer>
    </Navigation>
  )
}

export default SideDrawer
