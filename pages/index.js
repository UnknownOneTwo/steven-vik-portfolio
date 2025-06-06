// ===============================
// 📁 pages/index.js - EPIC Homepage
// ===============================
import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Steven J. Vik - Systems Architect & Cybersecurity Engineer</title>
        <meta name="description" content="Passionate systems architect transitioning to cybersecurity engineering. Specializing in infrastructure automation, DevOps, and security solutions with LabOS toolkit." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <main className="bg-[#0e1015] text-white font-sans scroll-smooth overflow-x-hidden">
        
        {/* Navigation */}
        <Nav />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Coming Soon Sections */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-[#141622]">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">About Section</h2>
            <p className="text-gray-400">Epic about section coming soon...</p>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center bg-[#0e1015]">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Projects Section</h2>
            <p className="text-gray-400">Epic projects showcase coming soon...</p>
          </div>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center justify-center bg-[#141622]">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Section</h2>
            <p className="text-gray-400">Epic contact form coming soon...</p>
          </div>
        </section>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </main>
    </>
  );
}