


import { createSlice } from "@reduxjs/toolkit";
const allpostdata = createSlice({
    name:'data',
    initialState:{
        postse:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setPostse:(state,action) => {
            state.postse = action.payload;
        },
        setSelectedPoste:(state,action) => {
            state.selectedPost = action.payload;
        }
    }
});
export const {setPostse, setSelectedPoste} = allpostdata.actions;
export default allpostdata.reducer;

















