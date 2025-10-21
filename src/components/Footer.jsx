import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaMapMarkerAlt,
  FaCode,
  FaCoffee,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Enhanced social links
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/bughunter-umer",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-800",
      borderColor: "border-gray-600",
      name: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/umer-awan-680382376/",
      color: "hover:text-blue-300",
      bgColor: "hover:bg-blue-900/30",
      borderColor: "border-blue-600",
      name: "LinkedIn",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/923145724596",
      color: "hover:text-green-300",
      bgColor: "hover:bg-green-900/30",
      borderColor: "border-green-600",
      name: "WhatsApp",
    },
    {
      icon: FaGlobe,
      href: "#", // Add your portfolio URL here
      color: "hover:text-purple-300",
      bgColor: "hover:bg-purple-900/30",
      borderColor: "border-purple-600",
      name: "Portfolio",
    },
  ];

  // Enhanced tech stack
  const techStack = [
    { icon: SiReact, name: "React.js", color: "text-cyan-400", description: "Frontend Framework" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white", description: "Fullstack Framework" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-400", description: "Backend Runtime" },
    { icon: SiMongodb, name: "MongoDB", color: "text-emerald-400", description: "Database" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-teal-400", description: "CSS Framework" },
    { icon: SiFramer, name: "Framer Motion", color: "text-purple-400", description: "Animation Library" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.15,
        ease: "easeOut"
      } 
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [-8, 8, -8],
      transition: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <>
      {/* Enhanced Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{
              scale: 1.1,
              y: -2,
              boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)",
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowUp className="text-lg group-hover:text-white/90" />
            </motion.div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Main Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative mt-20 border-t border-white/10 backdrop-blur-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 text-gray-300 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12"
          >
            {/* Brand & Contact - Enhanced */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer mb-6"
              >
                <h2 className="font-black text-3xl bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  Umer Awan
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </motion.div>
              
              <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                Full Stack Developer crafting interactive, high-performance web applications with modern technologies and exceptional user experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a
                  href="mailto:iamumerdaud@gmail.com"
                  whileHover={{ x: 5, color: "#06b6d4" }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 group"
                >
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-cyan-400 text-lg" />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-300">iamumerdaud@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+923419322367"
                  whileHover={{ x: 5, color: "#06b6d4" }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300 group"
                >
                  <div className="p-2 bg-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <FaPhoneAlt className="text-cyan-400 text-lg" />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-300">+92 341 9322367</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/923145724596"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, color: "#25D366" }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-300 group"
                >
                  <div className="p-2 bg-green-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <FaWhatsapp className="text-green-400 text-lg" />
                  </div>
                  <span className="text-gray-300 group-hover:text-green-300">Chat on WhatsApp</span>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 group"
                >
                  <div className="p-2 bg-emerald-500/20 rounded-lg">
                    <FaMapMarkerAlt className="text-emerald-400 text-lg" />
                  </div>
                  <span className="text-gray-300">Pakistan</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Tech Stack - Enhanced */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="font-bold text-xl mb-6 text-white flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <FaCode className="text-purple-400" />
                Tech Stack
              </motion.h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 group cursor-pointer"
                  >
                    <tech.icon
                      className={`text-2xl mb-2 ${tech.color} group-hover:scale-110 transition-transform`}
                    />
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-white">
                      {tech.name}
                    </span>
                    <span className="text-xs text-gray-400 mt-1">
                      {tech.description}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Connect Section - Enhanced */}
            <motion.div variants={itemVariants}>
              <motion.h3 
                className="font-bold text-xl mb-6 text-white flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <FaHeart className="text-red-400" />
                </motion.div>
                Let's Connect
              </motion.h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -4,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 rounded-2xl bg-white/5 border ${social.borderColor}/30 backdrop-blur-sm ${social.color} ${social.bgColor} transition-all duration-300 group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <social.icon className="text-2xl relative z-10" />
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Quick Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-center"
              >
                <p className="text-sm text-gray-300 mb-2">Ready to start a project?</p>
                <motion.a
                  href="mailto:iamumerdaud@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 text-sm"
            >
              <span className="text-gray-400">© {currentYear}</span>
              <span className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Umer Awan
              </span>
              <span className="text-gray-400">• Crafted with passion</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-sm text-gray-400 group"
            >
              <span>Built with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and</span>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCoffee className="text-amber-500" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;