import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaImageCard from "./NasaImageCard"


export default function NasaImages() {
  const [ nasaData, setNasaData ] = useState([

  ]);
  
  console.log(nasaData);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=ulBcKQRKzVJZqCk6sTUTKdtVc4SD5GIpKywDqtlE')
      .then( response => {
        console.log(response);
        setNasaData(response.data);
        console.log(nasaData);
      })
      .catch (error => {
        console.log(`The error was ${error}`);
      });
  }, [nasaData]);

  return(
    <div className="nasaImage">
          <div>
            <NasaImageCard 
              key={nasaData.id}
              explanation={nasaData.explanation}
              url={nasaData.url}
              title={nasaData.title}
            />
          </div>
    </div>
  )
}
