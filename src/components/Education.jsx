const Education = () => {
  const education = [
    {
      school: 'Indarprastha Engineering College',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      year: '2020 - 2024',
      location: 'Ghaziabad, Uttar Pradesh'
    },
    {
      school: 'St. Ravidas Government Polytechnic',
      degree: 'Diploma',
      field: 'Computer Science and Engineering',
      year: '2018 - 2021',
      location: 'Chandauli, Uttar Pradesh'
    }
  ];

  return (
    <div className="bg-gray-900 py-12" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {edu.school}
              </h3>
              <div className="text-green-400 font-bold mb-2">
                {edu.degree} • {edu.field}
              </div>
              <div className="text-gray-400">
                {edu.year}
              </div>
              <div className="text-gray-500">
                {edu.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
