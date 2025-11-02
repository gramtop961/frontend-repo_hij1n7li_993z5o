import React from 'react';
import { Code, Globe, Database, Server, Wrench } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Code },
  { name: 'CSS', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'Xcode', icon: Wrench },
  { name: 'WordPress', icon: Globe },
  { name: 'Basic Database Management', icon: Database },
  { name: 'Hosting (XAMPP, Local Server)', icon: Server },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0f1a] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">
          A toolbox of technologies I use to craft modern web experiences.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center transition hover:-translate-y-1 hover:bg-white/10"
            >
              <Icon className="h-6 w-6 text-blue-300 transition group-hover:scale-110" />
              <span className="mt-2 text-sm text-white/90">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
