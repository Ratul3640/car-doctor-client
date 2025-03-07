import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import perts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person}
                        className="w-3/4  rounded-lg shadow-2xl" />
                    <img className="w-1/2 rounded-lg absolute right-5 top-1/2 border-7 border-white shadow-2xl" src={perts} alt="" />

                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in the field!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In enim omnis doloribus neque quia libero unde, aperiam magnam animi distinctio.</p>
                    <button className="btn btn-warning btn-outline ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;