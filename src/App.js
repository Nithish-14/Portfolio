import React, { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom'

import anime from 'animejs/lib/anime.es.js';

import AnimatedCursor from "react-animated-cursor"

import Navbar from './components/Navbar'
import StartPage from './components/StartPage/index';
import WorkPage from './components/WorkPage/index';
import AboutPage from './components/AboutPage/index';
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";
import StructuredData from "./components/StructuredData";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You also need to import the CSS file for styles

import './App.css'


const PreLoader = () => {

  const s = window.innerWidth > 767 ? [1, 7] : [0.8, 2.5];

  useEffect(() => {
    anime.timeline({
      loop: false
    })
    .add({
      targets: '.ml15',
      opacity: 1,
      duration: 1300,
      delay: 1300
    })
    .add({
        targets: '.ml15 .word',
        scale: s,
        opacity: 0,
        easing: "easeOutCirc",
        duration: 1200,
        delay: (el, i) => 1200 * i
    });
  }, [])

  return (
    <div className="loader-container">
      <h1 className="ml15">
          <img className="word" alt="loading logo" src="https://res.cloudinary.com/dceo5fgii/image/upload/v1705155108/nithishlogo1_mj8qgh.png" />
      </h1>
    </div>
  )
}


const Portfolio = () => (
    <div className="background-container">
            {window.innerWidth > 767 ? (
                <AnimatedCursor
                    innerSize={6}
                    outerSize={22}
                    innerScale={1}
                    outerScale={2.32}
                    outerAlpha={0}
                    hasBlendMode={true}
                    innerStyle={{
                        backgroundColor: '#f1f1f1',
                        mixBlendMode: 'exclusion'
                    }}
                    outerStyle={{
                        border: '2px solid #f1f1f1',
                        mixBlendMode: 'exclusion'
                        
                    }}
                    trailingSpeed={7}
                />
            ) : null}
            <Navbar />
            <StartPage />
            <WorkPage />
            <AboutPage />
            <ContactPage />
    </div>
)

const App = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      
        setTimeout(() => {
          setLoading(false);
        }, 3600)

    }, []);   

    useEffect(() => {
      AOS.init({
              // Global settings:
              disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
              startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
              initClassName: 'aos-init', // class applied after initialization
              animatedClassName: 'aos-animate', // class applied on animation
              useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
              disableMutationObserver: false, // disables automatic mutations' detections (advanced)
              debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
              throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
              
              // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
              offset: 120, // offset (in px) from the original trigger point
              delay: 0, // values from 0 to 3000, with step 50ms
              duration: 750, // values from 0 to 3000, with step 50ms
              easing: 'ease-in-out-cubic', // default easing for AOS animations
              once: true, // whether animation should happen only once - while scrolling down
              mirror: false, // whether elements should animate out while scrolling past them
              anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          });
      }, []);
    
  
    return (
      <>
        <StructuredData />
        <Routes>
          {loading ? (
            <Route
              path="/"
              element={<PreLoader />}
            />
          ) : (
            <Route
              exact
              path="/"
              element={<Portfolio />}
            />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }


export default App