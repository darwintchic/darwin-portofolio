

import React from 'react';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Footer from  '../components/Footer';


export const metadata = {
  title:"Darwin-contact",
  description:'Ceci est la page de contact de Darwin',
  robots:'index,follow',
  keywords:'Darwin,portofolio,contact portofolio darwin',
};

export default function ContactMe(){
	return(
     <>
        <NavBar/>
        
        <Contact/>
        <Footer/> 
     </>
	)
}