import { useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { SmoothScroll } from './SmoothScroll';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav className="fixed top-0  w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mini text-2xl font-bold text-white">
            @vctrrpl
          </a>

          {/* Mobile View */}
          <div
            className="text-2xl relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FiMenu />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            <SmoothScroll
              targetId="home"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Home
            </SmoothScroll>
            <SmoothScroll
              targetId="about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              About
            </SmoothScroll>
            <SmoothScroll
              targetId="projects"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Projects
            </SmoothScroll>
            <SmoothScroll
              targetId="contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Contact
            </SmoothScroll>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
