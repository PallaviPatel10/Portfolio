import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src="/images/main2.jpeg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">I'm a {personalInfo.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{personalInfo.bio}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{personalInfo.additionalBio}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-700 dark:text-gray-300"><strong>Name:</strong> {personalInfo.name}</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Experience:</strong> {personalInfo.experience}</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Specialty:</strong> {personalInfo.specialty}</p>
              </div>
              <div>
                <p className="text-gray-700 dark:text-gray-300"><strong>Email:</strong> {personalInfo.email}</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Location:</strong> {personalInfo.location}</p>
                <p className="text-gray-700 dark:text-gray-300"><strong>Freelance:</strong> {personalInfo.freelanceStatus}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Download CV</Button>
              <Button variant="outline" className="border-gray-300 hover:border-gray-400">
                My Skills
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
