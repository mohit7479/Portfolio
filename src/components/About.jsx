import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-r from-sky-800 to-slate-950 text-sky-300 md:px-10 max-sm:px-6"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-sky-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-3xl font-bold">
            <p>Hi. I'm Mohit, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              As a passionate full-stack web developer specializing in MERN, I
              bring creativity and precision to every project. With a keen eye
              for design and a knack for clean code, I craft engaging web
              experiences that captivate users. Let's collaborate to bring your
              vision to life with cutting-edge technology and intuitive design.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
