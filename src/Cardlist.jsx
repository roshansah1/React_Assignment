import React, { useRef } from "react";

const Cardlist = ((props) => {

let body = document.getElementById('main_div')

const bgColor = () => {
  body.style.backgroundColor = props.color
}

let span = document.getElementsByTagName('span')[0]

function copy(){
  navigator.clipboard.writeText(props.color)
  span.style.display = "block"
  
  setTimeout( () => {
    span.style.display = "none"
  },2000)
}



  return(
    <>
         <div className="card">
                <div className="color" style={{backgroundColor : props.color}} onClick={bgColor}></div>
                <div className="text">
                <h2 onClick={copy} className="select-all-text">{props.color}</h2>
                <p style={{color : props.color}}>{props.name}</p>
                </div>
            </div>
    </>
  )
})


export default Cardlist;