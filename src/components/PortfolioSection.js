// src/components/PortfolioSection.js
import React from 'react';
import { FaDribbble } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

// === IMPORT GAMBAR DARI ASSETS ===
import WebImage from '../assets/images/web.png';
import AndroidImage from '../assets/images/andro.png';

const portfolioData = [
  { 
    id: 1, 
    title: "Dashboard Web App", 
    tags: "UI/UX, Frontend", 
    image: WebImage, 
    label: "UI Design" 
  },
  { 
    id: 2, 
    title: "Mobile App Landing", 
    tags: "Design, Branding", 
    image: AndroidImage, 
    label: "Mobile App" 
  },
  { 
    id: 3, 
    title: "3D Design", 
    tags: "3D, Animation", 
    spline: "https://prod.spline.design/oPJAH-hKlXKk5tXh/scene.splinecode", 
    label: "3D Design" 
  },
];

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-heading-dark mb-16">
          Portfolio
        </h2>

        {/* === GRID PROJECTS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition duration-300 hover:scale-[1.02] border border-gray-100"
            >
              <div className="relative h-60 w-full overflow-hidden">
                {/* Jika project punya properti spline, tampilkan Spline viewer */}
                {project.spline ? (
                  <Spline scene={project.spline} />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <span className="absolute top-4 right-4 bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {project.label}
                </span>
              </div>
              
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-heading-dark mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-text-gray font-medium">
                  {project.tags}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* === DRIBBBLE BUTTON === */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition">
            <FaDribbble />
            <span>More on Dribbble</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
