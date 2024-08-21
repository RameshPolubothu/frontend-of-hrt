import React from 'react';
import commentorIcon from '../../../assets/commentor.png';
import { formatdate } from '../../../Utilities/dateformat';
import PostAcommentCard from './PostAcommentCard';
import { useSelector } from 'react-redux';
const CommentCard = ({comments}) => {
    console.log(comments);
    const user = useSelector ((state) => state.auth.user);
    return (
        <div>
            <div className='bg-white p-8'>
                <div>
                {
                    comments?.length >0 ? <div>
                        <h3 className='text-lg font-medium py-6'>All Comments...</h3>
                        <div>
                            {   
                                comments.map((comment,index) =>(
                                    <div key = {index}>
                                            <div className='flex gap-4 items-center'>
                                                <img src={commentorIcon} className='h-10' />
                                                <div>
                                                    <p className='text-lg font-medium underline capitalize
                                                    underline-offset-4 text-blue-400'>{comment?.user?.username}</p>
                                                    <p className='text-[12px] italic'>{formatdate(comment.CreatedAt)}</p>
                                                </div>
                                            </div>
                                            {/* {comments details} */}
                                            <div className='text-gray-600 mt-5 border p-8 mb-3'>
                                                {/* <p>{comment}</p> */}
                                                <p className='md:w-4/5'>{comment?.comment}</p>
                                            </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> :<div className='text-lg font-medium'>No Comments Yet!</div>
                } 
                </div>
            </div>
            {/* {addcommentsection} */}
            <div>
                <PostAcommentCard />
            </div>
        </div>
    );
}

export default CommentCard;

