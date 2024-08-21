import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import IMG1 from '../../assets/hero-section/img1.png';
import IMG2 from '../../assets/hero-section/img2.png';
import IMG3 from '../../assets/hero-section/img3.png';
import IMG4 from '../../assets/hero-section/img4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify justify-between md:gap-14 gap-8'>
            <div className='md:w-1/2 w-full text-center'>
                <h1 className='md:text-5xl text-3xl font-bold md:leading-tight' >Hotels With Rooftop Pools Near Me</h1>
                <p className='py-4'
                >Discovering hotels with rooftop pools near you! Whether you're planning a luxiours 
                    staycation or a weekend getaway,our curated select of hotels with rooftop pools will 
                    help you beat the heat and elevate your travel experince.</p>
            </div>
            <div className='md:w-1/2 w-full mx-auto'>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={IMG1} className='w-full lg:h-[420px] sm:h-[96px] h-80'></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG2} className='w-full lg:h-[420px] sm:h-[96px] h-80'></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG3} className='w-full lg:h-[420px] sm:h-[96px] h-80'></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG4} className='w-full lg:h-[420px] sm:h-[96px] h-80'></img>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    );
}

export default Hero;
