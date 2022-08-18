import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const [color, setColor] = useState('blue');

  const change = (event) => {
    setColor(event.target.options[event.target.selectedIndex].text)
  }

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      // let option = document.getElementById("floatingSelect");
      setMode('dark');
      document.body.style.backgroundColor = '#282848';
      showAlert('Dark Mode has been activated', 'success');
    }
    else if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been activated', 'success');
    }
  }

  return (
    <>
    <Router>
      <Navbar change={change} title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
      <Routes>
        <Route exact path="/" element={<TextForm color={color} showAlert={showAlert} heading="Enter your text here: " mode={mode} />}>
        </Route>
        <Route exact path="/About" element={<About mode={mode}/>}>
        </Route>
      </Routes>
      </div>
    </Router>
    </>
  );
}


export default App;
