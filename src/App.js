import { useLayoutEffect, useRef } from "react";

import { AboutMeScreen } from '../src/screens/AboutMeScreen/AboutMeScreen';
import { MeScreen } from '../src/screens/meScreen/MeScreen';
import { CertificationEducationsScreen } from '../src/screens/CertificationsScreen/CertificationEducationsScreen';
import { ExperienceDeveplomentScreen } from '../src/screens/ExperienceScreen/ExperienceDeveplomentScreen';
import { ProjectScreen } from '../src/screens/projectsScreen/ProjectScreen';

import { PushIn } from 'pushin';

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
        <div className="pushin-layer"> <MeScreen /> </div>
        <div className="pushin-layer"> <CertificationEducationsScreen /> </div>
        <div className="pushin-layer"> <ExperienceDeveplomentScreen /> </div>
        <div className="pushin-layer"> <ProjectScreen /> </div>
      </div>
    </>
  )
}

export default App;
