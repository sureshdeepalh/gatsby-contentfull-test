import React from "react"
import Layout from "../components/Layout"
import FetchData from "../example/fetchData"
import AllRecipes from "../components/AllRecipes"
import { connect } from "react-redux"


 function Home(props) {
  // const {name}=useSelector(state=>state.todo)
  console.log(props);
  return <Layout>
    <h1>Hello World! </h1>
    <AllRecipes />
  </Layout>
}


const mapStateToProps = ({ todo }) => {
  return { todo }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}

export const Head=(data)=>{

  return <title>bnbnbn</title>
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
