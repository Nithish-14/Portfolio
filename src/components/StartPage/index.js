import {useEffect} from 'react';

import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";

import './index.css'

const StartPage = () => {
    

    useEffect(() => {
        const words = ["websites", "webapps", "api"];
        let currentWordIndex = 0;
        function typeWriter() {
            const changingText = document.getElementById("changingText");
            const currentWord = words[currentWordIndex];
            let charIndex = 0;
            let isReversing = false;

            function type() {
                if (!isReversing) {
                    changingText.textContent = currentWord.substring(0, charIndex);
                    charIndex++;
                } else {
                    changingText.textContent = currentWord.substring(0, currentWord.length - charIndex);
                    charIndex++;
                }

                if (!isReversing && charIndex <= currentWord.length) {
                    setTimeout(type, 100); // Adjust typing speed (milliseconds)
                } else if (!isReversing && charIndex > currentWord.length) {
                    isReversing = true;
                    charIndex = 0;
                    setTimeout(type, 1800); // Delay before starting reverse typing
                } else if (isReversing && charIndex <= currentWord.length) {
                    setTimeout(type, 110); // Adjust reverse typing speed (milliseconds)
                } else {
                    isReversing = false;
                    charIndex = 0;
                    setTimeout(changeWord, 1000); // Delay before changing to the next word
                }
            }

            type();
        }

        function changeWord() {
            currentWordIndex = (currentWordIndex + 1) % words.length;
            typeWriter();
        }

        // Initial call
        // typeWriter();
        setTimeout(() => {
            typeWriter()
        }, 3100)
        
    }, [])

    return (
        <section key="start" id="start" className="start-page">
            <div className="bullet"></div>
            <div className="vertical"></div>
            <div className="name-container">
                <p className="myname-para">
                    <span className="block-reveal-span">Hi, my name is</span>
                </p>
                <h1 className="name-para">
                    <span className="block-reveal-span-heading">Nithish Kumar</span>
                </h1>
                <p className="third-para">
                    <span className="third-para-span">i <span className="serif-span">design</span> and <span className="develop-span">develop</span> <br className="line-break" /> <span id="changingText" className="anime-span"></span></span>
                </p>
                <br className="extra-small-device-line-break" />
                <br className="extra-small-device-line-break" />
                <a href="resume.pdf" className="resume-anchor" target="_blank">
                    <span className="resume-span">View Full Résumé <MdArrowOutward className="arrow" /></span>
                </a>
            </div>
            <a href="#work" className="mouse-button">
                <HiOutlineArrowLongDown color={"#8997b0"} size={window.innerWidth < 768 ? 34 : 36} />
            </a>
        </section>
    )
}

export default StartPage