import React from 'react';
import NavBar from './components/NavBar';

import Image from 'next/image';

export default function NotFound(){
	
	return(
     <>
     <NavBar/>
      <div className="container mt-5">
        <div className="row justify-content-center align-tems-center mt-5">
           <div className="col-lg-8 col-md-8 col-xlg-8 col-12 col-sm-12 text-center mt-5">
             <h3 className="text-white">Page Introuvable!!!</h3>
             <Image priority src='/not-found.svg' height={250} width={250} alt="notfound" />
           </div>
        </div>
      </div>
     </>
	)
}