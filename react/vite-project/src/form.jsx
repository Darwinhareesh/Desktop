import { useState } from "react"
export default function Form(){
    let [fdata,setfdata] = useState({
        username:"",password:""
    })
    let handleForm = (event)=>{
        event.preventDefault()
        console.log(fData);
        
    }
    
    return(
        <form action="" onSubmit={handleForm}>
            <label htmlFor="username">Username: </label>
        <input type="text" placeholder="username" className="username" value={fdata.username} onChange={handleuser} name="username"/>
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder="password" className="password" value={fdata.username} onChange={handleuser} name="password"/>
        <button>Get Data</button>
        </form>
    )
}