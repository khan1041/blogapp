

import { createSlice } from "@reduxjs/toolkit";
const FollowSlice = createSlice({
    name:'pose',
    initialState:{
        posts:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setPosts:(state,action) => {
            state.posts = action.payload;
        },
        setSelectedPost:(state,action) => {
            state.selectedPost = action.payload;
        }
    }
});
export const {setPosts, setSelectedPost} = FollowSlice.actions;
export default FollowSlice.reducer;