import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, comment, img, occupation } = review;
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{occupation}</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Review;