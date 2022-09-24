import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

function RecipeTemplate({ data }) {
  console.log(data);
  const {
    contentfulRecipe: { content, title, image, cookTime },
  } = data
  console.log(image);

  const pathToImage = getImage(image)
  return (
    <div>
      <h1>{title} </h1>
      <small>{cookTime}min</small>
      <GatsbyImage image={pathToImage} alt={title} width="300" />
    </div>
  )
}

export const query = graphql`
  query getSingleRecipes($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      description
      cookTime
      content {
        tags
      }
      featured
    }
  }
`
export default RecipeTemplate
