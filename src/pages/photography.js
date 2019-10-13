import React, { PureComponent } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Gallery from "../components/Gallery/Gallery"
import colors from "../components/Framework/colors"

const PhotoContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto 10.1vh auto;
`

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10.1vh 0;
`

const MenuItem = styled.a`
  font-family: "Open Sans";
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 200;
  margin-left: 1em;
  color: ${props => (props.active ? colors.black : colors.secondaryBlack)};
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  cursor: pointer;

  &:hover {
    color: ${colors.black};
  }
`

export default class photography extends PureComponent {
  state = {
    type: "event",
  }

  onChangeMenuItem = type => {
    this.setState({
      type,
    })
  }

  render() {
    const { type } = this.state
    return (
      <Layout>
        <PhotoContainer>
          <Menu>
            <MenuItem
              onClick={() => this.onChangeMenuItem("event")}
              active={type === "event"}
            >
              event
            </MenuItem>
            <MenuItem
              onClick={() => this.onChangeMenuItem("portrait")}
              active={type === "portrait"}
            >
              portrait
            </MenuItem>
            <MenuItem
              onClick={() => this.onChangeMenuItem("wedding")}
              active={type === "wedding"}
            >
              wedding
            </MenuItem>
            <MenuItem
              onClick={() => this.onChangeMenuItem("landscape")}
              active={type === "landscape"}
            >
              landscape
            </MenuItem>
          </Menu>
          <Gallery type={type} />
        </PhotoContainer>
      </Layout>
    )
  }
}
