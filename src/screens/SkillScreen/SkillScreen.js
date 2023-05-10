import React, { useState } from 'react';

const renderItem = (data) => {
  return (
    <div key={data.id} className="relative w-40 h-64 mt-14">
      <div className="absolute w-full h-full bg-white rounded-lg shadow-xl transition duration-500 ease-out transform hover:scale-105 flex flex-col items-center justify-center">
        <img src={data.logo} className="object-cover w-30 h-28 rounded-full" alt={data.skill + "-logo"} />
        <p className='text-lg font-bold mb-2 text-center items-center mt-4'>{data.skill}</p>
      </div>
      <div className="absolute w-40 h-64 bg-white rounded-lg shadow-lg opacity-0 transition duration-500 ease-out transform hover:scale-105 hover:opacity-100 border-2 border-transparent hover:border-black">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2 text-center mt-4">{data.tipo}</h3>
          <p className="text-sm text-gray-600">{data.level}</p>
          <div>{data.stars}</div>
        </div>
      </div>
    </div>
  )
}


export const SkillScreen = ({ infoSkills }) => {
  const [selectedSkill, setSelectedSkill] = useState('All');

  const handleSkillClick = (skillName) => {
    setSelectedSkill(skillName);
  };

  const renderSkills = () => {
    if (selectedSkill) {
      const skillsToRender = infoSkills?.filter(
        (dataSkills) => dataSkills.tipo === selectedSkill
      );
      return skillsToRender?.map(renderItem);
    } else {
      return renderItem();
    }
  };

  return (
    <>
      <p className='font-bold flex justify-end text-2xl'>Mis Habilidades</p>
      <div className='flex gap-8'>
        <div className='flex justify-between gap-8 mt-8'>
          {renderSkills()}
        </div>
        <div className="flex flex-col items-end space-y-4">
          <div className="bg-gray-400 rounded-md w-24 h-20 flex flex-col items-center transition duration-500 ease-out transform hover:scale-105 hover:translate-x-2" onClick={ () => handleSkillClick("FrontEnd") }>
            <p>FronEnd</p>
          </div>
          <div className="bg-gray-500 rounded-md w-24 h-20 flex flex-col items-center transition duration-500 ease-out transform hover:scale-105 hover:translate-x-2" onClick={ () => handleSkillClick("BackEnd") }>
            <p>BackEnd</p>
          </div>
          <div className="bg-gray-600 rounded-md w-24 h-20 flex flex-col items-center transition duration-500 ease-out transform hover:scale-105 hover:translate-x-2" onClick={ () => handleSkillClick("Database") }>
            <p>Database</p>
          </div>
          <div className="bg-gray-700 rounded-md w-24 h-20 flex flex-col items-center transition duration-500 ease-out transform hover:scale-105 hover:translate-x-2" onClick={ () => handleSkillClick("VersionControl") }>
            <p>Version Control</p>
          </div>
          <div className="bg-gray-700 rounded-md w-24 h-20 flex flex-col items-center transition duration-500 ease-out transform hover:scale-105 hover:translate-x-2" onClick={ () => handleSkillClick("learning") }>
            <p>learning</p>
          </div>
        </div>
      </div>
    </>
  )
}