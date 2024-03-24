import React from "react"
import {useNavigate} from 'react-router-dom'

export const Contact=()=>{
    let navigate = useNavigate()
    return(
            <React.Fragment>
              <div>this is Contact page</div>
              <button onClick={()=>{navigate('/')}}>GO to Home page</button>
            </React.Fragment>
    )
}