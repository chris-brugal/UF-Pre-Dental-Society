import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ImageRow from '../ImageRow';
import InfoColumns from '../InfoColumns';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection />
            <ImageRow />
            <InfoColumns />
            <Footer />
        </>
    )
}

export default Home;