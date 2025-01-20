import React from 'react'

function ExpertContent() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Ask an Expert</h2>
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4">Connect with Subject Matter Experts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                        <h4 className="font-bold">Math Experts</h4>
                        <p className="text-gray-600">Get help with calculations and problems</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h4 className="font-bold">Science Experts</h4>
                        <p className="text-gray-600">Physics, Chemistry, and Biology help</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpertContent