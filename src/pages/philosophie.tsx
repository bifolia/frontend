import './philosophie.scss'
import { Component, Page } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiRaumgestaltung: {
    description: string
    body: Component[]
  }
  strapiPflanzplanung: {
    description: string
    body: Component[]
  }
  strapiGartenentwicklung: {
    description: string
    body: Component[]
  }
}

const Philosophie: FunctionComponent<PageProps<Data>> = ({
  data: { strapiRaumgestaltung, strapiPflanzplanung, strapiGartenentwicklung },
}) => (
  <Layout page={Page.Philosophie} className="Philosophie">
    <SEO title="Philosophie" description={strapiRaumgestaltung.description} />

    <Body components={strapiRaumgestaltung.body} />
    <Body components={strapiPflanzplanung.body} />
    <Body components={strapiGartenentwicklung.body} />

  </Layout>
)

export default Philosophie

export const query = graphql`
  {
    strapiRaumgestaltung {
      description
      body {
        ... on STRAPI__COMPONENT_BASE_IMAGE {
          strapi_component
          layout {
            position
            len
          }
          caption
          # url
          source {
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
        ... on STRAPI__COMPONENT_BASE_TEXT {
          strapi_component
          layout {
            position
            len
          }
          content {
            data {
              content
            }
          }
          is_large
          marginless
        }
      }
    }
    strapiPflanzplanung {
      description
      body {
        ... on STRAPI__COMPONENT_BASE_IMAGE {
          strapi_component
          layout {
            position
            len
          }
          caption
          # url
          source {
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
        ... on STRAPI__COMPONENT_BASE_TEXT {
          strapi_component
          layout {
            position
            len
          }
          content {
            data {
              content
            }
          }
          is_large
          marginless
        }
      }
    }
    strapiGartenentwicklung {
      description
      body {
        ... on STRAPI__COMPONENT_BASE_IMAGE {
          strapi_component
          layout {
            position
            len
          }
          caption
          # url
          source {
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
        ... on STRAPI__COMPONENT_BASE_TEXT {
          strapi_component
          layout {
            position
            len
          }
          content {
            data {
              content
            }
          }
          is_large
          marginless
        }
      }
    }
  }
`
