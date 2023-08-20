import './App.css'
import React, { useState } from 'react'
import Body from './components/Body/Body'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Dark Mode')
  const darkMode = () => {
    mode === 'light'?setMode('dark'):setMode('light')
    modeText === 'Enable Dark Mode'?setModeText('Light Mode'):setModeText('Dark Mode')
  }

  const darkModeHandler = () => {
    mode === 'light'?setMode('dark'):setMode('light')
    modeText === 'Dark Mode'?setModeText('Light Mode'):setModeText('Dark Mode')
  }

  return (
    <>
      <Navbar mode={mode} modeText={modeText} darkModeHandler={darkModeHandler}/>
      <div className='py-2 pb-5 container-fluid' style={mode === 'dark'?{backgroundColor:'#323334'}:{backgroundColor:'#dee2e6'}}>
        <Body mode={mode}/> 
      </div>
      
    </>
  )
}

export default App
