import React from 'react';
// Import ikon yang sesuai (atau gunakan ikon lain yang lebih spesifik jika perlu)
import { FaPaintBrush, FaCode, FaLightbulb, FaBolt } from 'react-icons/fa'; 

// Data untuk kartu Keahlian
const skillsData = [
  { 
    id: 1, 
    title: "UI/UX Design", 
    subtitle: "Figma, Adobe XD, Sketch", 
    icon: FaPaintBrush, 
    // Warna latar belakang yang lembut: Ungu Muda
    bgColor: "bg-[#F3E8FF]", // Purple 100/Aura Ungu di desain
    iconColor: "text-primary-purple"
  },
  { 
    id: 2, 
    title: "Frontend Dev", 
    subtitle: "React, Vue, Tailwind", 
    icon: FaCode, 
    // Warna latar belakang yang lembut: Biru Muda
    bgColor: "bg-[#E0F2FE]", // Blue 100/Aura Biru di desain
    iconColor: "text-blue-500" 
  },
  { 
    id: 3, 
    title: "Branding", 
    subtitle: "Logo, Identity, Print", 
    icon: FaLightbulb, 
    // Warna latar belakang yang lembut: Kuning
    bgColor: "bg-[#FEF9C3]", // Yellow 100/Aura Kuning di desain
    iconColor: "text-yellow-600" 
  },
  { 
    id: 4, 
    title: "3D Design", 
    subtitle: "After Effects, Blender ", 
    icon: FaBolt, 
    // Warna latar belakang yang lembut: Ungu/Lavender
    bgColor: "bg-[#EDE9FE]", // Indigo/Lavender di desain
    iconColor: "text-indigo-500" 
  },
];

function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Judul sesuai desain */}
        <h2 className="text-4xl font-extrabold text-heading-dark mb-16">
          My Skills
        </h2>

        {/* Grid Kartu Keahlian */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill) => (
            <div 
              key={skill.id} 
              // Card Styling (Hapus shadow dan border agar sesuai desain)
              className="p-4 rounded-2xl transition duration-300 hover:scale-[1.02] cursor-pointer"
            >
              {/* Area Ikon dengan Warna Background Kustom */}
              <div 
                // Gunakan warna kustom dari data skillsData
                className={`w-full h-40 ${skill.bgColor} rounded-2xl mb-4 flex flex-col items-center justify-center p-6`}
              >
                {/* Ikon */}
                <skill.icon className={`text-4xl mb-2 ${skill.iconColor}`} />
                
                {/* Judul di dalam kartu (sesuai desain) */}
                <h3 className="text-lg font-bold text-heading-dark mt-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-text-gray/80">
                  {skill.subtitle}
                </p>
              </div>
              
              {/* Di desain, teks utama ada di dalam blok warna, bukan di luar */}
              {/* Kita telah memindahkan teks ke dalam blok warna di atas */}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;