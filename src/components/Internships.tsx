import { internships } from "@/data/portfolio";

const Internships = () => {
  return (
    <section id="internships" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-center">Internships & Training</h2>
        <div className="space-y-6">
          {internships.map((internship, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {internship.company}
                </h3>
                <span className="text-gray-600 dark:text-gray-400">{internship.period}</span>
              </div>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                {internship.position}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">{internship.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
