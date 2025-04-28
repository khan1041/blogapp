


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Allsugesteduser from './Allsugesteduser'

function Suggeted() {
    const token=useSelector((state)=>state.post.tokens) 
    const user=useSelector((state)=>state.profile.user)
    console.log(token)
    const alluser=useSelector((state)=>state)
    console.log(alluser)
   const[alluserdata,setuserdata]=useState([])

 const allsuggesteduser=async()=>{
      try {
           const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/suggested`,{
             method:'get',
               headers:{
          Authorization:`Bearer${token}`
                }
           })
           if(response.ok){
             const data=await response.json()
             setuserdata(data)
             console.log(data)
      
                   }            
         } catch (error) {
           console.log(error)
         }}
 
         
 useEffect(()=>{
 allsuggesteduser()
 //datais()
 },[])


  return (
    <div>
     <div>
 {alluserdata.map((item) =>
           <Allsugesteduser key={item._id} item={item}/>      
 )
} 
    </div>
         
 
    </div>
  )
}

export default Suggeted





