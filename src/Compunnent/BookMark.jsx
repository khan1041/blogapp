
import React from 'react'
import { useEffect } from 'react'

function BookMark() {

    const savepost=async(id)=>{
        try {
          const response=await fetch(`http://localhost:8000/app/auth/Book/${id}`,{
        method:"post",
        headers:{
          Authorization:`Bearer${token}`
      
        }
      })
      if(response.ok){
      const data=await response.json()

      console.log(data)
      alert("book add")
      
      }
       } catch (error) {
          console.log(error)
        }}


useEffect(()=>{
savepost()

},[])

  return (
    <div>
      
    </div>
  )
}

export default BookMark












