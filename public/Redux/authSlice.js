
import { createAsyncThunk, createSlice,current } from "@reduxjs/toolkit";

const authslice=createSlice({
    name:"token",    
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
      
       mytoken:(state,action) => {
         const userId=JSON.stringify()
  
         
         state.value=localStorage.setItem("tokens",action.payload)
           
 
   // state.value=localStorage.setItem("tokens",action.payload)
 
       },
       mytokenverify:(state,action) => {
 
        const data=state.value=!!localStorage.getItem("tokens",action.payload)
        console.log(data)
     
          
      },
 
       logout:(state,action) => {
         
         state.value=localStorage.removeItem("tokens",action.payload)
        // console.log(oris)
        }
   }
 
})
export const {mytoken,mytokenverify,logout} = authslice.actions;

export default authslice.reducer


