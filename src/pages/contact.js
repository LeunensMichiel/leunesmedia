import React, { PureComponent } from "react"
import styled from "styled-components"
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"

import Logo from "../images/svgs/logoblack.svg"

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
`

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 95%;
  height: 66vh;
  margin-right: auto;

  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 25;
  background: ${colors.white};
  padding: 2.5em;
`

const ContactAccent = styled.div`
  width: 60%;
  height: 250px;
  background: ${colors.accent};
  position: absolute;
  top: -2.5%;
  right: 2.5%;
  z-index: 1;
`

const CardHeader = styled.h1`
  margin: 0;
  font-size: 4em;
  width: 100%;
`

const Information = styled.div`
  margin-top: 5em;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: flex-end;
`

const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${colors.secondaryBlack};
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
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
`

const FirstColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 1em;
`

const SecondColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-left: 1em;
`

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  position: relative;
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
  margin-top: 58px;
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
  height: 100%;
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
`

const Annotation = styled.span`
  font-size: 0.6em;
  color: ${colors.secondaryBlack};
  position: absolute;
  left: 0;
  bottom: -2.5em;
`

export default class contact extends PureComponent {
  render() {
    const Map = ReactMapboxGl({
      accessToken: `${process.env.MAP_API}`,
    })
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
                  <StyledLabel for="firstName">
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
                <InputContainer for="lastName">
                  <StyledLabel>
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
                  <StyledLabel for="email">
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
                  <StyledLabel for="phone">Phone</StyledLabel>
                  <StyledInput
                    type="tel"
                    placeholder="Enter your phone number"
                    id="phone"
                    name="phone"
                  />
                  <div className="bar" />
                </InputContainer>
                <InputContainer for="subject">
                  <StyledLabel>
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
                <InputContainer>
                  <StyledLabel for="message">
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
        <Map
          style={`${process.env.MAP_STYLE}`}
          zoom={[9]}
          center={[4.020963, 50.939672]}
          containerStyle={{
            height: "50vh",
            width: "100%",
          }}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[3.724524, 51.040051]} />
            <Feature coordinates={[4.235968, 50.821324]} />
          </Layer>
        </Map>
      </Layout>
    )
  }
}
