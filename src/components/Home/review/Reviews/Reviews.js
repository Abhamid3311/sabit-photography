import React, { useEffect, useState, useRef } from 'react';
import Review from '../Review/Review';
import './Reviews.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";



const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div id='review' className='px-5'>
            <div className='mb-5'>
                <p className='fw-bolder text-white mb-0'>Testimonials</p>
                <h2 className='text-white fw-bold'>What my clients says</h2>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                   
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide>
                        <Review
                            key={review.id}
                            review={review}
                        ></Review>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Reviews;