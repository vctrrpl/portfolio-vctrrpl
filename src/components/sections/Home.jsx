import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        {' '}
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent leading-right">
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent leading-right">
                &lt;
              </span>
              Victor
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent leading-right">
                {' '}
                /&gt;
              </span>
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I&apos;m a Frontend Web Developer based in Malaysia
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition
              relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_amber-400/80]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_white/20] "
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
