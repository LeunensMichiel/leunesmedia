import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Location } from "@reach/router"

import Toolbar from "./Navigation/Toolbar"
import "../stylesheets/lmStyle.scss"
import SideDrawer from "./Navigation/SideDrawer"
import Backdrop from "./Navigation/Backdrop"
import Footer from "./Footer/Footer"

export default class Layout extends PureComponent {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropToggleClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    })
  }

  render() {
    const { children } = this.props
    const { sideDrawerOpen } = this.state
    let backdrop

    // console.log(this.props.location.pathname)

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleClickHandler} />
    }
    return (
      <>
        <Location>
          {({ navigate, location }) => (
            <Toolbar
              hamburgerClickHandler={this.drawerToggleClickHandler}
              isDark={
                location.pathname === "/" || location.pathname === "/filmmaking"
              }
            />
          )}
        </Location>
        <SideDrawer
          show={sideDrawerOpen}
          click={this.backdropToggleClickHandler}
        />
        {backdrop}
        <div className="wrapper">
          <div className="content">{children}</div>
          <Footer />
        </div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
