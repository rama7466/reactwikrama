import React from "react";

import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Origin from "../../components/Origin/Origin";
import Overview from "../../components/Overview/Overview";
import Roadmap from "../../components/Roadmap/Roadmap";

import "./Home.css";

export default function Home() {
  return (
    <>
      <main id="home">
        <Header />
        <Origin />
        <Overview />
        <Roadmap />
        
        <Faq />
   
        <Footer />
      </main>
    </>
  );
}
