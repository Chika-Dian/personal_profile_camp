import React from 'react';
import ProfileCard from './components/ProfileCard'; // ✅ tambahkan ini
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Impor tanpa {}

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home /> 
      <Footer />
    </div>
  );
}

export default App;
