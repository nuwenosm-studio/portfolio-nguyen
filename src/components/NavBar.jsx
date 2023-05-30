import { useState, useEffect } from 'react';

const NavBar = () => {
    const [navLinkActive, setNavLinkActive] = useState(0);
    const navLinks = ["nuwen", "studio", "gallery"];

    const handleNavLinkActive = (navLink) => {
        setNavLinkActive(navLink);
        scrollToSection(navLink);
    }

    const scrollToSection = (section_id) => {
        const element = document.getElementById(section_id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map((item) => document.getElementById(item));
            const activeSection = sections.find((section) => {
                const rect = section.getBoundingClientRect();
                return rect.top <= 0 && rect.bottom > 0;
            });

            if (activeSection) {
                setNavLinkActive(activeSection.id);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="nav_container">
            <ul className="nav_links">
                {navLinks.map((item) => (
                    <li
                        key={item}
                        onClick={() => handleNavLinkActive(item)}
                        className={item === navLinkActive ? "nav_linkActive" : "nav_link"}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar