import { useContext, useState } from "react"
import { ProfileContext } from "../App"

export const ChangeProfile=()=>{
    const {setUsername} = useContext(ProfileContext)

     const [newUsername , setNewUsername] = useState("")

    return(
        <div>
            <input type="text"  onChange={(event)=>{setNewUsername( event.target.value ) }}/>
            <button onClick={()=>{setUsername(newUsername)}}>change username</button>

        </div>
    )
}