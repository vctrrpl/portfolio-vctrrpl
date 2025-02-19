import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent text-left">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-zinc-500/30 hover:shadow-gray-300 transition">
            <h3 className="text-xl text-gray-400 font-bold mb-2">
              Product Store
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, cum.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                'React',
                'Tailwind CSS',
                'Node.js',
                'ExpressJS',
                'PostgreSQL',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-zinc-800/60 text-gray-400 py-1 px-3 rounded-full text-sm hover:bg-zinc-800/20 hover:shadow-gray-300 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors my-4 flex items-center"
              >
                View Project
                <MdKeyboardDoubleArrowRight className="ml-0.5 text-lg" />
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-zinc-500/30 hover:shadow-gray-300 transition">
            <h3 className="text-xl text-gray-400 font-bold mb-2">
              Product Store
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, cum.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                'React',
                'Tailwind CSS',
                'Node.js',
                'ExpressJS',
                'PostgreSQL',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-zinc-800/60 text-gray-400 py-1 px-3 rounded-full text-sm hover:bg-zinc-800/20 hover:shadow-gray-300 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors my-4 flex items-center"
              >
                View Project
                <MdKeyboardDoubleArrowRight className="ml-0.5 text-lg" />
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-zinc-500/30 hover:shadow-gray-300 transition">
            <h3 className="text-xl text-gray-400 font-bold mb-2">
              Product Store
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, cum.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                'React',
                'Tailwind CSS',
                'Node.js',
                'ExpressJS',
                'PostgreSQL',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-zinc-800/60 text-gray-400 py-1 px-3 rounded-full text-sm hover:bg-zinc-800/20 hover:shadow-gray-300 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors my-4 flex items-center"
              >
                View Project
                <MdKeyboardDoubleArrowRight className="ml-0.5 text-lg" />
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-zinc-500/30 hover:shadow-gray-300 transition">
            <h3 className="text-xl text-gray-400 font-bold mb-2">
              Product Store
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, cum.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                'React',
                'Tailwind CSS',
                'Node.js',
                'ExpressJS',
                'PostgreSQL',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-zinc-800/60 text-gray-400 py-1 px-3 rounded-full text-sm hover:bg-zinc-800/20 hover:shadow-gray-300 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors my-4 flex items-center"
              >
                View Project
                <MdKeyboardDoubleArrowRight className="ml-0.5 text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
