import React from 'react';
import './ImageRow1.css';
import '../App.css';
import group from '../images/group.jpg';
import bowling from '../images/bowling.jpg';
import service from '../images/service.jpg';
import pottery from '../images/pottery.jpg';

function ImageRow1() {
    return (
        <div class="image-container">
            <img src={group} alt="UF PDS members wearing matching Molar Wars shirts" className="group"/>
            <img src={bowling} alt="UF PDS members at a bowling alley" className="bowling"/>
            <img src={service} alt="UF PDS members at a service event" className="service"/>
            <img src={pottery} alt="UF PDS members posing with their pottery" className="pottery"/>
        </div>
    )
}

export default ImageRow1;