import React,  { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Card, Button, Icon, List, Header } from "semantic-ui-react";


const url = "https://api.nasa.gov/planetary/apod?api_key=zgYYmlEFly5eugxnKgtov0khEFcvpLbWw7s2Jitv";

function App() {
  const [state, setState] = useState({
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
    error: "Request was unsuccesful"

  })

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            console.log(response.data)
            setState(response.data)
        })
        .catch((error) => 
          error.response.data.error.message,
          console.log('Network request was unsuccesful'),
        )
  
      
    },[]);
  
  function yesterdayPhoto() {

    const year = 2019;
    const month = 9;
    const day = 7;


    axios.get(
      `${url}&date=${year}-${month}-${day}`
    )
    .then((response) => {
      setState(response.data)
    })
    .catch((error) =>
      error.response.data.error
    )
  }
  function todaysPhoto() {

    axios.get(url)
    .then((response) => {
      setState(response.data)
    })
    .catch((error) =>
      error.response.data.error
    )
  }

  return (
    <div className="App">
      <Card style={{width:"800px"}} centered>  {/* <--reactstrap */}
      <Card.Header>{state.title}</Card.Header>  

     
      {state.media_type === "video" ? (<iframe src={state.url} />) : (<img src = {state.url}  />)}  
      
      <Card.Description>{state.explanation}</Card.Description> 

      <List.Item>
       <List.Item>Copyright: {state.copyright} </List.Item>
       <List.Item>Date: {state.date} </List.Item> 
       <List.Item>Media Type: {state.media_type}  </List.Item>
       <List.Item>Version: {state.service_version} </List.Item>
       <Header as="h2">julesdev.pro 🚀!</Header>
      </List.Item> 








      <Button animated="fade" onClick={yesterdayPhoto}>
        <Button.Content visible>Yesterday</Button.Content>
        <Button.Content hidden><Icon name="arrow left"/> </Button.Content>
      </Button>

      <Button animated="fade" onClick={todaysPhoto}>
        <Button.Content visible>Today</Button.Content>
        <Button.Content hidden><Icon name="arrow right"/> </Button.Content>
      </Button>
      </Card>
      


    </div>
  );
}

export default App;


