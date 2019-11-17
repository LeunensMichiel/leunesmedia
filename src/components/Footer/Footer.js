import React from "react"
import styled from "styled-components"
import {
  IntlContextConsumer,
  changeLocale,
  injectIntl,
} from "gatsby-plugin-intl"

import colors from "../Framework/colors"
import LMLogo from "../../images/svgs/logoblack.svg"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import screens from "../Framework/Screens"

const FooterContainer = styled.footer`
  width: 100%;
  height: 266px;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 1.5em;

  @media ${screens.laptop} {
    padding: 0;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const FooterLine = styled.div`
  position: absolute;
  top: 0;
  content: "";
  height: 3px;
  width: 80%;
  max-width: 520px;
  background-color: ${colors.accent};
`

const Logo = styled(LMLogo)`
  width: 80%;
  max-width: 330px;
  margin-bottom: 0.5em;
  fill: ${colors.white} !important;

  @media ${screens.laptop} {
    width: 100%;
  }
`

const Copyright = styled.p`
  color: ${colors.secondaryBlack};
  margin: 0;
  font-size: 0.8em;
  text-align: center;

  @media ${screens.tablet} {
    font-size: 1em;
  }
`

const SocialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 200px;
  margin: 1em 0;
`

const LangContainer = styled.div`
  display: flex;
  width: 50px;
  justify-content: space-evenly;
  color: ${colors.secondaryBlack};
`

const StyledSpan = styled.span`
  font-size: 0.8em;
  border-bottom: 1px solid
    ${props =>
      props.active === "true" ? `${colors.secondaryBlack}` : "transparent"};
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    color: ${colors.secondaryWhite};
  }

  @media ${screens.laptop} {
    font-size: 0.9em;
  }
`
const Footer = ({ intl }) => {
  return (
    <FooterContainer>
      <FooterLine />
      <TextContainer>
        <Logo />
        <Copyright>
          &copy; {new Date().getFullYear()}.{" "}
          {intl.formatMessage({ id: `general.footer` })}
        </Copyright>
      </TextContainer>
      <SocialsContainer>
        <a
          href="https://www.facebook.com/leunesmedia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/leunesmedia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/LeunensMichiel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCpda_H78C5yQT1Mwm4NRgpw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.linkedin.com/in/michielleunens/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </SocialsContainer>
      <LangContainer>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map(language => (
              <StyledSpan
                key={language}
                onClick={() => changeLocale(language)}
                active={currentLocale === language ? "true" : "false"}
              >
                {language}
              </StyledSpan>
            ))
          }
        </IntlContextConsumer>
      </LangContainer>
    </FooterContainer>
  )
}

export default injectIntl(Footer)
