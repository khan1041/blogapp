




import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { BsFileEarmarkPost } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { MdOutlineFollowTheSigns } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdSave } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { AiTwotonePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { IoBookmarksOutline } from "react-icons/io5";
import { increment,dicrement,remove } from '../Redux/PostsSlice'
import { MdLogout } from "react-icons/md";

function SideBar() {
  const navigateTo = useNavigate();

  const { id } = useParams()
  const [show, setShow] = useState(false);
  const useslector=useSelector((state)=>state.post.value) 
  const token=useSelector((state)=>state.post.tokens) 
  console.log(token)
  const dispatch=useDispatch()
  function local(){
    dispatch(remove())
    navigateTo('/login')
  }
  console.log(token)
      const showdata=useSelector((state)=>state.profile.user)
         console.log(showdata)
  return (
    <div>
      <div className=' lg:w-36 shadow-md text-black sm:text-black bg-gray-200 sm:bg-white  lg:border-gray-300 lg:border-r  lg:h-full flex  rounded-lg ml-3 pr-6 fixed'>
        <nav className='transform hover:scale-105 transition-transform duration-700 '>
          <div className='flex justify-center items-center'>
            <div className='text-blue-500 text-2xl'>LOGO</div>

          </div>
          <div className='mb-5'>
            <div className='hidden lg:block'>
              <Link to={'/'}>
                <ul className='p-7 flex gap-2 w-16'><h1 className='mt-1 text-[20px]'><IoHome /></h1> HOME</ul>
              </Link>

              <Link to={'/postcreate'}>
                <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><AiTwotonePlusCircle /></h1>POST</ul>

              </Link>

              <Link to={`/setting`}>
                <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px] animate-spin'><IoSettings /></h1> SETTING</ul>
              </Link>

              <Link to={`/bookmark`}>
                <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><IoBookmarksOutline />  </h1>SAVE</ul>
              </Link>

          
              <Link to={`/profile`}>
                <ul className='p-7 flex gap-2'><img src={showdata.photo} alt="" className='w-5 h-5 rounded-full' />   PROFILE</ul>

              </Link>
              <Link to={`/following`}>

                <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><MdOutlineFollowTheSigns /></h1>Following</ul>

              </Link>
              <div>
                {
                  useslector ?
               <Link to={'/login'} onClick={local}><ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><MdLogout /></h1>Logout</ul>
            </Link>  
                        
                
                     : 
                
                   <Link to={'/login'}><ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><MdLogout /></h1>Login</ul></Link> 
                     
                    }
              </div>
            </div>
          </div>
          <div className=" block  lg:hidden  " onClick={() => setShow(!show)}>
            {show ? <IoCloseSharp size={24} className='text-red-400' /> : <AiOutlineMenu size={24} />}
          </div>
          {show && (
            <div className=" w-full text-black">

              <Link to={'/'}>
          <ul className='p-7 flex gap-2 w-16'><h1 className='mt-1 text-[20px]'><IoHome /></h1> </ul>

              </Link>
              <Link to={'/postcreate'}>
                <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><BsFileEarmarkPost /></h1></ul>

              </Link>


              <Link to={`/setting`}>
                <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><IoSettings /></h1></ul>
              </Link>


            {useslector?  <Link to={`/profile`}>
                <ul className='p-7 flex gap-2'><img src={ showdata.photo} alt="" className='w-5 h-5 rounded-full' /> </ul>

              </Link>:""}

              <Link to={`/following`}>
  
            <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[25px]'><MdOutlineFollowTheSigns /></h1></ul>

              </Link>

              <Link to={`/bookmark`}>
                <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><IoBookmarksOutline />  </h1></ul>
              </Link>

              <div>
                {
                  useslector ?
               <Link to={'/login'} onClick={local}><ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><MdLogout /></h1>Logout</ul>
            </Link>  
                        
                
                     : 
                
                   <Link to={'/login'}><ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><MdLogout /></h1>Login</ul></Link> 
                     
                    }
              </div>
              {/* {
                loggdin ? <ul className='p-7 flex gap-2'><h1 className='mt-1 text-[20px]'><RiLogoutBoxRLine /></h1></ul> : "login"
              } */}
            </div>

          )}


        </nav>
      </div>




    </div>
  )
}

export default SideBar
