import React from 'react';
import '../../App.css';
import CreateEvent from '../CreateEvent';
import EventModal from '../EventModal';
import Footer from '../Footer';

export default function Events () {
    return (
    <>
    <br></br>
    <h1 className='events'>EVENTS</h1>
    <EventModal />
    <CreateEvent />
    <Footer />
    </>
    )
}