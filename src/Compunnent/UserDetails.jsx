












import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function UserDetails() {
   const[alldata,setallData]=useState("")
const user=useSelector((state)=>state.profile.user)

   const token=useSelector((state)=>state.post.tokens) 
   console.log(token)
   const post=useSelector((state)=>state)
   console.log(post)

      const[follwing,setfollowing]=useState([])
      const[userpost,setuserpsot]=useState([])
  
      const{id}=useParams()
const[Unfollow,setUnfollow]=useState(user.following&&user.following.includes(alldata._id)|| false) 

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
          setfollowing(viewdata)
          console.log(viewdata)
      }
   } catch (error) {
      console.log(error)
   }}
  console.log(alldata)
 
  const truing=alldata
  console.log(truing)

  const[updatae,setupdate]=useState('')
  const[list,setlist]=useState(false)
  console.log(list)



const [userfollow,setuserfollow]=useState(user.following&&user.following.includes(alldata._id)|| false)
console.log(userfollow)



useEffect(()=>{
  setupdate(userfollow)
},[])

console.log(updatae)

  //settogole()
  const userpostby=async()=>{

  try {
    const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/singalepost/${id}`,{
      method:"get",
      headers:{
          Authorization:`Bearer${token}`
        }
  })
  if(response.ok){
      const viewdata=await response.json()
      setuserpsot(viewdata)
  
  }
  } catch (error) {
    console.log(error)
  }}

  console.log(userpost)
  //

  const togole=user.following&&user.following.includes(alldata._id)|| false

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
  alert("done..")
  setuserfollow(data)
  setuserfollow(!userfollow)
setupdate(!updatae)
  }

   } catch (error) {
      console.log(error)
    }}

  useEffect(()=>{
  viewprofile()
  userpostby()
      },[])


  return (
    <div className=''>
      <div>
        <div className='flex justify-center  items-center'>
   <div className=''>
       <div >
    <img src={alldata.photo?alldata.photo:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?semt=ais_hybrid"} alt="" className='w-48 h-48 rounded-full' />
       </div>

       <div>
        <h1 className='font-medium'>{alldata.username}</h1>
       <h1>{alldata.email}</h1>
  
         {togole? <button onClick={()=>followunfollow(alldata._id)} className='bg-gray-300 w-20 rounded text-[17px]'>Following</button>
  :<button onClick={()=>followunfollow(alldata._id)} className='bg-blue-400 text-white rounded text-[18px] w-20'>Follow</button>}
   
       </div>
 
       </div>
   </div>
     


<div className='w-[100%] flex justify-center mt-3'>
  <div className='w-[800px]  grid grid-cols-3'>
   {userpost.map((item)=>{
    console.log(item.title)
    return(
      <div className='mt-3 -950 w-64 '>
              <img src={item.video} alt="" className='w-64 h-72 opacity-100'/>

      </div>
    )
  })} 
  </div>
</div>

</div>
    </div>
  )
}

export default UserDetails





