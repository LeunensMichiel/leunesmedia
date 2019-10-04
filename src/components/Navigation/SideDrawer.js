import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import colors from "../Framework/colors"

const Navigation = styled.nav`
  height: 100%;
  background: ${colors.black};
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;
`
const NavigationItems = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
  }
`
const StyledLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`

const SideDrawer = props => {
  return (
    <Navigation>
      <NavigationItems>
        <ul>
          <li>
            <StyledLink to="/" activeClassName="">
              Home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/" activeClassName="">
              About
            </StyledLink>
          </li>
        </ul>
      </NavigationItems>
    </Navigation>
  )
}

SideDrawer.propTypes = {}

export default SideDrawer
