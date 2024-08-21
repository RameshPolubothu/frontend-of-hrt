import React from 'react';
import '../../../index.css'
import EditiorJSHTML from 'editorjs-html';
const editiorJSHTML  = EditiorJSHTML();
const SingleBlogCard = ({blog}) => {
    const {title,description,content,coverImg,category,rating,author,createdAt} = blog || {};
    const htmlContent = editiorJSHTML.parse(content).join('');
    const formatdate = (createdDate) =>{
        const date = new Date(createdDate);
        return date.toLocaleDateString('en-US',{
            year:'numeric',
            month:'long',
            day:'numeric'
        });
    }
    return (
        <>
            <div className='bg-white p-8'>
            {/* {blog header} */}
            <div>
                <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
                <p className='mb-6' >{formatdate(createdAt)} by <span className='text-blue-400 cursor-pointer'>Admin 1</span></p>
            </div>
            {/* {blog body} */}
            <div> 
            <img src={coverImg} alt ="cover Image" className='w-full md:h-[520px] bg-cover'></img>
            </div>
            {/* {blog content} */}
            <div className='mt-8 space-y-4 ' >
                <div dangerouslySetInnerHTML={{__html:htmlContent}} className='space-y-3 editiorjsdiv'>

                </div>
                {/* {rating} */} 
                <div>
                    <span className='text-lg font-medium'>Rating : </span>
                    <span>{rating} (based on 1428 reviews)</span>
                </div>
            </div>

            </div>
        </>
    );
}

export default SingleBlogCard;
