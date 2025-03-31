import data from "../constants/data";
import React from "react";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.blogPosts.map((post, idx) => (
              <BlogCard
                key={idx}
                title={post.title}
                description={post.description}
                embedUrl={post.embedUrl}
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
  embedUrl: string;
}

const BlogCard = ({ title, description, embedUrl }: BlogCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      </div>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={embedUrl}
          className="w-full h-[399px]"
          frameBorder="0"
          allowFullScreen
          title={`LinkedIn post: ${title}`}
        />
      </div>
    </div>
  );
};
