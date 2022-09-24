import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FetchData = () => {
  const {
    site: {
      info: { title, complexData },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name} - {item.age} years old.
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default FetchData

const getData = graphql`
  query FirstQuery{
    site {
      info:siteMetadata {
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
