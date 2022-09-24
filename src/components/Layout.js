import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "normalize.css"
import "../assets/scss/main.scss"
import styled from "styled-components"

function Layout(props) {
  return (
    <>
      <Navbar />
      <Wrapper>{props.children}</Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.main`
  padding: 0 1rem;
  max-width: 1024px;
  margin: auto;
`
export default Layout
