import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaComment
} from "react-icons/fa";

const ContactCompo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contacts = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "iamumerdaud@gmail.com",
      link: "mailto:iamumerdaud@gmail.com",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-400/20"
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+92 341 9322367",
      link: "tel:+923419322367",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/20"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "umer-awan-680382376",
      link: "https://www.linkedin.com/in/umer-awan-680382376/",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/20"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "bughunter-umer",
      link: "https://github.com/bughunter-umer",
      color: "text-gray-300",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-400/20"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+92 314 5724596",
      link: "https://wa.me/923145724596",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Abbottabad, Pakistan",
      link: "#",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-400/20"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
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
          Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span> 💬
        </motion.h1>
        
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Ready to bring your ideas to life? Whether you have a project in mind, want to collaborate, 
          or just want to say hello — I'd love to hear from you. Let's create something amazing together!
        </motion.p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-lg leading-relaxed mb-8"
          >
            I'm always open to discussing new opportunities, creative projects, 
            or potential collaborations. Feel free to reach out through any of these platforms.
          </motion.p>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.link}
                target={contact.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 group cursor-pointer ${contact.bgColor} ${contact.borderColor} hover:border-cyan-400/40`}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`p-3 rounded-xl ${contact.bgColor} group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon className={`text-2xl ${contact.color}`} />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {contact.label}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{contact.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-6 mt-8"
          >
            <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-2xl font-bold text-cyan-400">24/7</div>
              <div className="text-sm text-gray-400 mt-1">Response Time</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-gray-400 mt-1">Project Success</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl">
            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-400 text-xl" />
                  <div>
                    <div className="text-green-400 font-semibold">Message Sent!</div>
                    <div className="text-green-300 text-sm">I'll get back to you within 24 hours.</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <FaComment className="text-cyan-400 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Send Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <FaUser className="text-gray-400 text-lg" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Full Name"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="relative"
              >
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <FaEnvelope className="text-gray-400 text-lg" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="relative"
              >
                <div className="absolute left-4 top-4">
                  <FaComment className="text-gray-400 text-lg" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, collaboration idea, or just say hello..."
                  rows="5"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ 
                  scale: isSubmitting ? 1 : 1.05,
                  boxShadow: isSubmitting ? "none" : "0 10px 30px -10px rgba(6, 182, 212, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting 
                    ? "bg-gray-600 cursor-not-allowed" 
                    : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Additional Info */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-gray-400 text-sm mt-6"
            >
              I typically respond within 2-4 hours during business days
            </motion.p>
          </div>

          {/* Background Decoration */}
          <motion.div
            className="absolute -z-10 -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-20"
      >
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-3xl p-8 max-w-4xl mx-auto backdrop-blur-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Let's schedule a call to discuss your requirements and how we can work together to bring your vision to life.
          </p>
          <motion.a
            href="https://calendly.com/umerawan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-2xl font-bold text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhoneAlt className="group-hover:scale-110 transition-transform" />
            Schedule a Call
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactCompo;