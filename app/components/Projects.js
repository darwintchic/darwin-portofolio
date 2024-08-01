'use client';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import first from "../assets/img/1.png";
import Image from 'next/image';
import fifth from "../assets/img/5.png";
import sixth from "../assets/img/game.PNG";
import seven from "../assets/img/7.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import styled from 'styled-components';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export default function Projects(){

  const projects = [
    {
      id:1,
      lien:'https://mkl-group.netlify.app',
      title: "MKL-group-startup website",
      description: "Design & Development(React.js)",
      imgUrl: first,
    },
    {
      id:2,
      lien:'https://darwin-technology.vercel.app/',
      title: "Darwin's Website",
      description: "Design & Development(Nextjs)",
      imgUrl: seven,
    },
    {
      id:3,
      lien:'https://github.com/darwintchic/Guess-And-Check-Game',
      title: "Gess & Check Game",
      description: "Vanilla Javascript",
      imgUrl: sixth,
    }
    
  ];

  return (
    <ProjectStyle>
    <section className="project" id="projects">
      <Container>
        <Row>
       
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projets</h2>
                <p>Je suis passionné par le developpement web et j&apos;ai travaillé sur de nombreux projets. Mon objectif est de créer des expériences en ligne
                engageant et innovantes pour les clients. Dans cette section,vous pouvez découvrir quelques-uns de mes projets les plus récents. J&apos;espère
                que vous apprécierez mon travail et n&apos;hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter d&apos;une collaboration potentielle.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project) => {
                            return (
                            
                              <ProjectCard
                                key={project.id}
                                {...project}
                                />
                           
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>S&apos;agissant d&apos;autres projets et astuces de programmation,veuillez consulter mon <a href="https://github.com/darwintchic" style={{textDecoration:'none'}}>Guithub.</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>S&apos;agissant d&apos;autres projets et astuces de programmation,veuillez consulter mon <a href="https://github.com/darwintchic" style={{textDecoration:'none'}}>Guithub.</a></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
          
        </Row>
      </Container>
      <Image className="background-image-right" src={colorSharp2} alt='colorShape2' width={250} height={250} />
    </section>
  </ProjectStyle>
  )
}

const ProjectStyle = styled.section`
img{
  width:100%;
  height:35vh;
  object-fit:cover;
  border:1px solid #121212;
}
@media(max-width:576px){
  img{
    height:65vh;
    object-fit:cover;
  }
}
`