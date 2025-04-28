import { certificates, education, achievements } from "@/data/portfolio";

const CertificatesAndEducation = () => {
  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Certificates</h2>
              <div className="space-y-8">
                {certificates.map((cert, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-64 w-full group">
                      <img 
                        src={cert.image} 
                        alt={`${cert.title} certificate`}
                        className="w-full h-full object-contain bg-gray-100 dark:bg-gray-700 p-4"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          <a 
                            href={cert.image} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
                          >
                            View Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400 mb-2">{cert.title}</h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        <span>{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Achievements</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400 mb-2">{education.university.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{education.university.location}</p>
                <p className="text-gray-600 dark:text-gray-300">{education.university.degree}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{education.university.period}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{education.university.grade}</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400 mb-2">{education.intermediate.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{education.intermediate.location}</p>
                <p className="text-gray-600 dark:text-gray-300">Intermediate</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{education.intermediate.period}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{education.intermediate.grade}</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-xl text-blue-600 dark:text-blue-400 mb-2">{education.matriculation.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{education.matriculation.location}</p>
                <p className="text-gray-600 dark:text-gray-300">Matriculation</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{education.matriculation.period}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{education.matriculation.grade}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesAndEducation;
