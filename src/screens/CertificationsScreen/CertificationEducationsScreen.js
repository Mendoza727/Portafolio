import React from 'react';

export const CertificationEducationsScreen = ({ infoEducation }) => {
  return (
    <>
      <div>CertificationEducationsScreen</div>
      <div>
       {infoEducation?.map((certification) => {
        return (
          <div className="certification-container" key={certification.id}>
            <h3 className="institucion">{certification.institucion}</h3>
            <p className="titulo">{certification.titulo}</p>
            <p className="fecha">
              {certification.fechaI} - {certification.fechaF}
            </p>
            <p className="tipo">{certification.tipo}</p>
          </div>
        );
       })}
      </div>
    </>
  )

}
