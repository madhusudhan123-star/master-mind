import React from 'react';

function LoadingOverlay({ message }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
                <p className="text-lg text-gray-700">{message}</p>
            </div>
        </div>
    );
}

export default LoadingOverlay;
