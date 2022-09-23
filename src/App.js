import Home from "./components/home"
import React,{useState} from "react"
import Header from './components/header';
import './App.css';


function App() {
  const[darkMode, setDarkmode]=useState(false)
  const toggleDarkMode=(()=>{
    setDarkmode(prevDarkMode=>!prevDarkMode)
  })
  return (
      <div>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <Home darkMode={darkMode} />
      </div>
  );
}

export default App;
