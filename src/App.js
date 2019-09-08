import React,  { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState("")
  const [desc, setDesc] = useState("")
    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=8fLI3JEAa1VEwQbWynlRRpoQwa0lHCl3TcuI5Z6d&date=2019-09-06')
        .then((response) => {
            console.log(response.data)
            setPhoto(response.data.url)
            setDesc(response.data.explination)
        })
        .catch((error) => {
            console.log('Network request was unsuccesful')
            console.log(error)
        })
  
      
    });
  
  

  return (
    <div className="App">
      <img src = {photo} />  
      <p>
       {desc } 🚀!
      </p>
    </div>
  );
}

export default App;


