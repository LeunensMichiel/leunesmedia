import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

import colors from "../Framework/colors"

import CrossIcon from "../../images/svgs/cross-out.svg"
import screens from "../Framework/Screens"

const Cross = styled(CrossIcon)`
  position: absolute;
  top: 1.66em;
  left: 1.66em;
  height: 2.5rem;
  width: 2.66rem;
  cursor: pointer;
  fill: ${colors.white} !important;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    transform: scale(0.95);
  }

  @media ${screens.laptop} {
    height: 3rem;
    width: 3.5rem;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;

  transform: ${props =>
    props.show === "true" ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  overflow-y: auto;
`
const NavigationItems = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  margin-top: 5.82em;
  padding: 0 1.66em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const NavigationItem = styled.li`
  margin-bottom: ${props => (props.last ? "0" : "1.33em")};
  padding-bottom: 1.28em;
  border-bottom: ${props => (props.last ? "0" : "1px")} solid ${colors.white};

  &:hover > a,
  &:focus > a {
    color: ${colors.white};
  }

  a {
    font-size: 1.1em;
    font-weight: 300;
    text-transform: uppercase;
    color: ${colors.secondaryWhite};
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-backface-visibility: hidden;
    padding-bottom: 1.28em;
    &.activeLink {
      color: ${colors.accent};
    }

    @media ${screens.laptop} {
      font-size: 1.33em;
    }
  }
`

const StyledLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`

const LangContainer = styled.div`
  display: flex;
  align-self: center;
  width: 66px;
  justify-content: space-evenly;
  color: ${colors.secondaryBlack};
  margin-bottom: 1.66em;
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
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map(language => (
              <StyledSpan
                onClick={() => changeLocale(language)}
                active={currentLocale === language ? "true" : "false"}
              >
                {language}
              </StyledSpan>
            ))
          }
        </IntlContextConsumer>
      </LangContainer>
    </Navigation>
  )
}

export default SideDrawer
