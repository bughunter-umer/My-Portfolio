import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaSun,
  FaMoon,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  // ✅ Apply dark/light mode to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll listener for navbar blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "About", path: "/about", icon: FaUser },
    { name: "Projects", path: "/projects", icon: FaBriefcase },
    { name: "Contact", path: "/contact", icon: FaEnvelope },
  ];

  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-gray-900/95 dark:bg-gray-900/95 shadow-2xl shadow-purple-500/10 py-2"
          : "backdrop-blur-xl bg-gray-900/80 dark:bg-gray-900/80 py-4"
      } border-b border-white/10`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Enhanced Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            className="relative"
            whileHover="hover"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25 relative overflow-hidden"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <motion.span 
                className="text-white font-bold text-lg relative z-10"
                whileHover={{ scale: 1.1 }}
              >
                UA
              </motion.span>
            </motion.div>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
          
          <div className="flex flex-col">
            <motion.h1 
              className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Umer Awan
            </motion.h1>
            <motion.span 
              className="text-xs text-gray-400 font-medium bg-gray-800/50 px-2 py-1 rounded-full self-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer
            </motion.span>
          </div>
        </Link>

        {/* Enhanced Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1 bg-white/5 dark:bg-white/5 rounded-2xl p-1 border border-white/10 backdrop-blur-xl shadow-lg">
          {navLinks.map(({ name, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <motion.li key={name} className="relative">
                <motion.div
                  onHoverStart={() => setActiveHover(path)}
                  onHoverEnd={() => setActiveHover(null)}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to={path}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 z-10 ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <Icon className="text-sm" />
                    <span className="font-semibold">{name}</span>
                    
                    {/* Active/Hover Indicator */}
                    {(isActive || activeHover === path) && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl z-0 ${
                          isActive 
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30" 
                            : "bg-white/5 border border-white/10"
                        }`}
                        layoutId="navIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>

        {/* Enhanced Theme Toggle + Menu */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
          >
            <motion.div
              initial={false}
              animate={{ rotate: darkMode ? 0 : 180 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {darkMode ? (
                <FaMoon className="text-blue-400 text-lg" />
              ) : (
                <FaSun className="text-yellow-400 text-lg" />
              )}
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-red-400 text-lg" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-purple-400 text-lg" />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden bg-gray-900/98 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <motion.ul className="px-6 py-6 space-y-2">
              {navLinks.map(({ name, path, icon: Icon }) => {
                const isActive = location.pathname === path;
                return (
                  <motion.li key={name} variants={mobileItemVariants}>
                    <Link
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white shadow-lg shadow-blue-500/20"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`p-2 rounded-lg ${
                          isActive 
                            ? "bg-blue-500/20" 
                            : "bg-gray-700/50 group-hover:bg-purple-500/20"
                        }`}
                      >
                        <Icon className={`text-lg ${
                          isActive ? "text-blue-400" : "text-gray-400 group-hover:text-purple-400"
                        }`} />
                      </motion.div>
                      <span className="font-semibold text-lg">{name}</span>
                      
                      {isActive && (
                        <motion.div
                          className="ml-auto w-2 h-2 bg-blue-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
              
              {/* Mobile Menu Footer */}
              <motion.div 
                variants={mobileItemVariants}
                className="pt-4 mt-4 border-t border-white/10 text-center"
              >
                <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                  <FaCode className="text-purple-400" />
                  Crafted with passion
                  <FaRocket className="text-cyan-400 ml-2" />
                </p>
              </motion.div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;