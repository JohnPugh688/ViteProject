import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-fill"
        src="https://media.istockphoto.com/id/1009803562/photo/group-of-people-on-peak-mountain-climbing-helping-team-work-travel-trekking-success-business.webp?b=1&s=170667a&w=0&k=20&c=DcMAuJQQeqBwibV-VKqisNb1J-byzW6EEIOJ9XOyoNI="
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            I'm John Pugh
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Outdoors Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaGithub
              className="cursor-pointer hover:text-lime-500 hover:scale-150 ease-in duration-200"
              size={20}
            />
            <a
              target="_blank"
              href="https://www.frontendmentor.io/profile/JohnPugh688"
            >
              <SiFrontendmentor
                className="cursor-pointer hover:text-lime-500 hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/johnpugh60/">
              <FaInstagram
                className="cursor-pointer hover:text-lime-500 hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/john-pugh-b5b1722b8/"
            >
              <FaLinkedinIn
                className="cursor-pointer hover:text-lime-500 hover:scale-150 ease-in duration-200"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
