import React from "react";

const ProjectItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="#" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="font2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center ">Tailwind Css</p>
        <a
          target="_blank"
          href="https://www.frontendmentor.io/profile/JohnPugh688"
        >
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold hover:scale-105 ease-in duration-200 cursor-pointer text-lg ">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
