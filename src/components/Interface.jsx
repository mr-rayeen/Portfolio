import React from 'react'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'
import {motion} from 'framer-motion'


const Section = (props) => {
    const {children} = props
    return <section className='h-screen w-screen p-8 max-w-2xl mx-auto flex flex-col items-col items-start justify-center '>    
        {children}
    </section>
}

const Interface = () => {
  return (
		<div className='flex flex-col items-center w-screen'>
			<Section>
				<About />
          </Section>
          
			<Section>
				<Skills />
          </Section>
          
			<Section>
				<Projects />
          </Section>
          
            <Section>
		    	<Contact />
            </Section>
		</div>
  );
}

export default Interface