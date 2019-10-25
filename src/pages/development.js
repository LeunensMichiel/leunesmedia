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
import Android from "../images/svgs/android.svg"
import Apple from "../images/svgs/apple.svg"
import Windows from "../images/svgs/windows.svg"
import Mindfulness from "../images/svgs/logoMindfulness.svg"
import screens from "../components/Framework/Screens"

const TypeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5em;
  font-family: "Inconsolata", "Montserrat", "sans-serif";
  text-transform: uppercase;
  position: relative;
  text-align: center;

  @media ${screens.laptop} {
    font-size: 5em;
  }
`
const DownScroll = styled.div`
  color: ${colors.black};
  cursor: pointer;
  opacity: ${props => (props.done ? "1" : "0")};
  transition: opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.5s;
  -webkit-backface-visibility: hidden;

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
  min-height: 90vh;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  padding: 0 1.5em;
  overflow: hidden;

  @media ${screens.laptop} {
    padding: 0;
  }
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
  right: -1.5em;
  z-index: 4;
  height: 80%;
  opacity: 0.3;
  transform: rotate(25deg);

  @media ${screens.laptop} {
    right: 0;
    height: 100%;
  }
`

const Header = styled.h1`
  position: relative;
  font-size: 1.5em;
  line-height: 1.6;
  margin: 0;
  z-index: 50;

  @media ${screens.laptop} {
    font-size: 4em;
  }
`

const AboveHeader = styled.span`
  position: relative;
  color: ${colors.secondaryBlack};
  z-index: 50;
  font-size: 0.8em;

  @media ${screens.laptop} {
    font-size: 1em;
  }
`

const OtherStuff = styled.div``

const OtherHeader = styled.h3`
  color: ${colors.secondaryBlack};
  font-weight: 300;
  margin: 1.5em 0;
  font-size: 1em;

  @media ${screens.laptop} {
    margin: 0;
    font-size: 1.3em;
  }
`

const OtherSubHeader = styled.span`
  color: ${colors.secondaryBlack};
  font-size: 0.66em;
`

const TwallieContainer = styled.div`
  width: 100%;
  height: 60vh;
  background: ${colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20.2vh 0 30.3vh 0;

  @media ${screens.laptop} {
    margin: 20.2vh 0;
    height: 40vh;
  }
`

const TwallieSecondContainer = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);

  @media ${screens.laptop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: none;
    max-width: 1024px;
  }
`

const TwallieSiteImg = styled(Img)`
  width: 100%;

  @media ${screens.laptop} {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.1);
  }
`

const TwallieCard = styled.div`
  width: 100%;
  height: 350px;
  padding: 1em;
  background: #37383b;
  display: flex;
  flex-direction: column;

  @media ${screens.laptop} {
    max-width: 350px;
    position: absolute;
    left: 0;
    height: 110%;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5),
      0 10px 10px -5px rgba(0, 0, 0, 0.1);
  }
`

const UpperCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 2;
`

const LowerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 0.75;
  padding-top: 2em;
`

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CardHeader = styled.h4`
  text-transform: uppercase;
  color: ${colors.white};
  font-size: 1.5em;
  margin: 0;
  text-align: center;
`

const CardSubHeader = styled.span`
  color: ${colors.secondaryWhite};
  font-size: 0.7em;
  font-weight: 300;
  text-align: center;
`

const CardDivider = styled.div`
  content: "";
  width: 10%;
  height: 2px;
  background: ${colors.accent};
`

const CardDescription = styled.p`
  margin: 0;
  width: 80%;
  text-align: center;
  color: ${colors.white};
  font-size: 0.8em;
`

const CardTechs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardTech = styled.span`
  background: ${colors.accent};
  color: #37383b;
  font-size: 0.7em;
  margin: 0 0.5em;
  padding: 0.33em 0.66em;
  border-radius: 50px;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:hover,
  &:focus {
    color: ${colors.white};
  }
`

const StyledAnchor = styled.a`
  cursor: pointer;
  color: ${colors.accent};
  text-decoration: none;
  font-family: "Open Sans";
  font-weight: 500;
  text-transform: uppercase;
  border: 2px solid ${colors.accent};
  border-radius: 2px;
  padding: 0.5em 1em;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:hover,
  &:focus {
    color: ${colors.secondaryWhite};
    border: 2px solid ${colors.secondaryWhite};
  }

  &:focus {
    transform: scale(0.95);
  }
`

const Status = styled.div`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 0.7em;
  margin-top: 1em;

  span {
    color: ${colors.accent};
  }
`

const ArtistHuntContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  padding: 0 1.5em;
  overflow: hidden;

  @media ${screens.laptop} {
    padding: 0;
  }
`

const AHHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
`

const AHTitle = styled.h1`
  font-size: 3.5em;
  margin: 0 0 0.4em 0;

  @media ${screens.laptop} {
    font-size: 4em;
  }
`

const AHSubtitle = styled.p`
  margin: 0;

  @media ${screens.laptop} {
    width: 55%;
  }
`

const AHBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
`

const AHBodyTitle = styled.h2`
  font-size: 1.8em;
  margin: 1em 0 0.5em 0;

  @media ${screens.laptop} {
    font-size: 2em;
    width: 50%;
    margin: 0 0 0.5em 0;
  }
`

const AHBodyDescription = styled.p`
  color: ${colors.secondaryBlack};
  margin: 0;
  font-size: 0.8em;

  @media ${screens.laptop} {
    margin: 0;
    font-size: 0.9em;
    width: 50%;
  }
`

const AvailableOn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5em;
  align-self: center;

  @media ${screens.laptop} {
    margin-top: 0;
    align-self: inherit;
  }
`

const AvailableText = styled.div`
  color: ${props => (props.accent ? props.accent : colors.secondaryBlack)};
  font-size: 0.6em;
  text-align: right;
  display: flex;
  flex-direction: column;
  margin-right: 1em;

  span {
    font-size: 0.5em;
  }

  @media ${screens.laptop} {
    font-size: 0.6em;

    span {
      font-size: 0.6em;
    }
  }
`

const AndroidLogo = styled(Android)`
  width: 40px;
  height: 40px;
  margin-right: 0.5em;
  fill: ${colors.secondaryBlack} !important;
`

const AppleLogo = styled(Apple)`
  width: 40px;
  height: 40px;
  fill: ${colors.secondaryBlack} !important;
`

const WindowsLogo = styled(Windows)`
  width: 40px;
  height: 40px;
  fill: ${props =>
    props.accent ? props.accent : colors.secondaryBlack} !important;
`

const ArtistHuntImage = styled.div`
  width: 100%;
  height: 50vh;
  margin-top: 1.5em;

  @media ${screens.laptop} {
    position: absolute;
    bottom: -16%;
    right: 0;
    width: 30%;
    height: auto;
    margin-top: initial;
  }
`

const MindFulnessContainer = styled.div`
  background: ${colors.secondaryWhite};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 20.2vh 1.5em 10.1vh 1.5em;

  @media ${screens.laptop} {
    flex-direction: row;
    padding: 20.2vh 0;
  }
`

const MindFulnessTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
  position: relative;
`

const MFHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  margin-bottom: 2em;
  z-index: 3;
`

const MFTitle = styled.h1`
  font-size: 2.2em;
  margin: 0 0 0.4em 0;
  @media ${screens.laptop} {
    font-size: 4em;
  }
`

const MFDescription = styled.p`
  margin: 0;
  font-size: 0.9em;
  text-align: justify;

  @media ${screens.laptop} {
    width: 55%;
    font-size: 1em;
    text-align: left;
  }
`

const MFBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  margin-bottom: 2em;
  z-index: 3;
`

const MFBodyTitle = styled.h2`
  font-size: 1.5em;
  margin: 0 0 0.5em 0;

  @media ${screens.laptop} {
    font-size: 2em;
    width: 70%;
  }
`

const MFBodyDescription = styled.p`
  margin: 0;
  color: ${colors.secondaryBlack};
  font-size: 0.9em;
  text-align: justify;

  @media ${screens.laptop} {
    font-size: 1em;
    text-align: left;
  }
`

const MindFulnessImage = styled.div`
  width: 80%;
  margin-top: 1.5em;

  @media ${screens.laptop} {
    width: 20%;
    margin-left: 20%;
    margin-right: 5%;
  }
`

const MindfulLogo = styled(Mindfulness)`
  width: 50%;
  height: auto;
  position: absolute;
  top: -5%;
  left: 0;
  opacity: 0.33;
  z-index: 1;

  @media ${screens.laptop} {
    top: -10%;
  }
`

const GhenterpriseContainer = styled.div`
  background: #feed57;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 10.1vh 1.5em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;

  @media ${screens.laptop} {
    min-height: 100vh;
    padding: 10.1vh 0;
    flex-direction: row;
    justify-content: stretch;
    min-height: 100vh;
  }
`

const GhenterpriseInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  @media ${screens.laptop} {
    align-items: flex-end;
  }
`

const GPHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  margin-top: 1.5em;

  @media ${screens.laptop} {
    margin-bottom: 2em;
    margin-top: 0;
    width: 55%;
  }
`

const GPTitle = styled.h1`
  font-size: 2em;
  margin: 0 0 0.4em 0;
  text-align: right;

  @media ${screens.laptop} {
    font-size: 4em;
  }
`

const GPDescription = styled.p`
  margin: 0 0 0 auto;
  text-align: right;
  font-size: 0.8em;
  width: 90%;

  @media ${screens.laptop} {
    font-size: 1em;
    width: 100%;
  }
`

const GhenterpriseImage = styled.div`
  width: 100%;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);

  @media ${screens.laptop} {
    width: 45%;
    position: absolute;
    bottom: -5%;
    left: 10%;
  }
`

const MorrocoCard = styled.div`
  width: 100%;
  height: 350px;
  padding: 1em;
  background: #37383b;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;

  @media ${screens.laptop} {
    max-width: 350px;
    position: absolute;
    right: 0;
    bottom: 20px;
    height: 66%;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5),
      0 10px 10px -5px rgba(0, 0, 0, 0.1);
  }
`

const MoroccoContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 80vh;
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media ${screens.laptop} {
    min-height: 100vh;
    padding: 10.1vh 0 20.2vh 0;
    align-items: stretch;
  }
`

const MoroccoInnerContainer = styled.div`
  width: 100%;
  max-width: 90vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10.1vh auto;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);

  @media ${screens.laptop} {
    flex-direction: row;
    margin: 0 auto;
    box-shadow: none;
  }
`

const MoroccoImage = styled.div`
  width: 100%;
  z-index: 2;

  .gatsby-image-wrapper {
    z-index: 2;
  }

  @media ${screens.laptop} {
    position: absolute;
    left: 0;
    height: auto;
    width: 80%;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5),
      0 10px 10px -5px rgba(0, 0, 0, 0.1);
  }
`

const MoroccoBG = styled.div`
  width: 200px;
  height: 200px;
  background: ${colors.accent};
  position: absolute;
  ${props => (props.left ? "left: -10px" : "right: -10px")};
  ${props => (props.left ? "bottom: -10px" : "top: -10px")};
  z-index: 1;

  @media ${screens.laptop} {
    ${props => (props.left ? "left: -25px" : "right: -25px")};
    ${props => (props.left ? "bottom: -25px" : "top: -25px")};
  }
`

export default class development extends PureComponent {
  constructor() {
    super()
    this.state = {
      start: 100,
      played: false,
      typingDone: false,
    }
    this.mainRef = React.createRef()
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  render() {
    const { data } = this.props
    const { start, played, typingDone } = this.state
    return (
      <Layout>
        <SEO
          title="Development"
          description="Web and mobile projects made by Michiel Leunens, Leunes Media"
        />
        <TypeContainer>
          <Typist
            startDelay={1500}
            avgTypingDelay={100}
            stdTypingDelay={50}
            onTypingDone={() => {
              this.setState({ typingDone: true })
            }}
          >
            I'm a ner
            <Typist.Backspace count={3} delay={300} />
            developer.
          </Typist>
          <DownScroll
            done={typingDone}
            onClick={() => {
              this.scroll(this.mainRef)
            }}
          >
            <Chevron />
          </DownScroll>
        </TypeContainer>
        <HeaderImage
          alt="Laptop and Coffee"
          fluid={data.headerImage.childImageSharp.fluid}
        />
        <VisibilitySensor
          partialVisibility
          onChange={isVisible => {
            this.setState({ start: isVisible && !played ? 0 : 100 })
          }}
        >
          <OrganicContainer ref={this.mainRef}>
            <OrganicText>
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
                made of organic code.
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
        <TwallieContainer>
          <TwallieSecondContainer>
            <TwallieSiteImg
              alt="Screenshot of the website of DJ Twallie, made by Michiel Leunens"
              objectFit="cover"
              objectPosition="50% 50%"
              fluid={data.twallieImage.childImageSharp.fluid}
            />
            <TwallieCard>
              <UpperCard>
                <CardTitle>
                  <CardHeader>Twallie</CardHeader>
                  <CardSubHeader>website</CardSubHeader>
                </CardTitle>
                <CardDivider />
                <CardDescription>
                  A website for the
                  <br />
                  Belgian DJ: Twallie
                </CardDescription>
                <CardTechs>
                  <CardTech>Gatsby.js</CardTech>
                  <CardTech>React</CardTech>
                  <CardTech>NetlifyCMS</CardTech>
                </CardTechs>
              </UpperCard>
              <LowerCard>
                <StyledAnchor
                  href="https://www.deejaytwallie.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to site
                </StyledAnchor>
                <Status>
                  <span>Status:</span> published
                </Status>
              </LowerCard>
            </TwallieCard>
          </TwallieSecondContainer>
        </TwallieContainer>
        <ArtistHuntContainer>
          <AHHeader>
            <AHTitle>Artist Hunt.</AHTitle>
            <AHSubtitle>
              An app for musicians, by fellow musicians. Find eachother, colab
              and make some new music together!
            </AHSubtitle>
          </AHHeader>
          <AHBody>
            <AHBodyTitle>An exceptional concept app.</AHBodyTitle>
            <AHBodyDescription>
              My Master Thesis submitted for Applied Computer Sciences. From
              design to code. Exceptional remarks.
            </AHBodyDescription>
          </AHBody>
          <AvailableOn>
            <AvailableText>
              Available On <br />
              <span>*Unpublished</span>
            </AvailableText>
            <AndroidLogo />
            <AppleLogo />
          </AvailableOn>
          <ArtistHuntImage>
            <Img
              alt="Phone with the Artisthunt app, an app made by Michiel Leunens"
              fluid={data.artistHuntImage.childImageSharp.fluid}
            />
          </ArtistHuntImage>
        </ArtistHuntContainer>
        <MindFulnessContainer>
          <MindFulnessImage>
            <Img
              alt="Phone with the Mindfulness app, an app made by Michiel Leunens and his co-students"
              fluid={data.mindfulnessImage.childImageSharp.fluid}
            />
          </MindFulnessImage>
          <MindFulnessTextContainer>
            <MindfulLogo />
            <MFHeader>
              <MFTitle>
                Mindfulness.
                <br />
                Stay happy.
              </MFTitle>
              <MFDescription>
                Made for psychologist Pieter-Jan De Schryver and coworkers.
                Taking mindfulness sessions to the next step.
              </MFDescription>
            </MFHeader>
            <MFBody>
              <MFBodyTitle>From school project to contract.</MFBodyTitle>
              <MFBodyDescription>
                Because of its success, HoGhent gave us the opportunity to work
                closer with the client.
              </MFBodyDescription>
            </MFBody>
            <AvailableOn>
              <AvailableText>
                Available On <br />
                <span>*Unpublished</span>
              </AvailableText>
              <AndroidLogo />
            </AvailableOn>
          </MindFulnessTextContainer>
        </MindFulnessContainer>
        <GhenterpriseContainer>
          <GhenterpriseInnerContainer>
            <GPHeader>
              <GPTitle>Ghenterprise.</GPTitle>
              <GPDescription>
                An app for the Universal Windows Platform, or UWP for short. Get
                your business out there. Share events. Watch for promotions. Be
                Ghent.
              </GPDescription>
            </GPHeader>
            <AvailableOn>
              <AvailableText accent="#BB0E6F">
                Available On <br />
                <span>*Unpublished</span>
              </AvailableText>
              <WindowsLogo accent="#BB0E6F" />
            </AvailableOn>
          </GhenterpriseInnerContainer>
          <GhenterpriseImage>
            <Img
              alt="Screenshot of the Ghenterprise UWP app, an app made by Michiel Leunens"
              fluid={data.gpImage.childImageSharp.fluid}
            />
          </GhenterpriseImage>
        </GhenterpriseContainer>
        <MoroccoContainer>
          <MoroccoInnerContainer>
            <MoroccoImage>
              <Img
                alt="Screenshot of the website of Morocco-Adventures-travel.com, a website made by Michiel Leunens"
                fluid={data.moroccoImage.childImageSharp.fluid}
              />
              <MoroccoBG left />
              <MoroccoBG />
            </MoroccoImage>
            <MorrocoCard>
              <UpperCard>
                <CardTitle>
                  <CardHeader>Morocco Adventures Travel</CardHeader>
                  <CardSubHeader>website</CardSubHeader>
                </CardTitle>
                <CardDivider />
                <CardDescription>
                  Belgian based travel agency for memorable trips to Morocco.
                </CardDescription>
                <CardTechs>
                  <CardTech>JavaScript</CardTech>
                  <CardTech>HTML</CardTech>
                  <CardTech>CSS</CardTech>
                </CardTechs>
              </UpperCard>
              <LowerCard>
                <StyledAnchor
                  href="https://www.moroccoadventures-travel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to site
                </StyledAnchor>
                <Status>
                  <span>Status:</span> published
                </Status>
              </LowerCard>
            </MorrocoCard>
          </MoroccoInnerContainer>
        </MoroccoContainer>
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
    twallieImage: file(relativePath: { eq: "twallie.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    artistHuntImage: file(relativePath: { eq: "artist-hunt.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    mindfulnessImage: file(relativePath: { eq: "mindfulness.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    gpImage: file(relativePath: { eq: "ghenterprise.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    moroccoImage: file(relativePath: { eq: "moroccoadv.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
