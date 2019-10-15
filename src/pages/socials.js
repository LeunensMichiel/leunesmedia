import React, { PureComponent } from "react"
import styled from "styled-components"
import ReactTooltip from "react-tooltip"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const SocialsContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20.2vh auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledP = styled.p`
  margin-bottom: 0;
  color: ${colors.secondaryBlack};
  text-align: center;
`

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  width: 100%;
  margin: 1em 0;
`

const ToolTipText = styled.div`
  color: ${colors.white};
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 1em;
`

export default class photography extends PureComponent {
  render() {
    return (
      <Layout>
        <SEO title="Socials" description="Socials of Leunes Media" />
        <SocialsContainer>
          <StyledP>
            Want to know what I'm up to or see more of my work? Follow me on
            these platforms!
          </StyledP>
          <SocialIconsContainer>
            <a
              href="https://www.facebook.com/leunesmedia"
              target="_blank"
              rel="noopener noreferrer"
              data-tip
              data-for="fb"
            >
              <FaFacebookSquare />
            </a>
            <ReactTooltip
              place="bottom"
              type="dark"
              effect="solid"
              id="fb"
              className="tooltip"
            >
              <ToolTipText>facebook-page</ToolTipText>
            </ReactTooltip>
            <a
              href="https://www.instagram.com/leunesmedia/"
              target="_blank"
              rel="noopener noreferrer"
              data-tip
              data-for="insta"
            >
              <FaInstagram />
            </a>
            <ReactTooltip
              place="bottom"
              type="dark"
              effect="solid"
              id="insta"
              className="tooltip"
            >
              <ToolTipText>the gram</ToolTipText>
            </ReactTooltip>
            <a
              href="https://github.com/LeunensMichiel"
              target="_blank"
              rel="noopener noreferrer"
              data-tip
              data-for="git"
            >
              <FaGithub />
            </a>
            <ReactTooltip
              place="bottom"
              type="dark"
              effect="solid"
              id="git"
              className="tooltip"
            >
              <ToolTipText>dev-stuff</ToolTipText>
            </ReactTooltip>
            <a
              href="https://www.youtube.com/channel/UCpda_H78C5yQT1Mwm4NRgpw"
              target="_blank"
              rel="noopener noreferrer"
              data-tip
              data-for="yt"
            >
              <FaYoutube />
            </a>
            <ReactTooltip
              place="bottom"
              type="dark"
              effect="solid"
              id="yt"
              className="tooltip"
            >
              <ToolTipText>creator-life</ToolTipText>
            </ReactTooltip>
            <a
              href="https://www.linkedin.com/in/michielleunens/"
              target="_blank"
              rel="noopener noreferrer"
              data-tip
              data-for="linkedin"
            >
              <FaLinkedinIn />
            </a>
            <ReactTooltip
              place="bottom"
              type="dark"
              effect="solid"
              id="linkedin"
              className="tooltip"
            >
              <ToolTipText>hire me</ToolTipText>
            </ReactTooltip>
          </SocialIconsContainer>
          <Helmet>
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
          </Helmet>
          <iframe
            src="//lightwidget.com/widgets/5dc12e42abcb5e97b5f3fd2ee0589eb4.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget"
          ></iframe>
        </SocialsContainer>
      </Layout>
    )
  }
}
