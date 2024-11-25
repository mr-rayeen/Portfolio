import React from 'react'
import {motion} from 'framer-motion'


const About = () => {
  return (
		<>
			<motion.h1
				className="text-6xl font-extrabold leading-snug"
				initial={{
					opacity: 0,
					y: 25,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 1,
						delay: 0.5,
					},
				}}
			>
				Hi, I'm
				<br />
				<span className="bg-white px-1 italic">
					Salman Raeen &nbsp;
				</span>
			</motion.h1>
			<motion.p
				className="text-lg text-gray-600 mt-4"
				initial={{
					opacity: 0,
					y: 25,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 1,
						delay: 1,
					},
				}}
			>
				I'm Web Developer!
				<br />
				Ready to Dive with me in to world of Web Development!
			</motion.p>
			<motion.button
				className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
				initial={{
					opacity: 0,
					y: 25,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 1,
						delay: 1.5,
					},
				}}
			>
				Contact Me
			</motion.button>
		</>
  );
}

export default About