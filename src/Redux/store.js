

import { combineReducers, configureStore } from "@reduxjs/toolkit";
//import { postslice } from "./PostsSlice";
import mypost from './PostsSlice'
import follower from './FollowSlice'
import datalist from './Alldata'
import userdata from './ProfileSlice'
import suggested from './Newsuggest'
import followunfolow from './localstorage'
const store = configureStore({
    reducer:{
        post:mypost,
        token:mypost,
        pose:follower,
        data:datalist,
        profile:userdata,
        togole:suggested,
        follow:followunfolow

    }})
export default store;
