const body = {
  populate: {
    layout: '*',
    caption: '*',
    url: '*',
    source: '*',
    is_large: '*',
    marginless: '*',
    content: '*',
    entries: {
      populate: {
        name: '*',
        values: '*',
      },
    },
  },
}

const entity = (singularName, attributes = {}) => ({
  singularName,
  queryParams: {
    populate: attributes,
  },
})

const page = (singularName, attributes = {}) =>
  entity(singularName, {
    description: '*',
    ...attributes,
  })

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://api.bifolia.de',
        collectionTypes: [
          entity('project', {
            id: '*',
            name: '*',
            description: '*',
            place: '*',
            year: '*',
            cover: '*',
            body,
          }),
        ],
        singleTypes: [
          page('datenschutz', { content: '*' }),
          page('footer', {
            email: '*',
            tel: '*',
            address: '*',
            tax_id: '*',
            social: '*',
          }),
          page('gartenentwicklung', { body }),
          page('homepage', { body }),
          page('pflanzplanung', { body }),
          page('projekte'),
          page('raumgestaltung', { body }),
          page('wir', { body }),
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bifolia`,
        short_name: `bifolia`,
        start_url: `/`,
        background_color: `#F1F3F6`,
        theme_color: `#F1F3F6`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-90EEHMBD2C'],
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-offline`,
  ],
}
