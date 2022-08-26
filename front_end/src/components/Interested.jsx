import { useState, useEffect} from "react"

function Interested(props){
    const [shows, setInterested] =useState(true)

//     useEffect(() => {
    console.log(shows)

// },[shows])    



    return(

        shows ? <button onClick={()=> {props.addJobfromSearch(props.item); setInterested(!shows)}}> Save Job </button> : <button> Saved</button>
         

        
    )
}

export default Interested