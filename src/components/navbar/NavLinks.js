import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa"
import { BiEnvelope } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        <li onClick={handleNav} ><Link  to="//linkedin.com/in/lindsea-martin/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/LindseaMartin" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><Link  to="//mailto:lindseamartin@gmail.com" target='_blank' className='nav-link'><BiEnvelope /></Link></li>
  </ul>
  )
};

export default NavLinks;
