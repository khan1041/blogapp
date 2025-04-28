





import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
function Allsugesteduser({item}) {
  console.log(item)
    const allsugsteduser=useSelector((state)=>state.pose.posts)
     console.log(allsugsteduser)
    const user=useSelector((state)=>state.profile.user)
    console.log(user)
       const token=useSelector((state)=>state.post.tokens) 
       console.log(token)

       const [like,setlike]=useState(
           item.followers&&item.followers.includes(user._id) || false)
       console.log(like)

     const[follow,setfollow]=useState(item.followers&&item.followers.includes(user._id) || false)

    

 const followunfollow=async(id)=>{
    try {
      const response=await fetch(`https://blog-app-gbau.onrender.com/follow/${id}`,{
    method:"post",
    headers:{
      Authorization:`Bearer${token}`
    }
  })
  if(response.ok){
  const data=await response.json()
  setfollow(data)
 setfollow(!follow)
  }

   } catch (error) {
      console.log(error)
    }}




  return (
    <div>
      <div>
      <div className='flex justify-center items-center'>
        <div>
  <div>
    
  <Link to={`/details/${item._id}`}>
   <img src={item.photo} alt=""  className='w-24 h-24 rounded-full'/>
  </Link>
   </div>
     
        <div> <h1>{item.username}</h1></div>
        </div>
        <div className='ml-4'>
          {follow?<button  onClick={()=>followunfollow(item._id)} className='bg-gray-300  rounded'>unfollow</button>:
          <button onClick={()=>followunfollow(item._id)} className='bg-blue-400 text-white rounded'>follow</button>} 
        </div>
 

          

      </div>
 
      </div>
    </div>
  )
}

export default Allsugesteduser













