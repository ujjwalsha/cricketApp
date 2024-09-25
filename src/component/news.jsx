import React from 'react';

export const News = () => {
    return (
        <section id="news" className="py-12 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <article className="p-4 bg-gray-100 border">
                        <h3 className="text-xl font-semibold">Team X wins series 3-0</h3>
                        <p className="text-gray-600">Team X continues their dominance in world cricket...</p>
                    </article>
                    <article className="p-4 bg-gray-100 border">
                        <h3 className="text-xl font-semibold">Player Y breaks record</h3>
                        <p className="text-gray-600">Player Y sets a new world record for most runs...</p>
                    </article>
                </div>
            </div>
        </section>
    );
};
