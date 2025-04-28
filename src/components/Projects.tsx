import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/portfolio";

const Projects = () => {
  const [category, setCategory] = useState('all');
  
  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);
    
  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work across web development and application design, showcasing my skills and creativity.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button 
              variant={category === 'all' ? "default" : "outline"}
              className={category === 'all' ? "bg-blue-600" : ""}
              onClick={() => setCategory('all')}
            >
              All
            </Button>
            <Button 
              variant={category === 'web' ? "default" : "outline"}
              className={category === 'web' ? "bg-blue-600" : ""}
              onClick={() => setCategory('web')}
            >
              Web Development
            </Button>
            <Button 
              variant={category === 'app' ? "default" : "outline"}
              className={category === 'app' ? "bg-blue-600" : ""}
              onClick={() => setCategory('app')}
            >
              App Development
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.tags}
              githubUrl={project.codeLink || "#"}
              liveUrl={project.demoLink || "#"}
              imageIndex={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
