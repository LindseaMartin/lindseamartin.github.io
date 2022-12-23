import React from 'react';
import About from './About';
import Skills from './Skills';
import HeroHeader from './HeroHeader';

const Main = ({nav, handleNav}) => {
  return(
    <div className='main'>
        <HeroHeader nav={nav} handleNav={handleNav} />
        <About />
        <Skills />
    </div>
  )
};

export default Main;
