import React from 'react';
import PropTypes from 'prop-types';

export const LinkSocialsComponent = ({ socialName, link, logo }) => {
  return (
    <div className="relative group">
      <div className="w-full h-full bg-white rounded-e-lg transition-all duration-500 hover:w-40 mb-3 flex items-center">
        <a href={link} rel="noreferrer" target="_blank">
          <img src={logo} alt={socialName + "-Logo"} width={40} />
        </a>
        <div className="opacity-0 text-dark text-xs absolute left-full top-5 transform -translate-y-1/2 bg-opacity-75 p-2 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <p className="text-center font-bold ml-3">{socialName}</p>
        </div>
      </div>
    </div>
  );
};

export const LinkSidebarMobileComponent = ({ link, logo, socialName }) => {
  return (
    <>
      <div className='relative group'>
        <div className='w-full h-full bg-transparent my-2 text-white rounded-full transition-all duration-300 ease-out transform hover:scale-125 cursor-pointer'>
          <a href={link} rel='noreferrer' target='_black'>
            <img src={ logo } alt={socialName + "-Logo"} width={55} />
          </a>
        </div>
      </div>
    </>
  )
};

LinkSocialsComponent.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

LinkSidebarMobileComponent.prototype = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
}
