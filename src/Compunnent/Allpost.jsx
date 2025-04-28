


import React, { useEffect, useRef, useState } from 'react'
import {Routes,Route, useLocation, createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { setPosts } from '../Redux/FollowSlice'
import { setPostse } from '../Redux/Alldata'
import { useDispatch, useSelector } from 'react-redux'
import { setto } from '../Redux/Newsuggest'
import PostItem from './PostItem'
import AlluserShow from './AlluserShow'
import AllUserApi from './AllUserApi'
import { data } from 'autoprefixer'
function Allpost() {

  const refei=useRef("")
  
  const[following,setfollowing]=useState([])
    const dispatch=useDispatch()
        const token=useSelector((state)=>state.post.tokens) 
        console.log(token)
const allpost=useSelector((state)=>state.data.postse)
console.log(allpost)


//allpost hare 
    const allvideo=async()=>{
        try {
             const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/getAllpost`,{
               method:'get',
                 headers:{
  Authorization:`Bearer${token}`
                  }
             })
             if(response.ok){
               const data=await response.json()
                const show=dispatch(setPostse(data))
               console.log(show)

               //const result=dispatch(setPosts(data))
               //console.log(result)
      
                     }            
           } catch (error) {
             console.log(error)
           }}

           //save api following

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
                     const result=dispatch(setto(following))
                   console.log(result)
                 
          
          
                         }            
               } catch (error) {
                 console.log(error)
               }}
               console.log(following)
    
//


           const savepost=async(id)=>{
            try {
              const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/BookMark/${id}`,{
            method:"post",
            headers:{
             Authorization:`Bearer${token}`
           }
          })
          if(response.ok){
          const data=await response.json()
          console.log(data)
          alert("book add")
          
          }
           } catch (error) {
              console.log(error)
            }}
          
          useEffect(()=>{
            myfollowing()
             savepost()
          },[])
          
   
   useEffect(()=>{
    allvideo()
   },[])

  return (
    <div className='' >
    <div className='flex justify-center items-center  '>
      <div className='flex gap-5  ml-24 sm:ml-0 '> 
        {following.slice(0,4).map((item)=>{
       
       return(
        <div className=' '>
          <Link to={`/details/${item._id}`}> 
        <img src={item.photo} alt="" className='w-16 h-16 border-orange-500 border-[4px] border-t mt-4  rounded-full '/>
         </Link>
        </div>
       )

        })}
      </div>
    </div>
      <div className='lg:flex gap-12 justify-center'>
      <div className='ml-0 lg:ml-36'>
      {
         allpost.length>0? allpost.map((post) => <PostItem key={post._id} post={post}/>): <div>

          <h1 className='text-[17px] mt-32'>Waiting...</h1>
         </div>
        }

      </div>
      <div className=''>
      <AllUserApi/>

      </div>
      </div>

    </div>
  )
}

export default Allpost



