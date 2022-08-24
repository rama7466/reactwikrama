import React from "react";
import "./Overview.css";
import { Container } from "react-bootstrap";
import info from "../../assets/info.jpg";
import Carousel from "../Carousel/Carousel";

export default function Overview() {
  return (
    <section id="overview">
      <Container fluid>
        <div className="content">
          <div className="top-text">
            <h1 className="title">Overview</h1>
            <div className="desc">
            Seiring berjalannya waktu, jumlah siswa SMK Wikrama Bogor setiap tahunnya terus bertambah. Sehingga pada tahun 2001, secara bertahap SMK Wikrama Bogor menempati gedung yang lebih luas diatas tanah ± 5000m2, berlokasi di Jalan Raya Wangun Kelurahan Sindangsari Kota Bogor. Hingga saat ini, SMK Wikrama Bogor  memiliki 1596 siswa dengan 51 guru pendidik.
            </div>
          </div>
          <div className="grid-section">
            <div className="text">
              <h5 className="title">JURUSAN</h5>
              <h3 className="subtitle">Berbagai jurusan Wikrama</h3>
              <p className="desc">
              Kompetensi keahlian di SMK Wikrama Bogor pun terus berkembang. SMK Wikrama Bogor membuka 7 kompetensi keahlian, diantaranya (1) Otomatisasi dan Tata Kelola Perkantoran; (2) Teknik Komputer dan Jaringan; (3) Rekayasa Perangkat Lunak; (4) Multimedia; (5) Bisnis Daring dan Pemasaran; (6) Tata Boga; dan (7) Perhotelan.{" "}
              </p>
            </div>
            <img src={info} alt="img grid" />
          </div>
        </div>
      </Container>
      <Carousel />
    </section>
  );
}
