
import Lottie from "lottie-react";
import banner from '../../../assets/LottieImages/banner.json'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Hero.css';

// import required modules
import { EffectCards } from 'swiper/modules';
// images
import img1 from '../../../assets/people/0.jpg'
import img2 from '../../../assets/people/01.jpg'
import img3 from '../../../assets/people/1.jpg'
import img4 from '../../../assets/people/2.jpg'
import img5 from '../../../assets/people/3.jpg'
import img6 from '../../../assets/people/5.jpg'
import img7 from '../../../assets/people/8.jpg'
import img8 from '../../../assets/people/9.jpg'

const Hero = () => {
    return (
        <div className='flex justify-center items-center py-16'>
            <div className=' font-semibold text-5xl lg:w-[60%] space-y-6'>Find Your <span className="text-blue-600">Dream</span> <br />Job Today <br /><p className='text-base text-gray-600'>&quot;Discover thousands of job opportunities across various industries and locations. Whether you&apos;re a fresh graduate or an experienced professional, our platform makes it easy to find the perfect role that suits your skills and career goals.&quot;</p></div>
            <div className='lg:w-[40%]'>

                {/* <Lottie animationData={banner}  loop={true} /> */}
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="w-full h-full object-cover object-center" src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover object-center" src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover object-center" src={img3} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover object-center" src={img4} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover object-center" src={img5} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover object-center" src={img6} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover object-center" src={img7} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="w-full h-full object-cover object-center" src={img8} alt="" /></SwiperSlide>
                    
                </Swiper>
            </div>


        </div>
    );
};

export default Hero;