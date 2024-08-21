import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBlog, FaUsers} from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa6";
import { useFetchBlogsQuery } from '../../../../redux/features/blogs/BlogsApi';
import { useGetCommentsQuery } from '../../../../redux/features/comments/commentApi';
import { useGetUserQuery } from '../../../../redux/features/authenticatio/Authapi';
import BlogChart from './BlogChart';
const Dashboard = () => {
    const [query,setQuery] = useState({search:'',category:''})
    const { user } = useSelector((state) => state.auth);
    const {data:blogs = [],error,isLoading} = useFetchBlogsQuery(query);
    const {data : comments =[]} = useGetCommentsQuery();
    const {data : users ={}} = useGetUserQuery();
    const usrcnt = users.users?.length;
    const admincnt = users.users?.filter(user => user.role === 'admin').length;
    // console.log();
    // console.log(comments);
    // console.log(blogs);
    // const ausers = admincnt.length;
    // const tusers = (users.users.length-ausers);
    const name = user.username.charAt(0).toUpperCase() + user.username.slice(1);
    return (
        <>
            {isLoading && (<div>Loading...</div>)}
            <div>
                <div className='bg-bgPrimary p-5'>
                    <h1 className='text-lg font-medium mb-2'>Hi, {name} Sir</h1>
                    <p className='text-md font-medium mb-2'>Welcome to Admin Dashboard</p>
                    <p>Here you can manage your hotel's posts and other Administrative tasks</p>
                </div>
                {/* stats */}
                <div className='flex flex-col sm:flex-row mt-5 mb-5 gap-4'>
                        <div className='bg-indigo-100 py-6  rounded-md w-full space-y-1 flex flex-col items-center'>
                        <FaUsers className='size-20 text-indigo-500'/>
                        <p>{usrcnt-admincnt} Users</p>
                        </div>
                        <div className='bg-red-100 py-6  rounded-md w-full space-y-1 flex flex-col items-center'>
                        <FaBlog className='size-20 text-red-500'/>
                        <p>{blogs.length} Blogs</p>
                        </div>
                        <div className='bg-green-100 py-6  rounded-md w-full space-y-1 flex flex-col items-center'>
                        <RiAdminLine className='size-20 text-green-500'/>
                        <p>{admincnt} Admin{admincnt!==1 ?'s':''}</p>
                        </div>
                        <div className='bg-orange-100 py-6  rounded-md w-full space-y-1 flex flex-col items-center'>
                        <FaRegComments className='size-20 text-orange-500'/>
                        <p>{comments.post} Comments</p>
                        </div>
                </div>

                {/* graphs and charts */}
                <div className='pb-5 pt-5'>
                        <BlogChart blogs={blogs}/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
