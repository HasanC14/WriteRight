import React from "react";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import MyImage from "../../Assets/Hasan.jpg";
const About = () => {
  return (
    <div className="m-8 lg:m-0">
      <div className="mockup-window border bg-base-300 max-w-screen-lg mx-auto mt-10">
        <div className="flex justify-center md:px-4 md:py-16 p-0 bg-base-200">
          <p className="md:text-xl text-base md:p-7 p-3">
            <span className="font-bold font-serif md:text-2xl text-lg">
              WriteRight
            </span>{" "}
            is a cutting-edge platform that helps users communicate more
            effectively and professionally. By leveraging the power of{" "}
            <span className="font-bold md:text-2xl text-lg">
              {" "}
              <a href="https://openai.com/" target="_blank" rel="noreferrer">
                OpenAI's
              </a>
            </span>{" "}
            language processing technology, WriteRight offers a suite of tools
            to enhance your writing, including{" "}
            <span className="font-bold md:text-2xl text-lg">
              Rewriting, Spelling and Grammar Checking, and Tone Conversion
            </span>
            . Whether you're a student, professional, or just someone looking to
            improve their writing skills, WriteRight is the perfect solution for
            you. Built with the latest web technologies, including{" "}
            <span className="font-bold md:text-2xl text-lg">
              ReactJS, Node.js, and Express.js,
            </span>{" "}
            WriteRight is fast, reliable, and easy to use. So why wait? Start
            using WriteRight today and take your writing to the next level!
          </p>
        </div>
      </div>

      <div className="mockup-window border bg-base-300 max-w-screen-lg mx-auto mt-10">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:px-4 md:py-16 p-0 bg-base-200">
          <div className="m-auto col-span-1">
            <img
              src={MyImage}
              alt=""
              className="w-60 rounded-full border-8 border-slate-500"
            />
          </div>
          <div className="col-span-2 lg:mt-0 mt-5">
            <p className="text-xl font-mono md:px-10 p-3">
              <span className="md:text-2xl text-lg ">
                Hi there! I'm{" "}
                <span className="md:text-4xl text-2xl font-bold">Hasan</span>,{" "}
              </span>{" "}
              <br />a Full Stack Web Developer who loves to code. I created
              WriteRight to assist people in refining their writing skills. Good
              writing is an essential part of communication, and my goal is for
              WriteRight to make that process simpler. If you have any queries
              or comments, I would be delighted to hear from you!
              <div className="flex justify-between w-40 md:text-3xl text-2xl mt-5">
                <a
                  href="https://github.com/HasanC14"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  <FaGithub></FaGithub>
                </a>
                <a
                  href="https://www.facebook.com/hasan.chowdhuryD/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  href="https://www.linkedin.com/in/hasanchowdhuryd/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
