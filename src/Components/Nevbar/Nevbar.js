import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./Nevbar.css"
import "./Search.css"

const Nevbar = (props) => {
    const [icon, setIcon] = useState("fa-regular fa-sun");
    const [theme, setTheme] = useState("darkTheme");
    const [searchClass, setsearchClass] = useState("SearchSectionHide");

    useEffect(()=>{
        document.body.className = theme
    },[theme])
    // Theme function
    const ChangeTheme =()=>{
        if(theme==="darkTheme"){
            setTheme("lightTheme")
            setIcon("fa-solid fa-cloud-moon")
        }
        if(theme==="lightTheme"){
            setTheme("darkTheme")
            setIcon("fa-regular fa-sun")
        }
    }
    // search Button Function
    const searchvisibility =()=>{
      if(searchClass ==="SearchSectionHide"){
        setsearchClass("SearchSection")
      }
      else{
        setsearchClass("SearchSectionHide")
      }
    }
    // search function
    const [searchValue, setSearchValu]= useState('')
    const formFinction=(e)=>{
      e.preventDefault()
      props.getSeearchData(searchValue)
  }
  return (
   <div className='NevSection'>
       <div className='NevBar'>
      <Link to='/' className='appTitle'>Note taking App</Link>
      <div className='links'>
        <Link className='nevLink' to="about">About</Link>
        <button className='ThemeButton' onClick={searchvisibility}><i className="fa-solid fa-magnifying-glass"></i></button>
        <button className='ThemeButton' onClick={ChangeTheme}><i className={icon}></i></button>
      </div>
    </div>
    <div className={searchClass}>
    <form className='SearchForm' onClick={formFinction}>
        <input type='text' placeholder='Find your note' onChange={(e)=>setSearchValu(e.target.value)}/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
   </div>
  )
}

export default Nevbar
