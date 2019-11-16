import React, { PureComponent } from "react"
import styled from "styled-components"
import MapGL, {
  Marker,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"

import Logo from "../images/svgs/logoblack.svg"
import Pin from "../images/svgs/marker-15.svg"

import "mapbox-gl/dist/mapbox-gl.css"
import screens from "../components/Framework/Screens"

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 20.2vh auto 0 auto;
  margin-bottom: 10.1vh;

  @media ${screens.ipadProPortrait} {
    min-height: 66vh;
  }
`

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 95%;
  min-height: 60vh;
  margin-right: auto;
  margin-left: auto;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 25;
  background: ${colors.white};
  padding: 1.5em;

  @media ${screens.laptop} {
    min-height: 60vh;
    margin-left: unset;
    padding: 2.5em;
  }
  @media ${screens.ipadProPortrait} {
    margin-left: auto;
    min-height: 45vh;
  }
  @media ${screens.tabletland} {
    margin-left: auto;
  }
`

const ContactAccent = styled.div`
  width: 60%;
  height: 250px;
  background: ${colors.accent};
  position: absolute;
  top: -10px;
  right: 0;
  z-index: 1;

  @media ${screens.laptop} {
    top: -2.5%;
    right: 2.5%;
  }

  @media ${screens.ipadProPortrait} {
    right: 0;
  }
  @media ${screens.tabletland} {
    right: 0;
  }
`

const CardHeader = styled.h1`
  margin: 0;
  font-size: 2.5em;
  width: 100%;

  @media ${screens.laptop} {
    font-size: 4em;
  }
`

const Information = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  @media ${screens.tablet} {
    flex-direction: row;
  }
`

const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.secondaryBlack};
  margin: 0.5em 0;

  @media ${screens.tablet} {
    align-items: flex-start;
  }
`

const InformationTitle = styled.p`
  margin: 0;
  font-weight: 700;
`

const InformationContent = styled.p`
  margin: 0;
`

const StyledLogo = styled(Logo)`
  width: 150px;
  margin-left: 2px;
  margin-bottom: 0.5em;
  fill: ${colors.black} !important;
`

const Form = styled.form`
  margin: 0;
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;

  @media ${screens.laptop} {
    flex-direction: row;
  }
`

const FirstColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 1em;

  @media ${screens.laptop} {
    margin-right: 1em;
  }
`

const SecondColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  @media ${screens.laptop} {
    margin-left: 1em;
  }
`

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 1em;

  &.textareaContainer {
    height: 100%;
  }

  @media ${screens.laptop} {
    margin-bottom: 1em;
  }
`

const StyledLabel = styled.label`
  font-size: 0.7em;
  color: ${colors.secondaryBlack};

  sup {
    vertical-align: text-top;
  }
`

const StyledInput = styled.input`
  width: 100%;
  padding: 0.33em 0;
  border: none;
  color: ${colors.secondaryBlack};
  border-bottom: 2px solid ${colors.secondaryBlack};
  z-index: 4;
  & + .bar {
    display: block;
    height: 2px;
    width: 0;
    background: ${colors.accent};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:focus + .bar {
    width: 100%;
  }
`

const StyledButton = styled.button`
  cursor: pointer;
  margin-top: 38px;
  color: ${colors.accent};
  text-decoration: none;
  font-family: "Open Sans";
  font-weight: 500;
  text-transform: uppercase;
  border: 2px solid ${colors.accent};
  border-radius: 2px;
  padding: 0.5em 3.3em;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
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

const StyledTextbox = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 0.33em 0;
  border: none;
  color: ${colors.secondaryBlack};
  border-bottom: 2px solid ${colors.secondaryBlack};
  z-index: 4;
  resize: none;

  & + .bar {
    display: block;
    height: 2px;
    width: 0;
    background: ${colors.accent};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &:focus + .bar {
    width: 100%;
  }

  @media ${screens.laptop} {
    height: 100%;
  }
`

const Annotation = styled.span`
  font-size: 0.6em;
  color: ${colors.secondaryBlack};
  position: absolute;
  left: 0;
  bottom: -2.5em;
`

export default class contact extends PureComponent {
  constructor() {
    super()
    this.state = {
      viewport: {
        longitude: 3.724524,
        latitude: 51.040051,
        zoom: 15.4,
      },
    }
  }

  updateViewport = viewport => {
    this.setState({ viewport })
  }

  render() {
    const { viewport } = this.state

    return (
      <Layout>
        <SEO
          title="Contact"
          description="Contact Michiel Leunens, Leunes Media"
        />

        <ContactContainer>
          <ContactCard>
            <CardHeader>Let's get in touch.</CardHeader>
            <Form
              name="contact"
              method="post"
              action="/home"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input name="bot-field" style={{ display: "none" }} />
              <FirstColumn>
                <InputContainer>
                  <StyledLabel htmlFor="firstName">
                    First Name<sup>*</sup>
                  </StyledLabel>
                  <StyledInput
                    type="text"
                    placeholder="Enter your first name"
                    id="firstName"
                    name="firstName"
                    required
                  />
                  <div className="bar" />
                </InputContainer>
                <InputContainer>
                  <StyledLabel htmlFor="lastName">
                    Last Name<sup>*</sup>
                  </StyledLabel>
                  <StyledInput
                    type="text"
                    placeholder="Enter your last name"
                    id="lastName"
                    name="lastName"
                    required
                  />
                  <div className="bar" />
                </InputContainer>
                <InputContainer>
                  <StyledLabel htmlFor="email">
                    Email<sup>*</sup>
                  </StyledLabel>
                  <StyledInput
                    type="email"
                    placeholder="Enter your email address"
                    id="email"
                    name="email"
                    required
                  />
                  <div className="bar" />
                </InputContainer>
                <InputContainer>
                  <StyledLabel htmlFor="phone">Phone</StyledLabel>
                  <StyledInput
                    type="tel"
                    placeholder="Enter your phone number"
                    id="phone"
                    name="phone"
                  />
                  <div className="bar" />
                </InputContainer>
                <InputContainer>
                  <StyledLabel htmlFor="subject">
                    Subject<sup>*</sup>
                  </StyledLabel>
                  <StyledInput
                    type="text"
                    placeholder="Enter subject"
                    id="subject"
                    name="subject"
                    required
                  />
                  <div className="bar" />
                </InputContainer>
              </FirstColumn>
              <SecondColumn>
                <InputContainer className="textareaContainer">
                  <StyledLabel htmlFor="message">
                    Message<sup>*</sup>
                  </StyledLabel>
                  <StyledTextbox
                    required
                    placeholder="What's up?"
                    id="message"
                    name="message"
                  />
                  <div className="bar" />
                  <Annotation>fields with * are required</Annotation>
                </InputContainer>
                <StyledButton type="submit">Send</StyledButton>
              </SecondColumn>
            </Form>
          </ContactCard>
          <ContactAccent />
          <Information>
            <InformationBlock>
              <StyledLogo />
              <InformationTitle>Michiel Leunens</InformationTitle>
              <InformationContent>michiel.leunens@gmail.com</InformationContent>
              <InformationContent>+32 483 07 55 26</InformationContent>
              <InformationContent>BE 0712.671.569</InformationContent>
            </InformationBlock>
            <InformationBlock>
              <InformationTitle>Address 1</InformationTitle>
              <InformationContent>Herdebeekstraat 334</InformationContent>
              <InformationContent>1701 Itterbeek</InformationContent>
              <InformationContent>Belgium</InformationContent>
            </InformationBlock>
            <InformationBlock>
              <InformationTitle>Address 2</InformationTitle>
              <InformationContent>Kattenberg 71</InformationContent>
              <InformationContent>9000 Ghent</InformationContent>
              <InformationContent>Belgium</InformationContent>
            </InformationBlock>
          </Information>
        </ContactContainer>
        <MapGL
          {...viewport}
          width="100%"
          height="50vh"
          mapStyle={`${process.env.GATSBY_MAP_STYLE}`}
          onViewportChange={this.updateViewport}
          mapboxApiAccessToken={`${process.env.GATSBY_MAP_API}`}
        >
          <div style={{ position: "absolute", right: 10, top: 10 }}>
            <FullscreenControl />
          </div>
          <div style={{ position: "absolute", right: 10, top: 50 }}>
            <NavigationControl />
          </div>
          <Marker
            longitude={3.724524}
            latitude={51.040051}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Pin />
          </Marker>
          <Marker
            longitude={4.235968}
            latitude={50.821324}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Pin />
          </Marker>
        </MapGL>
      </Layout>
    )
  }
}
