/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Cpu, 
  Layers, 
  ChevronRight, 
  ArrowUpRight,
  Monitor,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Figma,
  Terminal,
  Search,
  PenTool,
  Rocket
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className={`glass px-6 py-2 rounded-full flex items-center gap-8 transition-all duration-500 ${
          scrolled ? 'bg-black/80' : 'bg-transparent border-transparent'
        }`}>
          <a href="#" className="font-signature font-bold text-xl tracking-tighter">SANJAI N.</a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-premium-muted">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/sanjain-dev" target="_blank" rel="noreferrer" className="glass p-2 rounded-full hover:bg-white/10 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sanjai-n-bb5642276" target="_blank" rel="noreferrer" className="glass p-2 rounded-full hover:bg-white/10 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 glow-mesh pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-8 flex justify-center">
            <img
              src="/profile.webp"
              alt="Sanjai N"
              className="h-28 w-28 md:h-36 md:w-36 rounded-full object-cover border border-white/20 shadow-2xl"
            />
          </div>
          <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-semibold tracking-widest uppercase mb-6 text-premium-muted">
            Available for new opportunities
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
            <span className="font-signature text-gradient">SANJAI N.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-premium-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Full Stack Developer & Creative Designer. <br />
            <span className="text-white font-medium">I build intelligent digital experiences that combine code, design, and innovation.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 group"
            >
              View Projects
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-premium-muted">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Engineering <br />
              <span className="text-premium-muted">with design thinking.</span>
            </h2>
            <div className="space-y-6 text-lg text-premium-muted leading-relaxed">
              <p>
                I am a 4th year B.Tech student at SRM Valliammai Engineering College, specializing in Artificial Intelligence and Data Science, with a strong interest in building practical, user-focused digital products.
              </p>
              <p>
                Over the last 1+ year, I have worked on 10 to 15 projects across frontend, backend, and full stack development, continuously improving my problem-solving and product-building skills.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              {[
                { label: 'Degree', value: 'B.Tech (AI & DS)' },
                { label: 'Year', value: '4th Year' },
                { label: 'Experience', value: '1+ Year' },
                { label: 'Projects', value: '10-15' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-sm text-premium-muted uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-display font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-3xl overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepcU2q7n3VzyWz6gGUUd1OB23TnT08XtdIXF6iTuM_9O6ZkXHdNABApBASro4MGKA8LzOwGkrh4PLkQswZqV22lOx58Do22RwsXUuJmYVtIH9yrYZk2ikjVDEL00Vfru-Gt3r38fw=s1360-w1360-h1020-rw" 
                alt="Sanjai" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 glass rounded-2xl p-6 flex flex-col justify-end">
              <p className="text-[10px] uppercase tracking-widest text-premium-muted mb-1">Status</p>
              <p className="text-sm font-bold">Building the future</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Development',
      icon: <Terminal size={24} />,
      skills: [
        { name: 'HTML5', level: 95, icon: <Code2 size={16} /> },
        { name: 'CSS3', level: 90, icon: <Palette size={16} /> },
        { name: 'JavaScript', level: 92, icon: <Cpu size={16} /> },
        { name: 'React.js', level: 95, icon: <Monitor size={16} /> },
        { name: 'Node.js', level: 88, icon: <Server size={16} /> },
      ]
    },
    {
      title: 'Tools',
      icon: <Layers size={24} />,
      skills: [
        { name: 'Git', level: 90, icon: <GitBranch size={16} /> },
        { name: 'GitHub', level: 95, icon: <Github size={16} /> },
        { name: 'VS Code', level: 98, icon: <Code2 size={16} /> },
      ]
    },
    {
      title: 'Design',
      icon: <PenTool size={24} />,
      skills: [
        { name: 'Figma', level: 92, icon: <Figma size={16} /> },
        { name: 'Photoshop', level: 85, icon: <Palette size={16} /> },
        { name: 'Illustrator', level: 80, icon: <Palette size={16} /> },
        { name: 'UI/UX Design', level: 95, icon: <Palette size={16} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technical Arsenal</h2>
          <p className="text-premium-muted max-w-xl mx-auto">A collection of tools and technologies I use to bring ideas to life.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {skill.icon}
                        {skill.name}
                      </div>
                      <span className="text-xs text-premium-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'FuelWise AI',
      description: 'AI powered nutrition analysis & fitness optimization system. Built with React, Node.js and OpenAI API.',
      image: 'https://picsum.photos/seed/fuelwise/1200/800',
      tags: ['React', 'Node.js', 'AI', 'Tailwind'],
      links: { demo: '#', github: '#' }
    },
    {
      title: 'WaterWatch',
      description: 'Smart water usage monitoring system with real-time analytics and leak detection alerts.',
      image: 'https://picsum.photos/seed/waterwatch/1200/800',
      tags: ['IoT', 'Dashboard', 'D3.js', 'Firebase'],
      links: { demo: '#', github: '#' }
    },
    {
      title: 'Full Stack Web App',
      description: 'A modern responsive application architecture using React and Node.js for scalable web systems.',
      image: 'https://picsum.photos/seed/webapp/1200/800',
      tags: ['Full Stack', 'Architecture', 'TypeScript', 'PostgreSQL'],
      links: { demo: '#', github: '#' }
    }
  ];

  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-premium-muted max-w-xl">A glimpse into some of the digital products I've crafted recently.</p>
          </div>
          <a href="#" className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-premium-muted transition-colors">
            View all projects <ArrowUpRight size={16} />
          </a>
        </div>
        
        <div className="grid gap-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="aspect-[16/10] glass rounded-3xl overflow-hidden group cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="flex gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 glass rounded-full text-premium-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{project.title}</h3>
                <p className="text-lg text-premium-muted mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href={project.links.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm flex items-center gap-2"
                  >
                    Live Demo <ExternalLink size={16} />
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 glass rounded-full font-bold text-sm flex items-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    Source Code <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const steps = [
    { title: 'Research', icon: <Search size={24} />, desc: 'Understanding the problem and user needs.' },
    { title: 'Design', icon: <Palette size={24} />, desc: 'Crafting the visual and interactive experience.' },
    { title: 'Development', icon: <Code2 size={24} />, desc: 'Building robust and scalable systems.' },
    { title: 'Deployment', icon: <Rocket size={24} />, desc: 'Launching and optimizing for performance.' }
  ];

  return (
    <section className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-20">My Workflow</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 glass rounded-3xl flex items-center justify-center mx-auto mb-8 group hover:bg-white hover:text-black transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-premium-muted text-sm px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow-mesh opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-12">
            Let's build something <br />
            <span className="text-gradient">extraordinary.</span>
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <a 
              href="mailto:sanjain.dev@gmail.com" 
              className="text-2xl md:text-4xl font-display font-medium hover:text-premium-muted transition-colors underline underline-offset-8 decoration-white/20"
            >
              sanjain.dev@gmail.com
            </a>
            <a
              href="tel:+918508166714"
              className="text-lg md:text-2xl font-display font-medium hover:text-premium-muted transition-colors"
            >
              +91 85081 66714
            </a>
            
            <div className="flex gap-6 mt-8">
              {[
                { icon: <Github size={24} />, label: 'GitHub', href: 'https://github.com/sanjain-dev' },
                { icon: <Linkedin size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanjai-n-bb5642276' },
                { icon: <Mail size={24} />, label: 'Email', href: 'mailto:sanjain.dev@gmail.com' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="glass w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-premium-muted text-sm tracking-widest">
          © {new Date().getFullYear()} <span className="font-signature">SANJAI N.</span> ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-premium-muted">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Back to top</a>
        </div>
      </div>
    </footer>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-premium-dark flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-px bg-white"
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs uppercase tracking-[0.5em] font-bold"
        >
          Loading Portfolio
        </motion.span>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative selection:bg-white selection:text-black">
      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left" 
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Workflow />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
