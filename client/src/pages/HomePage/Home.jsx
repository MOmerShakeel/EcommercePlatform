import React from "react";
import "../HomePage/Home.css"
import HeroSection from "../../components/home-components/HeroSection/HeroSection";
import TextAnimation from "../../components/home-components/TextAnimation/TextAnimation";
import Header from "../../components/global-components/Header/Header";
import Footer from "../../components/global-components/Footer/Footer";
import TopBar from "../../components/global-components/TopBar/TopBar";
import ProductList from "../../components/home-components/ProductList/ProductList";

function Homepage() {
    return (
        <>  
            <TopBar />
            <Header />
            <HeroSection />
            <TextAnimation />
            <ProductList />
            <Footer />
        </>
    )
}

export default Homepage;