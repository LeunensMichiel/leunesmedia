import React, { PureComponent } from "react"
import styled from "styled-components"
import _ from "lodash"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"
import Switch from "../components/Framework/Switch"

const FilmmakingContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${props => (props.isDark ? colors.black : colors.white)};
  flex: 1;
  flex-direction: column;
  align-items: center;
`
const Menu = styled.div`
  width: 100%;
  max-width: 1024px;
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
  color: ${props =>
    props.active && props.isDark
      ? colors.secondaryWhite
      : !props.active && props.isDark
      ? colors.secondaryBlack
      : props.active && !props.isDark
      ? colors.black
      : colors.secondaryBlack};
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  cursor: pointer;

  &:hover {
    color: ${props => (props.isDark ? colors.secondaryWhite : colors.black)};
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-auto-flow: column;
  justify-content: center;
  height: 225px;
  /* align-content: end; */
  width: 100%;
`

const GridItem = styled.div`
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-out all;
    filter: brightness(0.7);
  }
  overflow: hidden;
  height: 100%;
  display: flex;
  align-items: center;
`

export default class photography extends PureComponent {
  state = {
    type: "aftermovie",
    checked: true,
  }

  onChangeMenuItem = type => {
    this.setState({
      type,
    })
  }

  onChangeSwitch = bool => {
    this.setState({
      checked: bool,
    })
    document.getElementById("hamburger").classList.toggle("theme__dark")
  }

  render() {
    const { data } = this.props
    const { type, checked } = this.state
    const finalImages = _.filter(data.images.edges, img => {
      return img.node.relativeDirectory.includes(type)
    })

    return (
      <Layout>
        <SEO
          title="Filmmaking"
          description="Videos made by Michiel Leunens, Leunes Media"
        />
        <FilmmakingContainer isDark={checked}>
          <Menu>
            <MenuItem
              onClick={() => this.onChangeMenuItem("aftermovie")}
              active={type === "aftermovie"}
              isDark={checked}
            >
              aftermovie
            </MenuItem>
            <MenuItem
              onClick={() => this.onChangeMenuItem("event")}
              active={type === "event"}
              isDark={checked}
            >
              event
            </MenuItem>
            <MenuItem
              onClick={() => this.onChangeMenuItem("other")}
              active={type === "other"}
              isDark={checked}
            >
              other
            </MenuItem>
            <Switch
              lastLeft={true}
              isOn={checked}
              handleToggle={() => this.onChangeSwitch(!checked)}
            />
          </Menu>
          <ImageGrid>
            {finalImages.map(image => (
              <GridItem key={image.node.childImageSharp.fixed.src}>
                <Img
                  alt={image.node.childImageSharp.fixed.originalName}
                  fixed={image.node.childImageSharp.fixed}
                  objectFit="cover"
                  objectPosition="50% 50%"
                />
              </GridItem>
            ))}
          </ImageGrid>
        </FilmmakingContainer>
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { glob: "video/*" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
          relativeDirectory
        }
      }
    }
  }
`
