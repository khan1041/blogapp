




// import { createSlice } from "@reduxjs/toolkit";
// //import { replace } from "react-router-dom";
// //import { data } from "../Data";

// const initialState={
//  user:[],
//  quntity:0

// }

// const cartSystem=createSlice({
// name:"user",
// initialState,
// reducers:{

// // addcard:(state,action)=>{
// // let find=state.user.findIndex((item)=>item.id===action.payload.id)
// addcard(state,action){

// // const finde= state.user.push(action.payload)
//  const finde=state.user.findIndex(item=>item.id==action.payload.id)

//  if(finde>=0){
  
//   state.user[finde].quntity+=1
// }
// else{
//   const temver={...action.payload,quntity:1}
// state.user.push(temver)
// }


//  },

//  RemoveItem(state,action){
//   return state.user.filter(item=>item.id!=action.payload)
//     }


// }
// })


// export const{addcard,RemoveItem}=cartSystem.actions
// export default cartSystem.reducer
// //export const{add}=crateSlice.actions;
//  //export default initialState.reducers





//    const find=state.cart.findIndex(item=>item.id==action.payload.id)

// if(find>=0){

//      state.cart[find].quntity+=1
// }
// else{
//      const temver={...action.payload,quntity:1}
//    state.cart.push(temver)


import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { data } from "../Data";
const initialState={
cart:[],
items:data,
totalquality:0,
totalprice:0

}
export const cartSlice=createSlice({

name:"cart",
initialState,
reducers:{

  addcard:(state,action)=>{
    let find=state.cart.findIndex((item)=>item.id===action.payload.id)
    if(find>=0){
      state.cart[find].quntiy+=1;
      toast("alredy select")
    }
    else{
      state.cart.push(action.payload) 
      toast("done")

    }

  },

  closecard:(state,action)=>{
    let find=state.cart.findIndex((item)=>item.id===action.payload.id)
    if(find>=0){
      state.cart[find].quntiy-=1;
    }
    else{
      state.cart.push(action.payload) 

    }

  },


gettotal:(state)=>{

let{totalquality,totalprice}=state.cart.reduce(
 (cartTotal,cartItem)=>{

const {price,quntiy}=cartItem
const itemtotal=price*quntiy
cartTotal.totalprice+=itemtotal
  cartTotal.totalquality+=quntiy
return cartTotal
 },{

  totalprice:0,
totalquality:0

 }


)
state.totalprice=parseInt(totalprice.toFixed(2))
state.totalquality=totalquality

},

removeItem:(state,action)=>{

  state.cart=state.cart.filter((item)=>item.id !=action.payload)
}
,
//
RemoveIteme1(state,action){
    return state.user.filter(item=>item=action.payload)
     }
  


}

})

export const {addcard,gettotal,closecard,removeItem,RemoveIteme1}=cartSlice.actions
export default cartSlice.reducer




