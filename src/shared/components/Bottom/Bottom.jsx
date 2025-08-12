import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
    return (
        <section className="bg-[#FEDE68]" id="contact">
            <div className="py-10 px-6 md:px-6 mx-auto max-w-[80rem]">
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    <div className='bg-white p-4 rounded-lg flex flex-col gap-4 justify-center'>
                        <p className="font-semibold"><i class="fi fi-sr-land-layer-location flex justify-center items-center text-2xl text-[#FF5722]"></i></p>
                        <p className=" md:text-2xl text-center">Oslo, Norway</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg flex flex-col gap-4 justify-center'>
                        <p className="font-semibold"><i class="fi fi-ss-calendar flex justify-center items-center text-2xl text-[#FF5722]"></i></p>
                        <p className=" md:text-2xl text-center">25<sup>th</sup> March, 2026</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg flex flex-col gap-4 justify-center'>
                        <p className="font-semibold"><i class="fi fi-sr-clock flex justify-center items-center text-2xl text-[#FF5722]"></i></p>
                        <p className=" md:text-2xl text-center">5:00 AM - 9:00 PM</p>
                    </div>
                </div>
                <div className='text-center mt-10'>
                    <Link to='/paper-submission'>
                        <button className='bg-[#FF5722] text-white cursor-pointer p-3 rounded-lg text-center'>
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default ContactSection;
