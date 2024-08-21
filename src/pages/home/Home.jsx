import React from 'react';
import Hero from './Hero';
import Blogs from '../Blogs/Blogs';
const Home = () => {
    return (
        <div className='bg-white text-Primary container mx-auto mt-8 p-8'>
        <Hero />
        <Blogs />
        </div>
    );
}
export default Home;
