


import { createSlice } from "@reduxjs/toolkit";
const ProfileSlice = createSlice({
    name:'togole',
    initialState:{
        to:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setto:(state,action) => {
            state.to = action.payload;
        },
        setSelectedPost:(state,action) => {
            state.selectedUser= action.payload;
        }
    }
});
export const {setto, setSelectedUser} = ProfileSlice.actions;
export default ProfileSlice.reducer;

