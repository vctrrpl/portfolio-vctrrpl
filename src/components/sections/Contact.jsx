import { SmoothScroll } from '../SmoothScroll';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col w-full sm:w-full md:w-full">
        <div className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all w-full">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold max-w-2xl leading-[110%]">
              Like what you see? Reach out{' '}
              <a
                href="mailto:victorivo.paul@gmail.com" // Replace with your email
                className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent border-b-2 border-orange-500 hover:border-amber-500 transition-colors duration-200"
              >
                via email
              </a>{' '}
              to collaborate!
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:victorivo.paul@gmail.com" // Replace email
                className="inline-block bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_amber-400/80]"
              >
                Schedule Call
              </a>
              <a
                href="https://wa.me/60138359390" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_white/20]"
              >
                WhatsApp Me
              </a>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
            <div className="space-y-2.5">
              <h3 className="text-xl font-bold">Victor Ivo Paul</h3>{' '}
              <p className="text-gray-400">© 2025 | All rights reserved.</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-16 w-full sm:w-auto">
              <ul className="space-y-2.5 text-sm sm:text-base">
                <li className="text-lg font-semibold">Navigate</li>
                <li className="text-gray-400 hover:text-orange-500">
                  <SmoothScroll targetId="home">Home</SmoothScroll>
                </li>
                <li className="text-gray-400 hover:text-orange-500">
                  <SmoothScroll targetId="about">About</SmoothScroll>
                </li>
                <li className="text-gray-400 hover:text-orange-500">
                  <SmoothScroll targetId="projects">Projects</SmoothScroll>
                </li>
                <li className="text-gray-400 hover:text-orange-500">
                  <SmoothScroll targetId="contact">Contact</SmoothScroll>
                </li>
              </ul>

              <ul className="space-y-2.5 text-sm sm:text-base">
                <li className="text-lg font-semibold">Projects</li>
                <li className="text-gray-400 hover:text-orange-500">
                  <a
                    href="https://github.com/yourusername/project1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project 1
                  </a>{' '}
                </li>
                <li className="text-gray-400 hover:text-orange-500">
                  <a
                    href="https://github.com/yourusername/project2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project 2
                  </a>{' '}
                </li>
                <li className="text-gray-400 hover:text-orange-500">
                  <a
                    href="https://github.com/yourusername/project3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project 3
                  </a>{' '}
                </li>
              </ul>

              <ul className="space-y-2.5 text-sm sm:text-base">
                <li className="text-lg font-semibold">Socials</li>
                <li className="text-gray-400 hover:text-orange-500">
                  <a
                    href="https://www.linkedin.com/in/vctrrpl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{' '}
                </li>
                <li className="text-gray-400 hover:text-orange-500">
                  <a
                    href="https://github.com/vctrrpl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
