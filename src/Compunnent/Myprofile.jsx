




import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../Redux/FollowSlice'
import { setUser } from '../Redux/ProfileSlice'
import { data } from 'autoprefixer'
import Mypage from './Mypage'

function Myprofile() {
    const dispatch=useDispatch()
    const token1=useSelector((state)=>state.post.tokens) 
    console.log(token1)
    const showdata=useSelector((state)=>state.profile.user)
    console.log(showdata)
    const alluserdata=useSelector((state)=>state)
    console.log(alluserdata)

    const[mylogo,setLogo]=useState("")
    const [mydata,setmydata]=useState([])
    //profile
const myprofile=async()=>{
     try {
          const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/profile`,{
            method:'get',
              headers:{
         Authorization:`Bearer${token1}`
               }
          })
          if(response.ok){
            const data=await response.json()
            console.log(data)
            setLogo(data)
       dispatch(setUser(data))
                  }
        } catch (error) {            
          console.log(error)
        }}

//mypost

const myallpost=async()=>{

  try {
    const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/me`,{
      method:'get',
        headers:{
   Authorization:`Bearer${token1}`
         }
    })
    if(response.ok){
      const data=await response.json()
      console.log(data)
      setmydata(data)
    
            }

  } catch (error) {
    console.log(error)
  }}

console.log(mydata)


useEffect(()=>{
  myprofile()
  myallpost()
},[])


  return (
    <div>
      <div>
        
        {/* <h1 className='text-[17px] font-medium'>{showdata.username}</h1>
        <div>
          <img src={showdata.photo} alt=""  className='w-36 h-36 rounded-full'/>
        </div>
        <h1 className='text-[14px] font-semibold'>{showdata.email}</h1> */}
      </div>
     
   

    </div>
  )
}

export default Myprofile














