import React from "react";
import IBM from "../assets/Companies/ibm.jpg";
import SOFTAPPER from "../assets/Companies/softapper.png";

function Experiences() {
  return (
    <div
      name="experience"
      className="bg-gradient-to-r from-slate-950 to-sky-800 text-sky-300 w-full min-h-screen py-8 pt-20 md:px-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 max-sm:px-6">
          <p className="text-4xl font-bold inline border-b-4 text-sky-300 border-sky-600 ">
            Experience
          </p>
          <p className="pt-6">
            Following are the places I've gained work experience:
          </p>
        </div>
        <div className="relative container mx-auto px-6 flex flex-col space-y-8 overflow-hidden">
          <div className="absolute w-2 h-full bg-sky-400 shadow-md inset-0 left-1/2 transform -translate-x-1/2"></div>

          {/* <div className="flex flex-col md:flex-row items-center p-2 z-10 w-full shadow-xl shadow-black ">
            <img src={CFCS2R} alt="CFCS2R" className="max-w-40 p-5 duration-500 md:order-2 md:ml-6" />
            <div className="text-center md:text-left md:order-1 w-full">
              <div className="bg-white text-[#0E67B4] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>Cyber Security Intern - CFCS2R</div>
                <p className='max-sm:text-xs text-sm text-left'>
                  <i>July 2024 - Present</i><br />
                  • Familiarized with cyber space, focusing on configuring and monitoring security controls.<br />
                  • Analyzed case studies examining tactics used by perpetrators and responses by cyber police stations.<br />
                  • Implemented cyber security protocols to ensure data protection and compliance with industry standards.
                </p>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row items-center z-10 p-2 w-full shadow-xl shadow-black ">
            <img
              src={IBM}
              alt="IBM"
              className="max-w-40 p-5 mr-2 duration-500 md:mr-6"
            />
            <div className="text-left w-full">
              <div
                className="bg-white text-[#145EFF] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="false"
              >
                <div className="font-bold text-lg">
                  AI Research Intern - IBM Skillsbuild
                </div>
                <p className="max-sm:text-xs text-sm">
                  <strong>June 2024 - July 2024</strong>
                  <br />
                  • Built and integrated chat bots using watsonx.ai in multiple
                  websites, reducing response times by 50%.
                  <br />
                  • Trained, tested and deployed machine learning models for
                  various industries.
                  <br />• Collaborated with cross-functional teams to deliver AI
                  solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full z-10 p-2 pb-6 shadow-xl shadow-black">
            <img
              src={SOFTAPPER}
              alt="Softapper"
              className="max-w-40 p-5 pb-6 m-2 duration-500 md:order-2 md:ml-6"
            />
            <div className="text-left md:order-1 w-full">
              <div
                className="bg-[#E6E6E6] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-once="false"
              >
                <div className="font-bold text-lg text-[#3F5656]">
                  MERN Stack Developer - Softapper Tech Solutions
                </div>
                <p className="text-[#bb4343] max-sm:text-xs text-sm">
                  <strong className="text-[#3F5656]">
                    May 2024 - June 2024
                  </strong>
                  <br />
                  • Developed a weather application using ReactJS, gaining
                  valuable experience in connecting to external APIs and
                  displaying relevant results.
                  <br />
                  • Acquired skills beneficial for developing other types of
                  single-page apps that retrieve data from external sources and
                  showcase the results.
                  <br />• Covered important topics like user authentication,
                  task management, and working with databases.
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
