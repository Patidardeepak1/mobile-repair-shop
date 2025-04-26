import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'eMMC, eMCP, UFS, Double Decker IC Work',
      description: 'Complete IC level work for advanced chipsets.',
      image: 'https://via.placeholder.com/150?text=IC+Work',
    },
    {
      title: 'Dead Phone Solution',
      description: 'Fix phones that won’t turn on or show any signs of life.',
      image: 'https://via.placeholder.com/150?text=Dead+Phone',
    },
    {
      title: 'Data Recovery',
      description: 'Recover lost or deleted data from damaged devices.',
      image: 'https://via.placeholder.com/150?text=Data+Recovery',
    },
    {
      title: 'No Display',
      description: 'Fix devices that power on but don’t display anything.',
      image: 'https://via.placeholder.com/150?text=No+Display',
    },
    {
      title: 'Graphic Problem',
      description: 'Solve screen glitches or graphical issues.',
      image: 'https://via.placeholder.com/150?text=Graphics+Issue',
    },
    {
      title: 'Create GP Partition',
      description: 'Custom GP partitioning for memory chips.',
      image: 'https://via.placeholder.com/150?text=GP+Partition',
    },
    {
      title: 'Create Lower Partition',
      description: 'Partition memory chips for specific usage.',
      image: 'https://via.placeholder.com/150?text=Lower+Partition',
    },
    {
      title: 'Light Section Treccing',
      description: 'Advanced diagnosis in light control sections.',
      image: 'https://via.placeholder.com/150?text=Light+Treccing',
    },
    {
      title: 'Schematic Multiwork',
      description: 'Schematic-based repairs for logic boards.',
      image: 'https://via.placeholder.com/150?text=Schematic',
    },
    {
      title: 'eMMC Change Without CPU',
      description: 'Replace eMMC without needing the CPU.',
      image: 'https://via.placeholder.com/150?text=eMMC+No+CPU',
    },
    {
      title: 'Blue Light Problem',
      description: 'Fix issues related to persistent blue light.',
      image: 'https://via.placeholder.com/150?text=Blue+Light',
    },
    {
      title: 'Dump File Read & Write',
      description: 'Extract and flash dump files safely.',
      image: 'https://via.placeholder.com/150?text=Dump+File',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Services Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of mobile repair services. From advanced IC work to data recovery and everything in between, our experts are here to restore your devices.
          </p>
        </div>

        {/* Services List */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 mx-auto mb-4 object-cover rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
