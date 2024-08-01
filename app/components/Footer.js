'use client';

import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export default function Footer(){
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span className="badge bg-dark p-2" style={{color:'#bf00ff',fontSize:'1.5em'}}>D@RWIN</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-2">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/darwin-tchicaya'><Image src={navIcon1} alt="icon" width={200} height={200} /></a>
              <a href="https://www.facebook.com/darwin.tchicaya"><Image src={navIcon2} alt="icon2" width={200} height={200} /></a>
              
            </div>
            <p>Copyright@2024.Tous droits réservés,par Darwin-Tchicaya</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}