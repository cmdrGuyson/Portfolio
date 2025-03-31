import data from "../constants/data";
import React, { Fragment } from "react";

export default function Story() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="h-48 max-w-6xl mx-auto bg-white dark:bg-gray-800">
        <h1 className="py-20 text-5xl font-bold text-center md:text-9xl md:text-left">
          My Story
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid max-w-xl grid-cols-1 pt-20 mx-auto dark:bg-gray-900">
          {data.experience.map((exp, idx) => (
            <Fragment key={idx}>
              <StoryCard
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                place={exp.place}
                link={exp.link}
              />
              {idx === data.experience.length - 1 ? null : (
                <div className="flex flex-col items-center -mt-2 divider-container">
                  <div className="relative z-10 w-4 h-4 bg-red-500 rounded-full">
                    <div className="relative z-10 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
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

interface StoryCardProps {
  title: string;
  desc: string;
  year: string | number;
  place: string;
  link: string;
}

const StoryCard = ({ title, desc, year, place, link }: StoryCardProps) => {
  return (
    <div className="relative z-10 p-4 mx-4 bg-white border rounded-md shadow-xl experience-card dark:bg-gray-800">
      <h1 className="absolute text-4xl font-bold text-gray-300 -top-10 md:-left-10 md:-top-10 dark:text-gray-700">
        {year}
      </h1>
      <h1 className="text-xl font-semibold">{title}</h1>
      <a
        href={link}
        className="text-gray-500 hover:cursor-pointer hover:underline"
        target="_blank"
      >
        {place}
      </a>
      <p className="my-2 text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
};
