
import React from 'react';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export const metadata = {
  title: "Mes compétences",
  description: "Ceci est le site Portofolio de Darwin",
  keywords:"Darwin Portofolio,page accueil,compétences,html,css,javascript,Nextjs,nodejs,expressjs",
  robots:'index,follow',
};


export default function MesProjects(){
	return(
     <>
      <NavBar/>
      <br/><br/><br/>
      <Skills/>
      
     </>
	)
}