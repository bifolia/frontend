import './index.scss'
import { Component, Result } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiHomepage: Result<{
    description: string
    body: Component[]
  }>
}

const IndexPage: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiHomepage: {
      data: {
        attributes: { description, body },
      },
    },
  },
}) => (
  <Layout>
    <SEO title="" description={description} />
    <Body components={body} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    strapiHomepage {
      data {
        attributes {
          description
          body {
            strapi_component
            layout {
              position
              len
            }
            content
            is_large
            marginless
            caption
            url
            source {
              data {
                attributes {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 1920
                        quality: 100
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
