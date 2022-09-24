import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

export const imageData = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "recipes" } }) {
      totalCount
      nodes {
        name
        size
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            #   transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

function Gallery() {
  const data = useStaticQuery(imageData)
  const { nodes } = data.allFile
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        const imagePath = getImage(image)
        return (
          <article key={index} className="item">
            <GatsbyImage image={imagePath} alt={name} className="gallery-img" />
            <h4>{name}</h4>
          </article>
        )
      })}
    </Wrapper>
  )
}
export default Gallery

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .item {
    margin: 1rem;
  }
  .gallery-img {
    border-radius: 3px;
  }
`
