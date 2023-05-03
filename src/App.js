import { useLayoutEffect, useRef } from "react";
import { PushIn } from 'pushin';


import { MeComponent } from "./screens/me/MeComponent";
import { CertificationEducationsComponent } from "./screens/certifications/Certification-EducationsComponent";
import { ExperienceDeveplomentComponent } from "./screens/experience/ExperienceDeveplomentComponent";
import { ProjectsComponent } from "./screens/projects/ProjectsComponent";
import { AboutMeComponent } from "./screens/about-me/AboutMeComponent";



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
        <div className="pushin-layer bg-wave"> <AboutMeComponent /> </div>
        <div className="pushin-layer"> <MeComponent /> </div>
        <div className="pushin-layer"> <CertificationEducationsComponent /> </div>
        <div className="pushin-layer"> <ExperienceDeveplomentComponent /> </div>
        <div className="pushin-layer"> <ProjectsComponent /> </div>
      </div>
    </>
  )
}

export default App;
