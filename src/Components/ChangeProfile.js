import { useState } from "react"

export const ChangeProfile=(props)=>{

     const [newUsername , setNewUsername] = useState("")

    return(
        <div>
            <input type="text"  onChange={(event)=>{ setNewUsername( event.target.value ) }}/>
            <button onClick={()=>{props.setUsername(newUsername)}}>change username</button>
            <button>change profile</button>
        </div>
    )
}