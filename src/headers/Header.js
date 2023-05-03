import React from 'react';
import { ScrollScreenComponent } from '../components/ScrollScreenComponent';

export const Header = () => {
    return (
        <div className='fixed inset-x-0 top-4 flex justify-center gap-5'>
            <ScrollScreenComponent 
                classT='bg-transparent text-white py-2 font-bold px-4 rounded-full transition-all duration-300 ease-out transform hover:scale-125'
                name='Conoceme'
                refId='Me'
            />
            <p className='bg-transparent text-white py-2 px-4 rounded-full transition-all duration-300 ease-out transform hover:scale-125'>Titulos</p>
            <p className='bg-transparent text-white py-2 px-4 rounded-full transition-all duration-300 ease-out transform hover:scale-125'>Experiencia</p>
            <p className='bg-transparent text-white py-2 px-4 rounded-full transition-all duration-300 ease-out transform hover:scale-125'>Portafolio</p>
        </div >
    )
}
