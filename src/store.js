import { configureStore } from "@reduxjs/toolkit";

import usersReducer from './feature/useSlice';

export default configureStore ({
    reducer:{
        users: usersReducer
    }
})