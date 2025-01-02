import React from 'react';

const About = () => {
    const updates = [
        "Update 1: Add reset and log. Feb 8, 2016",
        "Update 2: Now you can copy the image files and paste it without opening them. Dropping works too. svg files work now. Feb 10, 2016",
        "Update 3: Make the resize work on Mac. Feb 13, 2016",
        "Update 4: Thanks to Glutanimate, scaling without turning on PNG pasting works now. Feb 18, 2016",
        "Update 6: Add an option to disable upscaling for small images. June 9, 2017",
        "Update 7: Fix the encoding/decoding error. July 23, 2017",
        "Update 8: Thanks to ChrisK91, the smooth transformation is added. Dec 17, 2017",
        "Update 9: support files with uppercased extensions",
        "Update 10: A big thanks to lgaborini for porting ImageResizer to Anki2.1. Jul 25, 2018",
        "Update 11: Fix the encoding issue in Anki 2.1. Sep 10, 2018",
        "Update 12: No functional change to the add-on. It now has a new maintainer and location on GitHub. April 23, 2020",
        "Update 13: Support 2.1.36+. Dec 18, 2020",
        "Update 14: Anki with PyQt5 doesn't work with this addon on Linux, and possibily, macOS, fix it. Mar 27, 2021",
        "Update 15: Enable SSL. April 11, 2021"
    ];

    const features = [
        {
            title: "Smart Question Generation",
            description: "Our AI algorithms analyze your study materials to create relevant and challenging questions.",
            icon: "🎯"
        },
        {
            title: "Multiple Formats",
            description: "Support for various document types including PDFs, PowerPoint, and text files.",
            icon: "📄"
        },
        {
            title: "Personalized Learning",
            description: "Adaptive system that learns from your performance and adjusts difficulty accordingly.",
            icon: "🎓"
        },
        {
            title: "Progress Tracking",
            description: "Detailed analytics and progress monitoring to help you stay on track.",
            icon: "📊"
        }
    ];

    return (
        <div className="flex flex-col w-full" style={{ background: 'radial-gradient(circle at 50% 50%, #22c55e, #3b82f6)' }}>
            <div className="min-h-screen flex items-center justify-center transition-all duration-300 ease-in-out">
                <div className="text-white p-8  w-full mx-4">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        About Us
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-lg">
                            Welcome to our platform. Here are some updates about our journey:
                        </p>
                        <ul className="list-disc list-inside">
                            {updates.map((update, index) => (
                                <li key={index} className="">{update}</li>
                            ))}
                        </ul>
                        <h2 className="text-2xl font-bold text-center mt-6">
                            Features
                        </h2>
                        <div className="flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <div>
                                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                                        <p className="">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center p-10">
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <img src="/path/to/your/image.jpg" alt="About Us" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default About;