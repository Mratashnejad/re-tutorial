import React from "react"
import {useNavigate , useParams} from 'react-router-dom'
import { ChangeProfile } from "../Components/ChangeProfile"
import {useContext} from 'react'
import { ProfileContext } from '../App'
export const Profile=(props)=>{
    // const {name , id} = useParams()
    const {username} = useContext(ProfileContext) 
    
    let navigate = useNavigate()

    return(
            <React.Fragment>
              {/* <ChangeProfile setUsername={props.setUsername} /> */}
              
              <div>this is Profile page of {username}</div>
              
              <ChangeProfile />

              <button onClick={()=>{navigate('/')}}>GO to Home page</button>
            </React.Fragment>
    )
} 