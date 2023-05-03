import React from 'react'
import { MeScreen } from '../screens/meScreen/MeScreen'
import { CertificationEducationsScreen } from '../screens/CertificationsScreen/CertificationEducationsScreen'
import { ExperienceDeveplomentScreen } from '../screens/ExperienceScreen/ExperienceDeveplomentScreen'
import { ProjectScreen } from '../screens/projectsScreen/ProjectScreen'
import { ScrollScreenComponent } from '../components/ScrollScreenComponent'

export const Navigation = () => {
  return (
    <>
        <div id="Me"> <MeScreen /> </div>
        <div id="Education"> <CertificationEducationsScreen /> </div>
        <div id="Experience"> <ExperienceDeveplomentScreen />  </div>
        <div id="Projects"> <ProjectScreen /> </div>

        <ScrollScreenComponent />
    </>
  )
}
