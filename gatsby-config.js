const entity = (name) => ({
  name,
  endpoint: `api/${name}`,
  api: {
    qs: {
      populate:
        'body.layout,body.entries.values,body.source,address,social,cover',
    },
  },
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
        collectionTypes: [entity('projects'), entity('texts')],
        singleTypes: [
          entity('datenschutz'),
          entity('footer'),
          entity('gartenentwicklung'),
          entity('homepage'),
          entity('journal'),
          entity('pflanzplanung'),
          entity('projekte'),
          entity('raumgestaltung'),
          entity('wir'),
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
