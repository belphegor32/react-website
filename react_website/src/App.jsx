import React from 'react';
import "./App.css";
import Header from './components/header/HeaderComponent';
import Home from './components/home/HomeComponent';
import About from './components/about/AboutComponent';
import Skills from './components/skills/SkillsComponent';
import Contact from './components/contact/ContactComponent';
import Footer from './components/footer/FooterComponent';

function App(){
  return(
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}

export default App