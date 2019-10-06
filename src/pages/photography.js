import React, { PureComponent } from "react"
import Swiper from "react-id-swiper"
import styled from "styled-components"

import Layout from "../components/layout"
import Gallery from "../components/Framework/Gallery"

import "react-id-swiper/lib/styles/css/swiper.css"

const PhotoContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

export default class photography extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <PhotoContainer>
          {/* {data.allFile.edges.map(edge => (
              <Img
                key={edge.node.childImageSharp.fluid.originalName}
                alt={edge.node.childImageSharp.fluid.originalName}
                fluid={edge.node.childImageSharp.fluid}
              />
            ))} */}
          <Gallery
            itemsPerRow={2} // This will be changed to `[2, 3]` later
            images={data.allFile.edges.map(({ node }) => ({
              ...node.childImageSharp.fluid,
            }))}
          />
        </PhotoContainer>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "photography/wedding" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 85) {
              presentationWidth
              presentationHeight
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
