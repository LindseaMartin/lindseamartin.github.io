import React from 'react';
import HeroHeader from './HeroHeader';
import About from './About';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';

const Main = ({nav, handleNav}) => {
  return(
    <div className='main'>
        <HeroHeader nav={nav} handleNav={handleNav} />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
    </div>
  )
};

export default Main;
