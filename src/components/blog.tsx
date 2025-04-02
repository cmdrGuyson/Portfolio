import data from "../constants/data";
import React from "react";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="h-48 max-w-6xl mx-auto bg-white dark:bg-gray-800">
        <h1 className="py-20 text-5xl font-bold text-center md:text-9xl md:text-left">
          Blog
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-4">
            {data.blogPosts.map((post, idx) => (
              <BlogCard
                key={idx}
                title={post.title}
                description={post.description}
                directUrl={post.directUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface BlogCardProps {
  title: string;
  description: string;
  directUrl: string;
}

const BlogCard = ({ title, description, directUrl }: BlogCardProps) => {
  return (
    <Link href={directUrl} target="_blank" rel="noopener noreferrer">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-200 dark:hover:shadow-gray-900 cursor-pointer h-full flex flex-col">
        <div className="p-4 flex-grow">
          <div className="mb-2">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-[#0A66C2] mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              <h2 className="text-xl font-semibold ml-2">{title}</h2>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
};
