import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Authapi = createApi({
    reducerPath: 'AuthApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"https://backend-of-hrt.vercel.app/api/auth",
        credentials:'include',
    }),
    endpoints:(builder) =>({
        registerUser :builder.mutation({
            query : (newUser) => ({
                url:"/register",
                method:'POST',
                body : newUser,
            })
        }),
        loginUser : builder.mutation({
            query : (credentials) => ({
                url:"/login",
                method:'POST',
                body : credentials,
            })
        }),
        logoutUser : builder.mutation({
            query : () => ({
                url:"/logout",
                method:'POST',
            })
        }),
        getUser: builder.query({
            query : () => ({
                url:"/users",
                method:'GET',
            }),
            refecthOnMount : true,
            invalidatesTags : ["User"]
        }),
        deleteUser : builder.mutation({
            query : (id) => ({
                url:`/users/${id}`,
                method:'DELETE',
            }),
        }),
        updateUser : builder.mutation({
            query : ({id,role}) => ({
                url:`/users/${id}`,
                method:'PUT',
                body:{role}
            }),
            refecthOnMount : true,
            invalidatesTags:["User"]
        }),
    }),
})

export const { useRegisterUserMutation,useLoginUserMutation,useLogoutUserMutation,useGetUserQuery,useDeleteUserMutation,useUpdateUserMutation} = Authapi;

export default Authapi;