import React from 'react';
import About from './About';
import Skills from './Skills';
import HeroHeader from './HeroHeader';
import Contact from './Contact';

const Main = ({nav, handleNav}) => {
  return(
    <div className='main'>
        <HeroHeader nav={nav} handleNav={handleNav} />
        <About />
        <Skills />
        <Contact />
    </div>
  )
};

export default Main;
