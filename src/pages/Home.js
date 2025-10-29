import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection'; // BARIS INI WAJIB ADA & BENAR

function Home() {
  return (
    <main>
      <ProfileCard />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection /> 
    </main>
  );
}

export default Home;