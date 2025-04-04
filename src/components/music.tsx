import React from "react";

export default function Music() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-6xl font-bold text-left lg:text-9xl text-gray-600">
            My Music
          </h1>
          <a
            href="https://soundcloud.com/gayanga-kuruppu"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0"
          >
            <div className="flex flex-row items-center px-8 py-4 space-x-4 text-xl font-semibold bg-white rounded-md shadow-lg text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-14.333 15.524c-.405-.365-.667-.903-.667-1.512 0-.608.262-1.146.667-1.512v3.024zm1.333.476c-.243 0-.369.003-.667-.092v-3.792c.316-.101.465-.097.667-.081v3.965zm1.333 0h-.666v-3.778l.206.121c.091-.375.253-.718.461-1.023v4.68zm1.334 0h-.667v-5.378c.206-.154.426-.286.667-.377v5.755zm1.333 0h-.667v-5.905c.251-.027.328-.046.667.006v5.899zm1.333 0h-.667v-5.7l.253.123c.119-.207.261-.395.414-.572v6.149zm6.727 0h-6.06v-6.748c.532-.366 1.16-.585 1.842-.585 1.809 0 3.275 1.494 3.41 3.386 1.303-.638 2.748.387 2.748 1.876 0 1.143-.869 2.071-1.94 2.071z" />
              </svg>
              <p>Travel to SoundCloud</p>
            </div>
          </a>
        </header>

        <p className="mt-12">
          &ldquo;Ex Animo&rdquo; meaning &ldquo;From the heart&rdquo; is my
          first EP. It&apos;s still in the making. Until then you can listen to
          my latest single &ldquo;Fallen for you&rdquo;.
          <br />I also do covers on Instagram. You can follow me over there{" "}
          <a
            href="https://www.instagram.com/brown_acoustics/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @brown_acoustics
          </a>
        </p>

        <div className="flex justify-center py-12 mt-12 rounded-md bg-gray-800">
          <iframe
            width="90%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="fallen-for-you"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/776738947&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </div>
      </div>
    </div>
  );
}
