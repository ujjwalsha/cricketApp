import React from 'react';
export const Hero = () => {
    return (
        <section className="bg-hero-pattern bg-cover h-screen flex items-center justify-center text-center text-white">
            <div className='maindiv'>
                <div className="photo">
                    <img src="cricket.jpg" alt="cricket.jpg" height="70px" width="700x" />
                </div>
                <h1 className="text-5xl font-bold text-blue-800">Catch Every Cricket Moment</h1>
                <p className="mt-4 text-xl text-blue-700">Stay updated with live scores, team rankings, and breaking cricket news.</p>
                <button className="mt-6 px-8 py-3 bg-yellow-500 rounded-full hover:bg-yellow-600">Explore Now</button>
            </div>
        </section>
    );
};

