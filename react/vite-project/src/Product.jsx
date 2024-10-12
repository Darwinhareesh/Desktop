import "./product.css"
function Product(props){
    console.log(props);
    let sec = "AIMLB"
//     if(props.price>5000){
//         return(
//             <div class="a">
//             <p>{props.title}</p>
//             <p>{props.price}</p>
//             <p>{sec}</p>
//             <p>Discount is 25%</p>
//             </div>
//         )
    
//     }
//     else{
//     return(
//         <div class="a">
//         <p>{props.title}</p>
//         <p>{props.price}</p>
//         <p>{sec}</p>
//         <p>NO Discount</p>
//         </div>
//     )
// }
return (
    <p>{props.price>5000?"discount 25":"no"}</p>
)
}

export default Product