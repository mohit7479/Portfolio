import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "a Full-Stack Web Developer",
      "an Artificial Intelligence Intern",
      "a Final-Year IT Undergraduate",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 50,
  });

  return (
    <div
      name="home"
      className="bg-gradient-to-r from-slate-950 to-sky-800 w-full h-screen md:px-10"
    >
      {/* container */}
      <div className="max-w-[1000px] md:mx-10 lg:mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p
          className="text-sky-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#ccd6f6]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Mohit Kumar
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#8892b0]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm <span>{text}</span>
          <Cursor />
        </motion.h2>
        <motion.p
          className="py-4 max-w-[700px] text-[#8892b0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          I'm a full-stack web developer specializing in designing and building
          exceptional webpages.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-y-2 px-3 py-2 my-2 flex items-center bg-gradient-to-r from-sky-600 to-pink-600 hover:from-pink-500 hover:to-sky-500 hover:border-pink-600 hover:scale-95 duration-500 rounded-xl">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
