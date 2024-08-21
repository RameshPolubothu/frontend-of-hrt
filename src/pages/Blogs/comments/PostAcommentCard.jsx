import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { usePostCommentMutation } from '../../../redux/features/comments/commentApi';
import { useFetchBlogByIdQuery } from '../../../redux/features/blogs/BlogsApi';

const PostAcommentCard = () => {
    const {id} = useParams();
    const [comment,setcomment] = useState('');
    const {user} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    // console.log(user.id);
    const [postComment] = usePostCommentMutation();
    // after posting a comment we again fecth the page 
    const {refetch} = useFetchBlogByIdQuery(id,{skip : !id});
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!user){
            alert('please login to post a comment');
            navigate('/login');
            return ;
        }
        const newComment = {
            comment : comment,
            user : user?.id,
            postId : id,
        }
        // console.log(newComment);
        try {
            const response = await  postComment(newComment).unwrap();
            console.log(response);
            alert("comment posted successfully");
            setcomment('');
            refetch();
        } catch (error) {
            alert('An error occurred while psoting the comment')
        }
    }
    return (
        <>
            <div className='p-8 mt-2'>
            <h3 className='text-lg font-medium mb-8'>
                Leave a comment
            </h3> 
            <form onSubmit={handleSubmit}>
                <textarea 
                name="text" 
                value = {comment}
                onChange={(e) => setcomment(e.target.value)}
                cols = "30"
                rows = "10"
                placeholder='share your comments on post...'
                className='w-full bg-gray-200 focus:outline-none p-5 rounded-md'>
                </textarea>
                <button type='submit' className='w-full bg-Primary text-white hover:bg-indigo-500
                font-medium py-3 rounded-md'>Submit</button>
            </form> 
            </div>         
        </>
    );
}

export default PostAcommentCard;
