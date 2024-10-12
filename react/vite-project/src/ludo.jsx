import { useState } from 'react'
export default function Ludo(){
    let [color,setred] = useState({red:0,green:0,yellow:0,blue:0})
    let changeRed = ()=>{
        setred((color=>{
            color.red = color.red+1
            console.log(color);
            return {...color}
            
        }))
    }
    let changeGreen = ()=>{
        setred((color=>{
            color.green = color.green+1
            console.log(color);
            return {...color}
            
        }))
    }
    let changeBlue = ()=>{
        setred((color=>{
            color.blue = color.blue+1
            console.log(color);
            return {...color}
            
        }))
    }
    let changeYellow = ()=>{
        setred((color=>{
            color.yellow = color.yellow+1
            console.log(color);
            return {...color}
            
        }))
    }
    return(
        <div>
            <div>
                <p>Red Player:{color.red}</p>
                <button onClick={changeRed} style={{backgroundColor:"red"}}> +1</button>
            </div>

            <div>
                <p>Green Player:{color.green}</p>
                <button onClick={changeGreen} style={{backgroundColor:"green"}}> +1</button>
            </div>

            <div>
                <p>Blue Player:{color.blue}</p>
                <button onClick={changeBlue} style={{backgroundColor:"blue"}}> +1</button>
            </div>

            <div>
                <p>Yellow Player:{color.yellow}</p>
                <button onClick={changeYellow} style={{backgroundColor:"yellow"}}> +1</button>
            </div>
        </div>
    )
    
}
