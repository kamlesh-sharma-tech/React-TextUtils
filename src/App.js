import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';
import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';


function App() {
  const [mode,setMode] = useState('light');
  const [modeBtnText,setModeBtnText] = useState('Dark Mode');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setModeBtnText('Light Mode');
      document.body.style.backgroundColor = 'rgb(40,44,52)';
    }else{
      setMode('light');
      setModeBtnText('Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Router>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} modetext={modeBtnText}/>
      
      <div className="container my-3">
      
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze below:" mode={mode}/>
          </Route>
        </Switch>

      </div>
      </Router>
      
     
    </>
  );
}

export default App;
