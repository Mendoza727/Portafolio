import React from 'react';  

import PhotoPerfil from "../../assets/img/PhotoPerfil.jpg";
import Terminal from './TerminalScreen';

export const MeScreen = () => {
  return (
    <>
      <>
  <div className="flex flex-col justify-center items-center py-10 md:flex-row md:justify-between md:py-16">
    <Terminal />
    <div className="flex justify-center">
      <img 
        src={PhotoPerfil}
        alt="Foto de perfil"
        className="w-72 h-72 rounded-full shadow-lg"
      />
      <button className="bg-transparent border border-white hover:bg-blue-500 text-white font-bold py-2 px-4 transform transition duration-500 hover:scale-110">Click me!</button>

    </div>
  </div>
</>

    </>
  )
}
