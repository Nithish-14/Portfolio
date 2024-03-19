import React from "react";

import { IoMdPaperPlane, IoMdRocket } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaTwitter, FaRegCopyright } from "react-icons/fa";

import './index.css'

const ContactPage = () => (
        <section id="contact" key="contact" className="contact-page">
            <div className="contact-page-email-container">
                <div data-aos="fade-down"><IoMdPaperPlane color="#ffffff" size={window.innerWidth > 757 ? 60 : 55} /></div>
                <br />
                <p className="contact-page-heading" data-aos="zoom-in"><span>GET IN TOUCH!</span></p>
                <p className="contact-page-para" data-aos="zoom-in">Whether you have an idea for a project or just want to chat, feel free to send me an email anytime!</p>
                <button type="button" className="contact-page-button" data-aos="zoom-in">
                    <a className="contact-page-email-anchor" href="mailto:nithish.wk@gmail.com" target="_blank" rel="noreferrer">Say Hello</a>
                </button>
            </div>
            <div className="footer-container">
                <div className="social-media-container">
                    <a href="https://github.com/Nithish-14" title="github" className="social-icon-anchor" target="_blank" rel="noreferrer" data-aos="zoom-in" data-aos-offset="20">
                        <VscGithub className="social-icon" size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/nithishkumarm/" title="linkedin" className="social-icon-anchor" target="_blank" rel="noreferrer" data-aos="zoom-in" data-aos-offset="20" data-aos-delay="350">
                        <FaLinkedinIn className="social-icon" size={28} />
                    </a>
                    <a href="https://twitter.com/Nithish__M" title="twitter" className="social-icon-anchor" target="_blank" rel="noreferrer" data-aos="zoom-in" data-aos-offset="20" data-aos-delay="600">
                        <FaTwitter className="social-icon" size={28} />
                    </a>
                </div>
                <a className="rocket-anchor" href="#start" rel="noreferrer" data-aos="fade-up" data-aos-offset="10" data-aos-delay="750">
                    <IoMdRocket color="#ffffff" size={35} />
                </a>
                <p id="hiddenText">Blast off to the top!</p>
                <p className="copyright-para">
                    Designed & Built by<span style={{marginLeft: '4.5px'}}><a style={{color: '#bdd4ff', textDecoration: 'none'}} href="https://www.linkedin.com/in/nithishkumarm/" target="_blank" rel="noreferrer"> Nithish Kumar</a></span>
                    <FaRegCopyright color="#9a9191" className="rocket-icon" />
                    2024
                </p>
            </div>
        </section> 
)


export default ContactPage