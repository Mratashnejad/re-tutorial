import { useQuery } from 'react-query'
import {useContext} from 'react'
import { ProfileContext } from '../App'
import axios from 'axios'
export const Home=()=>{
    const {username} = useContext(ProfileContext)
    const {data :catData , isLoading , isError , error , refetch}=useQuery(['cat'] , ()=>{
        return  axios.get('https://catfact.ninja/fact').then((res)=>res.data)
        })
        if(isLoading)
        return <h5>Loading ...</h5>
        if(isError)
        return <h1>Sorry there is an error : {error.message}</h1>
    
    return (
    <div>
        <div>this is Home page - username is {username}</div>
        <h1>{catData?.fact}</h1>
        <button onClick={refetch}>Refresh</button>
   </div>
    )
}