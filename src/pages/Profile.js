import React from "react"
import {useNavigate , useParams} from 'react-router-dom'


export const Profile=()=>{
    const {name , id} = useParams()
    let navigate = useNavigate()

    return(
            <React.Fragment>
              <div>this is Profile page of {name} -{id}</div>
              <button onClick={()=>{navigate('/')}}>GO to Home page</button>
            </React.Fragment>
    )
} 