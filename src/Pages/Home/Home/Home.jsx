import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <h2 className='text-4xl'>  this is home</h2>
        </div>
    );
};

export default Home;