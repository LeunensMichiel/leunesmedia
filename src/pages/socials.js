import React, { PureComponent } from "react"
import styled from "styled-components"
import ReactTooltip from "react-tooltip"
import { Helmet } from "react-helmet"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import screens from "../components/Framework/Screens"

const SocialsContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: 20.2vh auto 10.1vh auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media ${screens.mobileSLandscape} {
		margin-top: 30vh;
	}
	@media ${screens.mobileMLandscape} {
		margin-top: 30vh;
	}
	@media ${screens.tabletland} {
		margin-top: 30vh;
	}
`

const StyledP = styled.p`
	margin-bottom: 0;
	color: ${colors.secondaryBlack};
	text-align: center;
	font-size: 0.8em;
	padding: 0 1.5em;

	@media ${screens.tablet} {
		font-size: 1em;
	}
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
	font-size: 0.9em;

	@media ${screens.tablet} {
		font-size: 1em;
	}
`

class soials extends PureComponent {
	render() {
		const { intl } = this.props
		return (
			<Layout>
				<SEO title={intl.formatMessage({ id: "SEO.socialsTitle" })} description={intl.formatMessage({ id: "SEO.socialsDesc" })} />
				<SocialsContainer>
					<StyledP>{intl.formatMessage({ id: "socials.desc" })}</StyledP>
					<SocialIconsContainer>
						<a
							href='https://www.facebook.com/leunesmedia'
							target='_blank'
							rel='noopener noreferrer'
							data-tip
							data-for='fb'
						>
							<FaFacebookSquare />
						</a>
						<ReactTooltip place='bottom' type='dark' effect='solid' id='fb' className='tooltip'>
							<ToolTipText>{intl.formatMessage({ id: "socials.icon1" })}</ToolTipText>
						</ReactTooltip>
						<a
							href='https://www.instagram.com/leunesmedia/'
							target='_blank'
							rel='noopener noreferrer'
							data-tip
							data-for='insta'
						>
							<FaInstagram />
						</a>
						<ReactTooltip place='bottom' type='dark' effect='solid' id='insta' className='tooltip'>
							<ToolTipText>{intl.formatMessage({ id: "socials.icon2" })}</ToolTipText>
						</ReactTooltip>
						<a
							href='https://github.com/LeunensMichiel'
							target='_blank'
							rel='noopener noreferrer'
							data-tip
							data-for='git'
						>
							<FaGithub />
						</a>
						<ReactTooltip place='bottom' type='dark' effect='solid' id='git' className='tooltip'>
							<ToolTipText>{intl.formatMessage({ id: "socials.icon3" })}</ToolTipText>
						</ReactTooltip>
						<a
							href='https://www.youtube.com/channel/UCpda_H78C5yQT1Mwm4NRgpw'
							target='_blank'
							rel='noopener noreferrer'
							data-tip
							data-for='yt'
						>
							<FaYoutube />
						</a>
						<ReactTooltip place='bottom' type='dark' effect='solid' id='yt' className='tooltip'>
							<ToolTipText>{intl.formatMessage({ id: "socials.icon4" })}</ToolTipText>
						</ReactTooltip>
						<a
							href='https://www.linkedin.com/in/michielleunens/'
							target='_blank'
							rel='noopener noreferrer'
							data-tip
							data-for='linkedin'
						>
							<FaLinkedinIn />
						</a>
						<ReactTooltip
							place='bottom'
							type='dark'
							effect='solid'
							id='linkedin'
							className='tooltip'
						>
							<ToolTipText>{intl.formatMessage({ id: "socials.icon5" })}</ToolTipText>
						</ReactTooltip>
					</SocialIconsContainer>
					<Helmet>
						<script src='https://cdn.lightwidget.com/widgets/lightwidget.js'></script>
					</Helmet>
					<iframe
						src='https://cdn.lightwidget.com/widgets/5dc12e42abcb5e97b5f3fd2ee0589eb4.html'
						scrolling='no'
						allowtransparency='true'
						title='Instagram feed Leunes Media'
						className='lightwidget-widget'
					></iframe>
				</SocialsContainer>
			</Layout>
		)
	}
}
export default injectIntl(soials)
