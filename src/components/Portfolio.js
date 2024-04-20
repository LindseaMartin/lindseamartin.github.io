import "../styles/Portfolio.css";
import { IoOpenOutline } from "react-icons/io5";
import { FiFolder, FiGithub } from "react-icons/fi";
import { PortfolioData } from "../data/PortfolioData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className='portfolio' id='portfolio'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={fade}
						viewport={{ once: true }}
						className='heading'>
						<p className='heading-sub-text'>I am always working on my</p>
						<p className='heading-text'>Portfolio</p>
					</motion.div>

					<motion.div
						className='portfolio-box'
						initial={{ opacity: 0 }}
						whileInView={fade}>
						{PortfolioData.map((w, index) => {
							return (
								<div key={index}>
									<div className='portfolio-link-group'>
										<div className='portfolio-card'>
											<div className='Portfolio-container'>
												<div className='top-portfolio'>
													<FiFolder className='portfolio-folder' />
													<div className='right'>
														<Link
															className='portfolio-git'
															to={w.gitlink}
															target='_blank'>
															<FiGithub />
														</Link>
														<Link
															className='portfolio-link'
															to={w.site}
															target='_blank'>
															<IoOpenOutline />
														</Link>
													</div>
												</div>
												<div className='mid-portfolio'>
													<p className='portfolio-title'>{w.title}</p>
													<p className='portfolio-desc'>{w.desc}</p>
												</div>
												<div className='bottom-portfolio'>
													{w.tech.map((e, index) => {
														return <small key={index}>{e}</small>;
													})}
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Portfolio;
