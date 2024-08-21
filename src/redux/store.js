import { configureStore } from '@reduxjs/toolkit'
import { blogApi } from './features/blogs/BlogsApi'
import authapi from './features/authenticatio/Authapi'
import authReducer from "./features/authenticatio/AuthSlice"
import commentApi from './features/comments/commentApi'

export const store = configureStore({
    reducer:{
        [blogApi.reducerPath] : blogApi.reducer,
        [authapi.reducerPath] : authapi.reducer,
        [commentApi.reducerPath] : commentApi.reducer,
        auth : authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(blogApi.middleware,authapi.middleware,commentApi.middleware),
})