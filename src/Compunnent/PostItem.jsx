

import React, { useEffect, useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { setPostse } from '../Redux/Alldata';
import { FaComment } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import axios from 'axios';
function PostItem({post}) {

//coment systerm
const [comment,setComment]=useState('')
 // const [comment, setComment] = useState(post.comments);

const[getdata,setGetdata]=useState([])
const[togole,setTogole]=useState(false)

const xite=()=>{
togole(!togole)

}

  //disptch
  const dispatch=useDispatch()
    console.log(post)
    //token
    const token=useSelector((state)=>state.post.tokens) 
    console.log(token)
    //user
   const user=useSelector((state)=>state.profile.user)
  console.log(user)
//disllike or like
    const posts=useSelector((state)=>state.data.postse)
    console.log(posts)
  
    const[like,setlike]=useState(post.like&&post.like.includes(user._id)||false)
    console.log(like)


    const[postlike,setpostlike]=useState(post.like.length)
    console.log(postlike)
//
 
//like or dislike api

    const likepuss=async(id)=>{
     
      try {
        
        const action = like? 'dislike' : 'like';
        const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/${action}/${id}`,{
    
          method:"post",
          headers:{
            Authorization:`Bearer${token}`
           }
        })
    
    
        if(response.ok){
          const data=await response.json()
          const updatedLikes = like ? postlike - 1 : postlike + 1;
          setpostlike(updatedLikes);
          const updatedPostData=posts.map(p =>
            p._id === post._id ? {
                ...p,
                like: like ? p.like.filter(id => id !== user._id) : [...p.like, user._id]
            } : p
        );
      const likeer= dispatch(setPostse(updatedPostData))
     console.log(likeer)
          setlike(!like)
    
        }
    
        console.log(like)
      } catch (error) {
        console.log(error)
     }}







    const fetchdata=async(e)=>{
      e.preventDefault();
      const formData = new FormData();
      formData.append("text",comment);
    
     try {
         const { data } = await axios.post(
             `https://blog-app-gbau.onrender.com/app/auth/commentpost/${post._id}`,
             formData,
             {
               withCredentials: true,
               headers: {
                 "Content-Type": "multipart/form-data",
                 Authorization:`Bearer${token}`

               },
               
             })
     console.log(data)
     if(data){
     alert("done")
     setComment("")  }
         } catch (error) {
         console.log(error)
     }}


     const getcomment=async(id)=>{
       
          try {
               const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/comment/${id}`,{
                 method:'get',
                   headers:{
              Authorization:`Bearer${token}`
                    }
               })
               if(response.ok){
                 const data=await response.json()
               setGetdata(data.comments)
                 console.log(data.comments)
           
                       }
                       setTogole(!togole)
             } catch (error) {            
               console.log(error)
             }}
     console.log(getdata)
     const[blur,setblur]=useState('')

     const togoleblur=()=>{
        setblur(!blur)

     }


//bookmark api
const[save,setSave]=useState(user.bookmarks&&user.bookmarks.includes(post._id) || false)

const savepost=async(id)=>{

  try {
    const response=await fetch(`https://blog-app-gbau.onrender.com/app/auth/Book/${id}`,{
  method:"get",
  headers:{
    Authorization:`Bearer${token}`

  }
})
if(response.ok){
const data=await response.json()
setSave(data)
setSave(!save)
}
 } catch (error) {
    console.log(error)
  }}


 
  return (
    <div>
      
      <div className='w-full  ml-19' >
        <div className='flex-col w-[590px] justify-center items-center   mt-3 shadow-md  '>
        <div className='flex'>
  <img src={post.adminPhoto} alt="" className='w-7 h-7 rounded-full' />
          <h1 className='text-[17px] ml-7 font-mono'>{post.adminName}</h1>
</div>
       <div className='flex justify-center '>

        <img src={post.video} alt="" className='w-auto h-72' />
       </div>
 
<div className='flex gap-4 '>

<div className='flex'>
{like?(<button className='text-3xl text-red-600' onClick={()=>likepuss(post._id)}><BsSuitHeartFill />
</button>):
(<button className='text-3xl' onClick={()=>likepuss(post._id)}><BsSuitHeart/>
</button>
)}
<h1>{post.like.length}</h1>
</div>

<button onClick={()=>getcomment(post._id)} className={togole?'text-3xl':'text-2xl'}><FaComment /></button> 

<div className='ml-[77%]'>
{save? <button onClick={()=>savepost(post?._id)} className='text-2xl mt-2'><FaBookmark /></button>:<button onClick={()=>savepost(post._id)} className='text-2xl mt-2'><FaRegBookmark/>  </button>}
</div>

</div>

<div>
  <h1>{post.title}</h1>
  <form onSubmit={fetchdata}>
  <div className='flex gap-3 mt-3 justify-center'>
<input name='text'  type='text' placeholder='add comment...' value={comment}  onChange={(e) => setComment(e.target.value)} />
  <button className='bg-blue-500 text-white rounded'>SEND</button>
  </div>
</form>

</div>
<div className={togole?'bg-white  ':''}>
{togole?getdata.map((item)=>{
console.log(item)
return <div className='flex'>
<div>
  <img src={item.author.photo} alt="" className='w-8 h-8 rounded-full' />
</div>
<div>
  <h1>{item.author.username}</h1>
  <div className='bg-slate-200'>
  <h1 className=''><span className='text-red-400 font-extrabold'>comment:</span>{item.text}</h1>

  </div>
</div>
<div>
  
</div>
</div>

}):""}
</div>

        </div>
      </div>
    </div>
  )
}

export default PostItem
