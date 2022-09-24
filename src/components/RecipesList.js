import { Link } from "gatsby"
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"
import styled from "styled-components"

function RecipesList({ recipes = [] }) {
  return (
    <Wrapper>
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe
        console.log(image);
        const pathToImage=getImage(image)
        const slug=slugify(title,{lower:true})
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h4>{title}</h4>
            <p>Prep:{prepTime} Cook:{cookTime}</p>
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default RecipesList

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  color: #333;
  .recipe {
    margin: 1rem;
    max-width: 200px;
  }
  .recipe-img{
      border-radius: 5px;
  }
  h4{
    padding: 0;
    margin: .5rem 0 0 0;
  }
  p{
    margin-top: .3rem;
  }
  a{
    text-decoration: none;
    color : inherit;
  }
`
