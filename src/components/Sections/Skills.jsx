import React from 'react'
import {motion} from 'framer-motion'


const skills = [
	{
		title: "Threejs / React Three Fiber",
		level: 70,
	},
	{
		title: "React",
		level: 80,
	},
	{
		title: "NodeJs",
		level: 90,
	},
	{
		title: "ExpressJs",
		level: 80,
	},
];

const languages = [
	{
		title: "Hindi",
		level: 90,
	},
	{
		title: "English",
		level: 90,
	},
];

const Skills = () => {
  return (
		<>
			<motion.div whileInView={'visible'} >
				<motion.h2
					className="text-5xl font-bold"
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
					Skills
				</motion.h2>
				<div className="mt-8 space-y-4">
					{skills.map((skill, index) => (
						<div className="w-64" key={index}>
							<motion.h3
								className="text-xl font-bold text-gray-800"
								initial={{
									opacity: 0,
									y: 25,
								}}
								variants={{
									visible: {
										opacity: 1,
										y: 0,
										transition: {
											duration: 1,
											delay: 1 + index * 0.2,
										},
									}
								}}
							>
								{skill.title}
							</motion.h3>
							<div className="h-2 w-full bg-gray-200 rounded-full mt-2">
								<motion.div
									className="h-full bg-indigo-500 rounded-full"
									style={{
										width: `${skill.level}%`,
									}}
									initial={{ scaleX: 0, originX: 0 }}
									variants={{
										visible: {
											scaleX: 1,
											transition: {
												duration: 1,
												delay: 1 + index * 0.2,
											},
										},
									}}
								></motion.div>
							</div>
						</div>
					))}
				</div>
				<div>
					<motion.h2
						className="text-5xl font-bold mt-10"
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
						Languages
					</motion.h2>
					<div className="mt-8 space-y-4">
						{languages.map((skill, index) => (
							<div className="w-64" key={index}>
								<motion.h3
									className="text-xl font-bold text-gray-800"
									initial={{
										opacity: 0,
										y: 25,
									}}
									whileInView={{
										opacity: 1,
										y: 0,
										transition: {
											duration: 1,
											delay: 2 + index * 0.2,
										},
									}}
								>
									{skill.title}
								</motion.h3>
								<div className="h-2 w-full bg-gray-200 rounded-full mt-2">
									<div
										className="h-full bg-indigo-500 rounded-full"
										style={{
											width: `${skill.level}%`,
										}}
										initial={{
											scaleX: 0,
											originX: 0,
										}}
										whileInView={{ scaleX: 1 }}
										transition={{
											duration: 1,
											delay: 1 + index * 0.2,
										}}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</>
  );
}

export default Skills