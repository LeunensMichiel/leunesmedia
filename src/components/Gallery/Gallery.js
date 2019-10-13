import React, { PureComponent } from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import { PopupboxManager, PopupboxContainer } from "react-popupbox"
import { StaticQuery, graphql } from "gatsby"
import _ from "lodash"

import "react-popupbox/dist/react-popupbox.css"

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 0.66em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(3em, auto);
  grid-auto-flow: dense;
`

const GridItem = styled.div`
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-out all;
    filter: brightness(0.7);
  }

  @media (min-width: 769px) {
    &:nth-child(4n - 1) {
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

export default class Gallery extends PureComponent {
  openPopupbox(e, image) {
    const content = (
      <Img
        alt={image.originalName}
        fluid={image}
        objectFit="contain"
        objectPosition="50% 50%"
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
    return (
      <>
        <ImageGrid>
          <PopupboxContainer />
          {images.map((image, i) => (
            <GridItem
              key={image.node.childImageSharp.fluid.src}
              onClick={e =>
                this.openPopupbox(e, image.node.childImageSharp.fluid)
              }
            >
              <Img
                alt={image.node.childImageSharp.fluid.originalName}
                fluid={image.node.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </GridItem>
          ))}
        </ImageGrid>
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
                    fluid(maxWidth: 1024, quality: 85) {
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
