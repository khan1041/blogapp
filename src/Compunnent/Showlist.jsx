

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Showlist({item}) {

    console.log(item.username)
       const token=useSelector((state)=>state.post.tokens) 
      console.log(token)
    const user=useSelector((state)=>state.profile.user)
    console.log(user)
      const{id}=useParams()
 
const[alldata,setallData]=useState("")

    const viewprofile=async()=>{
  
      try {
         const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/singaleid/${id}`,{
             method:"get",
             headers:{
                 Authorization:`Bearer${token}`
               }
         })
         if(response.ok){
             const viewdata=await response.json()
             setallData(viewdata.viewuser)
           //  setfollowing(viewdata)
             console.log(viewdata)
           }
      } catch (error) {
         console.log(error)
      }}
     console.log(alldata)

const chak=alldata.followers&&alldata.followers.includes(user._id)||true
console.log(chak)

useEffect(()=>{
viewprofile()
},[])

  return (
    <div>
     <h1></h1>
    </div>
  )
}

export default Showlist



