import React, { PureComponent } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

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
  width: 95%;
  height: 66vh;
  margin-right: auto;

  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 25;
  background: ${colors.white};
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
  width: 50%;
  margin-left: 2px;
  margin-bottom: 0.5em;
  fill: ${colors.black} !important;
`

export default class contact extends PureComponent {
  render() {
    return (
      <Layout>
        <SEO
          title="Contact"
          description="Contact Michiel Leunens, Leunes Media"
        />

        <ContactContainer>
          <ContactCard>
            <h1>lol</h1>
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
      </Layout>
    )
  }
}
