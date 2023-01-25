import React from "react";

const Cardlist = ((props) => {
  return(
    <>
         <div className="card">
                <div className="color" style={{backgroundColor : props.color}}></div>
                <div className="text">
                <h2>{props.color}</h2>
                <p style={{color : props.color}}>{props.name}</p>
                </div>
            </div>
    </>
  )
})


export default Cardlist;