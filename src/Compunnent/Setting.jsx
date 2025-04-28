




import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoMdSettings } from "react-icons/io";
import { useSelector } from 'react-redux';
import { CiEdit } from "react-icons/ci";

function Setting() {
  
  const refi=useRef("")
  const token=useSelector((state)=>state.post.tokens) 
  console.log(token)
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
 const[photo,setphoto]=useState("")
 const{id}=useParams()
 console.log(token)
     const showdata=useSelector((state)=>state.profile.user)
     console.log(showdata)
 const changePhotoHandler = (e) => {
  const file = e.target.files[0];
  setphoto(file)
  //const reader = new FileReader();

  };



 const fetchdata=async(e)=>{
 e.preventDefault();
 const formData = new FormData();
//  formData.append("username", username);
//  formData.append("email", email);
//  formData.append("password", password);
 formData.append("photo", photo);

try {
    const { data } = await axios.post(
        `https://blog-app-gbau.onrender.com/app/auth/updatephoto`,
        formData,
        {
          withCredentials: true,
          headers: {
          
            Authorization:`Bearer${token}`

          },
          
        })
console.log(data)
if(data){
  alert("done...")
}
    } catch (error) {
    console.log(error)
}


 }

//update name and password

const fetchdata1=async(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  
 
 try {
     const { data } = await axios.post(
         `https://blog-app-gbau.onrender.com/app/auth/update`,
         formData,
         {
           withCredentials: true,
           headers: {
           
             Authorization:`Bearer${token}`
 
           },
           
         })
         if(data){
          alert("done...")
         }
     } catch (error) {
     console.log(error)
 }
 
 
  }



  return (
    <div className='sm:ml-56  flex justify-center'>
      <div>
<h1 className='flex font-serif '>UPDATE<IoMdSettings className='text-2xl text-green-500 animate-spin' /></h1>
  <div>
    <form onSubmit={fetchdata1}>
      <h1></h1>
    <input type="text" value={username} placeholder='username' className='border border-yellow-400 ml-20 sm:ml-0' onChange={(e) => setusername(e.target.value)} />
    <button className='bg-blue-500 rounded ml-4'>SAVE</button>

<h1 className='ml-32 sm:ml-0'>Change Your Password</h1>
<input type="password" value={password} placeholder='password' className='border border-yellow-400 ml-20 sm:ml-0' onChange={(e) => setpassword(e.target.value)}/>
<button className='bg-blue-500 rounded ml-4'>SAVE</button>
    </form>
  </div>

<div className='font-extralight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, <br></br>alias hic perferendis praesentium dolor 
reprehenderit atque placeat deleniti <br></br>unde pariatur, ipsum molestiae nam! Dolorem et modi,<br></br> nobis enim molestias a?</div>

<form onSubmit={fetchdata}>
  <div>
  <img src={showdata.photo} alt="" className='w-28 h-28 rounded-full' />

  </div>

<div>
  <h1>Change Photo</h1>
</div>
<input type="file" ref={refi} className='hidden' onChange={changePhotoHandler}/>
<button onClick={() => refi.current.click()} className='flex text-green-400 rounded hover:bg-[#258bcf] bg-black'>coise <CiEdit className='text-2xl' /></button>
<br></br>
<button className='text-blue bg-blue-400 rounded'>SAVE</button>
   </form>
</div>
    </div>
  )
}

export default Setting










