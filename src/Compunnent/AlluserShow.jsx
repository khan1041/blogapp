


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../Redux/ProfileSlice'
import { setPosts } from '../Redux/FollowSlice'
import { Link } from 'react-router-dom'
import Myprofile from './Myprofile'
import { ListCheckIcon } from 'lucide-react'
import { setto } from '../Redux/Newsuggest'

function AlluserShow({item}) {
    console.log(item)
const dispatch=useDispatch()

const user=useSelector((state)=>state.profile.user)
console.log(user)

const [like,setlike]=useState(
  item.followers&&item.followers.includes(user._id) || false)
console.log(like)



// const postingdata=dispatch(setto(like))
// console.log(postingdata)

const [postlike,setpostlike]=useState(item.followers&&item.followers.includes(user._id) || false)
console.log(item.length)
//  
const alluser=useSelector((state)=>state.pose.posts)
    console.log(alluser)

//
    const token=useSelector((state)=>state.post.tokens) 
    console.log(token)



 //follow un follow
 const followunfollow=async(id)=>{

  try {
    const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/follow/${id}`,{
  method:"post",
  headers:{
    Authorization:`Bearer${token}`
  }
})
if(response.ok){
const data=await response.json()
setlike(data)
setlike(!like)

}

 } catch (error) {
    console.log(error)
  }}

  
  return (
    <div>
      <div>   
      </div>

   {!postlike?
   <div className='flex gap-2 mt-3 '>
        <Link to={`/details/${item._id}`}>
        <img src={item.photo} alt="" className='w-20 h-20 rounded-full' />
        </Link>
         

        <div className='flex justify-center items-center mt-3 ml-12'>
        {like?<button onClick={()=>followunfollow(item._id)} className=' rounded text-black ml-2 text-[17px] font-bold hover:text-gray-700'>Unfollow</button>

     :<button onClick={()=>followunfollow(item._id)} className=' rounded text-blue-400 ml-2 text-[17px] font-bold hover:text-blue-600'>Follow</button> }
 
        </div>
      </div>: ''
}
    </div>
  )
}

export default AlluserShow
