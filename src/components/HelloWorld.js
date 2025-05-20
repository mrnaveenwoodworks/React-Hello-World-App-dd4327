import React from "react";

const HelloWorld = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Hello, World!
        </h1>
        <p className="text-xl text-gray-600 text-center">
          Welcome to my first React application
        </p>
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;