import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Service = ({ service }) => {
    const { name, description, img } = service;
    const navigate = useNavigate();
    const handleBookNow = () => {
        navigate("/checkout");
    }
    return (
        <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button onClick={handleBookNow} variant="primary">
                    Book Now <AiOutlineArrowRight></AiOutlineArrowRight>
                </Button>
            </Card.Body>
        </Card>

    );
};

export default Service;