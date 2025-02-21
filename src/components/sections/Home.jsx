import { useState, useEffect, useRef } from 'react';
import { SmoothScroll } from '../SmoothScroll';
import PropTypes from 'prop-types';

export const Home = ({ isLoaded }) => {
  const fullText = '<Victor />';
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isLoaded) {
      setTypedText('');
      setShowCursor(false);
      return;
    }

    // Reset states immediately when isLoaded becomes true
    setTypedText('');
    setShowCursor(false); // Cursor off until typing starts

    // Delay the typewriter effect by x seconds
    const delayTimer = setTimeout(() => {
      if (!isMounted.current) return; // Check mount status before proceeding

      setShowCursor(true); // Show cursor when typing begins

      let index = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.substring(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            if (isMounted.current) {
              setShowCursor(false); // Hide cursor after 5s
            }
          }, 2800);
        }
      }, 100);

      // Cleanup for the interval (runs if component unmounts during typing)
      return () => clearInterval(interval);
    }, 900); // x-second delay

    // Cleanup for the delayTimer (runs if component unmounts before delay ends)
    return () => clearTimeout(delayTimer);
  }, [isLoaded]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent leading-tight">
            {typedText}
          </span>
          {showCursor && (
            <span className="animate-blink ml-1 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              |
            </span>
          )}
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I&apos;m a Frontend Web Developer based in Malaysia
        </p>
        <div className="flex justify-center space-x-4">
          <SmoothScroll
            targetId="projects"
            className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_amber-400/80]"
          >
            View Projects
          </SmoothScroll>
          <SmoothScroll
            targetId="contact"
            className="border border-white/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_white/20]"
          >
            Contact Me
          </SmoothScroll>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};
