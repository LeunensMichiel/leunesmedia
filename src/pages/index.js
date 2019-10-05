import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"

import colors from "../components/Framework/colors"
import Layout from "../components/layout"
import Backdrop from "../components/Framework/Overlay"
// import SEO from "../components/seo"

const Jumbotron = styled.div`
  display: flex;
  position: relative;
  min-width: 100%;
  min-height: 95vh;
  background-color: ${colors.secondaryBlack};
`

const MainImage = styled.div`
  max-height: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Jumbotron>
      {data.mainImage && (
        <MainImage>
          <Backdrop />
          <Img
            fluid={data.mainImage.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Picture of me sitting on a bench"
            title="Main Page Header"
            style={{ position: "static" }}
          />
        </MainImage>
      )}
    </Jumbotron>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    mainImage: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
