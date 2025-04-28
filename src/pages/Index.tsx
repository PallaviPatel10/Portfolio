
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Internships from "@/components/Internships";
import CertificatesAndEducation from "@/components/CertificatesAndEducation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Implement scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }
      });
    };
    
    // Initial check
    revealOnScroll();
    
    // Add event listener
    window.addEventListener("scroll", revealOnScroll);
    
    // Cleanup
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Internships />
      <CertificatesAndEducation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
