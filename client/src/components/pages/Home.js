import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ImageRow1 from '../ImageRow1';
import ImageRow2 from '../ImageRow2';
import InfoColumns from '../InfoColumns';
import Footer from '../Footer';

function Home () {
    return (
        <>
            <HeroSection />
            <ImageRow1 />
            <InfoColumns />
            <ImageRow2 />
            <Footer />
        </>
    )
}

export default Home;