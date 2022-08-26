import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://courageous-baklava-7156d6.netlify.app` // change to env var in future
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: `` // change to env var in future
      }
    },
  ]
}

export default config
