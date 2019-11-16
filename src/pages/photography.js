import React, { PureComponent } from "react"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Gallery from "../components/Gallery/Gallery"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"
import screens from "../components/Framework/Screens"

const PhotoContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: 0 auto 10.1vh auto;
`

const Menu = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	align-items: center;
	margin: 20.2vh 0 10.1vh 0;

	@media ${screens.laptop} {
		flex-direction: row;
		margin: 10.1vh 0;
	}

	@media ${screens.ipadProPortrait} {
		flex-direction: column;
		margin: 20.2vh 0 10.1vh 0;
	}

	@media ${screens.tabletland} {
		padding: 0 3em;
	}
`

const MenuItem = styled.a`
	font-family: "Open Sans";
	text-transform: uppercase;
	font-size: 2em;
	font-weight: 200;
	color: ${props => (props.active ? colors.black : colors.secondaryBlack)};
	transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
	-webkit-backface-visibility: hidden;
	cursor: pointer;

	&:hover {
		color: ${colors.black};
	}

	@media ${screens.laptop} {
		margin-left: 1em;
	}

	@media ${screens.ipadProPortrait} {
		margin-left: 0;
	}
`

class photography extends PureComponent {
	state = {
		type: "event",
	}

	onChangeMenuItem = type => {
		this.setState({
			type,
		})
	}

	render() {
		const { intl } = this.props
		const { type } = this.state
		return (
			<Layout>
				<SEO title={intl.formatMessage({ id: "SEO.photoTitle" })} description={intl.formatMessage({ id: "SEO.photoDesc" })} />
				<PhotoContainer>
					<Menu>
						<MenuItem onClick={() => this.onChangeMenuItem("event")} active={type === "event"}>
							{intl.formatMessage({ id: "photography.event" })}
						</MenuItem>
						<MenuItem
							onClick={() => this.onChangeMenuItem("portrait")}
							active={type === "portrait"}
						>
							{intl.formatMessage({ id: "photography.portrait" })}
						</MenuItem>
						<MenuItem onClick={() => this.onChangeMenuItem("wedding")} active={type === "wedding"}>
							{intl.formatMessage({ id: "photography.wedding" })}
						</MenuItem>
						<MenuItem
							onClick={() => this.onChangeMenuItem("landscape")}
							active={type === "landscape"}
						>
							{intl.formatMessage({ id: "photography.landscape" })}
						</MenuItem>
					</Menu>
					<Gallery type={type} />
				</PhotoContainer>
			</Layout>
		)
	}
}

export default injectIntl(photography)
