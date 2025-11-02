import React, { useState } from 'react';
import { ExternalLink, ShoppingCart, PenTool, Briefcase, Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Store',
    icon: ShoppingCart,
    desc: 'A modern online store built with WordPress, featuring product listings, cart, and checkout.',
  },
  {
    title: 'Blogging Website',
    icon: PenTool,
    desc: 'A clean and customizable blog platform with categories, tags, and a content editor.',
  },
  {
    title: 'Business Website',
    icon: Briefcase,
    desc: 'A professional web presence for a business, with services, testimonials, and contact info.',
  },
];

const ProjectsGrid = () => (
  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map(({ title, icon: Icon, desc }) => (
      <div
        key={title}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-6 text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
            <Icon className="h-5 w-5 text-blue-300" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-white/70">{desc}</p>
        <div className="mt-4 h-32 w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.2),transparent_55%)]" />
        <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/20">
          View Project <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    ))}
  </div>
);

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(message + `\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:rumi@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
      />
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your Message"
        rows={5}
        className="sm:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
      >
        Send Message
      </button>
    </form>
  );
};

const WorkAndContact = () => {
  return (
    <section id="projects" className="relative bg-[#05070b] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A selection of work including an E-commerce store, a Blogging website, and a Business website.
        </p>
        <ProjectsGrid />

        <div id="contact" className="mt-24">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="mt-2 max-w-2xl text-white/70">
            Have an opportunity or a question? Feel free to reach out via the form below or connect on social.
          </p>
          <ContactForm />

          <div className="mt-8 flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Github className="h-5 w-5" /> GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a href="mailto:rumi@example.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Mail className="h-5 w-5" /> Email
            </a>
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
            © 2025 Rumi. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_60%)]" />
    </section>
  );
};

export default WorkAndContact;
