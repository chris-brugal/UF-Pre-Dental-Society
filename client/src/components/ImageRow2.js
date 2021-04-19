import React from 'react';
import './ImageRow2.css';
import '../App.css';
import board from '../images/board.jpg';
import gbm from '../images/gbm.jpg';
import decorating from '../images/decorating.jpg';
import event from '../images/event.jpg';

function ImageRow2() {
    return (
        <div class="image-container">
            <img src={board} alt="UF PDS officers at a general body meeting" className="board"/>
            <img src={gbm} alt="UF PDS members at a general body meeting" className="gbm"/>
            <img src={decorating} alt="UF PDS members decorating" className="decorating"/>
            <img src={event} alt="UF PDS members at a service event" className="event"/>
        </div>
    )
}

export default ImageRow2;