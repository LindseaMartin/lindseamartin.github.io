import React from "react";
import "../styles/About.css"
import { motion } from "framer-motion";
import MyImg from '../images/me.jpg';

const About = () => { 

    const horizontal = {
        x:0,
        opacity:1,
        transition: {type: 'spring', duration: 2, bounce: 0.5}
    }

    return (
        <div className="about" id='about'>
            <div className="container">
                <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hello! My name is Lindsea! I love development. </p>
                        <br />
                        <p> I’ve had the privilege of attending NAIT to enhance my skills and rate of learning. Besides that my love of code and problem solving keeps me learning and studying in my own time! Everything on this website is a work in progress at the moment!</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={MyImg} alt="Me" />
                    </motion.div>
                  </div>
              </div>
          </div>
    )
};

export default About;