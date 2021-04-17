import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import CreateOfficer from '../CreateOfficer';
//import '../CreateOfficer.css'
import OfficerModal from '../OfficerModal';

export default function OurOfficers () {
    return (
        <>
        <br></br>
        <h1 className='our-officers'>OUR OFFICERS</h1>
        
        <CreateOfficer />
        <OfficerModal />
      
        <Footer />
        </>
        )
}