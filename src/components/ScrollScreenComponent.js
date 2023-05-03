import React from 'react';
import PropTypes from 'prop-types';



export const ScrollScreenComponent = ({ name, classT, refId }) => {

    const scrollToSection = (refId) => {
        const section = document.getElementById(refId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <a href='#' className={ classT } onClick={ () => scrollToSection(refId) }>{ name }</a>
            { console.log( refId ) }
        </>
    )
}

ScrollScreenComponent.propTypes = {
    name: PropTypes.string.isRequired,
    classT: PropTypes.string.isRequired,
    refId: PropTypes.string.isRequired
};