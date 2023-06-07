import React from 'react'
import Ohee from "../Ohee.jpg"
import "./About.css"

const About = () => {
  return (
    <div  className='about'>
      <div className='thinking'>
      <img className='OheeImg' src={Ohee}/>
      <div className='afterDivider'>
      <h1>My thinking behind this app:</h1>
      <div className='divider'></div>
      <p>Hi, Thanks for visiting this application of mine. 
        I am Jobayer Rahman this is a Note-taking App. Here you 
        can write your notes and then you can save them and use them as you like.  
        As a web development learner, My main motivation for this job is to 
        make an application that is pretty close to professional applications. 
        This application is made with react js library. you can write notes and 
        then save them and whenever you want you can delete whichever you like. 
        and if you have a lot of notes I have added a search option so that you 
        can find your particular note easily. I tried to make the UI design very easy to understand.</p>

        <h1>My social Links:</h1>
        <div className='divider'></div>
        <div className='socialLinks'>
        <button>
          <a href='https://www.facebook.com/15855jubayer' target='_blank' rel="noreferrer"> 
          <i class="fa-brands fa-facebook"></i></a>
        </button>
        <button>
            <a href='https://www.instagram.com/jubayerrahman8/' target='_blank' rel="noreferrer">
            <i class="fa-brands fa-instagram"></i>
            </a>
          </button>
        <button>
          <a href='https://twitter.com/jubayerr398' target='_blank' rel="noreferrer">
          <i class="fa-brands fa-twitter"></i>
          </a>
        </button>
        <button>
          <a href='https://sidemenuportfolio.netlify.app/' target='_blank' rel="noreferrer">
          <i class="fa-solid fa-globe"></i>
          </a>
        </button>
        </div>
      </div>
      </div>
      </div>
  )
}

export default About
