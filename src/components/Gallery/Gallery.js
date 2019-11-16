import React, { PureComponent } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import _ from "lodash"
import { injectIntl } from "gatsby-plugin-intl"

import "react-popupbox/dist/react-popupbox.css"
import screens from "../Framework/Screens"

const ImageGrid = styled.div`
	padding: 0 0.66em;
	display: grid;
	grid-auto-rows: minmax(3em, auto);
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-auto-flow: dense;
	grid-gap: 0.66em;

	@media ${screens.laptop} {
		padding: 0;
	}

	@media ${screens.ipadProPortrait} {
		padding: 0 0.66em;
	}

	@media ${screens.tabletland} {
		padding: 0 0.66em;
	}
`

const GridItem = styled.div`
	cursor: pointer;
	&:hover {
		transition: 0.1s ease-out all;
		filter: brightness(0.7);
	}

	@media ${screens.tablet} {
		&:nth-child(4n) {
			grid-column: span 2;
			grid-row: span 2;
		}
	}

	.gatsby-image-wrapper {
		display: flex;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Soon = styled.h2`
	text-transform: uppercase;
	font-weight: 300;
	margin: 10.1vh auto;
	display: block;
	text-align: center;
`

class Gallery extends PureComponent {
	openPopupbox(e, image) {
		const content = (
			<Img
				alt={image.originalName}
				fluid={image}
				objectFit='contain'
				objectPosition='50% 50%'
				style={{
					maxWidth: "90vh",
					maxHeight: "90vh",
					margin: "0 auto",
					width: "100%",
					flex: 1,
				}}
				imgStyle={{ height: "auto", maxWidth: "100%", maxHeight: "100%" }}
			/>
		)
		PopupboxManager.open({
			content,
			config: {
				fadeIn: true,
				fadeInSpeed: 100,
				fadeOutSpeed: 100,
				className: "custom__popup",
			},
		})
	}
	renderImages(images) {
		const { intl } = this.props
		return (
			<>
				<ImageGrid>
					<PopupboxContainer />
					{images.map((image, i) => (
						<GridItem
							key={image.node.childImageSharp.fluid.src}
							onClick={e => this.openPopupbox(e, image.node.childImageSharp.fluid)}
						>
							<Img
								alt={image.node.childImageSharp.fluid.originalName}
								fluid={image.node.childImageSharp.fluid}
								objectFit='cover'
								objectPosition='50% 50%'
							/>
						</GridItem>
					))}
				</ImageGrid>
				{images.length === 0 && <Soon>{intl.formatMessage({ id: "photography.more" })}</Soon>}
			</>
		)
	}

	render() {
		const { type } = this.props
		return (
			<StaticQuery
				query={graphql`
					query {
						images: allFile(
							filter: { relativeDirectory: { glob: "photography/*" } }
							sort: { fields: name }
						) {
							edges {
								node {
									childImageSharp {
										fluid(maxWidth: 1080, quality: 100) {
											presentationWidth
											presentationHeight
											...GatsbyImageSharpFluid_withWebp_tracedSVG
										}
									}
									relativeDirectory
								}
							}
						}
					}
				`}
				render={({ images }) => {
					const finalImages = _.filter(images.edges, img => {
						return img.node.relativeDirectory.includes(type)
					})

					return this.renderImages(finalImages)
				}}
			/>
		)
	}
}

export default injectIntl(Gallery)
