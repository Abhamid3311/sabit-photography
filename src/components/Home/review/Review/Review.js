import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import '../Reviews/Reviews.css'


const Review = ({ review }) => {
    const { name, comment, img, occupation, ratings } = review;
    return (
        <div>
            <Card className='review-card' style={{ width: '20rem', height: '18rem', position: 'relative' }}>
                <Card.Body>
                    <Card.Text className='review-text mb-3'>
                        {comment}
                    </Card.Text>
                    {/*  <Card.Title className='d-flex  align-items-center fs-4 text-danger mb-3 '>
                        <p className='mb-0'>{ratings}</p>
                        <div>
                            <AiFillStar className='ms-2'></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                    </Card.Title> */}
                    <div className='d-flex align-items-center text-start mb-2' style={{ position: 'absolute', bottom: 1 }}>
                        <Card.Img src={img} className='rounded-circle w-25 me-2' alt='person' />
                        <div className='text-secondary'>
                            <Card.Title >{name}</Card.Title>
                            <Card.Subtitle className=" text-muted">{occupation}</Card.Subtitle>
                        </div>

                    </div>
                </Card.Body>
            </Card>


        </div>


    );
};

export default Review;