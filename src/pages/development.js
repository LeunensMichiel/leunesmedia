import React, { PureComponent } from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import Typist from "react-typist"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"

import "react-typist/dist/Typist.css"

import Chevron from "../images/svgs/right-chevron.svg"
import Coffee from "../images/svgs/coffee-cup.svg"

const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 5em;
  font-family: "Inconsolata", "Montserrat", "sans-serif";
  text-transform: uppercase;
  position: relative;
  text-align: center;
`
const DownScroll = styled.div`
  color: ${colors.black};
  cursor: pointer;

  svg {
    height: 1em;
    width: 2em;
    transform: rotate(90deg);
  }
`

const HeaderImage = styled(Img)`
  width: 100%;
  height: 33vh;
  opacity: 0.8;
`

const OrganicContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 90vh;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
`

const OrganicText = styled.div`
  width: 100%;
  position: relative;
  z-index: 50;

  &:after {
    position: relative;
    content: "";
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 230px;
    padding-top: 2em;
    border-bottom: 2px solid ${colors.accent};
    z-index: 50;
  }
`

const StyledCoffee = styled(Coffee)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  height: 100%;
  opacity: 0.3;
  transform: rotate(25deg);
`

const Header = styled.h1`
  position: relative;
  font-size: 4em;
  line-height: 1.6;
  margin: 0;
  z-index: 50;
`

const AboveHeader = styled.span`
  position: relative;
  color: ${colors.secondaryBlack};
  z-index: 50;
`

const OtherStuff = styled.div``

const OtherHeader = styled.h3`
  color: ${colors.secondaryBlack};
  font-weight: 300;
  margin: 0;
`

const OtherSubHeader = styled.span`
  color: ${colors.secondaryBlack};
  font-size: 0.66em;
`

export default class development extends PureComponent {
  state = {
    start: 100,
    played: false,
  }

  render() {
    const { data } = this.props
    const { start, played } = this.state
    return (
      <Layout>
        <SEO
          title="Development"
          description="Web and mobile projects made by Michiel Leunens, Leunes Media"
        />
        <TypeContainer>
          <Typist startDelay={1500} avgTypingDelay={100} stdTypingDelay={50}>
            I'm a developer.
          </Typist>
          <DownScroll
          // onClick={() => {
          //   this.scroll(this.mainRef)
          // }}
          >
            <Chevron />
          </DownScroll>
        </TypeContainer>
        <HeaderImage fluid={data.headerImage.childImageSharp.fluid} />
        <VisibilitySensor
          partialVisibility
          onChange={isVisible => {
            this.setState({ start: isVisible && !played ? 0 : 100 })
          }}
        >
          <OrganicContainer>
            <OrganicText svg={Coffee.svg}>
              <StyledCoffee />
              <AboveHeader>No templates. No Wordpress.</AboveHeader>
              <Header>
                This site is{" "}
                <CountUp
                  start={start}
                  end={100}
                  duration={2.75}
                  suffix="% "
                  delay={1}
                  onEnd={() => this.setState({ played: true })}
                  easingFn={(t = 0.19, b = 1, c = 0.22, d = 1) =>
                    c * (-Math.pow(2, (-10 * t) / d) + 1) + b
                  }
                />
                made out
                <br /> of organic code.
              </Header>
            </OrganicText>
            <OtherStuff>
              <OtherHeader>
                Oh, and here's some other stuff I've made.
              </OtherHeader>
              <OtherSubHeader>
                Please head over to{" "}
                <Link className="simpleAnchor" to="/about">
                  about
                </Link>{" "}
                or{" "}
                <a
                  href="https://github.com/LeunensMichiel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="simpleAnchor"
                >
                  Github
                </a>{" "}
                for more information about my skills and technology-knowledge.
              </OtherSubHeader>
            </OtherStuff>
          </OrganicContainer>
        </VisibilitySensor>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "laptop-coffee.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
