import React from 'react';

import { LinkSidebarMobileComponent } from './LinkSocialsComponents';


import InstagramLogo from "../assets/icons/logo-instagram.svg";
import WhatsappLogo from "../assets/icons/logo-whatsapp.svg";
import LinkedinLogo from "../assets/icons/logo-linkedin.svg";
import GithubLogo from "../assets/icons/logo-github.svg";

const instagramLink = "https://www.instagram.com/eljuanitocs/";
const whatsappLink = "https://api.whatsapp.com/send?phone=573208850851";
const linkedinLink = "https://www.linkedin.com/in/juan-camilo-mendoza-villegas-2a356b245/";
const githubLink = "https://github.com/Mendoza727";

export const SideBarComponents = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 d-flex items-center justify-center">
        <div className="bg-white p-2 w-full h-24 flex justify-center flex-row gap-12">

          {/* instagram links */}
          <LinkSidebarMobileComponent
            socialName="Instagram"
            link={instagramLink}
            logo={InstagramLogo}
          />

          {/* WhatsApp links */}
          <LinkSidebarMobileComponent
            socialName="WhatsApp"
            link={whatsappLink}
            logo={WhatsappLogo}
          />


          {/* Linkedin links */}
          <LinkSidebarMobileComponent
            socialName="Linkedin"
            link={linkedinLink}
            logo={LinkedinLogo}
          />

          {/* Github links */}
          <LinkSidebarMobileComponent
            socialName="Github"
            link={githubLink}
            logo={GithubLogo}
          />

        </div>
      </div>
    </>
  )
}
