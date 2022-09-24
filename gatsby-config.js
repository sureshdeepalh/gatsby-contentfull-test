/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Product",
    description:
      "Tempor sit incididunt adipisicing aliquip laboris in nulla aliqua nostrud excepteur.",
    person: { name: "Suresh", age: 33 },
    simpleData: ["iem1", "item2"],
    complexData: [
      { name: "Suresh", age: 33 },
      { name: "Sabeetha", age: 32 },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/assets/scss/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zblot4mn77d7`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    {
      resolve: "gatsby-source-multi-api",
      options: {
        apis: [
          {
            // https://dev-api.educatelanka.org/api/v1/beneficiaries?page=1
            prefix: "GetStudents",
            baseUrl: "https://dev-api.educatelanka.org/api/v1/",
            endpoints: ["beneficiaries"],
            method: "GET",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: './src/state',
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
          // otherwise `JSON.parse` is used
          isJSON: true,
          unsafe: false,
          ignoreFunction: true,
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: '__PRELOADED_STATE__',
      },
    },
  ],
}
