import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-semibold tracking-tight text-white/90">
          <span className="block text-3xl sm:text-4xl md:text-5xl">Hi, I’m Rumi —</span>
          <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
            A Passionate Software Engineering Student
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          I’m a creative and motivated 4th-semester student specializing in front-end and web development. 
          I love building clean, responsive, and user-friendly experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contact Me
          </a>
        </div>
        <a href="#about" className="mt-16 inline-flex items-center gap-2 text-white/70 hover:text-white/100">
          <ChevronDown className="h-5 w-5 animate-bounce" />
          <span className="text-sm">Scroll</span>
        </a>
      </div>

      {/* Soft gradient overlay to improve text contrast (doesn't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
    </section>
  );
};

export default Hero;
