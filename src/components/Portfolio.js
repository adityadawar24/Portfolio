import React from "react";
import eshopp from "../assets/eshopp.jpg";
import newsmonk from "../assets/newsmonkeyy.png";
import weather from "../assets/weather.jpg";
import todo from "../assets/todolist.webp";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: eshopp,
      githublink:"https://github.com/adityadawar24/Eshop",
      demoLink: "https://e-shoping-ad.netlify.app/",
    },
    {
      id: 2,
      src: newsmonk,
      githublink:"https://github.com/adityadawar24/NewsMonkey",
      demoLink: "https://drive.google.com/file/d/1heYWdEcfVtkRLFhfLGTCqYMfrp6yjCjr/view?usp=sharing",
    },
    {
      id: 3,
      src: weather,
      githublink:"https://github.com/adityadawar24/Weather-App",
      demoLink: "https://weather-app2-delta.vercel.app/",
    },
    {
      id: 4,
      src: todo,
      githublink:"https://github.com/adityadawar24/Todo-list",
      demoLink: "https://to-do-list-seven-flax.vercel.app/",
    },
    {
      id: 5,
      src: "https://user-images.githubusercontent.com/62251989/144671753-31ff3e5b-7e4d-451a-b3bc-1a46f4ced711.png",
      githublink:"https://github.com/adityadawar24/Search-profile",
      demoLink: "https://githubprofile-nine.vercel.app/",
    },
  ];

  const opengithublink = (githublink) => {
    window.open(githublink, "_blank");
  };
  const opendemolink = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,githublink,demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=> opendemolink(demoLink)}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={()=> opengithublink(githublink)}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
