import { useState } from "react";
let count = 0
function handleclick(){
    // console.log("buuton was clicked");
    count=count+1;
    console.log(count);
    
    
}
function counter(){
    let(value,setvalue) = useState(0)
    return(
        <>

        <p>{count}</p>
        <button onClick={handleclick()}>Inc Count</button>
        </>
    )
}
export default counter