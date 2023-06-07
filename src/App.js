import './App.css';
import Nevbar from './Components/Nevbar/Nevbar';
import {Routes,Route} from "react-router-dom"
import About from './Components/About/About';
import Home from './Components/Home/Home';
import DynamicNote from './Components/Dynamicnote/DynamicNote';
import { useState } from 'react';

function App() {
  const [searchData, setSearchData] =useState('')
  const getSeearchData=(searchData)=>{
    setSearchData(searchData)
    console.log(searchData)
  }
  console.log(searchData)
  return (
    <div className="App">
      <header className="App-header">
      <Nevbar getSeearchData={getSeearchData}/>
      <div className='bottomField'>
         {/* routrs */}
    <Routes>
      <Route path='/' element={<Home  searchnote={searchData}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/:notename" element={<DynamicNote/>}/>
    </Routes>
    {/* routes End */}
      </div>
      </header>
    </div>
  );
}

export default App;
