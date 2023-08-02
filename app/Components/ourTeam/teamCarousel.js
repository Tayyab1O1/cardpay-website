'use client';
import React, { useState, useEffect } from 'react';

function TeamCarousel() {
    const [activeImage, setActiveImage] = useState(0);
    const images = [
        '/assets/interns/Talha.jpeg',
        '/assets/interns/Zain.jpeg',
        '/assets/interns/Zainab.jpeg',
        '/assets/interns/Shaheer.png',
        '/assets/interns/Moaz.jpg',
        '/assets/interns/Aaiza.jpeg',
        '/assets/interns/Ibrahim.jpeg',
        '/assets/interns/Vaneeza.png',
    ];
    const names = [
        'Talha Hussain',
        'Zain Ali khokhar',
        'Zainab Ali',
        'Shaheer Ahmed',
        'Moaz Malik',
        'Aaiza Faisal',
        'Ibrahim Shahryar',
        'Vaneeza Liaqat',
    ]

    const reviews = [
        'CardPay nurtures my frontend growth with support and excellence. Valuable professional development makes my work enjoyable,easier and enriches skills.',

        'As a backend developer, CardPay drives my growth with support and excellence. Rewarding journey with great professional development opportunities.',

        'Thriving in Marketing at CardPay! Creative collaboration expands skills, achieving fulfilling and exciting marketing goals in a dynamic environment.',

        'CardPays backend focus fuels growth. Gratifying journey with valuable career advancement and supportive team seems like the perfect fir for myself.',

        'CardPays backend role fulfills me. Support and dedication enhance skills and open exciting opportunities for growth.It is perfect for my stage of life.',

        'CardPays incredible journey! Sales-driven journey and lessons yields exceptional results, fostering professional growth in a positive work atmosphere.',

        'CardPay transformed my Marketing career. Motivation and customer-centricity fuel rewarding experiences, making a real impact together on Pakistan',

        'CardPays dream Marketing role! Creative projects inspire,resonating campaigns, and customer results has helped me learn more than I ever imagined.'
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            const Index = activeImage + 1;
            setActiveImage(Index);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [images]);


    const imageElement = () => {
        return (
            <div className='w-full lg:w-1/4 h-auto bg-base-100 flex rounded-2xl flex-row'>
                <img
                    src={images[(activeImage) % images.length]}
                    alt={`Image ${activeImage + 1}`}
                    className='w-full h-full object-cover rounded-3xl '
                />
            </div>


        )
    }
    const reviewElement = () => {
        return (
            <div className='w-1/3 lg:flex hidden h-auto'>
                <div className="px-4 card bg-blue-950 shadow-lg text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title text-3xl">~{names[(activeImage) % images.length]}</h2>
                        <p className='text-xl text-left leading-10'>{reviews[(activeImage) % images.length]}</p>
                    </div>
                </div>
            </div>
        )
    }

    const increaseActiveImage = () => {
        const index = activeImage + 1;
        setActiveImage(index);
    }

    const decreaseActiveImage = () => {
        const index = activeImage - 1;
        setActiveImage(index);
    }


    return (
        <div>
            <h1 className='text-3xl text-gray-800 text-left font-semibold mb-2 px-4 lg:px-32 lg:text-5xl lg:mb-8 lg:mt-16 mt-8'>Our Visionaries</h1>
            <div className="card w-screen bg-visionColor rounded-none shadow-xl">
                <figure className="px-1 pt-16 lg:pb-16 lg:space-x-8 space-x-1 ">
                    <a onClick={decreaseActiveImage} className="btn btn-circle">❮</a>
                    {imageElement()}
                    {reviewElement()}
                    <a onClick={increaseActiveImage} className="btn btn-circle">❯</a>
                </figure>
                <div className="card-body items-center text-center lg:hidden">
                    <h2 className="card-title text-3xl font-serif">{names[(activeImage) % images.length]}</h2>
                </div>
            </div>
        </div>
    )

};

export default TeamCarousel;