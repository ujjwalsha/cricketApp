import React from 'react';

export const Navbar = () => {
    return (
        <header className="bg-blue-900 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4">
                {/* Logo or brand name */}
                <div className="text-2xl font-bold">
                    Cricket Mania
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-8">
                    <li><a href="#scores" className="hover:text-yellow-500">Live Scores</a></li>
                    <li><a href="#news" className="hover:text-yellow-500">News</a></li>
                    <li><a href="#rankings" className="hover:text-yellow-500">Rankings</a></li>
                    <li><a href="#videos" className="hover:text-yellow-500">Videos</a></li>
                </ul>

                {/* Search Bar */}
                <div className="relative hidden md:block">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="px-4 py-2 w-full bg-gray-200 text-black rounded-full focus:outline-none"
                    />
                    <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.288 4.288a1 1 0 11-1.414 1.414l-4.288-4.288zm-2.9-4.32a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Sign In Button */}
                <div className="ml-6">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full">
                        Sign In
                    </button>
                </div>
            </nav>
        </header>
    );
};

// export default Navbar;