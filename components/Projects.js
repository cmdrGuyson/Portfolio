import React, { Fragment } from "react";
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
        <div className="grid max-w-2xl grid-cols-1 pt-20 mx-auto dark:bg-gray-900">
          {data.projects.map((proj, idx) => (
            <Fragment key={idx}>
              <ProjectCard
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                description={proj.description}
                stack={proj.stack}
                affliation={proj.affliation}
                affliationLink={proj.affliationLink}
                year={proj.year}
              />
              {idx === data.projects.length - 1 ? null : (
                <div className="flex flex-col items-start ml-12 -mt-2 divider-container">
                  <div className="relative z-10 w-3 h-3 -ml-1 bg-red-500 rounded-full">
                    <div className="relative z-10 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 -mt-2 bg-gray-200 rounded-full dark:bg-gray-500"></div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  title,
  affliationLink,
  link,
  imgUrl,
  description,
  stack,
  year,
  affliation,
}) => {
  return (
    <div className="relative z-10 p-4 mx-4 bg-white border rounded-md shadow-xl experience-card dark:bg-gray-800">
      <h1 className="absolute text-4xl font-bold text-gray-300 -top-10 md:-top-10 dark:text-gray-700 right-5">
        {year}
      </h1>
      <div className="flex flex-col">
        <a
          className="w-auto text-xl font-semibold hover:cursor-pointer hover:underline"
          href={link}
          target="_blank"
        >
          {title}
        </a>
        <a
          href={affliationLink}
          className="text-gray-500 hover:cursor-pointer hover:underline"
          target="_blank"
        >
          {affliation}
        </a>
      </div>
      <p className="my-2 leading-tight text-gray-600 whitespace-pre-line dark:text-gray-400">
        {description}
      </p>
      <div className="flex flex-row flex-wrap gap-2 mt-4 max-h-200">
        {stack.map((item) => (
          <img key={item} src={item} className="w-auto h-5" />
        ))}
      </div>
    </div>
  );
};
