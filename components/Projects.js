import React from "react";
import data from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="h-48 max-w-6xl mx-auto bg-white dark:bg-gray-800">
        <h1 className="py-20 text-5xl font-bold text-center md:text-9xl md:text-left">
          Projects
        </h1>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="grid max-w-6xl grid-cols-1 gap-8 py-20 pb-40 mx-auto md:grid-cols-1">
          {data.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              description={proj.description}
              stack={proj.stack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, description, stack }) => {
  return (
    <a href={link} className="block w-full shadow-2xl" target="_blank">
      <div className="relative flex justify-center p-10 mx-5 transition ease-out transform rounded-lg dark:bg-gray-800 hover:scale-105 duration-2000">
        <img
          src={imgUrl}
          alt="portfolio"
          className="hidden object-contain w-32 md:block"
        />
        <div className="pl-10">
          <p
            className="px-2 text-xl font-bold bg-red-500 rounded-md text-gray-50"
            style={{ width: "fit-content" }}
          >
            {title}
          </p>
          <p className="mt-5">{description}</p>
          <div className="flex mt-5">
            {stack?.length &&
              stack.map((element, index) => (
                <p
                  className="px-2 mr-2 text-sm font-bold bg-gray-500 rounded-md text-gray-50"
                  style={{ width: "fit-content" }}
                  key={index}
                >
                  {element}
                </p>
              ))}
          </div>
        </div>
      </div>
    </a>
  );
};
