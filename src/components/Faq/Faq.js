import React from "react";
import "../Roadmap/Roadmap.css";
import { Container } from "react-bootstrap";
import Accordian from "../Accordian/Accordian";

export default function Faq() {
  return (
    // Sharing the same styles as ROADMAP component
    <section id="faq">
      <Container>
        <div className="content">
          <h4 className="sm-title">Faq & Utility</h4>
          <div className="top-text">
            <h1 className="lg-title">Sejarah Wikrama</h1>
            <h2 className="desc">
            Kesuksesan SMK Wikrama Bogor saat ini tentunya tidak lepas dari sejarah SMK Wikrama Bogor  mulai dari membentuk visi dan misi, kerja keras hingga diakui dunia internasional hingga prestasi dan pengharagaan yang didapatkan SMK Wikrama Bogor sejak awal didirikan. Berikut sejarah yang dilalui SMK Wikrama Bogor berdasarkan urutan tahun.
            </h2>
          </div>
        </div>
      </Container>
      <div className="customContainer">
        <Accordian theme="dark" />
      </div>
    </section>
  );
}
