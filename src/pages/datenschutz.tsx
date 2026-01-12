import { Component, ComponentKind, Position } from '../types'
import { PageProps, graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Body } from '../components/Body'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

type Data = {
  strapiDatenschutz: {
    description: string
    content: { data: { content: string } }
  }
}

const Datenschutz: FunctionComponent<PageProps<Data>> = ({
  data: {
    strapiDatenschutz: { description, content },
  },
}) => {
  const body: Component[] = [
    {
      strapi_component: ComponentKind.Text,
      content: content,
      is_large: false,
      layout: { position: Position.SemiLeft, len: 2 },
      marginless: false,
    },
  ]

  return (
    <Layout>
      <SEO title="Datenschutz" description={description} />
      <h1 className="Datenschutz__title">Datenschutz</h1>
      <Body components={body} />
    </Layout>
  )
}

export default Datenschutz

export const query = graphql`
  {
    strapiDatenschutz {
      description
      content {
        data {
          content
        }
      }
    }
  }
`
