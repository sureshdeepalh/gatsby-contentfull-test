import { graphql } from "gatsby"
import React from "react"
import Gallery from "../example/Gallery"

function Testing({ data }) {
  const { title } = data.site.info

  return (
    <div>
      <h2>{title}</h2>
      <Gallery />
    </div>
  )
}

export default Testing

export const data = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        person {
          age
          name
        }
        complexData {
          age
          name
        }
        simpleData
      }
    }
  }
`
