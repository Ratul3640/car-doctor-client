import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className='w-full rounded-xl' />
                <div className="absolute h-full flex items-center left-0  top-0 bottom-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white pl-12 spa w-1/2 '>
                        <h2 className='text-6xl font-bold my-4'>Affordable For Car Servicing</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellendus.</p>
                        <div className='flex'>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Letest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 justify-end bottom-0 flex -translate-y-1/2 transform ">
                    <a href="#slide4" className="btn btn-circle mr-4"></a>
                    <a href="#slide2" className="btn btn-circle"></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className='w-full rounded-xl' />
                <div className="absolute h-full flex items-center left-0  top-0 bottom-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white pl-12 spa w-1/2 '>
                        <h2 className='text-6xl font-bold my-4'>Affordable For Car Servicing</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellendus.</p>
                        <div className='flex'>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Letest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 justify-end bottom-0 flex -translate-y-1/2 transform ">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className='w-full rounded-xl' />
                <div className="absolute h-full flex items-center left-0  top-0 bottom-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white pl-12 spa w-1/2 '>
                        <h2 className='text-6xl font-bold my-4'>Affordable For Car Servicing</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellendus.</p>
                        <div className='flex'>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Letest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 justify-end bottom-0 flex -translate-y-1/2 transform ">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className='w-full rounded-xl' />
                <div className="absolute h-full flex items-center left-0  top-0 bottom-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white pl-12 spa w-1/2 '>
                        <h2 className='text-6xl font-bold my-4'>Affordable For Car Servicing</h2>
                        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellendus.</p>
                        <div className='flex'>
                            <button className='btn btn-primary mr-4'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Letest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 justify-end bottom-0 flex -translate-y-1/2 transform ">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;