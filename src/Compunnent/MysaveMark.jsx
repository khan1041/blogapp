

import React, { useEffect, useState } from 'react'
import { IoGitMerge } from 'react-icons/io5'
import { useSelector } from 'react-redux'

function MysaveMark() {
    const token=useSelector((state)=>state.post.tokens) 
    console.log(token)
    const[mymark,setMymark]=useState([])
      const mybookmark=async()=>{
                try {
                     const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/getsavepost`,{
                       method:'get',
                         headers:{
          Authorization:`Bearer${token}`
                          }
                     })
                     if(response.ok){
                       const data=await response.json()
                         setMymark(data)                     
              
              
                             }            
                   } catch (error) {
                     console.log(error)
                   }}

    console.log(mymark.bookmarks)
    useEffect(()=>{
    mybookmark()

    },[])

  return (
    <div className='w-full h-full flex-col justify-center items-center'>

   
    <div className='flex justify-center items-center '> 
      <div>
         {mymark.bookmarks&&mymark.bookmarks.length>0?( mymark.bookmarks&&mymark.bookmarks.map((item)=>{ 

          return(
            <div className='w-[400px] h-[280px] shadow-md mt-5 '>
                 <div className='flex gap-3'>
                <img src={item.adminPhoto} alt="" className='w-9 h-9 rounded-full'/>
             <h1 className='font-bold'>{item.adminName}</h1>
              </div>
              <div className='w-full h-[200px] flex justify-center items-center'>
                <img src={item.video} alt="" className='w-72 h-full'/>
              </div>
              <div>
              <h1 className='font-semibold'>{item.title}</h1>
              <h1 className='font-serif'>{item.category}</h1>
              </div>
            </div>
          )

        })):(
          <div>
            <h1>NOT SEVED YOU</h1>
          </div>
        )}
       </div>
        </div>
      
    </div>
  )
}

export default MysaveMark





























