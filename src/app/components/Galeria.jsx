'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <div className='h-[26rem]   md:h-[48rem] p-5'>
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide> <Image src={"/baner.jpg"} height={480} width={1200} alt='123' /></SwiperSlide>
        <SwiperSlide><Image src={"/baner.jpg"} height={480} width={1200}  alt='123'/></SwiperSlide>
        <SwiperSlide><Image src={"/baner.jpg"} height={480} width={1200} alt='123' /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}
