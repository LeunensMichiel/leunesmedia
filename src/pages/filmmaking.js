import React, { PureComponent } from "react"
import styled from "styled-components"
import _ from "lodash"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"
import Switch from "../components/Framework/Switch"
import screens from "../components/Framework/Screens"

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
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 20.2vh 0 10.1vh 0;

  @media ${screens.laptop} {
    flex-direction: row;
    margin: 10.1vh 0;
  }

  @media ${screens.ipadProPortrait} {
    padding-right: 3em;
  }

  @media ${screens.tabletland} {
    padding: 0 3em;
  }
`

const MenuItem = styled.a`
  font-family: "Open Sans";
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 200;
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

  @media ${screens.laptop} {
    margin-left: 1em;
  }
`

const StyledSwitch = styled.div`
  position: fixed;
  top: 5.6vh;
  left: 15vh;
  z-index: 10;

  @media ${screens.laptop} {
    position: static;
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(225px, auto);
  margin-bottom: 10.1vh;
  padding: 0 1.5em;
  max-width: 880px;

  @media ${screens.tablet} {
    grid-gap: 0.66em;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
  }

  @media ${screens.mobileSLandscape} {
    grid-gap: 0.66em;
  }
  @media ${screens.mobileMLandscape} {
    grid-gap: 0.66em;
  }
`

const GridItem = styled.div`
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-out all;
    filter: brightness(0.7);
  }
  overflow: hidden;
  /* width: 100%; */
  display: flex;
  align-items: stretch;
  opacity: ${props => (props.isSelected ? "1" : ".33")};
  backface-visibility: hidden;

  .gatsby-image-wrapper {
    height: unset !important;
  }
`

const VidContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin-bottom: 10.1vh;

  .aspect {
    position: relative;
    padding-top: 56.25%;
  }
`

export default class filmmaking extends PureComponent {
  state = {
    type: "aftermovie",
    checked: true,
    selectedVideo: 0,
  }

  onChangeMenuItem = type => {
    this.setState({
      type,
      selectedVideo: 0,
    })
  }

  onChangeSwitch = bool => {
    this.setState({
      checked: bool,
    })
    document.getElementById("hamburger").classList.toggle("theme__dark")
  }

  onChangeVideo = index => {
    this.setState({
      selectedVideo: index,
    })
  }

  render() {
    const { data } = this.props
    const { type, checked, selectedVideo } = this.state
    const videos = _.filter(data.videos.edges, video => {
      return video.node.frontmatter.category.includes(type)
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
            <StyledSwitch>
              <Switch
                lastLeft={true}
                isOn={checked}
                handleToggle={() => this.onChangeSwitch(!checked)}
              />
            </StyledSwitch>
          </Menu>
          <VidContainer>
            <div className="aspect">
              <iframe
                id="ytplayer"
                type="text/html"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={`https://www.youtube.com/embed/${videos[selectedVideo].node.frontmatter.youtubeUrl}?enablejsapi=1`}
                frameBorder="0"
                allowFullScreen
                title="Player"
              ></iframe>
            </div>
          </VidContainer>
          <ImageGrid>
            {videos.map((video, i) => (
              <GridItem
                key={video.node.frontmatter.youtubeUrl}
                onClick={() => this.onChangeVideo(i)}
                isSelected={selectedVideo === i}
              >
                <Img
                  alt={video.node.frontmatter.videoTitle}
                  fixed={video.node.frontmatter.thumbnail.childImageSharp.fixed}
                  objectFit="contain"
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
    videos: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/videos/" } }
      sort: { order: DESC, fields: frontmatter___youtubeUrl }
    ) {
      edges {
        node {
          frontmatter {
            youtubeUrl
            videoTitle
            category
            thumbnail {
              childImageSharp {
                fixed(quality: 90, width: 500) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
