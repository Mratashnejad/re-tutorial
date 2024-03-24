import React from "react"
import {useNavigate} from 'react-router-dom'

export const About=()=>{
    let navigate = useNavigate()
    return(
            <React.Fragment>
              <div>this is About page</div>
              <button onClick={()=>{navigate('/')}}>GO to Home page</button>
            </React.Fragment>
    )
}