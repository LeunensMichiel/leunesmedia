import React, { PureComponent } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

import colors from "../components/Framework/colors"
import Layout from "../components/layout"
import Overlay from "../components/Framework/Overlay"
// import SEO from "../components/seo"

import Logo from "../images/logoblack.svg"
import Chevron from "../images/right-chevron.svg"
import Button from "../components/Framework/Button"

const Jumbotron = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  min-height: 98vh;
`

const MainImage = styled.div`
  background-color: ${colors.secondaryBlack};
  max-height: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`
const LogoContainer = styled.div`
  width: 80%;
  max-width: 1024px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  margin: 25vh auto 0 auto;
  z-index: 3;
`
const StyledLogo = styled(Logo)`
  width: 100%;
  max-width: 660px;
  margin-bottom: 3em;
  fill: ${colors.white} !important;
`
const StyledSubheader = styled.p`
  padding: 0.2em 0.66em;
  color: ${props => (props.inverted ? colors.white : colors.black)};
  background-color: ${props => (props.inverted ? colors.accent : colors.white)};
  margin-bottom: 0.4em;
`

const StyledAnchor = styled(Link)`
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 1em;
  transition: 0.2s cubic-bezier(0.19, 1, 0.22, 1) all;

  &:hover,
  &:active {
    color: ${colors.secondaryBlack};
    span {
      border-color: ${colors.secondaryBlack};
    }
  }

  span {
    border-bottom: 1px solid ${colors.white};
  }

  svg {
    height: 0.8em;
    width: 1em;
  }
`

const DownScroll = styled.div`
  position: absolute;
  bottom: 4em;
  left: 50%;
  margin-left: -50vh;
  right: 50%;
  margin-right: -50vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 0.66em;
  letter-spacing: 2px;
  cursor: pointer;

  span {
    color: ${colors.secondaryBlack};
  }
  svg {
    height: 4em;
    width: 5em;
    transform: rotate(90deg);
  }
`
const MainSection = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 5em 0;
`

const MainSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => (props.left ? "flex-start" : "flex-end")};
  width: 80%;
  max-width: 1024px;
  margin: 0 auto;
`

const SectionHeader = styled.h1`
  color: ${colors.white};
  font-size: 2.8em;
  text-transform: uppercase;

  &:after {
    content: "";
    display: block;
    margin: ${props => (props.left ? "0 auto 0 .5em" : "0 0.5em 0 auto")};
    width: 100%;
    max-width: 230px;
    padding-top: 0.5em;
    border-bottom: 2px solid ${colors.accent};
  }
`

const SectionParagraph = styled.p`
  color: ${colors.white};
  width: 100%;
  max-width: 500px;
  text-align: ${props => (props.left ? "left" : "right")};
  margin-bottom: 2em;
`

export default class IndexPage extends PureComponent {
  constructor() {
    super()
    this.mainRef = React.createRef()
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  easeOutQuad(t) {
    return t * _(2 - t)
  }

  render() {
    const { data } = this.props
    return (
      <Layout>
        <Jumbotron>
          {data.mainImage && (
            <MainImage>
              <Overlay heavy />
              <Img
                fluid={data.mainImage.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="Picture of me sitting on a bench"
                title="Main Page Header"
                style={{ position: "static" }}
              />
            </MainImage>
          )}
          <LogoContainer>
            <StyledLogo />
            <StyledSubheader inverted>Photographer & Filmmaker</StyledSubheader>
            <StyledSubheader>Web & Mobile Developer</StyledSubheader>
            <StyledAnchor to="/about">
              <span>about me</span>
              <Chevron />
            </StyledAnchor>
          </LogoContainer>
          <DownScroll
            onClick={() => {
              this.scroll(this.mainRef)
            }}
          >
            <span>scroll down</span>
            <Chevron />
          </DownScroll>
        </Jumbotron>
        <MainSection ref={this.mainRef}>
          {data.firstSection && (
            <MainImage>
              <Overlay />
              <Img
                fluid={data.firstSection.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="a landscape photo"
                title="Image Photography Section"
                style={{ position: "static" }}
              />
            </MainImage>
          )}
          <MainSectionInfo>
            <SectionHeader>Photographer</SectionHeader>
            <SectionParagraph>
              Snapping life's precious & short moments, shooting moody
              landscapes, capturing intriguing eyes and everything in between.
            </SectionParagraph>
            <Button />
          </MainSectionInfo>
        </MainSection>
        <MainSection>
          {data.secondSection && (
            <MainImage>
              <Overlay />
              <Img
                fluid={data.secondSection.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="a laptop with coffee next to it."
                title="Image Develop Section"
                style={{ position: "static" }}
              />
            </MainImage>
          )}
          <MainSectionInfo left>
            <SectionHeader left>Web & Mobile Developer</SectionHeader>
            <SectionParagraph left>
              Having a website is cool, having an app is cooler. Want me to make
              both? As a top-notch Computer Science student at UGent, I can
              deliver. But first: coffee.
            </SectionParagraph>
            <Button />
          </MainSectionInfo>
        </MainSection>
        <MainSection>
          {data.thirdSection && (
            <MainImage>
              <Overlay />
              <Img
                fluid={data.thirdSection.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="a photo of me filming at sunset"
                title="Image Filmmaking Section"
                style={{ position: "static" }}
              />
            </MainImage>
          )}
          <MainSectionInfo>
            <SectionHeader>Filmmaker</SectionHeader>
            <SectionParagraph>
              Making dope videos with actual visual effects since '11. Looking
              for a cool way to promote your business? Relive the moment like
              you were there through an aftermovie? Look no further!
            </SectionParagraph>
            <Button />
          </MainSectionInfo>
        </MainSection>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    mainImage: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    firstSection: file(relativePath: { eq: "mainsection1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    secondSection: file(relativePath: { eq: "mainsection2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    thirdSection: file(relativePath: { eq: "mainsection3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
