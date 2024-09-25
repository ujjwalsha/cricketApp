import React from 'react';

export const LiveScores = () => {
    return (
        <section id="scores" className="py-12 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Live and Upcoming Matches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border p-4 text-center shadow">
                        <p className="text-xl font-semibold">Team A vs Team B</p>
                        <span className="text-gray-600">Starting in 2 hours</span>
                    </div>
                    <div className="border p-4 text-center shadow">
                        <p className="text-xl font-semibold">Team C vs Team D</p>
                        <span className="text-gray-600">Live - 143/3 in 25 overs</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

