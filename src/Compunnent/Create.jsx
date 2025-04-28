
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Create() {
    const token=useSelector((state)=>state.post.tokens) 
        console.log(token)
    const [title,settitle]=useState("")
    const [category,setcategory]=useState("")
    const[about,setabout]=useState("")
    const [video,setvideo]=useState("")
    const Navigateto=useNavigate()

  const [loading,setLoading]=useState(false)
   const changePhotoHandler = (e) => {
      console.log(e);
      const file = e.target.files[0];
     setvideo(file)
    };

    const fetchdata=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title",title);
        formData.append("category", category);
        formData.append("about", about);
  
        formData.append("video", video);
     
       
       try {
        setLoading(true)
  
           const { data } = await axios.post(
               "https://blog-app-gbau.onrender.com/app/auth/post",
               formData,
               {
                 withCredentials: true,
                 headers: {
                
                    "Content-Type": "multipart/form-data",
  
                      Authorization:`Bearer${token}`
                   
                 },
                 
               })
               if(data){
                alert("done create")
                setLoading(false)
               }
       console.log(data)
           } catch (error) {
           console.log(error)
       }}

   

  return (
    <div>
      <h1>Create.jsx</h1>
      <div className=' w-screen h-screen flex items-center justify-center '>

<form className='grid  grid-flow-row justify-center items-center  shadow-lg w-[400px] h-[500px]  ' >
<h3 className="text-2xl font-semibold mb-8">Create Blog</h3>

<label>title</label><br></br>
<input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder='title' className='bg-blue-100 border border-black' />
<label>Category</label>
<br></br>
<select
       className="w-full p-2 border rounded-md"
       value={category}
       onChange={(e) => setcategory(e.target.value)}
     >
       <option value="">Select Category</option>
       <option value="Devotion">Devotion</option>
       <option value="Sports">Sports</option>
       <option value="Coding">Coding</option>
       <option value="Entertainment">Entertainment</option>
       <option value="Business">Business</option>
     </select>
<label>About</label>
<br></br>
<textarea  value={about}   onChange={(e) => setabout(e.target.value)} placeholder='description' className='bg-blue-100 border border-black'></textarea>
<label>Image change</label>
<input type="file"   onChange={changePhotoHandler}/>

{loading ? (
               <button>
                   <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                   Please wait
               </button>
           ) : (
               <button type='submit'onClick={fetchdata} className='bg-blue-500 rounded text-yellow-50 '>submit</button>
           )
       }

</form> 

</div> 
    </div>
  )
}

export default Create




















