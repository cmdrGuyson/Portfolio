import data from "../constants/data";
import React from "react";

export default function RecentArticles() {
  return (
    <section className="bg-white dark:bg-gray-800 -mt-40">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col items-center justify-between pt-40 mx-10 md:flex-row md:my-20 lg:my-0">
          <h1 className="max-w-lg my-20 text-6xl font-bold text-left text-gray-500 lg:text-9xl md:my-0 md:text-white dark:text-gray-600">
            Articles
          </h1>
        </header>
        <div className="bg-[#F1F1F1] dark:bg-gray-800 mt-4">
          <div className="mx-10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.blogPosts.map((post, idx) => (
                <RecentArticle
                  key={idx}
                  title={post.title}
                  description={post.description}
                  embedUrl={post.embedUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface RecentArticlesProps {
  title: string;
  description: string;
  embedUrl: string;
}

const RecentArticle = ({
  title,
  description,
  embedUrl,
}: RecentArticlesProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
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
