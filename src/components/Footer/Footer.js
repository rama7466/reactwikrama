import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import  wikrama  from "../../assets/wikrama.png";

export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <div className="content">
          <div className="logo">
            <img src={wikrama} alt="wikrama" />
          </div>
          <p className="footer-text">
           created by rama ramdhani.
          </p>
        </div>
      </Container>
    </footer>
  );
}
