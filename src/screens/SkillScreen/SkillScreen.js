import React from 'react';
import { ImageComponent } from '../../components/ImageComponent';

export const SkillScreen = ({ infoSkills }) => {
  return (
    <>
      <div>SkillScreen</div>
      <div className='flex-row grid lg:grid-cols-5 sm:grid-cols-3 gap-4'>
        {infoSkills?.map((dataSkills) => {
          return (
            <div key={dataSkills.id}>
              <ImageComponent
                path={dataSkills.logo}
                classImg="w-28 h-28 rounded-full"
                name={dataSkills.skill + "-logo"}
              />
              <p className='text-center'>{dataSkills.skill}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
