import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import VotingSystem from "../assets/projects/votingsystem.png";
import chatsite from "../assets/projects/chatsite.png";
import packnchew from "../assets/projects/packnchew.png";
import food from "../assets/projects/foodRecipe.png";
import weather from "../assets/projects/weather.png";

import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

const Work = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the section is visible
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      img: packnchew,
      title: "PacknChew",
      tech: "(React.js, Tailwind, Firebase)",
      desc: "Official Website for Lucknow based restaurant PacknChew",
      demo: "https://packnchew.netlify.app/",
      code: "https://github.com/mohit7479/PacknChew",
    },
    {
      img: chatsite,
      title: "Talk-A-Tive",
      tech: "(React.js, Node.js, Express, MongoDB, JWT, ChakraUi)",
      desc: "A Chhating app where People Connect and Converse.",
      code: "https://github.com/mohit7479/ChatApp",
    },
    {
      img: VotingSystem,
      title: "Election Portal",
      tech: "(HTML, CSS, JavaScript, PHP, MySQL)",
      desc: "A website for college to make elections easy, transparent and paper-free.",
      code: "https://github.com/mohit7479/Online-Voting-System",
    },
    {
      img: food,
      title: "Food Recipe",
      tech: "(React.js , CSS , Api)",
      desc: "A frontend site using React and CSS to view food recipes via an API.",
      demo: "https://food-recipe-gules-theta.vercel.app/",
      code: "https://github.com/mohit7479/food-recipe",
    },
    {
      img: weather,
      title: "Weather ",
      tech: "(React.js, , Tailwind ,RapidAPI)",
      desc: "An API-based app to show the weather of a searched location.",
      demo: "https://weather-site-six-taupe.vercel.app/",
      code: "https://github.com/mohit7479/WeatherSite",
    },
  ];

  return (
    <div
      name="work"
      className="bg-gradient-to-r from-sky-800 to-slate-950 text-sky-300 w-full min-h-screen py-8 pt-20 md:px-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full max-md:px-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-sky-300 border-sky-600">
            Work
          </p>
          <p className="py-6 text-sky-300">
            Below is a showcase of some of my most accomplished works :
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              style={{ backgroundImage: `url(${project.img})` }}
              className="shadow-xl shadow-black group container rounded-md flex justify-center items-center mx-auto content-div transform"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="opacity-0 group-hover:opacity-100">
                <div className="text-2xl md:text-xl font-bold text-white text-center tracking-wider">
                  {project.title}
                </div>
                <div className="text-center text-xs pb-2">{project.tech}</div>
                <div className="text-center text-s md:text-xs italic">
                  {project.desc}
                </div>

                <div className="pt-8 text-center flex justify-center items-center">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg flex items-center hover:scale-95 duration-300">
                        <GrDeploy className="mr-2" />
                        Demo
                      </button>
                    </a>
                  )}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg flex items-center hover:scale-95 duration-300">
                      <FaGithub className="mr-2" />
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
