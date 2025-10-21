import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCompo from "../components/ContactCompo";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Home Content */}
      <main className="flex-grow mt-7">
        <ContactCompo/> 
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
