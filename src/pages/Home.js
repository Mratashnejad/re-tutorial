import {useContext} from 'react'
import { ProfileContext } from '../App'
export const Home=()=>{
    const {username} = useContext(ProfileContext)
    return <div>this is Home page - username is {username}</div>
}