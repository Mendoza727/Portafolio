import React from 'react';
import LinkSocialsComponent from '../../components/LinkSocialsComponents';

import InstagramLogo from "../../assets/icons/logo-instagram.svg";
import WhatsappLogo from "../../assets/icons/logo-whatsapp.svg";
import LinkedinLogo from "../../assets/icons/logo-linkedin.svg";
import GithubLogo from "../../assets/icons/logo-github.svg";

const instagramLink = "https://www.instagram.com/eljuanitocs/";
const whatsappLink = "https://api.whatsapp.com/send?phone=573208850851";
const linkedinLink = "https://www.linkedin.com/in/juan-camilo-mendoza-villegas-2a356b245/";
const githubLink = "https://github.com/Mendoza727";


export const AboutMeComponent = () => {
  return (
    <>
      <div className='w-full'>
        <div className='lg:w-40 lg:right-3/4 sm:right-0'>
          <div class="w-20 h-50 bg-white shadow-xl rounded-e-xl p-6 flex flex-col">

            {/* intagram link */}
            <LinkSocialsComponent
                  link={instagramLink}
                  logo={InstagramLogo}
                  socialName='Instagram'
            />

            {/* whatsapp link */}
            <LinkSocialsComponent 
                  link={ whatsappLink }
                  logo={ WhatsappLogo }
                  socialName='Whatsapp'   
            />


            {/* linkedin link */}
            <LinkSocialsComponent 
                  link={ linkedinLink }
                  logo={ LinkedinLogo }
                  socialName='Linkedin'
            />


            {/* github link */}
            <LinkSocialsComponent 
                  link={ githubLink }
                  logo={ GithubLogo }
                  socialName='Github'
            />

          </div>
        </div>
      </div>
    </>
  )
}
