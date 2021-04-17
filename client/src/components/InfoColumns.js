import React from 'react';
import './InfoColumns.css';
import '../App.css';

function InfoColumns() {
    return (
        <div className="row">
            <div className="column">
                <h1>OUR MISSION</h1>
                <p>The UF Pre-Dental Society (UFPDS) is a registered student organization at the University of Florida. We are dedicated to providing professional development to students interested in careers in dentistry through education, service, socialization, and professional standards. </p>
            </div>
            <div className="column">
                <h1>COMMITMENT TO OUR MEMBERS</h1>
                <p>UFPDS assists fellow students considering a future in dentistry by providing a platform to address questions and concerns regarding preparation for dental school as well as the field itself. We help our members to become the most competitive dental school applicants they can be through educational opportunities, conferences, group volunteering, socials, fundraisers, dental student Q&A sessions, and much more!</p>
            </div>
        </div>
        
    )
}

export default InfoColumns;