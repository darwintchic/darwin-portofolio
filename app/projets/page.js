import React from 'react';

import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export const metadata = {
  title: "Mes projets",
  description: "Ceci est le site Portofolio de Darwin",
  keywords:"Darwin Portofolio,page accueil,projets,projets Portofolio,projets darwin",
  robots:'index,follow',
};

export default function MesProjects(){
	return(
     <>
      <NavBar/>
      <br/><br/><br/>
      <Projects/>
      <Footer/>
     </>
	)
}