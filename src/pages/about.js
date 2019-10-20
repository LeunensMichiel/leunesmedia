import React, { PureComponent } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"

import Chevron from "../images/svgs/right-chevron.svg"
import Lightroom from "../images/svgs/lr.svg"
import Premiere from "../images/svgs/pp.svg"
import Photoshop from "../images/svgs/ps.svg"
import AE from "../images/svgs/ae.svg"
import XD from "../images/svgs/xd.svg"
import Illustrator from "../images/svgs/ai.svg"

const AboutContainer = styled.div`
  min-height: 85vh;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  padding: 20.2vh 0;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
`

const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 2;
`

const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
`

const AboutTitle = styled.h1`
  margin: 0;
  font-size: 1.4em;
`

const AboutSubTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  margin: 0 0 0.8em 0;
  font-weight: 300;
  color: ${colors.secondaryBlack};
`

const AboutDivider = styled.div`
  content: "";
  width: 60px;
  height: 2px;
  background: ${colors.accent};
`

const AboutParagraph = styled.p`
  color: ${colors.secondaryBlack};
  text-align: justify;
  font-size: 0.9em;
`

const AboutSocialSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialSkill = styled.span`
  background: ${colors.accent};
  color: ${colors.white};
  font-size: 0.7em;
  margin: 0 0.5em;
  padding: 0.33em 0.66em;
  border-radius: 50px;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:hover,
  &:focus {
    color: ${colors.black};
  }
`

const DownScroll = styled.div`
  position: absolute;
  bottom: 1em;
  left: 50%;
  margin-left: -50vh;
  right: 50%;
  margin-right: -50vh;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.secondaryBlack};
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

const AboutImg = styled(Img)`
  flex: 1;
  margin-right: 5em;
`

const SkillsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 15.1vh 0;
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: relative;
  background: ${colors.black};
  color: ${colors.white};
  text-align: right;
  overflow: hidden;
`

const SkillsInnerContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 4;
`

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex: 1;
  width: 100%;
  margin-right: 2em;
`

const Skill = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0.2em 0;

  span {
    ${props => (!props.reverse ? "margin-right: 1.5em" : "")};
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    flex: 1;
  }
`

const Bar = styled.div`
  max-width: 350px;
  width: 100%;
  flex: 3;
  position: relative;
`

const GrayBar = styled.div`
  content: "";
  width: 100%;
  height: 2px;
  background: ${colors.secondaryBlack};
  display: block;
  position: relative;
`

const RedBar = styled.div`
  position: absolute;
  ${props => (props.reverse ? "right: 0" : "left: 0")};
  top: 0;
  content: "";
  width: ${props => (props.percentage ? props.percentage : 0)}%;
  height: 2px;
  background: ${colors.accent};
  display: block;
`

const OtherSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
  margin-left: 2em;
`

const SkillHeader = styled.h2`
  margin: 0;
  width: 80%;
  color: ${colors.white};
`

const AdobeSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(2, 50px);
  grid-gap: 16px;

  svg {
    transition: 0.2s cubic-bezier(0.19, 1, 0.22, 1);
  }

  svg:hover {
    filter: brightness(0.7);
  }
`

const Cameras = styled.div`
  display: flex;
  flex-direction: column;
`

const Camera = styled.span`
  color: ${props => (props.accent ? colors.accent : colors.secondaryWhite)};
`

const Languages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const Disclaimer = styled.span`
  color: ${colors.secondaryBlack};
  font-size: 0.7em;
`

const MySkillsBackground = styled.h1`
  color: ${colors.white};
  position: absolute;
  font-size: 15em;
  top: 0.4em;
  left: -0.3em;
  z-index: 1;
  display: block;
  margin: 0;
  opacity: 0.03;
`

const ExperienceContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10.1vh 0;
`

const ExperienceHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ExperienceTitle = styled.h1`
  margin: 0;
  font-size: 4em;
`

const ExperienceSubtitle = styled.p`
  margin: 1em 0;
  color: ${colors.secondaryBlack};
`

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 0;

  &:after {
    background-color: ${colors.accent};
    content: "";
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
  }
`

const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  position: relative;
  margin: 0.5em 0;
  width: 50%;

  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 50px;
    padding-right: 0;

    > div {
      text-align: right;
      align-items: flex-end;
      background-color: ${colors.secondaryWhite};

      h3 {
        color: ${colors.black};
      }
      p {
        color: ${colors.secondaryBlack};
      }
      span {
        right: auto;
        left: -4.75em;
      }

      &:after {
        right: auto;
        left: -7.5px;
        box-shadow: 10px 10px 25px -5px rgba(0, 0, 0, 0.1),
          10px 10px 10px -5px rgba(0, 0, 0, 0.1);
        background-color: ${colors.secondaryWhite};
      }
    }
  }
`

const TimelineItemContent = styled.div`
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background-color: ${colors.accent};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
  position: relative;
  width: 100%;
  max-width: 800px;
  text-align: left;

  &:after {
    content: " ";
    background-color: ${colors.accent};
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.1);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
  }
`

const TimelineTitle = styled.h3`
  color: ${colors.white};
`

const TimelineText = styled.p`
  color: ${colors.secondaryWhite};
  margin: 0;
  font-size: 0.9em;
`

const TimelineRectangle = styled.span`
  background: ${colors.accent};
  border-radius: 2px;
  position: absolute;
  top: calc(50% - 1em);
  right: -4.75em;
  z-index: 5;
  padding: 0.33em 0.8em;
  color: ${colors.white};
  font-family: "Open Sans";
  font-weight: 700;
`

export default class about extends PureComponent {
  constructor() {
    super()
    this.skillRef = React.createRef()
    this.expRef = React.createRef()
  }

  scroll(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO
          title="About"
          description="More information regarding Michiel Leunens, Leunes Media"
        />

        <AboutContainer>
          <AboutImg alt="Picture of me" fluid={data.me.childImageSharp.fluid} />
          <AboutTextContainer>
            <AboutHeader>
              <AboutSubTitle>My name is Michiel Leunens.</AboutSubTitle>
              <AboutTitle>
                I'm a professional photographer, developer, filmmaker and
                everything in-between.
              </AboutTitle>
            </AboutHeader>
            <AboutDivider />
            <AboutParagraph>
              Welcome to my website! If we've already met each other: glad to
              see you again! If not, well then let me introduce myself. I'm 21
              years old and currently studying Computer Sciences at the
              University of Ghent. While my studies focus on becoming a
              full-stack developer, I also strive to become a great photographer
              and filmmaker. That's why I founded Leunes Media, so I can do
              both. Let's work together!
            </AboutParagraph>
            <AboutSocialSkills>
              <SocialSkill>Team Player</SocialSkill>
              <SocialSkill>Eager Learner</SocialSkill>
              <SocialSkill>Passionate</SocialSkill>
              <SocialSkill>Social</SocialSkill>
              <SocialSkill>Coffee Lover</SocialSkill>
            </AboutSocialSkills>
          </AboutTextContainer>
          <DownScroll
            onClick={() => {
              this.scroll(this.skillRef)
            }}
          >
            <span>my skills</span>
            <Chevron />
          </DownScroll>
        </AboutContainer>
        <SkillsContainer ref={this.skillRef}>
          <MySkillsBackground>My skills.</MySkillsBackground>
          <SkillsInnerContainer>
            <Skills>
              <Skill>
                <span>JavaScript</span>
                <Bar>
                  <GrayBar />
                  <RedBar percentage="80" />
                </Bar>
              </Skill>
              <Skill>
                <span>Node.Js</span>
                <Bar>
                  <GrayBar />
                  <RedBar percentage="50" />
                </Bar>
              </Skill>
              <Skill>
                <span>React</span>
                <Bar>
                  <GrayBar />
                  <RedBar percentage="20" />
                </Bar>
              </Skill>
            </Skills>
            <OtherSkills>
              <SkillHeader>I also have an extensive knowledge of</SkillHeader>
              <AdobeSkills>
                <Premiere />
                <Photoshop />
                <Lightroom />
                <AE />
                <XD />
                <Illustrator />
              </AdobeSkills>
              <SkillHeader>Currently shooting</SkillHeader>
              <Cameras>
                <Camera accent>Sony A7III</Camera>
                <Camera>Panasonic GH5</Camera>
              </Cameras>
              <SkillHeader>I speak</SkillHeader>
              <Languages>
                <Skill reverse>
                  <span>Dutch</span>
                  <Bar>
                    <GrayBar />
                    <RedBar reverse percentage="100" />
                  </Bar>{" "}
                </Skill>
                <Skill reverse>
                  <span>French</span>
                  <Bar>
                    <GrayBar />
                    <RedBar reverse percentage="65" />
                  </Bar>{" "}
                </Skill>
                <Skill reverse>
                  <span>English</span>
                  <Bar>
                    <GrayBar />
                    <RedBar reverse percentage="80" />
                  </Bar>{" "}
                </Skill>
                <Skill reverse>
                  <span>German</span>
                  <Bar>
                    <GrayBar />
                    <RedBar reverse percentage="20" />
                  </Bar>{" "}
                </Skill>
                <Disclaimer>
                  *excluding basic knowledge of a lot of other
                  <br />
                  frameworks/libraries/software/etc
                </Disclaimer>
              </Languages>
            </OtherSkills>
          </SkillsInnerContainer>
          <DownScroll
            onClick={() => {
              this.scroll(this.expRef)
            }}
          >
            <span>experience</span>
            <Chevron />
          </DownScroll>
        </SkillsContainer>
        <ExperienceContainer ref={this.expRef}>
          <ExperienceHeader>
            <ExperienceTitle>Experience.</ExperienceTitle>
            <ExperienceSubtitle>My personal timeline</ExperienceSubtitle>
          </ExperienceHeader>
          <TimelineContainer>
            <TimelineItem>
              <TimelineItemContent>
                <TimelineTitle>Learning the basics.</TimelineTitle>
                <TimelineText>
                  It was at this age (11), that I started developing a passion
                  for computers and video, made movies and uploaded them to
                  YouTube!
                </TimelineText>
                <TimelineRectangle>2009</TimelineRectangle>
              </TimelineItemContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineItemContent>
                <TimelineTitle>First website.</TimelineTitle>
                <TimelineText>
                  6 years later. I was still as passionate about technology as
                  ever, but I did nothing with all the knowledge I had gained
                  throughout the years. Until high school asked me to develop a
                  website for the prom. I loved it.
                </TimelineText>
                <TimelineRectangle>2015</TimelineRectangle>
              </TimelineItemContent>
            </TimelineItem>
          </TimelineContainer>
        </ExperienceContainer>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    me: file(relativePath: { eq: "me.jpg" }) {
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
