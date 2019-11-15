import React, { PureComponent } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import { injectIntl, Link } from "gatsby-plugin-intl"

import colors from "../components/Framework/colors"
import Layout from "../components/layout"
import Overlay from "../components/Framework/Overlay"
import SEO from "../components/seo"
import Button from "../components/Framework/Button"
import screens from "../components/Framework/Screens"

import Logo from "../images/svgs/logoblack.svg"
import Chevron from "../images/svgs/right-chevron.svg"

const Jumbotron = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  min-height: 98vh;
  justify-content: center;
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  margin: -20vh auto 0 auto;
  z-index: 3;
`
const StyledLogo = styled(Logo)`
  width: 100%;
  max-width: 660px;
  margin-bottom: 3em;
  fill: ${colors.white} !important;
`
const StyledSubheader = styled.p`
  font-size: 0.9em;
  padding: 0.2em 0.5em;
  color: ${props => (props.inverted ? colors.white : colors.black)};
  background-color: ${props => (props.inverted ? colors.accent : colors.white)};
  margin-bottom: 0.4em;
  text-align: right;

  @media ${screens.laptop} {
    font-size: 1em;
    padding: 0.2em 0.66em;
  }
`

const StyledAnchor = styled(Link)`
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 1em;
  transition: 0.2s cubic-bezier(0.19, 1, 0.22, 1) all;
  font-size: 0.9em;

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

  @media ${screens.laptop} {
    font-size: 1em;
  }
`

const DownScroll = styled.div`
  position: absolute;
  bottom: 4em;
  z-index: 5;
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
  font-size: 1.5em;
  text-transform: uppercase;

  &:after {
    content: "";
    display: block;
    margin: ${props => (props.left ? "0 auto 0 .5em" : "0 0.5em 0 auto")};
    width: 100%;
    max-width: 150px;
    padding-top: 0.5em;
    border-bottom: 2px solid ${colors.accent};
  }

  @media ${screens.laptop} {
    font-size: 2.8em;

    &:after {
      max-width: 230px;
    }
  }
`

const SectionParagraph = styled.p`
  color: ${colors.white};
  width: 100%;
  max-width: 600px;
  text-align: ${props => (props.left ? "left" : "right")};
  margin-bottom: 2em;
  font-size: 0.8em;

  @media ${screens.laptop} {
    font-size: 1em;
  }
`

class IndexPage extends PureComponent {
  constructor() {
    super()
    this.mainRef = React.createRef()
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    const { data, intl } = this.props
    return (
      <Layout>
        <SEO
          title="Portfolio"
          description="Portfolio of Michiel Leunens, Photographer, Developer and Filmmaker"
        />
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
            <StyledSubheader inverted>
              {intl.formatMessage({ id: "index.header1" })}
            </StyledSubheader>
            <StyledSubheader>
              {intl.formatMessage({ id: "index.header2" })}
            </StyledSubheader>
            <StyledAnchor to="/about">
              <span>{intl.formatMessage({ id: `index.about` })}</span>
              <Chevron />
            </StyledAnchor>
          </LogoContainer>
          <DownScroll
            onClick={() => {
              this.scroll(this.mainRef)
            }}
          >
            <span>{intl.formatMessage({ id: `general.scrolldown` })}</span>
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
            <SectionHeader>
              {intl.formatMessage({ id: "index.photographer" })}
            </SectionHeader>
            <SectionParagraph>
              {intl.formatMessage({ id: `index.photoContent` })}
            </SectionParagraph>
            <Button
              to="/photography"
              text={intl.formatMessage({ id: `index.learnBtn` })}
            />
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
            <SectionHeader left>
              {intl.formatMessage({ id: "index.dev" })}
            </SectionHeader>
            <SectionParagraph left>
              {intl.formatMessage({ id: `index.devContent` })}
            </SectionParagraph>
            <Button
              to="/development"
              text={intl.formatMessage({ id: `index.learnBtn` })}
            />
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
            <SectionHeader>
              {intl.formatMessage({ id: "index.filmmaker" })}
            </SectionHeader>
            <SectionParagraph>
              {intl.formatMessage({ id: `index.filmContent` })}
            </SectionParagraph>
            <Button
              to="/filmmaking"
              text={intl.formatMessage({ id: `index.learnBtn` })}
            />
          </MainSectionInfo>
        </MainSection>
      </Layout>
    )
  }
}

export default injectIntl(IndexPage)

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
