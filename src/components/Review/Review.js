import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, comment, img, occupation, ratings } = review;
    return (
        <div>
            <Card className='shadow' >
                <Card.Body>
                    <Card.Text className='fs-4 '>
                        {comment}
                    </Card.Text>
                    <Card.Title className='text-danger '>Ratings: {ratings} Starts</Card.Title>
                    <div className='d-flex justify-content-between align-items-center '>

                        <div className='text-secondary'>
                            <Card.Title >{name}</Card.Title>
                            <Card.Subtitle className=" text-muted">{occupation}</Card.Subtitle>
                        </div>
                        <Card.Img src={img} className='rounded-circle w-25' alt='person' />
                    </div>
                </Card.Body>
            </Card>


        </div>


    );
};

export default Review;