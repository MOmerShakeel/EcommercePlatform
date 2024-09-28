import React from "react";
import "../HomePage/Home.css"
import HeroSection from "../../components/home-components/HeroSection/HeroSection";
import Header from "../../components/global-components/Header/Header";
import Footer from "../../components/global-components/Footer/Footer";
import TopBar from "../../components/global-components/TopBar/TopBar";

function Homepage() {
    return (
        <>  
            <TopBar />
            <Header />
            <HeroSection />
            <Footer />
        </>
    )
}

export default Homepage;