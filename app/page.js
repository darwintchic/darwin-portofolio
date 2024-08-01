import Image from "next/image";
import styles from "./page.module.css";
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Newsletter from './components/Newsletter';

export default function Home() {
  return (
  	<>
  	<NavBar/>
  	<Banner/>
  	<Skills/>
  	<Projects/>
  	<Contact/>
  	<Newsletter/>
    <Footer/>

    
    </>
  );
}
