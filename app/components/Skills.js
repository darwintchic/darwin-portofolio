
'use client';
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorShap from '../assets/img/color-sharp.png';
import Zoom from 'react-reveal/Zoom';

export default function Skills(){
    const responsive = {
    	superLargeDesktop:{
    		breakpoint:{max:4000,min:3000},
    		items:5
    	},
    	desktop:{
    		breakpoint:{max:3000,min:1024},
    		items:3
    	},
    	table:{
    		breakpoint:{max:1024,min:404},
    		items:2
    	},
    	mobile:{
    	   breakpoint:{max:464,min:0},
    	   items:1
    	}
    };
	return(
       <section className="skill mt-5" id="skills">
           <Container className="mt-5">
           <Zoom>
               <Row>
                   <Col>
                        <div className="skill-bx">
                           <h2>Compétences</h2>
                           <p>Dans le domaine du développement web,il est essentiel de posséder un ensemble de compétences techniques et créatives pour concevoir et créer des sites web performants,Que ce soit la programmation,la conception graphique,la gestion des bases de données ou la sécurité,chaque aspect est important pour offrir une expérience utilisateur optimale. Ci-dessous je vous étale la liste de mes compétences.</p>
                           
                           <Carousel responsive={responsive} infinite={true} className="skill-slider">
                              <div className="item">
                                  
                                  <Image src={meter1} width={100} height={100} alt="m1" />
                                  <h5>HTML</h5>
                              </div>
                              <div className="item">
                                  
                                  <Image src={meter1} width={100} height={100} alt="m1" />
                                  <h5>CSS</h5>
                              </div>
                              
                               <div className="item">
                                  
                                  <Image src={meter2} width={100} height={100} alt="m2" />
                                  <h5>JAVASCRIPT</h5>
                              </div>
                              <div className="item">
                                  
                                  <Image src={meter1} width={100} height={100} alt="m1" />
                                  <h5>BOOTSTRAP5</h5>
                              </div>
                              <div className="item">
                                  
                                  <Image src={meter1} width={100} height={100} alt="m1" />
                                  <h5>JEST TESTING</h5>
                              </div>
                               <div className="item">
                                  
                                  <Image src={meter2} width={100} height={100} alt="m2" />
                                  <h5>REACTJS</h5>
                              </div>
                              <div className="item">
                                  
                                  <Image src={meter2} width={100} height={100} alt="m2" />
                                  <h5>NODEJS</h5>
                              </div>
                              <div className="item">
                                  
                                  <Image src={meter2} width={100} height={100} alt="m2" />
                                  <h5>EXPRESSJS</h5>
                              </div>
                               <div className="item">
                                  
                                   <Image src={meter3} width={100} height={100} alt="m3" />
                                  <h5>NEXTJS</h5>
                              </div>
                               <div className="item">
                                  <Image src={meter2} width={100} height={100} alt="m2" />
                                  <h5>MONGODB</h5>
                              </div>
                               <div className="item">
                                  <Image src={meter2} width={100} height={100} alt="m2" />
                                  <h5>API</h5>
                              </div>
 
                           </Carousel>
                           
                        </div>
                   </Col>
               </Row>
               </Zoom>
           </Container>
           <Image className="background-image-left" src={colorShap} alt="" width={250} height={250} />
       </section>
	)
}