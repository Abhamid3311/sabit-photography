import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div id='review' className='my-5 px-5' >
            <div className='my-5'>
                <p className='fw-bolder mb-0'>Testimonials</p>
                <h2 className='text-primary fw-bold'>What my clients says</h2>
            </div>

            <div className="review-container">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>).slice(0, 3)
                }
            </div>
        </div>
    );
};

export default Reviews;