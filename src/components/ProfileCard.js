import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profileImageLocal from '../assets/images/profile-hero.png'; 

const profileImage = profileImageLocal;

function ProfileCard() {
  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      
      {/* 🌈 Latar Belakang Gradien Hero */}
      {/* Asumsi: 'from-gradient-start' dan 'to-gradient-end' didefinisikan di tailwind.config.js Anda */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gradient-start to-gradient-end -z-10"
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* 📝 Konten Teks */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-xl text-primary-purple font-semibold mb-2">Hello, I'm Qiyu</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading-dark leading-tight mb-4">
            Creative Designer & <br className="hidden lg:inline"/> Frontend Developer
          </h1>
          <p className="text-lg text-text-gray mb-8">
            Hi, I’m Chika (artistically known as Qiyu). Passionate in creating beautiful and functional digital products. I combine design with technology to craft impactful solutions for users and brands.
          </p>
          
          {/* 🎯 Tombol Aksi */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            {/* Tombol See My Work - gradasi */}
            {/* Asumsi: 'from-gradient-start-btn' dan 'to-gradient-end-btn' didefinisikan di tailwind.config.js Anda */}
            <button className="bg-gradient-to-r from-gradient-start-btn to-gradient-end-btn text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition duration-150">
              See My Work
            </button>
            {/* Tombol Contact Me - ungu */}
            <button className="border border-primary-purple text-primary-purple px-6 py-3 rounded-xl font-medium hover:bg-primary-purple hover:text-white transition duration-150">
              Contact Me
            </button>
          </div>
          
          {/* 🔗 Ikon Media Sosial dengan Tautan Diperbarui */}
          <div className="flex justify-center md:justify-start space-x-6 text-2xl text-text-gray">
            {/* Instagram: d_ianchika */}
            <a 
              href="https://www.instagram.com/d_ianchika/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary-purple transition"
            >
              <FaInstagram />
            </a>
            {/* GitHub: Chika-Dian */}
            <a 
              href="https://github.com/Chika-Dian" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary-purple transition"
            >
              <FaGithub />
            </a>
            {/* LinkedIn: chika-dian-nurcahyani */}
            <a 
              href="https://www.linkedin.com/in/chika-dian-nurcahyani" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary-purple transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* 🖼️ Gambar Profil dengan Elemen Bulat Dekoratif */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
          
          {/* Bulatan Gradien Besar di Kiri Atas (Efek Dekoratif) */}
          <div 
            className="absolute -top-12 -left-12 w-48 h-48 md:w-64 md:h-64 rounded-full 
                       bg-gradient-to-br from-violet-300 to-pink-300 
                       opacity-70 blur-xl md:blur-2xl -z-10"
          ></div>

          {/* Bulatan Ungu Lebih Kecil di Kanan Bawah (Efek Dekoratif) */}
          <div 
            className="absolute -bottom-4 -right-4 w-32 h-32 md:w-48 md:h-48 rounded-full 
                       bg-purple-300 opacity-60 blur-xl -z-10"
          ></div>

          {/* Efek cahaya ungu lembut di belakang foto (Asli) */}
          <div className="absolute inset-0 bg-primary-purple opacity-30 rounded-full blur-3xl -z-10"></div>
          
          {/* Gambar Profil Utama */}
          <img
            src={profileImage} 
            alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-2xl relative z-0" 
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;