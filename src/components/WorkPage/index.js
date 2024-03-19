import React from 'react';
import Tilt from 'react-parallax-tilt';
import { HiArrowSmRight } from "react-icons/hi";

import './index.css'


const WorkPage = () => (
    <section id="work" key="work" className="work-page">
        <div className="vertical1" data-aos="vertical-anime1"></div>
        <h1 className="sectionheading">WORK</h1>
        <h1 className="work-page-title">Selected Projects <span className="nav-span">------</span></h1>
        <div className="project-container">
            <div className="individual-container-1" data-aos="anime-1" data-aos-delay="200">
                <a href="https://658ed6b25e2c05b95afdff7f--serene-duckanoo-87f513.netlify.app/" rel="noreferrer" className="project-anchor" target="_blank">
                    <Tilt className="parallax-effect project-1" perspective={650}
                        glareEnable={true}
                        glareMaxOpacity={0.26}
                        scale={1.04}>
                        <div className="inner-element">
                            <span>Chat Application</span>
                            <br />
                            <hr style={{border: 'solid 1.5px #ffffff', width: '100%', marginTop: '-3px', marginBottom: '-4px'}} />
                            <br />
                            <HiArrowSmRight size={20} color={"#807979"} className="project-arrow" />
                        </div>
                    </Tilt>
                </a>
            </div>
            <div className="individual-container-2" data-aos="anime-2" data-aos-delay="200">
                <a href="https://youtube-clone-nithish-mnl.vercel.app/" rel="noreferrer" className="project-anchor" target="_blank">
                    <Tilt className="parallax-effect project-2" perspective={650}
                        glareEnable={true}
                        glareMaxOpacity={0.26}
                        scale={1.04}>
                            <div className="inner-element">
                                <span>N Tube</span>
                                <br />
                                <hr style={{border: 'solid 1.5px #ffffff', width: '100%', marginTop: '-3px', marginBottom: '-4px'}} />
                                <br />
                                <HiArrowSmRight size={20} color={"#807979"} className="project-arrow" />
                            </div>
                    </Tilt>
                </a>
            </div>
            <div className="individual-container-3" data-aos="anime-3" data-aos-delay="200">
                <a href="https://elegant-pithivier-566918.netlify.app/" rel="noreferrer" className="project-anchor" target="_blank">
                    <Tilt className="parallax-effect project-3" perspective={650}
                        glareEnable={true}
                        glareMaxOpacity={0.26}
                        scale={1.04}>
                            <div className="inner-element">
                                <span>nFTify</span>
                                <br />
                                <hr style={{border: 'solid 1.5px #ffffff', width: '100%', marginTop: '-3px', marginBottom: '-4px'}} />
                                <br />
                                <HiArrowSmRight size={20} color={"#807979"} className="project-arrow" />
                            </div>
                    </Tilt>
                </a>
            </div>
            <div className="individual-container-4" data-aos="anime-4" data-aos-delay="200">
                <a href="https://nithishemoji.ccbp.tech/" rel="noreferrer" className="project-anchor" target="_blank">
                    <Tilt className="parallax-effect project-5" perspective={650}
                        glareEnable={true}
                        glareMaxOpacity={0.26}
                        scale={1.04}>
                            <div className="inner-element">
                                <span>Emoji Game</span>
                                <br />
                                <hr style={{border: 'solid 1.5px #ffffff', width: '100%', marginTop: '-3px', marginBottom: '-4px'}} />
                                <br />
                                <HiArrowSmRight size={20} color={"#807979"} className="project-arrow" />
                            </div>
                    </Tilt>
                </a>
            </div>
            <div className="individual-container-5" data-aos="anime-5" data-aos-delay="200">
                <a href="https://nithishjobbyapp.ccbp.tech/" rel="noreferrer" className="project-anchor" target="_blank">
                    <Tilt className="parallax-effect project-4" perspective={650}
                        glareEnable={true}
                        glareMaxOpacity={0.26}
                        scale={1.04}>
                            <div className="inner-element">
                                <span>Jobby App</span>
                                <br />
                                <hr style={{border: 'solid 1.5px #ffffff', width: '100%', marginTop: '-3px', marginBottom: '-4px'}} />
                                <br />
                                <HiArrowSmRight size={20} color={"#807979"} className="project-arrow" />
                            </div>
                    </Tilt>
                </a>
            </div>
            <div className="individual-container-6" data-aos="anime-6" data-aos-delay="200">
                <a href="https://nithishecom.ccbp.tech/" rel="noreferrer" className="project-anchor" target="_blank">
                    <Tilt className="parallax-effect project-6" perspective={650}
                        glareEnable={true}
                        glareMaxOpacity={0.26}
                        scale={1.04}>
                            <div className="inner-element">
                                <span>Nxt Trendz</span>
                                <br />
                                <hr style={{border: 'solid 1.5px #ffffff', width: '100%', marginTop: '-3px', marginBottom: '-4px'}} />
                                <br />
                                <HiArrowSmRight size={20} color={"#807979"} className="project-arrow" />
                            </div>
                    </Tilt>
                </a>
            </div>
        </div>
    </section>
)


export default WorkPage