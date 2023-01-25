import React, { useState } from "react";
import Cardlist from "./Cardlist";
import {Colordata} from './Colordata';

const Card = () => {

    const [color, setColor] = useState("")
    const [count, setCount] = useState(0)
     function change(){
        for(let i = 0; i < Colordata.length; i++){
            if(count < 10){
                setColor(Colordata[count].color)
                setCount(count+1)
            }else{
                setCount(0)
            }
        }
     }

     setTimeout(change, 1000)

    return(
        <>
        <div className="main_div">
        <h1 style={{color: color}}> Color Picker </h1>
        <div className="content">
        {Colordata.map((val) => {
               return <Cardlist 
               key={val.id}
               color={val.color}
               name={val.name} 
               />
        })}
        </div>
        </div>
        </>
    )
}

export default Card;