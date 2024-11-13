import React from 'react';
import '../app/styles/skills.css';

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
        <div data-aos="zoom-in-up" className='skills-grid'>
            <div className='skills-left'>
                <h2 className='skills-heading'>Technologies I work with</h2>
                <p className='skills-text'>
                    I am a dedicated IT student with a growing skill set in web development and programming. I have acquired a solid foundation in front-end technologies, including HTML, CSS, and JavaScript, along with more advanced tools like TypeScript. My skills extend to popular frameworks and libraries such as React and Next.js, which enable me to create dynamic, responsive web applications. Additionally, I have experience with server-side development using Node.js, showcasing my versatility and commitment to mastering  front-end technology in the IT field.</p>
            </div>
            <div>
                <div className='skills-right'>
                   <div className='skills-icons-grid'>
                   <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>
                   </div>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
