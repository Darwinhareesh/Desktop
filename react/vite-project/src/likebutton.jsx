import { useState } from "react";

function Likebutton(){
    let [isliked,setisliked] = useState(false)
    function likebtn(){
        // console.log("button is liked");
        setisliked((isliked)=>{
            return !isliked
        })
        
    }
    if(!isliked){
        return(
            <div>
            <span onClick={likebtn}><i className="fa-regular fa-heart"></i></span>
            </div>
        )
    }
    else{
        return(
            <div>
            <span onClick={likebtn} style={{backgroundColor:"red"}}><i className="fa-regular fa-heart"></i></span>
            </div>
        )
    }
    
}

export default Likebutton