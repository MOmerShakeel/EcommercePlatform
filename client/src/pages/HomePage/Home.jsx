import React from "react";
import "../HomePage/Home.css"
import HeroSection from "../../components/home-components/HeroSection/HeroSection";
import Header from "../../components/global-components/Header/Header";
import Footer from "../../components/global-components/Footer/Footer";

function Homepage() {
    return <>
        <Header />
        <HeroSection />
        <Footer />
    </>
}

export default Homepage;