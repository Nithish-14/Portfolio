import React from 'react'

import './index.css'

const AboutPage = () => (
    <section key="about" id="about" className="about-page">
        <div style={{overflow: 'hidden'}}><div className="vertical1" data-aos="vertical-anime2"></div></div>
        <h1 className="about-page-title">About Me <span className="nav-span">------</span></h1>
         <div className="scroll-reveal-container">
            <p className="about-me-para">
                <span className="scroll-reveal-span1">
                    Hello there! I'm Nithish, and I've been weaving my way
                    through the digital landscape as a full-stack web developer
                    since 2022. With a fervor for coding and an insatiable curiosity,
                    I've cultivated a skill set that spans both the front and back ends
                    of web development. Over the years, I've had the privilege of crafting
                    aesthetically pleasing and highly functional digital experiences.
                </span>
            </p> 
            <p className="about-me-para">
                <span className="scroll-reveal-span2">From designing
                    sleek user interfaces to optimizing server-side operations, my journey is marked 
                    by a commitment to staying at the forefront of technological advancements.</span>
            </p> 
         </div>
        <h1 className="skill-heading">SOME TECHNOLOGIES I'VE WORKED WITH:</h1>
        <div className="skill-container">
            <div className="skill-img-container" data-aos="zoom-in"><img src="icons/htmlicon.png" alt="html icon" className="skill-img" /><span className="skill-tooltip">HTML</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="200"><img src="icons/css.png" alt="css icon" className="skill-img" /><span className="skill-tooltip">CSS</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="350"><img src="icons/javascripticon.png" alt="javascript icon" className="skill-img" /><span className="skill-tooltip">Javascript</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="500"><img src="icons/react.png" alt="react icon" className="skill-img" /><span className="skill-tooltip">React</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="650"><img src="icons/bootstrap.png" alt="bootstrap icon" className="skill-img" /><span className="skill-tooltip">Bootstrap</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="800"><img src="icons/nodejs.png" alt="nodejs icon" className="skill-img" /><span className="skill-tooltip">Node.js</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="950"><img src="icons/express.png" alt="express icon" className="skill-img" /><span className="skill-tooltip">Express.js</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="1100"><img src="icons/githubicon.png" alt="github icon" className="skill-img" /><span className="skill-tooltip">Github</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="1250"><img src="icons/socketio.png" alt="Socket.io icon" style={{width: '50px', height: '53px'}} className="skill-img" /><span className="skill-tooltip">Socket.io</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="1400"><img src="icons/linux.png" alt="linux icon" className="skill-img" /><span className="skill-tooltip">Linux</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="1550"><img src="icons/mongodb.png" alt="mongodb icon" className="skill-img" /><span className="skill-tooltip">MongoDB</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="1700"><img src="icons/mysql.png" alt="mysql icon" className="skill-img" /><span className="skill-tooltip">MySQL</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="1850"><img src="icons/cplusplus.png" alt="cplusplus icon" style={{width: '50px', height: '53px'}} className="skill-img" /><span className="skill-tooltip">C++</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="2000"><img src="icons/python.png" alt="python icon" className="skill-img" /><span className="skill-tooltip">Python</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="2150"><img src="icons/recoilicon.png" alt="recoil icon" className="skill-img"/><span className="skill-tooltip">Recoil</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="2300"><img src="icons/docker.png" alt="docker icon" className="skill-img" /><span className="skill-tooltip">Docker</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="2450"><img src="icons/redux.png" alt="redux icon" className="skill-img" /><span className="skill-tooltip">Redux</span></div>
            <div className="skill-img-container" data-aos="zoom-in" data-aos-delay="2600"><img src="icons/typescript.png" alt="typescript icon" className="skill-img" /><span className="skill-tooltip">TypeScript</span></div>
        </div>
    </section>
)

export default AboutPage