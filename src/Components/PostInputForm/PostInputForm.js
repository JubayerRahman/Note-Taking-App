import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState} from 'react'
import "./PostInputForm.css"

const PostInputForm = (props) => {
  const SearchData = (props.searchnote)
  console.log(props.searchnote)
  const formFunction=(e)=>{
    e.preventDefault();
  }
  const [PostButton, setPostButton] = useState("postPlus")
  const [formClass, setFormClass] = useState("inputFieldHide")
  const [noteTitle, SetNoteTitle] = useState("")
  const [ClearButton, SetClearButton] = useState("hideClearButton")
  const [note, SetNote] = useState("")
  const [titleArray, SetTitleArray] = useState([])
  const [noteArray, SetNoteArray] = useState([])


  // Post Button Function
  const PostBtnFunc =()=>{
    if(PostButton==="postPlus"){
      setPostButton("postPlusHide")
      setFormClass("inputField")
    }
  }
  const FormCancel =()=>{
    if(PostButton==="postPlusHide"){
      setPostButton("postPlus")
      setFormClass("inputFieldHide")
      SetNoteTitle("")
      SetNote("")
    }
  }
  // get Notes
  const GetNoteTitle =(e)=>{
    SetNoteTitle(e.target.value)
  }
  const GetNote =(e)=>{
    SetNote(e.target.value)
  }
  // save Function
  const saveFunction=()=>{
    if(noteTitle ==="" || note ===""){
      alert("Fill all the fields.")
      SetNoteTitle("")
      SetNote("")
    }
    else{
      //saving data
          const NewTitles =[...titleArray, noteTitle];
          SetTitleArray(NewTitles)
          localStorage.setItem("Title" , JSON.stringify(NewTitles))
          const NewNotes =[...noteArray, note];
          SetNoteArray(NewNotes)
          localStorage.setItem("Notes", JSON.stringify(NewNotes))
          SetClearButton("showClearButton")
      // setting theme
          setPostButton("postPlus")
          setFormClass("inputFieldHide")
          SetNoteTitle("")
          SetNote("")
    }
  }

  useEffect(()=>{
    // old Saves
       const savedTitleArray = localStorage.getItem('Title')
       const savedNoteArray = localStorage.getItem('Notes')
       if(savedTitleArray){
         SetTitleArray( ...titleArray,JSON.parse(savedTitleArray))
       }
       if(savedNoteArray){
         SetNoteArray(...noteArray,JSON.parse(savedNoteArray))
         SetClearButton("showClearButton")
       }
  },[])
  const ClearFunction=()=>{
    window.location.reload()
    localStorage.clear()
    SetClearButton("hideClearButton")
  }
  let resultTitle
  let resultLink
  let resultDivider
  if(SearchData!==""){
    const examinthearray= titleArray.includes(SearchData)
    if(examinthearray===true){
      const searchElement =titleArray.indexOf(SearchData)
      const searchresult = titleArray[searchElement]
      resultTitle =<h2>Search Result:</h2>
      resultDivider = <div className='resultDivider'></div>
      resultLink= <Link className='dynamicNoteLink' to={searchresult} >{searchresult}</Link>
    }
    else{
      resultTitle =<h2>Search Result:</h2>
      resultDivider = <div className='resultDivider'></div>
      resultLink =<h1 className='error'>No Data Found</h1>
    }
}
  console.log(titleArray.length)
  console.log(noteArray.length)
  return (
    <div className='noteinputForm'>
      <div className='SAveDataTitle'>
        <div className="sResultSetionH">
        {resultTitle}
        {resultDivider}
        {resultLink}
        {resultDivider}
        </div>
        {titleArray.map((title)=>(
          <Link className='dynamicNoteLink' to={title}>{title}</Link>
        ))}
        <button onClick={ClearFunction} className={ClearButton}><i class="fa-solid fa-trash"></i></button>
      </div>
      <div className={PostButton} onClick={PostBtnFunc}>
      <button ><i className="fa-solid fa-plus"></i></button>
      </div>
      <form className={formClass} onClick={formFunction}>
        <input type='Text' placeholder='Enter Title' value={noteTitle} onChange={GetNoteTitle}/>
        <textarea  placeholder="Enter Note Data" value={note} onChange={GetNote}></textarea>
          <div className='inputButtons'>
            <button onClick={FormCancel}>Cancel</button>
            <button className='SaveButton' onClick={saveFunction}>Save</button>
          </div>
      </form>
    </div>
  )
}

export default PostInputForm
