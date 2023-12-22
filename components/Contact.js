import React from "react";
import data from "@constants/data";

export default function Contact() {
  return (
    <section>
      <div className="h-48 max-w-6xl mx-auto mb-20 antialiased bg-white dark:bg-gray-800">
        <h1 className="py-20 text-5xl font-bold text-center md:text-9xl md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 max-w-6xl p-4 mx-auto mb-20 -mt-4 bg-gray-400 rounded-md shadow-md dark:bg-gray-900 md:p-10 lg:p-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-2xl font-semibold text-gray-50">
                Howl at me!
              </h1>
              <p className="mt-2 text-base font-light text-gray-200">
                I know you want to ;)
              </p>
            </header>
            <div className="inline-flex flex-col my-20 mb-60 icons-container"></div>
            <div className="flex flex-row space-x-8 social-icons">
              <a
                href={data.socialLinks.linkedin}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-green-500"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-5 h-5 bi bi-linkedin text-gray-50"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a
                href={data.socialLinks.github}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-green-500"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="w-5 h-5 bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
                  <script xmlns="" />
                </svg>
              </a>
              <a
                href={data.socialLinks.instagram}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-green-500"
                target="_blank"
              >
                <svg
                  width="24"
                  height="24"
                  className="text-gray-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <form className="flex flex-col p-4 bg-white rounded-lg form">
            <label htmlFor="name" className="mx-4 text-sm text-gray-600">
              {" "}
              Your Name
            </label>
            <input
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light border rounded-md focus:outline-none focus:ring-2 focus:border-none ring-green-500"
              name="name"
            />
            <label htmlFor="email" className="mx-4 mt-4 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light border rounded-md focus:outline-none focus:ring-2 focus:border-none ring-green-500"
              name="email"
            />
            <label
              htmlFor="message"
              className="mx-4 mt-4 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              rows="4"
              type="text"
              className="px-1 py-2 mx-4 mt-2 font-light border rounded-md focus:outline-none focus:ring-2 focus:border-none ring-green-500"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="w-1/2 py-2 mx-4 mt-8 text-xs font-bold bg-green-500 rounded-md text-gray-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
