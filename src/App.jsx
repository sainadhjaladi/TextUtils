import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'




function App() {
  
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState('null');

  const showAlret = (message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }


  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlret("DarkMode has been enabled","success");
      document.title='TextUtil-Darkmode';//changes the title at the top of the webpage
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlret("Light Mode has been enabled","success");
      document.title='TextUtil-LightMode';//changes the title at the top of the webpage

    }
  }

  return (
    <>

  <Navbar title="Text-Utils" Homename="Home"  Aboutname="AboutUs"  mode={mode} toggleMode={toggleMode}/>
 
    <Alert alert={alert}/>

    <div className="container my-3">
    <TextForm showAlret={showAlret} heading="Enter the content to analyze"/>
    </div>



  

    </>
  )
}

export default App