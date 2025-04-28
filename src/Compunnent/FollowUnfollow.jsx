
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
    import { setUser } from '../Redux/ProfileSlice'
    import { setPosts } from '../Redux/FollowSlice'
    import { Link } from 'react-router-dom'
    import Myprofile from './Myprofile'
    import { ListCheckIcon } from 'lucide-react'
    import { setto } from '../Redux/Newsuggest'
function FollowUnfollow() {
    const[alldata,setallData]=useState("")
       const token=useSelector((state)=>state.post.tokens) 
       console.log(token)
    const user=useSelector((state)=>state.profile.user._id)
    console.log(user)
          const[follwing,setfollowing]=useState([])
          const[userpost,setuserpsot]=useState([])
          const{id}=useParams()
    const[Unfollow,setUnfollow]=useState(user||false)

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
      setUnfollow(data)
      setUnfollow(!Unfollow)
      
      }
      alert("follow")
      
       } catch (error) {
          console.log(error)
        }}
  return (
    <div>
        
    </div>
  )
}

export default FollowUnfollow
