import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"

function About({data:{allContentfulRecipe:{nodes:recipes}}}) {
  return (
    <Layout>
      <Wrapper>
        <div className="content">
          <h2>Eu exercitation magna minim voluptate incididunt commodo minim qui.</h2>
          <p>
            Veniam quis cupidatat nulla pariatur dolore qui voluptate magna.
          </p>
          <p>
            Lorem quis velit sit ullamco ipsum sint ut est veniam Lorem sunt
            voluptate. Tempor pariatur velit velit Lorem. Nulla commodo sit
            incididunt aute laboris culpa ad incididunt aute.
          </p>
          <p>Magna commodo commodo incididunt esse qui cupidatat quis nostrud officia laboris ex laborum.</p>
          <button>Contact</button>
        </div>
        <div className="image">
          <StaticImage
            width="400"
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            alt="test"
          />
        </div>
      </Wrapper>
      <section className="featuredRecipes">
        <h3>All featured recipes...</h3>
        <RecipesList recipes={recipes} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 400px;
  button{
    background-color: #3a9b9b;
    border-radius: 3px;
    box-shadow: none;
    border: none;
    color: antiquewhite;
    padding: 5px 1rem;
    &:hover{
      cursor: pointer;
      background-color: #2d7878;
    }
  }
`
export default About
