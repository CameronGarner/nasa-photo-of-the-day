import React, {useState,useEffect} from "react";
import axios from "axios"
import "./App.css";
import styled from 'styled-components'

function App() {
  let [spacepic,setspacepic] = useState("")
  let [spacepictitle,setspacepictitle] = useState("")
  let [spacepicdate,setspacepicdate] = useState("")
  let [spacepicexplanation,setspacepicexplanation] = useState("")

  let Div1 = styled.div`
background: gray;
width: 100%;
display:flex;
flex-direction:column;
align-items:center;
  `
let Img1 = styled.img`
margin-bottom:3%;
`
let P1 = styled.p`
margin-bottom:3%;
font-size:1.75rem;
text-align:center;
`

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
    <Div1>
      <h1>{spacepictitle}</h1>
  <h2>{spacepicdate}</h2>
     <Img1 src={spacepic}/> 
  <P1>{spacepicexplanation}</P1>
    </Div1>
  
  )
}

export default App;
