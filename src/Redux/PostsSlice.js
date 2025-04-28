




import { createAsyncThunk, createSlice,current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";


 const postslice=createSlice({
    name:"post",    
    token:localStorage.getItem("tokens"),
    
    initialState:{
       value:localStorage.getItem("tokens"),
      tokens:localStorage.getItem("tokens"),
      // loading:false,
      // error:null,
       data:false,

    },
    reducers:{
      //actions
     
      increment:(state,action) => {
        const userId=JSON.stringify()
 
        
        state.value=localStorage.setItem("tokens",action.payload)
          

  // state.value=localStorage.setItem("tokens",action.payload)

      },
      dicrement:(state,action) => {

       const data=state.value=!!localStorage.getItem("tokens",action.payload)
       console.log(data)
    
         
     },

      remove:(state,action) => {
        
        state.value=localStorage.removeItem("tokens",action.payload)
       // console.log(oris)
       }
  }


});
export const {increment,dicrement,remove} = postslice.actions;

// const {incrrent,dicrement,amount}=postslice.actions
export default postslice.reducer