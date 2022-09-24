import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import RecipesList from "./RecipesList"
import TagsList from "./TagsList"

const data = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        content {
          tags
        }
      }
    }
  }
`

function AllRecipes() {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(data)
  return (
    <div>
      <h2>All recipes</h2>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </div>
  )
}

export default AllRecipes
