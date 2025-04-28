

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setto } from '../Redux/Newsuggest'
import { setPosts } from '../Redux/FollowSlice'
import { setUser } from '../Redux/ProfileSlice'
import { data } from 'autoprefixer'
import Mypage from './Mypage'
import AlluserShow from './AlluserShow'
import { Link, useParams } from 'react-router-dom';
import Allsugesteduser from './Allsugesteduser'

function AllUserApi() {
    const dispatch=useDispatch()
    const token=useSelector((state)=>state.post.tokens) 
    const user=useSelector((state)=>state.profile.user)
    console.log(token)
    const alluser=useSelector((state)=>state)
    console.log(alluser)
    const alluserdata=useSelector((state)=>state.pose.posts)
    console.log(alluserdata)
 

    
  const showdata=useSelector((state)=>state.profile.user)
    console.log(showdata)

    const[manage,setManage]=useState("")

    const news=useSelector((state)=>state)
     console.log(news)
   
const [allsuser,setallsuser]=useState([])

const allprofile=async()=>{
     try {
          const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/suggested`,{
            method:'get',
              headers:{
         Authorization:`Bearer${token}`
               }
          })
          if(response.ok){
            const data=await response.json()
            setallsuser(data)
            console.log(data)
       const dato=dispatch(setPosts(data))
       console.log(dato)
                  }            
        } catch (error) {
          console.log(error)
        }}

console.log(allsuser)
useEffect(()=>{
allprofile()
//datais()
},[])


 return (
    <div className='ml-20'>
      <div className='mt-7 flex gap-5 '>
        <div>
        { token? <img src={ token? showdata.photo : ""} alt="" className='w-20 h-20 rounded-full  border-gray-500 border-[3px]  shadow-yellow-200 shadow-2xl'/>:
        
        <img src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="" className='w-20 h-20 rounded-full  border-gray-500 border-[3px]  shadow-yellow-200 shadow-2xl' />  }    

        </div>
        <div >
            <h1 className='text-[17px] font-bold'>{token?showdata.username:""}</h1>
              <h1>{ token?showdata.email:""}</h1>
            </div>

            <div className=' flex justify-center items-center'>
        <button className='text-[18px] text-blue-700 font-bold'><Link to={'/profile'}>Switch</Link></button>
      </div>
      
      </div>
      <div className='flex ml-16  gap-11 mt-4'>
  <h1 className='text-slate-400'>Suggested for you</h1>
        <h1 className='text-[17px] font-bold'><Link to={'/allsuggested'}>See All</Link></h1>
      </div>
    
   <div className='h-48 w-auto  overflow-hidden'>
      {
  alluserdata.map((item) =>
           <AlluserShow key={item._id} item={item}/>      
 )
}  

   </div>

   <div>

   </div>
      
    </div>
  )
}
export default AllUserApi






