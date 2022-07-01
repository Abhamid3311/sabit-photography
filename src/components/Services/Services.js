import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div id='service' className='px-5'>
            <div className='my-5'>
                <p className='fw-bolder mb-0'>Services</p>
                <h2 className='text-primary fw-bold'>What we provide</h2>
            </div>
            <div className='service-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default Services;