


import { createSlice } from "@reduxjs/toolkit";
const ProfileSlice = createSlice({
    name:'profile',
    initialState:{
        user:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setUser:(state,action) => {
            state.user = action.payload;
        },
        setSelectedPost:(state,action) => {
            state.selectedUser = action.payload;
        }
    }
});
export const {setUser, setSelectedUser} = ProfileSlice.actions;
export default ProfileSlice.reducer;












