const Projects = () => {
  const projects = [
    
    {
      name: 'Dare2Dev',
      description: 'Web portal with user authentication, modern UI, and admin features using NodeJS & MongoDB.',
      tech: 'MERN Stack',
      link: 'https://dare2dev.netlify.app/'
    },
    {
      name: 'T-Shirt-Customizer',
      description: 'A Frontend project for a T-Shirt Customizer using Vite and Tailwind CSS Based on a codepen project',
      tech: 'React, Tailwind CSS',
      link: 'https://t-shirt-custom.pages.dev/'
    },
    {
      name: 's-events',
      description: 'A website for a event management company using React and Tailwind CSS by implementing webscrapping.',
      tech: 'React',
      link: 'https://github.com/Shrey01011/s-events'
    },
    {
      name: 'React-live-score',
      description: 'A live cricket score app built with React, providing real-time updates and match details.',
      tech: 'React',
      link: 'https://github.com/ShreY01011/React-live-score'
    },
    {
      name: 'Anime Critic',
      description: 'A web application for anime reviews and recommendations using NodeJS and HTML templates.',
      tech: 'NodeJS',
      link: 'https://github.com/ShreY01011/animecritic'
    },
    {
      name: 'Internet Status',
      description: 'Real-time internet connection status monitoring application.',
      tech: 'JavaScript',
      link: 'https://github.com/Shrey01011/InternetStatus'
    },
    
    {
      name: 'Portfolio',
      description: 'A portfolio website for a developer using React and Tailwind CSS',
      tech: 'React,Tailwind CSS',
      link: 'https://portfolio-7oy.pages.dev/'
    },
    
  ];

  return (
    <div className="bg-gray-900 pt-4 pb-16" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors duration-200 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 bg-opacity-10 text-red-400 whitespace-nowrap">
                    {project.tech}
                  </span>
                </div>
                <p className="text-gray-400 flex-grow">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 