import React, { useState, useEffect } from 'react';

import ArrowUp from '../assets/icons/arrow-up-outline.svg';




export const ButtonToolComponentScroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 880) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const buttonStyle = {
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '46px',
        right: '20px',
        zIndex: 9999,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#000000',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '50px',
        cursor: 'pointer',
    };


    const scrollToTop = () => {
        const scrollStep = -window.scrollY / 20; // Ajusta el valor para controlar la velocidad del desplazamiento
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15); // Ajusta el valor para controlar la frecuencia del desplazamiento
    };

    return (
        <button
            className='transition-all duration-300 ease-out transform hover:scale-125'
            id="scrollToTop"
            style={buttonStyle}
            onClick={scrollToTop}
        >
            <img src={ArrowUp} className='w-8 h-8 mx-2' alt='buttonUp' />
        </button>
    );
};
