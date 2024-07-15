import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-r from-slate-950 to-sky-800 max-md:px-10 text-sky-300 w-full min-h-screen flex justify-center items-center p-4"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <form
          method="POST"
          action="https://getform.io/f/bgdypjla"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-sky-600">
              Contact
            </p>
            <p className="py-4">
              Submit the form below or shoot me an email -
              mohit7479936440@gmail.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] text-sky-700 p-2 rounded-lg"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="bg-[#ccd6f6] text-sky-700 my-4 p-2 rounded-lg"
            type="text"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] text-sky-700 p-2 rounded-lg"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="border-y-2 bg-gradient-to-r from-pink-500 to-sky-950 hover:from-pink-500 hover:to-sky-500 hover:border-pink-600 hover:scale-95 duration-300 px-3 py-2 my-8 mx-auto items-center rounded-xl">
            Let's Connect!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
