import React from 'react';

export const Rankings = () => {
    return (
        <section id="rankings" className="py-12 bg-blue-900 text-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Team Rankings</h2>
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="w-full md:w-1/2 px-4">
                        <h3 className="text-xl font-bold text-center mb-4">Men's Rankings</h3>
                        <ul className="list-disc list-inside">
                            <li>1. Team A</li>
                            <li>2. Team B</li>
                            <li>3. Team C</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h3 className="text-xl font-bold text-center mb-4">Women's Rankings</h3>
                        <ul className="list-disc list-inside">
                            <li>1. Team D</li>
                            <li>2. Team E</li>
                            <li>3. Team F</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

