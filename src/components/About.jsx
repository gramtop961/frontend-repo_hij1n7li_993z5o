import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-black to-[#05070b] py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-inset ring-blue-400/30">
            <User className="h-10 w-10 text-blue-300" />
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-4 text-white/80">
            I’m Rumi, a 4th-semester Software Engineering student. I’m passionate about creating websites and learning modern technologies.
            I have hands-on experience with HTML, CSS, JavaScript, and Xcode. I’ve also built multiple websites using WordPress including an
            E-commerce store, an Online Blogging website, and a Business website. I have basic knowledge of Databases and Hosting, and I’m comfortable
            using XAMPP and Local Server environments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Front-end', 'Web Development', 'UI/UX', 'Responsive Design', 'WordPress'].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
