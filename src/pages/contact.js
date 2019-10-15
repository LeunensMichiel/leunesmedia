import React, { PureComponent } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

import Layout from "../components/layout"
import colors from "../components/Framework/colors"
import SEO from "../components/seo"

export default class contact extends PureComponent {
  render() {
    return (
      <Layout>
        <SEO
          title="Contact"
          description="Contact Michiel Leunens, Leunes Media"
        />
      </Layout>
    )
  }
}
