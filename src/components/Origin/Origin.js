import React from "react";
import "./Origin.css";
import { Container } from "react-bootstrap";
import  wikramabg1 from "../../assets/wikramabg1.png";

export default function Origin() {
  return (
    <section id="origin">
      <Container>
        <div className="content">
          <div className="text">
            <h1 className="title">Our origin story</h1>
            <h3 className="desc">
              
 	
SMK Wikrama Bogor didirikan oleh Ir. Itasia Dina Sulvianti dan Dr.H.RP Agus Lelana dibawah naungan Yayasan Prawitama pada tahun 1996 di bekas gudang KUD. Kompetensi keahlian yang pertama dibuka pada saat itu adalah sekretaris dengan jumlah hanya 34 siswa.{" "}
            </h3>
          </div>
          <div className="image">
            <img src={wikramabg1} alt="not found" />
          </div>
        </div>
      </Container>
    </section>
  );
}
