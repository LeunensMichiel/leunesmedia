import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-intl"

function SEO({ description, meta, title }) {
  const { site, seoImage } = useStaticQuery(
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
        seoImage: file(relativePath: { eq: "seo.jpg" }) {
          childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaUrl = `${site.siteMetadata.url}`

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
              name: "description",
              content: metaDescription,
            },
            {
              property: "og:title",
              content: metaTitle,
            },
            {
              property: `og:url`,
              content: metaUrl,
            },
            {
              property: `og:type`,
              content: "website",
            },
            {
              property: "og:description",
              content: metaDescription,
            },
            {
              name: "twitter:creator",
              content: site.siteMetadata.author,
            },
            {
              name: "twitter:title",
              content: title,
            },
            {
              name: "twitter:description",
              content: metaDescription,
            },
            {
              name: "google-site-verification",
              content: "742YU2tHv2fwuBwpf7hkksBzsNnd4UfTfUj85XbcfBc",
            },
          ]
            .concat(
              seoImage
                ? [
                    {
                      property: "og:image",
                      content: `${site.siteMetadata.url}${seoImage.childImageSharp.original.src}`,
                    },
                    {
                      property: "og:image:url",
                      content: `${site.siteMetadata.url}${seoImage.childImageSharp.original.src}`,
                    },
                    {
                      property: "og:image:secure_url",
                      content: `${site.siteMetadata.url}${seoImage.childImageSharp.original.src}`,
                    },
                    {
                      property: "og:image:width",
                      content: seoImage.childImageSharp.original.width,
                    },
                    {
                      property: "og:image:height",
                      content: seoImage.childImageSharp.original.height,
                    },
                    {
                      property: "og:image:type",
                      content: "image/jpeg",
                    },
                    {
                      name: "twitter:card",
                      content: "summary_large_image",
                    },
                  ]
                : [
                    {
                      name: "twitter:card",
                      content: "summary",
                    },
                  ]
            )
            .concat(meta)}
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
