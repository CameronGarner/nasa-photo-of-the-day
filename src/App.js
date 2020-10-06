import React, {useState,useEffect} from "react";
import axios from "axios"
import "./App.css";

function App() {
  let [spacepic,setspacepic] = useState("")
  let [spacepictitle,setspacepictitle] = useState("")
  let [spacepicdate,setspacepicdate] = useState("")
  let [spacepicexplanation,setspacepicexplanation] = useState("")
  useEffect(function(){
    axios.get("https://api.nasa.gov/planetary/apod?api_key=HYjvljQGU4Q7qgcbRpLbnyhmAHfELgMpAlWVaNeD")
    .then(function(nasadata){
      console.log(nasadata.data)
      setspacepictitle(nasadata.data.title)
      setspacepicdate(nasadata.data.date)
    setspacepic(nasadata.data.url)
    setspacepicexplanation(nasadata.data.explanation)
    })
  },[])
  return (
    <div>
      <h1>{spacepictitle}</h1>
  <h2>{spacepicdate}</h2>
     <img src={spacepic}/> 
  <p>{spacepicexplanation}</p>
    </div>
  
  )
}

export default App;
