




import { createSlice } from "@reduxjs/toolkit";
const getallpost = createSlice({
    name:'getallpost',
    initialState:{
        posts:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setposts:(state,action) => {
            state.posts = action.payload;
        },
        setSelectedPost:(state,action) => {
            state.selectedPost = action.payload;
        }

    }
});
export const {setposts ,setSelectedPost} =getallpost.actions;
export default getallpost.reducer;




















