// ===============================
// 📁 components/Hero.js - EPIC Hero Section
// ===============================
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Systems Architect",
    "DevOps Engineer", 
    "Cybersecurity Enthusiast",
    "LabOS Creator",
    "Infrastructure Automator"
  ];

  // Typing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-[#0e1015] via-[#1a1d2e] to-[#16213e] overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-grid opacity-5"></div>

      {/* Main Content */}
      <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="relative w-40 h-40 mx-auto">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-spin-slow"></div>
            <div className="relative w-full h-full p-1">
              <div className="w-full h-full rounded-full bg-[#0e1015] p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-glow">
            Steven J. Vik
          </span>
        </h1>

        {/* Dynamic Role */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Passionate about cybersecurity and automation
          </p>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-semibold text-blue-400 transition-all duration-500">
              <span className="inline-block animate-fade-in">
                {roles[currentRole]}
              </span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building secure, automated infrastructure solutions with{' '}
          <span className="text-blue-400 font-semibold">LabOS</span>. 
          Transitioning from systems architecture to cybersecurity engineering, 
          with a focus on DevOps automation and threat detection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
          >
            <span className="flex items-center">
              View My Projects
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button
            onClick={scrollToContact}
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25"
          >
            Get In Touch
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "5+", label: "Years Experience", icon: "🏆" },
            { value: "3", label: "LabOS Projects", icon: "🚀" },
            { value: "24/7", label: "Infrastructure", icon: "⚡" },
            { value: "100%", label: "Automated", icon: "🤖" }
          ].map((stat, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-blue-400 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-400">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in-out;
        }
        .bg-grid {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          to {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6);
          }
        }
      `}</style>
    </section>
  );
}