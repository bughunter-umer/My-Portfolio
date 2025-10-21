import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaDownload, FaCode, FaRocket, FaStar, FaArrowRight } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

export default function HomeCompo() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React.js Specialist",
    "MERN Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  // Animated typing effect for roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Floating elements animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techIcons = [
    { icon: SiReact, name: "React", color: "text-cyan-400" },
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-400" },
    { icon: SiExpress, name: "Express", color: "text-gray-400" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  ];

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen pb-9 flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Tech Icons */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`absolute ${tech.color} text-2xl opacity-20`}
            style={{
              top: `${20 + index * 12}%`,
              left: `${10 + index * 8}%`,
            }}
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: index * 0.5 }}
          >
            <tech.icon />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
        
        {/* Left Section: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-4"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
            >
              <FaStar className="text-yellow-400" />
              Welcome to my Portfolio
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
          >
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Umer Awan
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold min-h-[3rem]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl"
          >
            Passionate Full Stack Developer specializing in modern web technologies. 
            Currently pursuing BSCS at Abbottabad University with expertise in building 
            scalable, user-friendly applications using the MERN stack and beyond.
          </motion.p>

          {/* Tech Stack Preview */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: tech.color
                }}
                transition={{ delay: index * 0.1 }}
              >
                <tech.icon className={`text-lg ${tech.color}`} />
                <span className="text-sm text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 group"
            >
              <FaRocket className="group-hover:rotate-45 transition-transform" />
              View My Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="https://github.com/bughunter-umer"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 group"
            >
              <FaGithub className="group-hover:scale-110 transition-transform" />
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/umer-awan-680382376/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px -10px rgba(14, 118, 168, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-blue-700 group"
            >
              <FaLinkedin className="group-hover:scale-110 transition-transform" />
              LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Section: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="relative">
            {/* Main Profile Image */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src="/src/images/awan.jpg"
                alt="Umer Awan"
                className="w-80 h-80 sm:w-96 sm:h-96 rounded-3xl object-cover border-4 border-white/20 shadow-2xl"
                whileHover={{
                  boxShadow: "0 0 50px rgba(139, 92, 246, 0.5), 0 0 100px rgba(6, 182, 212, 0.3)"
                }}
              />
              
              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaCode />
                MERN Stack
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaRocket />
                Available
              </motion.div>
            </motion.div>

            {/* Animated Background Orb */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 -z-5 rounded-3xl border-2 border-cyan-400/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}