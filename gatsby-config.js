require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, 
});
module.exports = {
  siteMetadata: {
    title: "VacationGuide",
    decription:
      "Explore awesome worldwide tours & discover what makes each of them uniques. Forget your daily routine & say yes to adventure",
    author: "@kaedenakashima",
    data: {
      name: "katie",
      age: 27.
    },
  },
  plugins: [
    { resolve: `gatsby-source-contentful`, 
      options: { 
        spaceId: process.env.CONTENTFUL_SPACE_ID, 
        accessToken: 
        process.env.CONTENTFUL_ACCESS_TOKEN, 
      }, 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`, 
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
  ],
}
