import React from 'react';

export const Videos = () => {
    return (
        <section id="videos" className="py-12 bg-blue-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Videos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <video controls className="w-full">
                        <source src="your-video-here.mp4" type="video/mp4"/>
                    </video>
                    <video controls className="w-full">
                        <source src="your-video-here.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    );
};

