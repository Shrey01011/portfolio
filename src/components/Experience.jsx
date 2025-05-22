const Experience = () => {
  const experiences = [
    {
      company: 'Navodita Infotech Pvt Ltd',
      position: 'Web Development Intern',
      duration: 'January 2024 - February 2024',
      description: [
        'Successfully completed the Web Development Internship.',
        'Contributed in projects especially on frontend using HTML, CSS, JavaScript and React.'
      ]
    },
    {
      company: 'Softpro Pvt Ltd',
      position: 'Python Development Intern',
      duration: 'June 2020 - August 2020',
      location: 'Lucknow',
      description: [
        'Received training on Python and Django',
        'Created a Project for Mark Labs'
      ]
    },
    {
      company: 'Alpran Software Private Limited',
      position: 'Programming Intern',
      duration: 'January 2019 - March 2019',
      location: 'Varanasi',
      description: [
        'Underwent Training on C Programming Language'
      ]
    }
  ];

  return (
    <div className="bg-gray-900 py-16" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{exp.company}</h3>
              <div className="text-green-400 mb-2">{exp.position}</div>
              <div className="text-gray-400 mb-4">{exp.duration}</div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;