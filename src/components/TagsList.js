import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import slugify from "slugify"
import styled from "styled-components"

function TagsList() {
  const {
    allContentfulRecipe: { nodes },
  } = useStaticQuery(query)
  return (
    <div>
      <h1>TagsList</h1>
      {nodes?.map((item, index) => (
        <Wrapper key={index}>
          {item?.content?.tags?.map((tag, i) => {
             const tagSlug=slugify(tag,{lower:true})
            return(
            <Link key={i} to={`/tags/${tagSlug}`}>
              {tag}
            </Link>
          )})}
        </Wrapper>
      ))}
    </div>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  a {
    display: block;
    padding: 1rem;
    color: inherit;
    background-color: aliceblue;
    margin-bottom: 1rem;
    text-decoration: none;
    text-align: center;
    &:hover{
      background-color: antiquewhite;
    }
  }
`
export const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default TagsList
