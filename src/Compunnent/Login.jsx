


import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increment,dicrement,remove } from '../Redux/PostsSlice'

function Login() {
  const dispatch=useDispatch()
const navigateTo=useNavigate()
  function local(){
    dispatch(remove())
  }
  const{posts}=useSelector(store=>store.pose);
      console.log(posts)
const useslector=useSelector((state)=>state.post.value) 
const removelocal=(useSelector((state)=>state.token)) 
console.log(removelocal)
console.log(useslector)
  const [loading,setLoading]=useState(false)
  const result=dispatch(dicrement())
  console.log(result)
  const[list,setlst]=useState("")

  const [user,setuser]=useState({

    email:"",
    password:""
      
 
     })
 

     const handelinput=(e)=>{
      console.log(e)
       const name=e.target.name
       const value=e.target.value
       
       setuser(
      
          {
           ...user,
          [name]:value   
          }
       )
      
      
      }
     

 const fetchdata=async(e)=>{
 e.preventDefault();


try {
  setLoading(true)

  const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/login`,{

    method:"POST",
    headers:{
     "Content-Type":"application/json"
     
    },
   
    
body:JSON.stringify(user)

   })

   console.log(response)
   if(response.ok){
     const res_data=await response.json()
     

      const pook =dispatch(increment(res_data.token))
      navigateTo('/')
      
console.log(pook)
}
   else{
     alert("field")
     setLoading(false)
   }
       
    } catch (error) {
    console.log(error)
}


 }


  return (
    <div>
 <div className='w-full h-screen flex justify-center items-center '>
    
    <form onSubmit={fetchdata} className='grid  grid-flow-row justify-center items-center shadow-lg w-[400px] h-[330px]'>
<div className='flex justify-center'>
  <h1 className='text-2xl text-red-500 font-semibold'>Login</h1>
</div>
 <label htmlFor="">Email</label>
<input name='email' type="email" value={user.email}   onChange={handelinput} placeholder='email'className='border border-blue-300' />

<label htmlFor="">Password</label>
<input name='password' type="password" value={user.password}  onChange={handelinput} placeholder='password'className='border border-blue-300'  />

  {loading ? (
                        <button>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            Please wait
                        </button>
                    ) : (
                        <button type='submit' className='bg-blue-500 rounded text-yellow-50'>Login</button>
                    )
                }

<Link to={"/register"} className="text-blue-600 ml-5">
             Please Register Now
              </Link>
    </form>

     </div>
  {useslector?<button className='bg-green-900' onClick={local}>remove</button>: <button>clicke</button>}
    </div>
  )
}

export default Login


