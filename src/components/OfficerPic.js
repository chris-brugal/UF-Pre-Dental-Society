import React, { useState } from 'react'

import './OfficerPic.css';



const OfficerPic = ({description, photo}) => {

    const hideText = () => {
      
    }

    return(
        <div class="hoverPhoto">
            <img src={photo} width="400" height="400" alt="tree" />
            <div class="content">
                <div class="text">{description}</div>
        </div>

        </div>
       
    )
}

export default OfficerPic