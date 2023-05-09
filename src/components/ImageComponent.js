
import React from "react";

export const ImageComponent = ({ path, classImg, name }) => {
    return (
            <img 
                src={path}
                className={ classImg }
                alt={name}
            />
    )
}

