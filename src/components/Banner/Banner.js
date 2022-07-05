import './Banner.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = () => {
    return (
        <div id='banner' >
            <div className='banner-head text-center mx-auto text-white'>
                <p className='fs-4 fw-bolder '>Welcome to</p>
                <h1 className='text-primary fs-1 text-uppercase fw-bold '>Sabit Photography </h1>
                <p className=' banner-text'>
                    Thank you for visiting my website and exploring my work. You are on one of the most exciting and important journeys of your life, How exciting! You have come to a place of inspiration, experience and knowledge. hopefully my work connects with you on my levels - Thank you for visiting!
                </p>
                <button className='btn btn-outline-primary fw-bold text-white'>Explorer more < AiOutlineArrowRight></AiOutlineArrowRight></button>
            </div>
        </div>
    );
};

export default Banner;