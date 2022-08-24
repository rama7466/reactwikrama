import React from "react";
import "./Roadmap.css";
import { Container } from "react-bootstrap";
import Accordian from "../Accordian/Accordian";

export default function Roadmap() {
  return (
    <section id="roadmap">
      <Container>
        <div className="content">
          <h4 className="sm-title">Roadmap & Utility</h4>
          <div className="top-text">
            <h1 className="lg-title">Keahlian Jurusan</h1>
            <h2 className="desc">
              Keahlian keahlian yang dimiliki siswa SMK WIKRAMA BOGOR di tiap tiap jurusan yaitu...
            </h2>
          </div>
        </div>
      </Container>
      <div className="customContainer">
        <Accordian />
      </div>
    </section>
  );
}
