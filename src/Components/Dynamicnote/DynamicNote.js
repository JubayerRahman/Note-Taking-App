// import React,{useState, useEffect} from 'react'
import { useState } from "react";
import "./DynamicNote.css"
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const DynamicNote = () => {
  const titleArray = JSON.parse(localStorage.getItem('Title'))
  const noteArray =  JSON.parse(localStorage.getItem('Notes'))
  // lets Find Index
  const element = (useParams().notename)
    const indexofTitle = titleArray.indexOf( element )
    // Delete Dunction
    const deleteFunction=()=>{
      //Delete Title
      const UndetedTitleArray = titleArray.filter(item=> item !==element)
      localStorage.setItem('Title', JSON.stringify(UndetedTitleArray))
      //Delete Note
      noteArray.splice(indexofTitle, 1)
      localStorage.setItem('Notes', JSON.stringify(noteArray))
      // lets reload the page
      // window.location.reload();
    }
    console.log(indexofTitle)
    // console.log(noteArray[indexofTitle])
  return (
    <>
    <div className="DynamicNote">
        <h2>Title: {useParams().notename}</h2>
        <lable className="notelable">Note:</lable>
        <p>{noteArray[indexofTitle]}</p>
    </div>
    <div>
    <div className="dynamicButonSet">
    <Link to="/" className="deleteButton"><i class="fa-solid fa-arrow-left"></i></Link>
    <p>Sorry but I don't know how to add an edit option I will add it soon</p>
    <Link to="/" onClick={deleteFunction} className="deleteButton"><i class="fa-solid fa-trash"></i></Link>
    </div>
    </div>
    </>
  )
}

export default DynamicNote
