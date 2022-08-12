import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  plugins: [
    `gatsby-plugin-image`,
    // `gatsby-plugin-vanilla-extract`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-typescript`,
    // `gatsby-transformer-typescript-css-modules`,
    // `gatsby-plugin-css-modules-typings`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: `255aa28847fbb3efcda396e1660337` // change to env var in future
      }
    },
  ]
}

export default config