import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaCode, FaRocket } from "react-icons/fa";
import { SiRedux, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";

// ✅ Import your certificate image
import certificateImg from "../images/certificate.jpg";

const AboutCompo = () => {
  // Enhanced Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Skills Data
  const skills = [
    {
      icon: FaReact,
      name: "React.js",
      color: "text-cyan-400",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-white",
      gradient: "from-gray-100 to-gray-300",
    },
    {
      icon: SiRedux,
      name: "Redux Toolkit",
      color: "text-purple-400",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: FaNodeJs,
      name: "Node.js",
      color: "text-green-400",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-emerald-400",
      gradient: "from-emerald-400 to-green-500",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-teal-400",
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      icon: FaGithub,
      name: "Git & GitHub",
      color: "text-white",
      gradient: "from-gray-400 to-gray-600",
    },
  ];

  // Certificates Data
  const certificates = [
    {
      title: "MERN Stack Developer Certificate — QUICKGEM Solution, Rawalpindi",
      image: certificateImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white flex flex-col items-center justify-center py-16 px-6 overflow-y-auto relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Enhanced Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="relative inline-block">
          <motion.h1
            className="text-5xl sm:text-6xl font-black text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 tracking-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.h1>
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-pink-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>

        {/* Animated decorative elements */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute -top-4 -right-4 text-2xl"
        >
          <FaRocket className="text-purple-400" />
        </motion.div>
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute -bottom-4 -left-4 text-2xl"
        >
          <FaCode className="text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* Enhanced Intro Paragraph */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="max-w-4xl text-center mb-16 relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500">
          <p className="text-xl leading-relaxed text-gray-200">
            Hello{" "}
            <motion.span
              className="inline-block text-2xl"
              whileHover={{ scale: 1.2, rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              👋
            </motion.span>
            , I'm{" "}
            <span className="text-purple-300 font-bold bg-purple-500/10 px-2 py-1 rounded-lg">
              Umer Awan
            </span>{" "}
            — a passionate{" "}
            <span className="text-cyan-300 font-bold bg-cyan-500/10 px-2 py-1 rounded-lg">
              Full Stack Web Developer
            </span>{" "}
            currently pursuing a BSCS at Abbottabad University (7th Semester). I
            recently completed my internship at{" "}
            <span className="text-blue-300 font-bold bg-blue-500/10 px-2 py-1 rounded-lg">
              QUICKGEM Solution Software House, Rawalpindi
            </span>
            , where I worked on real-world projects involving{" "}
            <span className="text-emerald-300 font-bold bg-emerald-500/10 px-2 py-1 rounded-lg">
              React.js, Next.js, Redux Toolkit,
            </span>{" "}
            and{" "}
            <span className="text-yellow-300 font-bold bg-yellow-500/10 px-2 py-1 rounded-lg">
              API Integration
            </span>
            .
          </p>
        </div>
      </motion.div>

      {/* Enhanced Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-8 max-w-7xl w-full relative z-10"
      >
        {/* Enhanced Left Section - About Story */}
        <motion.div variants={fadeUp} custom={2} className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <motion.h2
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>
              My Journey
            </motion.h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="bg-white/5 p-4 rounded-xl border-l-4 border-purple-500">
                I started my journey into development out of curiosity for how
                modern web apps are built. Over time, I fell in love with
                creating interactive and efficient user experiences using modern
                technologies.
              </p>
              <p className="bg-white/5 p-4 rounded-xl border-l-4 border-blue-500">
                I specialize in building scalable full-stack applications,
                integrating powerful backends with clean, intuitive frontends.
                My focus is on delivering quality, responsiveness, and
                maintainable code.
              </p>
              <p className="bg-white/5 p-4 rounded-xl border-l-4 border-cyan-500">
                Beyond coding, I'm passionate about design, UI/UX, and staying
                up to date with the latest trends in tech. My goal is to become
                a highly skilled software engineer capable of leading complex
                projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Right Section - Skills */}
        <motion.div variants={fadeUp} custom={3} className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <motion.h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💻
              </motion.span>
              Skills & Technologies
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="relative group cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300`}
                  ></div>
                  <div className="relative flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300 z-10">
                    <skill.icon
                      className={`text-4xl ${skill.color} drop-shadow-lg`}
                    />
                    <p className="text-sm font-semibold text-gray-200 text-center">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Certificates Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={4}
        className="max-w-4xl mt-20 w-full text-center relative z-10"
      >
        <motion.h2
          className="text-4xl font-black mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent relative inline-block"
          whileHover={{ scale: 1.05 }}
        >
          <span className="flex items-center gap-3">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              🎓
            </motion.span>
            My Certificate
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            >
              🎓
            </motion.span>
          </span>
        </motion.h2>

        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 400 },
            }}
            transition={{ delay: 0.3 }}
            className="group relative mx-auto max-w-2xl"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 transition-all duration-500">
              <div className="relative overflow-hidden">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-[800px] max-h-[600px] object-contain transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800">
                <p className="text-gray-200 font-semibold text-lg">
                  {cert.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Extra Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        custom={5}
        className="max-w-4xl mt-20 text-center relative z-10"
      >
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
          <motion.p
            className="text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Outside of coding, I enjoy{" "}
            <motion.span
              className="text-pink-300 font-bold bg-pink-500/10 px-3 py-1 rounded-full inline-flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
            >
              cricket 🏏
            </motion.span>
            ,{" "}
            <motion.span
              className="text-blue-300 font-bold bg-blue-500/10 px-3 py-1 rounded-full inline-flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
            >
              UI design 🎨
            </motion.span>
            , and{" "}
            <motion.span
              className="text-yellow-300 font-bold bg-yellow-500/10 px-3 py-1 rounded-full inline-flex items-center gap-1"
              whileHover={{ scale: 1.1 }}
            >
              problem-solving 🧠
            </motion.span>
            . I believe learning never stops, and I'm always exploring new tools
            and frameworks to enhance my craft.
          </motion.p>
        </div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCompo;
