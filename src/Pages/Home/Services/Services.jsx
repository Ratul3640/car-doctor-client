import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data)
        )
}, [])
return (
    <div className='mt-4'>
        <div className='text-center'>
            <h3 className="text-3xl font-bold text-orange-400">Our Services</h3>
            <h2 className='text-5xl'>Our Service Area</h2>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores <br /> quasi necessitatibus repellat ex similique omnis eius. <br /> Ipsum suscipit totam illum corrupti iusto amet, quae provident minus odio id vel velit!</p>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {services.map(service =>
                <ServiceCard key={service._id}
                service={service}
                ></ServiceCard>
           )}
        </div>
    </div>
);
};

export default Services;