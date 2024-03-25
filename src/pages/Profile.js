import React from "react"
import {useNavigate , useParams} from 'react-router-dom'
import { ChangeProfile } from "../Components/ChangeProfile"

export const Profile=(props)=>{
    // const {name , id} = useParams()
     let navigate = useNavigate()
    return(
            <React.Fragment>
              {/* <ChangeProfile setUsername={props.setUsername} /> */}
              
              <div>this is Profile page of {props.username}</div>
              <button onClick={()=>{navigate('/')}}>GO to Home page</button>
            </React.Fragment>
    )
} 