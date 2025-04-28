

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Myallfolowin() {
    const item=useSelector((token)=>token)
      const token=useSelector((state)=>state.post.tokens) 
        console.log(token)
    console.log(item)
 const [following,setfollowing]=useState([])
const myfollowing=async()=>{
            try {
                 const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/myfollowing`,{
                   method:'get',
                     headers:{
      Authorization:`Bearer${token}`
                      }
                 })
                 if(response.ok){
                   const data=await response.json()
                  //  const show=dispatch(setPostse(data)
                   
                  setfollowing(data)
                  
                         }            
               } catch (error) {
                 console.log(error)
               }}
               console.log(following)
    
//

useEffect(()=>{
myfollowing()
},[])



  return (
    <div>
      <div className='flex justify-center  '>
        <h1 className='font-thin text-gray-500'>MY FOLLOWING LIST</h1>
      </div>
    <div className='flex justify-center'>

      
      <div className='w-[700px] h-800px ml-40 sm:ml-0  sm:grid grid-cols-4'>
        {following.length>0?(following.map((item)=>{
      
      return(

        <div className=''>
          <div className=' '>
         
         <div className=''>
           <div className='mt-3'>
                      <Link to={`/details/${item._id}`}>
                    <img src={item.photo} alt=""  className='w-20 h-20 rounded-full'/>
           <h1 className='font-medium ml-4'>{item.username}</h1>
                             </Link>

                   </div>
         
                  

         </div>
        
        </div>
        </div>
      )

        })):(
          <div>
       <h1 className='text-[18px] font-mono'>Not Data found...</h1>
          </div>
        )}
        </div>
    </div>
    </div>
  )
}

export default Myallfolowin
