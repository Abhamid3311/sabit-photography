import './Banner.css'


const Banner = () => {
    return (
        <div id='banner' >
            <div className='banner-head text-center mx-auto '>
                <p className='fs-4 fw-bolder '>Welcome to</p>
                <h1 className='text-primary fs-1 text-uppercase fw-bold '>Sabit Photography </h1>
                <p>
                   Photography is the art of black-white what is made by Camera. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid perspiciatis expedita debitis ipsum ut distinctio!
                </p>
                <button className='btn btn-outline-primary'>Explorer more</button>
            </div>
        </div>
    );
};

export default Banner;