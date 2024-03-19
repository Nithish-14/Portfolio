import { useState, useEffect } from 'react'
import { MdMenu } from "react-icons/md";
import './index.css'

const Navbar = () => {
    const [currentPage, changePage] = useState("start");
    const [view, changeView] = useState(false);

    useEffect(() => {
        const divs = document.querySelectorAll('section'); // Change this selector based on your HTML structure
        const handleScroll = () => {
            let currentSectionId = '';
            
            divs.forEach((div) => {
              const rect = div.getBoundingClientRect();
              if (rect.top <= 320 && rect.bottom >= 50) {
                currentSectionId = `${div.id}`;
              }
            });
      
            // setCurrentSection(currentSectionId);
            changePage(currentSectionId);
        };

          window.addEventListener('scroll', handleScroll);

          handleScroll();

          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])

    useEffect(() => {
        var lastScrollTop; // This variable will store the top position
        var navbar = document.getElementById('navbar'); // Get the NavBar

        const handleScroll = () => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                navbar.style.top = '-280px';
            } else {
                navbar.style.top = '0';
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, [view]); // Empty dependency array ensures the effect runs once after the initial render


    return (
        <>
            <nav className="nav-container" id="navbar">
                <div className="nav-header-container">
                    <a href="#start" style={{textDecoration: 'none'}}><img src="https://res.cloudinary.com/dceo5fgii/image/upload/v1705155108/nithishlogo1_mj8qgh.png" className="logo" alt="Logo" /></a>
                    <div className="nav-link-container">
                        <a href="#start" className={`nav-link-element nav-link-delay-1 ${currentPage === 'start' ? 'active' : null}`} onClick={() => changePage('start')}>Start <span className="nav-span">{'>'}</span></a>
                        <a href="#work" className={`nav-link-element nav-link-delay-2 ${currentPage === 'work' ? 'active' : null}`} onClick={() => changePage('work')}>Work <span className="nav-span">{'>'}</span></a>
                        <a href="#about" className={`nav-link-element nav-link-delay-3 ${currentPage === 'about' ? 'active' : null}`} onClick={() => changePage('about')}>About <span className="nav-span">{'>'}</span></a>
                        <a href="#contact" className={`nav-link-element nav-link-delay-4 ${currentPage === 'contact' ? 'active' : null}`} onClick={() => changePage('contact')}>Contact <span className="nav-span">{'>'}</span></a>
                    </div>
                    <button type="button" className="menu-button" onClick={() => changeView(e => !e)}>
                        <MdMenu color={"#a8a1a1"} size={33} />
                    </button>
                </div>
                <div className={`nav-link-container-mobile ${view ? "show-nav" : null}`} id="navbarMobile">
                    <a href="#start" className={`nav-link-element ${currentPage === 'start' ? 'active' : null}`} onClick={() => changePage('start')}>Start <span className="nav-span">{'>'}</span></a>
                    <a href="#work" className={`nav-link-element ${currentPage === 'work' ? 'active' : null}`} onClick={() => changePage('work')}>Work <span className="nav-span">{'>'}</span></a>
                    <a href="#about" className={`nav-link-element ${currentPage === 'about' ? 'active' : null}`} onClick={() => changePage('about')}>About <span className="nav-span">{'>'}</span></a>
                    <a href="#contact" className={`nav-link-element ${currentPage === 'contact' ? 'active' : null}`} onClick={() => changePage('contact')}>Contact <span className="nav-span">{'>'}</span></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar