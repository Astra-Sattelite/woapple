module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: `255aa28847fbb3efcda396e1660337` // change to env var in future
      }
    },
  ],
}