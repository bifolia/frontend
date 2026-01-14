import { FileNode } from 'gatsby-plugin-image/dist/src/components/hooks'

export enum Page {
  Projekte,
  Philosophie,
  Wir,
}

export enum Position {
  Left = 'left',
  SemiLeft = 'semi_left',
  SemiRight = 'semi_right',
  Right = 'right',
}

type Layout = {
  position: Position
  len: number
}

export enum ComponentKind {
  Image = 'base.image',
  Table = 'base.table',
  Text = 'base.text',
}

export type Image = {
  strapi_component: ComponentKind.Image
  source: {
    localFile: FileNode
  }
  caption: string | null
  url: string | null
  layout: Layout
}

type TableValue = {
  value: string
}

type TableEntry = {
  name: string
  values: TableValue[]
}

export type Table = {
  strapi_component: ComponentKind.Table
  entries: TableEntry[]
  layout: Layout
}

export type Text = {
  strapi_component: ComponentKind.Text
  content: {
    data: {
      content: string
    }
  }
  is_large: boolean
  layout: Layout
  marginless: boolean
}

export type Component = Image | Table | Text

export type Project = {
  id: string
  description: string
  name: string
  body: Component[]
}

export type ProjectPeek = {
  name: string
  cover: {
    localFile: FileNode
  }
  place: string
  year: number
}
