import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/Framework/colors"
import Chevron from "../images/svgs/right-chevron.svg"

const Container = styled.div`
  min-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledHeader = styled.h1`
  margin: 0;
  font-size: 25vh;
  background: url(${props => props.src}) center;
  background-size: contain;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
const StyledAnchor = styled(Link)`
  color: ${colors.secondaryBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: 1em;
  transition: 0.2s cubic-bezier(0.19, 1, 0.22, 1) all;

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

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <StyledHeader src={data.notFound.childImageSharp.fluid.src}>
        404.
      </StyledHeader>
      <StyledAnchor to="/about">
        <span>go back</span>
        <Chevron />
      </StyledAnchor>
    </Container>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query {
    notFound: file(relativePath: { eq: "404.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024, quality: 66) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
