'use client';
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []); // Exécution uniquement côté client

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    router.push(`/${value}`);
  };

  return (
    <NavBarStyle>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand>
            <Link href='/'  className="badge bg-dark p-2" style={{ color: '#bf00ff', fontSize: '1.1em' }}>
              D@RWIN
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                
                  <Nav.Link className={activeLink === '/' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('/')}>
                    Accueil
                  </Nav.Link>
               
              </Nav.Item>
              <Nav.Item>
                
                  <Nav.Link  className={activeLink === 'competences' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('competences')}>
                    Compétences
                  </Nav.Link>
              
              </Nav.Item>
              <Nav.Item>
                
                  <Nav.Link className={activeLink === 'projets' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projets')}>
                    Projets
                  </Nav.Link>
                
              </Nav.Item>
              <Nav.Item>
                
                  <Nav.Link className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
                    Contact
                  </Nav.Link>
                
              </Nav.Item>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href='https://www.linkedin.com/in/darwin-tchicaya'>
                  <Image src={navIcon1} alt="icon1" width={40} height={40} />
                </a>
                <a href='https://www.facebook.com/darwin.tchicaya'>
                  <Image src={navIcon2} alt="icon2" width={40} height={40} />
                </a>
              </div>
              <Link href='/contact' passHref style={{ textDecoration: 'none' }}>
                
                  <button className="vvd" onClick={() => console.log('connect')}>
                    <span>Connectons-nous</span>
                  </button>
                
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavBarStyle>
  );
}

const NavBarStyle = styled.section`
  a {
    text-decoration: none;
    color: #fff;
  }

  .active {
    color: #bf00ff;
  }
`;
