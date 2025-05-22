const Hero = () => {
  return (
    <div className="bg-gray-900 py-12 relative overflow-hidden">
      {/* Decorative illustrations */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 transform translate-x-1/3 -translate-y-1/4">
        <img
          src="/illustrations/laptop.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 transform -translate-x-1/4 translate-y-1/4">
        <img
          src="/illustrations/workspace.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Profile Image */}
          <div className="flex-shrink-0 relative z-10">
            <div className="relative w-75 h-75 mx-auto lg:mx-0">
              <img
                className="rounded-full ring-4 ring-gray-700 w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
                src="/profile-image.jpg"
                alt="Profile"
              />
              {/* <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-green-500"></div> */}
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-8 lg:mt-0 lg:ml-10 relative z-10">
            <h1 className="text-4xl font-bold text-white mb-4">
              Shreyash Shandilya
            </h1>
            <h2 className="text-2xl text-gray-300 mb-6">
              Web Developer
            </h2>
            <p className="text-gray-400 max-w-2xl mb-8">
              Enthusiastic and motivated web development fresher with a strong passion for building responsive,
              user-centric websites. Skilled in implementing responsive design principles, ensuring cross-browser
              compatibility, and creating intuitive UI/UX designs.
            </p>
            <div className="flex space-x-6">
              <a
                href="mailto:shreyash.shandilya1011@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="https://github.com/ShreY01011"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="tel:+918299514034"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Phone</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4v16H4V4h16m2-2H2v20h20V2z"/>
                  <path d="M15.5 17l-3-3-3 3V7h6v10z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 