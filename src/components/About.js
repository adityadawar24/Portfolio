import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My name is Aditya  and I am currently a final year student at IIT Roorkee. I have developed skills in Frontend development and Data Structures and Algorithms.
Throughout my academic journey, I've gained skills in several programming languages, including C++, HTML, CSS, JavaScript, Tailwind ,Typscript and ReactJS.</p>

        
        <p className="text-xl">
       
 I've actively participated in various online coding platforms such as CodeForces ,CodeChef, HackerRank , Leetcode , GeeksforGeeks and CodeNinja.

        </p>

        <br />
        <p className="text-xl">
        I've developed a keen interest in building dynamic web applications using ReactJS and Tailwind CSS for responsive and visually appealing designs. I've successfully completed some personal projects also.
        </p>
        <br />

        <p className="text-xl">
        Beyond the coding realm, I'm passionate about video editing, dancing, and skateboarding.
        </p>
      </div>
    </div>
  );
};

export default About;
