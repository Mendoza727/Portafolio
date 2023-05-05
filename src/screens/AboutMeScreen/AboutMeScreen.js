import React from 'react';
import {LinkSocialsComponent} from '../../components/LinkSocialsComponents';
import { SideBarComponents } from '../../components/SideBarComponents';

import InstagramLogo from "../../assets/icons/logo-instagram.svg";
import WhatsappLogo from "../../assets/icons/logo-whatsapp.svg";
import LinkedinLogo from "../../assets/icons/logo-linkedin.svg";
import GithubLogo from "../../assets/icons/logo-github.svg";

const instagramLink = "https://www.instagram.com/eljuanitocs/";
const whatsappLink = "https://api.whatsapp.com/send?phone=573208850851";
const linkedinLink = "https://www.linkedin.com/in/juan-camilo-mendoza-villegas-2a356b245/";
const githubLink = "https://github.com/Mendoza727";


export const AboutMeScreen = () => {
  return (
    <>
      <div className='w-full flex flex-row top-0'>
        <div>
          <div className="w-20 h-50 bg-white shadow-xl rounded-e-xl p-6 flex flex-col" id='sideBarLinks'>

            {/* intagram link */}
            <LinkSocialsComponent
              link={instagramLink}
              logo={InstagramLogo}
              socialName='Instagram'
            />

            {/* whatsapp link */}
            <LinkSocialsComponent
              link={whatsappLink}
              logo={WhatsappLogo}
              socialName='Whatsapp'
            />


            {/* linkedin link */}
            <LinkSocialsComponent
              link={linkedinLink}
              logo={LinkedinLogo}
              socialName='Linkedin'
            />


            {/* github link */}
            <LinkSocialsComponent
              link={githubLink}
              logo={GithubLogo}
              socialName='Github'
            />

          </div>
        </div>

        {/* texto inicio  */}
        <div className='w-full flex justify-center items-center lg:mx-22 flex-col'>
          <h2 className='font-bold text-white lg:text-4xl xl:text-5xl md:text-2xl text-xl text-shadow'>Juan Camilo Mendoza Villegas</h2>
          <p className='font-bold text-gray-800 text-lg'>Desarrollador Junior</p>
        </div>

        <div id='sideBarLinksMobile'>
          <SideBarComponents />
        </div>
      </div>
    </>
  )
}
