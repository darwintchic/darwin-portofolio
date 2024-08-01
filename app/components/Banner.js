'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import programImg from '../assets/img/program.svg';
import TrackVisibility from 'react-on-screen';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Développeur Web", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) }
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <Fade left>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Bienvenue dans mon portfolio</span>
                    <h3>Salut,<br />je suis Darwin Tchicaya,<span className="wrap" style={{ color: '#bf00ff' }}> {text}</span></h3>
                    <p>Je suis un développeur web spécialisé en <a href="https://fr.react.dev/" style={{ color: '#bf00ff', textDecoration: 'none' }}>Javascript</a>. Fort de plusieurs années d&apos;expérience, je maîtrise les dernières technologies et tendances en matière de développement web. Passionné par la conception d&apos;interfaces utilisateur réactives et interactives, je suis capable de créer des applications web performantes et intuitives.</p>
                    <a href="#connect" style={{ textDecoration: 'none' }}>
                      <button onClick={() => console.log('connect')}>
                        Connectons-nous <ArrowRightCircle size={25} />
                      </button>
                    </a>
                  </div>
                }
              </TrackVisibility>
            </Fade>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Zoom>
              <Image src={programImg} alt="header-image" width={250} height={250} />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
