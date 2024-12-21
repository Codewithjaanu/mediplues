'use client'
import React, { useEffect, useState } from 'react';

const InfoCards = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cards = [
    {
      title: "Emergency Cases",
      subtitle: "Lorem Amet",
      description: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
      learnMore: "LEARN MORE",
      icon: "emergency-icon"
    },
    {
      title: "Doctors Timetable",
      subtitle: "Fusce Porttitor",
      description: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
      learnMore: "LEARN MORE",
      icon: "timetable-icon"
    },
    {
      title: "Opening Hours",
      subtitle: "Donec luctus",
      description: "Monday - Friday   8.00-20.00\nSaturday            9.00-18.30\nMonday - Thursday  9.00-15.00",
      learnMore: "LEARN MORE",
      icon: "opening-hours-icon"
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`transform transition duration-500 ease-in-out bg-blue-600 text-white p-6 rounded-lg w-80 shadow-lg relative ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          } hover:scale-105`}
        >
          <h3 className="text-sm font-semibold">{card.subtitle}</h3>
          <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
          <p className="mb-6 whitespace-pre-line">{card.description}</p>
          <a href="#" className="text-white font-semibold underline flex items-center gap-1">
            {card.learnMore} <span className="ml-1">→</span>
          </a>
          <div className="absolute bottom-6 right-6 opacity-20 text-6xl">
            {/* Placeholder for Icon */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
