import React from "react";
import JS from "../assets/Certificates/HackerRankJS.png";
import PS from "../assets/Certificates/HackerRankPS.png";
import IBMAI from "../assets/Certificates/IBMAI.png";
import ReactJS from "../assets/Certificates/UdemyReactJS.png";
import IBMAI2 from "../assets/Certificates/AIFundamentals.png";

const Certificates = () => {
  return (
    <div
      name="certificates"
      className="bg-gradient-to-r from-sky-800 to-slate-950 text-sky-300 max-md:px-10  w-full min-h-screen py-8 pt-20 md:px-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Certifications
          </p>
          <p className="py-6">
            These are some of the certifications I've recieved :{" "}
          </p>
        </div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${ReactJS})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <div className="text-xl font-bold text-white tracking-wider text-center">
                Course Completion : React JS
              </div>
              <div className="text-xl text-center">
                <i>(Udemy)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://www.udemy.com/certificate/UC-288073c8-cf9a-4095-813a-bb90aa3721e5/"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${IBMAI2})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white">
                Badge : Artificial Intelligence Fundamentals
              </span>
              <div className="text-xl text-center">
                <i>(IBM)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://www.credly.com/badges/873e976c-3b6c-4807-b317-cfd36c55f3ab/public_url"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${IBMAI})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider text-center">
                Badge : Getting Started with Artificial Intelligence
              </span>
              <div className="text-xl text-center">
                <i>(IBM)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://www.credly.com/badges/4977444e-a0b2-473c-894f-ea82f6c7566e"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${PS})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <div className="text-xl font-bold text-white tracking-wider text-center">
                Assessment : Problem Solving
              </div>
              <div className="text-xl text-center">
                <i>(HackerRank)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://www.hackerrank.com/certificates/84394f40365e"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${JS})` }}
            className="shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <div className="text-xl font-bold text-white tracking-wider text-center">
                Assessment : JavaScript
              </div>
              <div className="text-xl text-center">
                <i>(HackerRank)</i>
              </div>
              <div className="pt-8 text-center">
                <a
                  href="https://www.hackerrank.com/certificates/83b1fdb38244"
                  target="new"
                >
                  <button className="text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300">
                    Verify
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
