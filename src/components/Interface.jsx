import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start 
  ${mobileTop ? " justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
		<Section mobileTop>
			<h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0 ">
				Hi, I'm
				<br />
				<span className="bg-white px-1 italic">Salman Raeen</span>
			</h1>
			<motion.p
				className="text-lg text-gray-600 mt-4"
				initial={{
					opacity: 0,
					y: 25,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1,
					delay: 1.5,
				}}
			>
				I'm Web Developer!
				<br />
				Ready to Dive with me in to world of Web Development!
			</motion.p>
			<motion.button
				onClick={() => setSection(3)}
				className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
				initial={{
					opacity: 0,
					y: 25,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1,
					delay: 2,
				}}
			>
				Contact me
			</motion.button>
		</Section>
  );
};

const skills = [
	{
		title: "Threejs / React Three Fiber",
		level: 70,
	},
	{
		title: "React",
		level: 90,
	},
	{
		title: "Nodejs",
		level: 90,
	},
	{
		title: "ExpressJs",
		level: 80,
	},
];
const languages = [
	{
		title: "🇺🇸 English",
		level: 80,
	},
	{
		title: "🇮🇳 Hindi",
		level: 90,
	},
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center mt-24">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xkgnypkd");

  return (
		<Section>
			<h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
			<div className="mt-8 p-8 rounded-md bg-white opacity-50 w-96 max-w-full">
          {state.succeeded ? (
            <p className="text-gray-900 text-center">Thanks for contacting me</p>
        ) : (
        <form onSubmit={handleSubmit}>
					<div class="mb-4">
						<label
							class="block text-gray-800 mb-1"
							for="name"
						>
							Your Name
						</label>
						<input
							class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
							placeholder="Enter your name"
							type="text"
						/>
					</div>
					<div class="mb-4">
						<label
							class="block text-gray-800 mb-1"
							for="email"
						>
							Your Email
						</label>
						<input
							class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
							placeholder="Enter your email"
							name="email"
							id="email"
							type="email"
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</div>
					<div class="mb-4">
						<label
							class="block text-gray-800 mb-1"
							for="message"
						>
							Your Message
						</label>
						<textarea
							class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
							rows="4"
							placeholder="Enter your message"
							name="message"
							id="message"
						></textarea>
						<ValidationError
              className="mt-1 text-red-700"
							errors={state.errors}
						/>
					</div>
					<button
						class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-400 transition duration-300"
						type="submit"
						disabled={state.submitting}
					>
						Send Message
					</button>
				</form>
          )}
			</div>
		</Section>
  );
};
