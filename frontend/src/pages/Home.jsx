import React from 'react';

const Home = () => {
  const services = [
    { title: 'Screen Repair', description: 'We fix cracked and broken screens quickly and affordably.' },
    { title: 'Battery Replacement', description: 'Get a new battery for your phone, ensuring long-lasting power.' },
    { title: 'Water Damage Repair', description: 'We help restore your phone after water damage.' },
    { title: 'Software Issues', description: 'Fix bugs and glitches to optimize your phone’s performance.' },
  ];

  return (
    <div className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Home Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Welcome to Mobile Repair Shop
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide top-notch repair services for all your mobile devices. Our team of skilled technicians ensures your devices are restored to their best condition in no time.
          </p>
        </div>

        {/* Our Services */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a range of services to meet your mobile repair needs. Whether it’s a cracked screen, battery issue, or software bug, we’ve got you covered.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
