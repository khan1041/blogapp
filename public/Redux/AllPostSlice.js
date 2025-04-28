




import { createSlice } from "@reduxjs/toolkit";
const getallpost = createSlice({
    name:'getallpost',
    initialState:{
        allpostdata:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        allpost:(state,action) => {
            state.allpostdata = action.payload;
        },
   
    }
});
export const {allpost} =getallpost.actions;
export default getallpost.reducer;




















