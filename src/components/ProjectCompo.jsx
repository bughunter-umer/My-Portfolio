import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaCloudSun, FaFilm, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss, SiExpress } from "react-icons/si";

// ✅ Importing local images
import adminImg from "../images/admin.jpg";
import portfolioImg from "../images/portfolio.jpg";
import ecommerceImg from "../images/Ecommerce.jpg";
import movieImg from "../images/movie.jpg";
import weatherImg from "../images/weather.jpg";
import tutorImg from "../images/tutor.jpg";

const ProjectCompo = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Admin Dashboard (MERN)",
      description: "A complete full-stack admin dashboard with user, customer, product, order, report, and notification management. Includes JWT authentication and role-based access control.",
      tech: [FaReact, SiRedux, FaNodeJs, SiMongodb, SiExpress],
      image: adminImg,
      link: "https://github.com/bughunter-umer",
      category: "fullstack",
      featured: true
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern portfolio built with React, Vite, and TailwindCSS. Includes smooth animations, responsive design, and professional presentation of my skills and projects.",
      tech: [FaReact, SiNextdotjs, SiTailwindcss],
      image: portfolioImg,
      link: "https://github.com/bughunter-umer",
      category: "frontend",
      featured: true
    },
    {
      title: "E-Commerce Frontend",
      description: "Beautifully designed e-commerce website with product listings, filters, and cart functionality using React + Redux Toolkit + API integration.",
      tech: [FaReact, SiRedux, SiTailwindcss],
      image: ecommerceImg,
      link: "https://github.com/bughunter-umer",
      category: "frontend"
    },
    {
      title: "Movie Finder App 🎬",
      description: "A sleek movie search app powered by React and API integration. Users can explore trending movies, view details, and get recommendations — all with stunning UI animations.",
      tech: [FaReact, SiRedux, FaFilm],
      image: movieImg,
      link: "https://github.com/bughunter-umer",
      category: "frontend"
    },
    {
      title: "Weather Dashboard 🌦",
      description: "A real-time weather app that displays temperature, humidity, and forecasts. Built using React, TailwindCSS, and OpenWeather API — clean, accurate, and fast.",
      tech: [FaReact, FaCloudSun, SiTailwindcss],
      image: weatherImg,
      link: "https://github.com/bughunter-umer",
      category: "frontend"
    },
    {
      title: "Star Tutor Academy",
      description: "A modern education platform built for managing students, courses, and tutors. Developed using React, TailwindCSS, and REST APIs for real-time data handling and responsive UI.",
      tech: [FaReact, SiRedux, SiMongodb, FaNodeJs],
      image: tutorImg,
      link: "https://github.com/bughunter-umer",
      category: "fullstack"
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "frontend", name: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "fullstack", name: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span> 💼
        </motion.h1>
        
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore my portfolio of modern web applications built with cutting-edge technologies. 
          Each project showcases my expertise in frontend development, full-stack solutions, and user experience design.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                filter === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent text-white shadow-lg"
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className={`group relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-500 ${
              project.featured ? "ring-2 ring-cyan-400/20" : ""
            }`}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Featured
                </span>
              </div>
            )}

            {/* Image Container */}
            <div className="relative overflow-hidden h-56">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                whileHover={{ scale: 1.1 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-semibold text-center hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCode />
                    View Code
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    Details
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3 text-xl">
                  {project.tech.map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="text-cyan-400 hover:text-purple-400 transition-colors"
                      whileHover={{ scale: 1.2, y: -2 }}
                    >
                      <Icon />
                    </motion.div>
                  ))}
                </div>
                
                <motion.span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    project.category === "fullstack" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {project.category === "fullstack" ? "Full Stack" : "Frontend"}
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mt-20"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-3xl p-8 max-w-4xl mx-auto backdrop-blur-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to see more?
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Explore all my projects, contributions, and open-source work on GitHub.
          </p>
          <motion.a
            href="https://github.com/bughunter-umer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
            Explore My GitHub
            <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-gray-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt className="rotate-45" />
                </motion.button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-4 py-2 rounded-full font-semibold text-sm ${
                    selectedProject.category === "fullstack" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}>
                    {selectedProject.category === "fullstack" ? "Full Stack Project" : "Frontend Project"}
                  </span>
                  {selectedProject.featured && (
                    <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-4 py-2 rounded-full font-semibold text-sm">
                      ⭐ Featured Project
                    </span>
                  )}
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                  <div className="flex gap-4 text-2xl">
                    {selectedProject.tech.map((Icon, i) => (
                      <div key={i} className="text-cyan-400">
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-xl font-semibold text-white hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub />
                  View Source Code
                  <FaExternalLinkAlt />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCompo;