
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { BsSuitHeart } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa6";

function Newprofile() {
        const showdata=useSelector((state)=>state.profile.user)
        console.log(showdata)
        const showdata1=useSelector((state)=>state.profile.user)
        console.log(showdata1.bookmarks)


    const token1=useSelector((state)=>state.post.tokens) 
       console.log(token1)
           const [mydata,setmydata]=useState([])
       
const myallpost=async()=>{

  try {
    const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/mypost`,{
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
  myallpost()
},[])



  return (
    <div className='w-ful h-[1000px]' >

      <div className='flex justify-center items-center ml-24'>
       <div className=''>
       <h1 className='font-bold'>{showdata.username}</h1>
       <h1 className='font-serif text-[16px]'>{showdata.email}</h1>

       <div className='flex gap-4'>
       <h1><span className='text-gray-500 text-[19px]'>Following</span> <span className='text-[18px]'>{showdata.following&&showdata.following.length}</span></h1>
       <h1><span className='text-gray-500 text-[19px]'>Followers</span> <span className='text-[18px]'>{showdata.followers&&showdata.followers.length}</span></h1>

       </div>
   
       <div className='' >
        <img src={showdata.photo} alt="" className='w-28 h-28 border-4 border-b-white rounded-full  shadow-yellow-100 shadow-2xl  ' />
       </div>
      </div>
       </div>        

        <div className=''>
          <div className='flex justify-center '>

              <div className='border-b border-gray-300 w-[900px]  '>
                <div className=' flex justify-center'>
                        <h1 className='font-extrabold text-2xl ml-20'>MY ALLPOST</h1>
                </div>
       </div>
        </div>
          </div>

       <div className='flex justify-center'>
      <div className=' lg:grid grid-cols-3  gap-3 mt-24 mb-11 w-[800px] ml-20'>
        {mydata.length>0?(mydata.map((item)=>{
        
        return(
          <div className=' w-[250px] h-[260px] shadow-lg mt-3 '>
            <div className='flex gap-2'>
            </div>
            <div className='bg-black h-full relative sm:flex justify-center items-center transform hover:scale-105 transition-transform duration-300 mt-7'>
                                <div className='flex justify-center items-center'>

                              
                           <div className='flex gap-3 mt-16 sm:mt-0'>
                            <div className=''>
                              <BsSuitHeartFill className='text-2xl text-white transition-all'/> 
                            <h1 className='text-white ml-2'>{item.like.length}</h1>   
                            </div>
                            <div className=''>
                             <h1 className='text-white text-2xl'><FaComment /></h1>
                            <h1 className='text-white ml-2'>{item.comments.length}</h1>  
                            </div>
                          
                           </div>
                             </div>

              <div className='absolute  justify-center h-full left-0 top-0 hover:opacity-20'>
                            <img src={item.video} alt="" className='h-full'/>


              </div>

            </div>
            <div className='flex'>
          
            </div>
          </div>
        )

        })):(
          <div>
            <h1 className='text-2xl font-mono'>Network error....</h1>
          </div>
        )}
        </div>
      </div> 
    </div>
  )
}

export default Newprofile
