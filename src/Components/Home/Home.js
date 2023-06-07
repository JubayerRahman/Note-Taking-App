import React from 'react'
import "./Home.css"
import PostInputForm from '../PostInputForm/PostInputForm'

const Home = (props) => {
  const searchdata = props.searchnote;
  return (
    <div>
      <PostInputForm searchnote={searchdata}/>
    </div>
  )
}

export default Home
