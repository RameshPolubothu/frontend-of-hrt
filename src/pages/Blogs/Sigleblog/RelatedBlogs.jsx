import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchRealtedBlogsQuery } from '../../../redux/features/blogs/BlogsApi';

const RelatedBlogs = () => {
    const {id} = useParams();
    const {data:RelatedBlogs=[],error,isLoading} = useFetchRealtedBlogsQuery(id);
    return (
        <>
        <div>
            <h3 className='text-2xl pt-5 px-8 pb-5 font-medium'>Related Blogs</h3>
            <hr></hr>
            {
                RelatedBlogs.length >0 ? (
                <div>
                        {
                            RelatedBlogs.map((blog,index) =>(
                                    <Link key = {index}
                                    to = {`/blogs/${blog._id}`}
                                     className='flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm px-8 py-4'>
                                            <div className='py-2 size-14'>
                                                <img src={blog.coverImg} className='h-full w-full rounded-full ring-2 ring-blue-700'></img>
                                            </div>
                                            <div>
                                                <h4 className='font-medium text-[#1E73BE]'>{blog?.title.substring(0,50)}</h4>
                                                <p>{blog?.description.substring(0,60)}</p>
                                            </div>
                                    </Link>
                                )
                            )
                        }
                </div> 
                ): (<div className='text-lg font-medium p-8'>No Related Blogs</div>)
            }
        </div>  
        </>
    );
}

export default RelatedBlogs;
