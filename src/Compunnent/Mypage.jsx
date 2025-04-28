

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function Mypage({item}) {
  const[save,setSave]=useState("")
    console.log(item)
    const{posts}=useSelector(store=>store.pose);
    console.log(posts)

    const token1=useSelector((state)=>state.post.tokens) 
      console.log(token1)


  return (
    <div>
   


      <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Perspiciatis mollitia quis, quasi, officia sint exercitationem fuga similique 
        quo praesentium id facilis, libero unde magnam alias vel adipisci dolor hic fugiat.</h1>
    </div>
  )
}

export default Mypage









