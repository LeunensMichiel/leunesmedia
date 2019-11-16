import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/Framework/colors"
import Chevron from "../images/svgs/right-chevron.svg"
import screens from "../components/Framework/Screens"

const Container = styled.div`
	min-width: 100%;
	min-height: 66vh;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 1.5em;
	text-align: center;

	@media ${screens.tabletland} {
		min-height: 100vh;
	}
`

const StyledHeader = styled.h1`
	margin: 0;
	font-size: 3em;
	background: url(${props => props.src}) 50% 80%;
	background-size: cover;
	background-clip: text;
	background-repeat: no-repeat;
	-webkit-background-clip: text;
	color: transparent;

	@media ${screens.tablet} {
		font-size: 8em;
	}

	@media ${screens.tabletland} {
		font-size: 8em;
	}

	@media ${screens.laptop} {
		font-size: 10em;
	}
`
const StyledMessage = styled.p`
	font-size: 0.8em;
	color: ${colors.secondaryBlack};
	width: 80%;
	margin: 1em 0;

	@media ${screens.tablet} {
		font-size: 1em;
	}
`
const StyledAnchor = styled.a`
	color: ${colors.secondaryBlack};
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	margin-top: 1em;
	transition: 0.2s cubic-bezier(0.19, 1, 0.22, 1) all;
	cursor: pointer;

	&:hover,
	&:active {
		color: ${colors.black};
		span {
			border-color: ${colors.secondaryBlack};
		}
	}

	span {
		border-bottom: 1px solid ${colors.accent};
	}

	svg {
		margin-left: 12px;
		height: 0.8em;
		width: 1em;
	}
`

const SuccessPage = ({ data, intl }) => (
	<Layout>
		<SEO title='Message sent' />
		<Container>
			<StyledHeader src={data.notFound.childImageSharp.fluid.src}>
				{intl.formatMessage({ id: "general.success" })}
			</StyledHeader>
			<StyledMessage>{intl.formatMessage({ id: "general.successmessage" })}</StyledMessage>
			<StyledAnchor
				onClick={e => {
					e.preventDefault()
					window.history.back()
				}}
			>
				<span>{intl.formatMessage({ id: "general.goback" })}</span>
				<Chevron />
			</StyledAnchor>
		</Container>
	</Layout>
)

export default injectIntl(SuccessPage)

export const query = graphql`
	query {
		notFound: file(relativePath: { eq: "mainsection1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1024, quality: 66) {
					presentationWidth
					presentationHeight
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
