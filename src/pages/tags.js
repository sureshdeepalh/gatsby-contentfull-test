import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import TagsList from "../components/TagsList"

function Tags() {
  return <Layout>
    <TagsList />
  </Layout>
}


export default Tags
