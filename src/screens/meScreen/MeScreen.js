import React from 'react';  

import PhotoPerfil from "../../assets/img/PhotoPerfil.jpg";

export const MeScreen = () => {
  return (
    <>
      <div className='d-flex justify-between flex flex-row'>
        <div className='w-1/2'>
          <img 
            src={ PhotoPerfil }
            alt='PhotoPerfil'
            className='w-64 mb-4 h-60 rounded-xl'
          />
          <button className='bg-transparent p-3 d-flex justify-center text-white py-2 font-bold px-4 border border-white rounded-full transition-all duration-300 ease-out transform hover:scale-125'>Descargar CV</button>
        </div>
        <div className='w-1/2 d-flex justify-end'>
          <div className="bg-gray-900 w-96 h-48 rounded-lg shadow-lg shadow-white overflow-hidden">
            <div className="flex items-center bg-gray-800 px-3 py-2">
              <span className="bg-red-500 w-3 h-3 rounded-full mr-2"></span>
              <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
              <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>
            </div>
            <div className="bg-black px-4 h-full py-2">
              <p className="text-green-400 text-md">&gt; Welcome!! <input type="text" className="bg-transparent outline-none w-full text-green-400" /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
