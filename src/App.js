import { useLayoutEffect, useRef } from "react";

import { AboutMeScreen } from '../src/screens/AboutMeScreen/AboutMeScreen';
import { MeScreen } from '../src/screens/meScreen/MeScreen';
import { CertificationEducationsScreen } from '../src/screens/CertificationsScreen/CertificationEducationsScreen';
import { ExperienceDeveplomentScreen } from '../src/screens/ExperienceScreen/ExperienceDeveplomentScreen';
import { ProjectScreen } from '../src/screens/projectsScreen/ProjectScreen';

import { PushIn } from 'pushin';
import { ButtonLanguage, ButtonToolComponentScroll } from "./components/ButtonToolComponent";

function App() {
  const pushInContainer = useRef();

  useLayoutEffect(() => {
    const pushIn = new PushIn(pushInContainer.current);
    pushIn.start();
    return () => pushIn.destroy();
  });

  return (
    <>
      <div ref={pushInContainer} className="pushin">
        <div className="pushin-layer bg-wave"> <AboutMeScreen /> </div>
        <div className="pushin-layer bg-slate-500"> <MeScreen /> </div>
        <div className="pushin-layer"> <CertificationEducationsScreen /> </div>
        <div className="pushin-layer"> <ExperienceDeveplomentScreen /> </div>
        <div className="pushin-layer"> <ProjectScreen /> </div>
      </div>
      <ButtonToolComponentScroll />
      <footer className="bg-gray-300 h-full">
          <div className="w-full h-full flex justify-center p-3">Creado con Amor</div>
      </footer>
    </>
  )
}

export default App;
