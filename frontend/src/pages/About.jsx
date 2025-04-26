import React from 'react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* About Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About Us</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to Mobile Repair Shop, where we provide top-notch repair services for all your mobile devices. 
            Our team of skilled technicians ensures your devices are restored to their best condition in no time.
          </p>
        </div>

        {/* Our Story */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Story</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We started as a small mobile repair service with the mission of providing affordable and high-quality 
            repairs to our community. Over the years, we've built a reputation for reliable services and customer satisfaction.
            Whether it's a cracked screen or a battery issue, we’re here to get your device back in shape.
          </p>
        </div>

        {/* Our Values */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Values</h3>
          <ul className="mt-4 text-lg text-gray-600 dark:text-gray-300 space-y-2">
            <li>🔧 Quality Repairs</li>
            <li>⚡ Fast Turnaround Time</li>
            <li>💰 Affordable Pricing</li>
            <li>🔒 Trustworthy Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
