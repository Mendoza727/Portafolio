import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Terminal = () => {
    useEffect(() => {
        const options = {
          strings: ['I am a programmer', 'I am a web developer', 'I am a problem solver'],
          typeSpeed: 50,
          backSpeed: 50,
          loop: true
        };
        const typed = new Typed('.typing-element', options);
        return () => {
          typed.destroy();
        };
      }, []);
    
      return (
        <div className='w-1/2 d-flex justify-end'>
          <div className="bg-gray-900 w-96 h-48 rounded-lg shadow-lg shadow-white overflow-hidden">
            <div className="flex items-center bg-gray-800 px-3 py-2">
              <span className="bg-red-500 w-3 h-3 rounded-full mr-2"></span>
              <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
              <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>
            </div>
            <div className="bg-black px-4 h-full py-2">
              <p className="text-green-400 text-md">&gt; Welcome!! <span className="typing-element"></span></p>
            </div>
          </div>
        </div>
      );
};

export default Terminal;