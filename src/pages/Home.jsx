import React from "react";
import Navbar from "../components/Navbar";
import HomeCompo from "../components/HomeCompo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Home Content */}
      <main className="flex-grow mt-9 ">
        <HomeCompo />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
