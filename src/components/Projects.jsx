import React from "react";
import ProjectItem from "./ProjectItem";
import ClipboardLanding from "../assets/ClipboardLanding.png";
import FrontendMentor from "../assets/FrontendMentor.png";
import PricingComponent from "../assets/PricingComponent.png";
import Testimonials from "../assets/Testimonials.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8 ">
        Below is a selection of Frontend Mentor challenges that I've completed
        in the past few months. Ive found this a great place to start on my
        coding journey. Its also a great place to get some feedback. Im more
        than happy to give any project a go as its the only way to learn and
        improve so if anyone has anything they want done I’m happy to give it a
        go.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={ClipboardLanding} title="Clipboard page" />
        <ProjectItem img={FrontendMentor} title="Frontend Apps" />
        <ProjectItem img={PricingComponent} title="Pricing Card" />
        <ProjectItem img={Testimonials} title="Testimonials" />
      </div>
    </div>
  );
};

export default Projects;
