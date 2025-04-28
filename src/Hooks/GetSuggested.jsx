
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function GetSuggested() {

  const token=useSelector((state)=>state.token.tokens)

     const[suggestedData,setsuggestedData]=useState([])

 const suggesteruser=async()=>{

  try {

    const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/suggested`,{
      method:"get",
      headers:{
        Authorization:`Bearer${token}`
  } })
  if(response.ok){
    const data=await response.json()
    setsuggestedData(data)
  }
    
  } catch (error) {
    console.log(error)
  }}

  useEffect(()=>{

    suggesteruser()
  })

  return (
    <div>
      
      <div>
        {suggestedData.map((item)=>{

         return(
          <div>
            
            <Link to={`details/${item._id}`}>
            <h1>{item.username}</h1>
           
            </Link>
            
            <h1>follow</h1>
           <button>unfollow</button>
          </div>
         )

        })}
      </div>
    </div>
  )
}

export default GetSuggested
