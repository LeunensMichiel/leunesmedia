import React from "react"
import styled from "styled-components"

import colors from "../Framework/colors"
import LMLogo from "../../images/svgs/logoblack.svg"

import { IconContext } from "react-icons"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const FooterContainer = styled.footer`
  width: 100%;
  height: 266px;
  background: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
  width: 100%;
  max-width: 330px;
  margin-bottom: 0.5em;
  fill: ${colors.white} !important;
`

const Copyright = styled.p`
  color: ${colors.secondaryBlack};
  margin: 0;
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
  width: 100%;
  justify-content: center;
  color: ${colors.secondaryBlack};
`

const StyledSpan = styled.span`
  border-bottom: 1px solid
    ${props =>
      props.active === "true" ? `${colors.secondaryBlack}` : "transparent"};
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    color: ${colors.secondaryWhite};
  }
`
const Footer = () => {
  return (
    <IconContext.Provider value={{ className: "social__icons" }}>
      <FooterContainer>
        <FooterLine />
        <TextContainer>
          <Logo />
          <Copyright>
            &copy; {new Date().getFullYear()}. All Rights Reserved.
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
          <StyledSpan active="false">nl</StyledSpan>
          &nbsp;|&nbsp;
          <StyledSpan active="true">en</StyledSpan>
        </LangContainer>
      </FooterContainer>
    </IconContext.Provider>
  )
}

export default Footer
