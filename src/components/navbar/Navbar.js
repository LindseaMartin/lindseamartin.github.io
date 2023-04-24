import "../../styles/Navbar.css";
import { FaHome, FaLaptop, FaFolderOpen } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
import ProfileImg from "../../images/me.jpg";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';




const navVariants = {
	hidden: {
		opacity: 0,
		transition: {
			delay: 0.5,
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

const Navbar = ({ nav, handleNav }) => {
	return (
		
		<AnimatePresence>
			<motion.nav
				initial={{ width: "0" }}
				animate={
					nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }
				}
				className={nav ? "navbar active" : "navbar"}>
				<motion.div
					initial='hidden'
					whileInView={nav ? "visible" : "hidden"}
					variants={navVariants}
					exit='hidden'
					className='navbar-container'>
					<div className='top-details'>
						<div className='img__cover'>
							<img src={ProfileImg} alt='Main' className='profile-pic-small' />
						</div>
						<ScrollLink
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={handleNav}
							to='home'
							className='profile-name'>
							Lindsea Martin
						</ScrollLink>
						<NavLinks handleNav={handleNav} />
					</div>
					<ul className='mid-details'>
						<ScrollLink
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='home'
							className='mid-links'>
							<FaHome className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Home
							</li>
						</ScrollLink>
						<ScrollLink
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='about'
							className='mid-links'>
							<FiUser className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								About
							</li>
						</ScrollLink>
						<ScrollLink
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='portfolio'
							className='mid-links'>
							<FaFolderOpen className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Portfolio
							</li>
						</ScrollLink>
						<ScrollLink
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='skills'
							className='mid-links'>
							<FaLaptop className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Skills
							</li>
						</ScrollLink>
						<ScrollLink
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='contact'
							className='mid-links'>
							<BiEnvelope className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Contact
							</li>
						</ScrollLink>	
						<Link to="/GamePage" className='games-link'>
  							<li className='games-link'>Games</li>
						</Link>
					</ul>
				</motion.div>
			</motion.nav>
		</AnimatePresence>
	);
};

export default Navbar;
