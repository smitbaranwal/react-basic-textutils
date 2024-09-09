
import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";
import Alert from "./components/Alert";
// import { Alert } from "bootstrap";
import { BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (alertType, alertMessage) => {
    setAlert({
      type: alertType,
      message: alertMessage
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    console.log("Clicked");
    if (mode === 'light') {
      setMode('dark');
      showAlert("success", "Dark Mode Enabled");
    }
    else {
      setMode('light');
      showAlert("success", "Light Mode Enabled");
    }
  }
  return (
    <>
     <Router>
     <Alert alert={alert} />
      <Navbar title1="Home" title2="About" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextField heading="Enter Text To Capitalize" showAlert={showAlert} ></TextField>}>
            
        </Route>
      </Routes>

      {/* <About /> */}
     </Router>
    </>
  );
}

export default App;
