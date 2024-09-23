import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForms';
import Alert from './components/Alert';
import React from "react";
import { useState } from 'react';

import {Switch } from 'react-router-dom/cjs/react-router-dom';
import {BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Alerts from './components/Alert';


function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  // eye protection mode 
  const [emode, setemode] = useState('light');//eye protection mode
  const eyetoggleMode = () => {
    if (emode === 'light') {
      setemode('d0d2c8')
      document.body.style.backgroundColor = '#d0d2c8';
      showAlert("screen eye protection is enale", "success")
    }
    else {
      setemode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("lightmode is enable", "success")
    }

  }
  // dark mode enable 
  const [mode, setmode] = useState('light');//weather darkmode is on or not

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("darkmode is enable", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("lightmode is enable", "success")
    }

  }
  return (
    
    <>
    <Router>
    <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode} emode={emode} eyetoggleMode={eyetoggleMode} />
    <Alert alert={alert}/>

     <Switch>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="enter the text to analyze" mode={mode} emode={emode} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        
        </Switch>
      </Router>
    </>
  
  );
}

export default App;
