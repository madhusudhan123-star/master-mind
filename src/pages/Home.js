import React, { useRef, useState } from 'react';
import correct_symble from '../assets/correct_symble.webp'
import list from '../assets/list.webp'
import lamp from '../assets/lamp.webp'
import blogimg from '../assets/blogimg.webp'
const Home = () => {

    const materials = [
        { icon: "📉", label: "lecture slide decks" },
        { icon: "🎥", label: "YouTube videos" },
        { icon: "📜", label: "PDFs" },
        { icon: "📖", label: "textbooks" },
        { icon: "🕸️", label: "webpages" },
        { icon: "📑", label: "study guides" },
        { icon: "🔌", label: "PowerPoint" },
        { icon: "🗒️", label: "notes" },
    ];

    const handleUpload = (event) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            console.log('Files selected:', files.length);
        }
    };

    return (
        <div className="flex flex-col w-full">
            {/* Header Section */}
            <div
                className="home-container background-color min-h-screen flex items-center justify-center transition-all duration-300 ease-in-out"
            >
                <div className="input-section flex flex-col justify-center items-center p-8 w-full mx-4">
                    <h1 className="text-5xl font-bold text-[#175773] text-center mb-6">
                        The evolution of 24/7 study starts here
                    </h1>
                    <p className='text-center text-xl'>
                        Quick step-by-step solutions. When you need them.
                    </p>
                    <div className="flex text-center w-5/6 mt-10 bg-white p-10 gap-4">
                        <input
                            type="file"
                            webkitdirectory="true"
                            directory="true"
                            onChange={handleUpload}
                            className="w-full p-2 border  border-4 border-[#175773] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#175773]"
                        />
                        <button className="bg-[#349D69] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                            Upload
                        </button>
                    </div>
                </div>
            </div>

            {/* Three cards Section */}
            <div>
                <div className='bg-[#1757733d] flex justify-center items-center p-10'>
                    <div className='flex justify-center items-center'>
                        <img src={correct_symble} alt="" />
                        <p className='text-center font-bold text-xl  w-1/2'>Solutions backed by verified experts</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={list} alt="" />
                        <p className='text-center font-bold text-xl  w-1/2'>Specialized tools to help master your courses</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={lamp} alt="" />
                        <p className='text-center font-bold text-xl  w-1/2'>Tailored to support the way you learn</p>
                        <button className='bg-[#349D69] text-white font-bold px-6 py-3 rounded-full hover:bg-[#175773] transition-colors'>Get Started</button>
                    </div>
                </div>
            </div>
            {/* about content */}
            <div>
                <div className='flex justify-center items-center p-10'>
                    <div className='w-1/2'>
                        <img src={blogimg} />
                    </div>
                    <div className='w-1/2'>
                        <p className='font-bold text-4xl'>
                            91% of Chegg customers say they get better grades when they use Chegg to understand their coursework1
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center p-10 bg-[#1757733d]'>
                    <h1 className='text-4xl font-bold'>Thousands of Subjects</h1>
                    <div className='grid grid-cols-4 gap-10 mt-6'>
                        <h1 className='text-xl font-bold bg-white p-5 rounded-md'>MCT</h1>
                        <h1 className='text-xl font-bold bg-white p-5 rounded-md'>MCT</h1>
                        <h1 className='text-xl font-bold bg-white p-5 rounded-md'>MCT</h1>
                        <h1 className='text-xl font-bold bg-white p-5 rounded-md'>MCT</h1>
                        <h1 className='text-xl font-bold bg-white p-5 rounded-md'>MCT</h1>
                        <h1 className='text-xl font-bold bg-white p-5 rounded-md'>MCT</h1>
                        <h1 className='text-xl font-bold bg-white p-5 rounded-md'>MCT</h1>
                        <h1 className='text-xl font-bold bg-white p-5 rounded-md'>MCT</h1>
                    </div>
                </div>
            </div>
            {/* what type work */}
            <div className=" h-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center space-y-6 p-10 mb-10">
                    <h2 className="text-xl md:text-4xl font-semibold">
                        Practice questions made for you from any material in any
                        language
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl text-left">
                        {materials.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-bold">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;