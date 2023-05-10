import { useLayoutEffect, useRef } from "react";

import { AboutMeScreen } from '../src/screens/AboutMeScreen/AboutMeScreen';
import { MeScreen } from '../src/screens/meScreen/MeScreen';
import { CertificationEducationsScreen } from '../src/screens/CertificationsScreen/CertificationEducationsScreen';
import { ExperienceDeveplomentScreen } from '../src/screens/ExperienceScreen/ExperienceDeveplomentScreen';
import { ProjectScreen } from '../src/screens/projectsScreen/ProjectScreen';

import { PushIn } from 'pushin';
import { ButtonToolComponentScroll } from "./components/ButtonToolComponent";
import { SkillScreen } from "./screens/SkillScreen/SkillScreen";
import { RequestInfoPortafoly } from "./hooks/RequestInfoPortafoly";

function App() {

  const pushInContainer = useRef();
  const { infoPortafoly } = RequestInfoPortafoly();

  useLayoutEffect(() => {
    const pushIn = new PushIn(pushInContainer.current);
    pushIn.start();
    return () => pushIn.destroy();
  }, []);

  return (
    <>
      <div ref={pushInContainer} className="pushin">
        <div className="pushin-scene">
          <div className="pushin-composition">
            <div className="pushin-layer bg-wave"> <AboutMeScreen /> </div>
            <div className="pushin-layer bg-slate-600"> <MeScreen /> </div>
            <div className="pushin-layer" > <CertificationEducationsScreen /> </div>
            <div className="pushin-layer"> <SkillScreen  infoSkills={ infoPortafoly.dataSkills }/> </div>
            <div className="pushin-layer"> <ExperienceDeveplomentScreen /> </div>
            <div className="pushin-layer"> <ProjectScreen /> </div>
          </div>
        </div>
      </div>
      <ButtonToolComponentScroll />
      {/* <FooterScreen /> */}
    </>
  )
}

export default App;
