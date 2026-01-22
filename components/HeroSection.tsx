"use client";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-primary text-white px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center animate-slideInUp">
        {/* Profile Picture and Name */}
        <div className="mb-8 flex flex-col items-center">
          <img 
            src="/profile.jpg" 
            alt="Genie Rose Castillo" 
            className="w-32 h-32 rounded-full mb-4 border-4 border-accent shadow-lg"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Genie Rose Castillo</h2>
          <p className="text-accent text-lg font-semibold">IT Specialist, Full Stack Developer</p>
        </div>

        {/* Greeting */}
        <p className="text-accent font-semibold mb-4 text-lg">Welcome to my portfolio!</p>

        {/* Hero Statement */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Crafting Beautiful, 
          <span className="text-accent"> Accessible Experiences</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed text-justify">
         I'm an IT Specialist and Full-Stack Developer passionate about turning complex problems into intuitive digital solutions. With a keen eye for detail and a drive for innovation, I build web applications that are not only visually stunning but also user-friendly and accessible.
         <br/><br/>
From front-end design that delights users to back-end systems that power seamless functionality, I specialize in creating experiences that bridge the gap between technology and people. Whether it’s optimizing performance, enhancing security, or implementing scalable solutions, I strive to deliver quality that makes an impact.
         <br/><br/>
Let’s build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
