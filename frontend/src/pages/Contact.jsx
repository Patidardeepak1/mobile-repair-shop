import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Contact Section Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            You can reach us through the following ways. We're happy to assist you!
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-12 max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            {/* Mobile Number */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v7m6 4l-6 6-6-6"
                />
              </svg>
              <span className="text-lg text-gray-600 dark:text-gray-300">+91 91719 90787</span>
            </div>

            {/* Email Address */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.5 6h19l-9.5 7L2.5 6zm0 12h19l-9.5-7-9.5 7z"
                />
              </svg>
              <span className="text-lg text-gray-600 dark:text-gray-300">contact@mobileshop.com</span>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 0v7m0 0H9.5a3.5 3.5 0 01-3.5-3.5V7.5a3.5 3.5 0 013.5-3.5H14a3.5 3.5 0 013.5 3.5v7a3.5 3.5 0 01-3.5 3.5H12z"
                />
              </svg>
              <span className="text-lg text-gray-600 dark:text-gray-300">123 Mobile St., City Name, Country</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Follow Us</h2>

            {/* YouTube */}
            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M23.5 6.25v11.5a1.25 1.25 0 01-1.25 1.25H1.75A1.25 1.25 0 010 17.75V6.25A1.25 1.25 0 011.75 5h20a1.25 1.25 0 011.25 1.25zM16.97 12l-6.72 4.02c-.79.45-1.69-.09-1.69-.99V8.98c0-.89.9-1.44 1.69-.99L16.97 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <span className="text-lg text-gray-600 dark:text-gray-300">YouTube</span>
            </div>

            {/* Instagram */}
            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.653 2.347a5.5 5.5 0 00-7.806 7.806A5.5 5.5 0 007.447 9.49c-.377-.537-.646-1.116-.796-1.724a4.992 4.992 0 014.957-6.132c.682-.04 1.346-.034 2.02.02-.222-.017-.445-.035-.668-.035z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <span className="text-lg text-gray-600 dark:text-gray-300">Instagram</span>
            </div>

            {/* WhatsApp */}
            <div className="flex justify-center items-center space-x-4">
              <a
                href="https://wa.me/919171990787"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.017 3.5a10.017 10.017 0 11-10.017 10.017A10.017 10.017 0 0120.017 3.5zm-1.92 5.328a2.746 2.746 0 00-2.585 3.206c.442 2.455.021 4.707-1.214 6.254a9.553 9.553 0 01-1.548 2.026c-.047.08-.1.162-.159.242-.249.269-.505.531-.783.787-1.077 1.133-2.468 1.938-3.96 1.753-.578-.04-1.141-.237-1.654-.553-.564-.336-.872-.839-.942-1.419-.083-.669-.347-1.318-.743-1.88-.452-.709-.765-1.467-.935-2.244-.434-1.617.084-3.324 1.388-4.254.449-.515.902-1.004 1.359-1.508l.015-.018a9.473 9.473 0 011.498-.744c1.373-.659 2.935-.927 4.413-.724.402-.229.852-.35 1.285-.361a2.773 2.773 0 00-.978-1.468z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <span className="text-lg text-gray-600 dark:text-gray-300">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
