import React from 'react'
import { ImageComponent } from '../../components/ImageComponent'

export const ProjectScreen = ({ infoProject }) => {
  return (
    <>
      <div>ProjectsComponent</div>
      <div className='flex justify-center'>
        {infoProject?.map((dataProjects) => {
          return (
            <div key={dataProjects.id}>
              <span>{dataProjects.project}</span>
              <ImageComponent
                path={dataProjects.img}
                classImg="w-28 h-28 flex justify-center"
                name='jgram-project'
              />
              <p className='text-center w-60 text-sm'>{dataProjects.descripcion}</p>
              <a href={dataProjects.link} rel="noreferrer" target='_blank'>link</a>
              <a href={dataProjects.repositorio} rel="noreferrer" target='_blank'>repositorio</a>
            </div>
          )
        })}
      </div>
    </>
  )
}
