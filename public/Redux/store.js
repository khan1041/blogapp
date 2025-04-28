



import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { postslice } from "./PostsSlice";
import tokenauth from './authSlice.js'
import myprofile from './profileSlice.js'
import getallpost from './AllPostSlice'
const store = configureStore({
    reducer:{
     token:tokenauth,
     profile:myprofile,
     getallpost:getallpost

    }})

    export default store