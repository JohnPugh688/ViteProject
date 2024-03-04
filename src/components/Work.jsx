import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2024,
    title: "Frontend Developer",
    duration: "4 Months",
    details:
      "Its always good to try new things so I figured Frontend Web Development! Il be completely honest I never thought for a second I would enjoy it as much as I am. Coming from spending my days working outdoors and be very hands on. I always thought it would really suck being stuck behind a computer screen all day. Seems I was wrong. Ive always enjoyed the problem solving side of my work and theres defiantly no shortage of that with coding. Im not by any means good at designing but making a design become a reality is what I thrive on so if anyone has a project they want done I’m happy to give it a go.  ",
  },
  {
    year: 2016,
    title: "Construction Site Manager",
    duration: "8 years",
    details:
      "For the past 8 years I’ve worked as a Construction Site Manager. Mainly working on new build housing developments. It's my job organise and manage everything related to house building from an empty field to a fully finished housing development.",
  },
  {
    year: 2014,
    title: "Pv Solar installer",
    duration: "2 years",
    details:
      "I spent 2 years installing solar panels. This was a nice little change for a while and it was nice to travel around getting to see some beautiful parts of the country",
  },
  {
    year: 2003,
    title: "Joiner",
    duration: "11 years",
    details:
      "For the first 11 years of my working life i was a Joiner. I always had an interest in reading the plans and marking things out. I think one of the best parts of working as a joiner is you get to see the finished product after all your hard work and planing. I think that’s why I’m drawn towards frontend development.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
