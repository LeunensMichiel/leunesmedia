import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-intl"
import SEOImage from "../images/seo.jpg"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
            twitterUsername
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaUrl = site.siteMetadata.url || "leunesmedia.com"

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <Helmet
          htmlAttributes={{
            lang: currentLocale,
          }}
          title={title}
          titleTemplate={`%s || ${site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: metaTitle,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:url`,
              content: metaUrl,
            },
            {
              property: `og:image`,
              content: SEOImage,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: site.siteMetadata.author,
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
            {
              property: `twitter:url`,
              content: metaUrl,
            },
            {
              property: `twitter:image`,
              content: SEOImage,
            },
          ].concat(meta)}
        />
      )}
    </IntlContextConsumer>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
