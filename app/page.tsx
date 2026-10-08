'use client'

import React, { useState, useEffect, useRef } from 'react';

import { 
  Terminal, Code2, Cpu, Database, Server, Globe, Sparkles, 
  Layers,  FileDown, ExternalLink, 
  ChevronRight, CheckCircle2, Shield, Gamepad2, Menu, 
  X, User, Briefcase, GraduationCap, Award, RefreshCw, Command,
  Search, Layers3, Monitor, Zap, Play
} from 'lucide-react';

const SKILLS_DATA = [
  { name: 'Node.js', category: 'backend', level: 92, icon: Server },
  { name: 'C# / .NET', category: 'backend', level: 90, icon: Code2 },
  { name: 'Express.js', category: 'backend', level: 88, icon: Server },
  { name: 'REST & GraphQL', category: 'backend', level: 90, icon: Globe },
  { name: 'Microservices', category: 'backend', level: 85, icon: Cpu },
  
  { name: 'PostgreSQL', category: 'database', level: 88, icon: Database },
  { name: 'MongoDB', category: 'database', level: 86, icon: Database },
  { name: 'SQL Server', category: 'database', level: 85, icon: Database },
  { name: 'Cloudflare', category: 'database', level: 82, icon: Globe },
  { name: 'Vercel / Render', category: 'database', level: 90, icon: Zap },

  { name: 'React.js', category: 'frontend', level: 92, icon: Code2 },
  { name: 'TypeScript', category: 'frontend', level: 88, icon: Code2 },
  { name: 'Tailwind CSS', category: 'frontend', level: 95, icon: Sparkles },
  { name: 'HTML5 / Modern JS', category: 'frontend', level: 95, icon: Globe },


  { name: 'Docker', category: 'tools', level: 80, icon: Layers3 },
  { name: 'Linux OS', category: 'tools', level: 85, icon: Monitor },
  { name: 'CI/CD Pipelines', category: 'tools', level: 82, icon: RefreshCw },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'BRAIN Browser Engine',
    description: 'Custom glassmorphic web browser environment built with Electron, Node.js, and TypeScript. Features enhanced security sandboxing and isolated tab multi-threading.',
    tags: ['Electron', 'Node.js', 'TypeScript', 'Tailwind'],
    category: 'Full Stack',
    github: 'https://github.com/SabbirHasan07',
    demo: '#',
    featured: true,
    accent: 'from-cyan-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Enterprise Microservices Backend',
    description: 'High-throughput microservices architecture leveraging C#, .NET Core, Node.js, and PostgreSQL for high concurrency enterprise order processing.',
    tags: ['.NET Core', 'Node.js', 'PostgreSQL', 'Docker', 'REST API'],
    category: 'Backend',
    github: 'https://github.com/SabbirHasan07',
    demo: '#',
    featured: true,
    accent: 'from-emerald-500 to-teal-600'
  },
  {
    id: 3,
    title: 'Interactive Cyber Terminal Portfolio',
    description: 'Full CLI emulator experience designed for web browsers featuring automated dynamic response routing, real-time command processing, and theme customization.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'CLI Engine'],
    category: 'Full Stack',
    github: 'https://github.com/SabbirHasan07',
    demo: '#',
    featured: true,
    accent: 'from-violet-500 to-purple-600'
  },
  {
    id: 4,
    title: 'Real-time IoT Purification Dashboard',
    description: 'IoT telemetry & sensor monitoring dashboard visualizing live stream data processing, system analytics, and automated purification threshold triggers.',
    tags: ['Node.js', 'MongoDB', 'WebSockets', 'React'],
    category: 'IoT / Analytics',
    github: 'https://github.com/SabbirHasan07',
    demo: '#',
    featured: false,
    accent: 'from-blue-500 to-indigo-600'
  }
];

const TIMELINE_DATA = [
  
  {
    
    role: 'Software Engineer',
    company: 'Astha IT',
    description: 'Engineered responsive front-end applications with React & TypeScript while maintaining RESTful Web APIs with Express and Node.js.',
    tags: ['Next', 'TypeScript', '.Net', 'REST APIs']
  },
  {
    
    role: 'B.Sc. in Computer Science & Engineering',
    company: 'DIU',
    description: 'Graduated as Engr. Sabbir Hasan with strong foundational training in Software Architecture, Algorithms, Data Structures, and Database Systems.',
    tags: ['Algorithms', 'Software Architecture', 'Databases']
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [terminalOpen, setTerminalOpen] = useState(false);
  
  // Terminal state
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'sys', text: 'Engr. Sabbir Hasan Shell v2.4.0 [x86_64-pc-linux-gnu]' },
    { type: 'sys', text: 'Type "help" to view available system commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, terminalOpen]);

  // Terminal Handler
  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: 'user', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'res',
          text: 'AVAILABLE COMMANDS:\n- about     : Learn about Engr. Sabbir Hasan\n- skills    : Output core technical stack\n- projects  : List featured engineering projects\n- clear     : Clear terminal history'
        });
        break;
      case 'about':
        newHistory.push({
          type: 'res',
          text: 'Engr. Sabbir Hasan | Software Engineer & Full Stack Developer\nSpecialized in Backend Architecture, Database Optimization, C#, .NET, Node.js, and Modern Web Applications.'
        });
        break;
      case 'skills':
        newHistory.push({
          type: 'res',
          text: 'CORE SKILLS:\n• Backend: Node.js, Express, C#, .NET Core, Microservices, REST & GraphQL\n• Databases: PostgreSQL, MongoDB, SQL Server\n• Frontend: React, TypeScript, Tailwind CSS\n• Cloud & DevOps: Docker, Linux, Git, Cloudflare, Vercel'
        });
        break;
      case 'projects':
        newHistory.push({
          type: 'res',
          text: 'FEATURED PROJECTS:\n1. BRAIN Browser Engine (Electron + Node.js)\n2. Enterprise Microservices Architecture (.NET Core + Node.js)\n3. Interactive Cyber Terminal Portfolio (React + Tailwind)\n4. Real-time IoT Purification Dashboard (Node.js + WebSockets)'
        });
        break;
      case 'clear':
        setTerminalHistory([]);
        setInputVal('');
        return;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: '${cmd}'. Type "help" for a list of valid commands.`
        });
    }

    setTerminalHistory(newHistory);
    setInputVal('');
  };

  // Filtered skills
  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black relative overflow-x-hidden">
      
      {/* Dynamic Background Glow Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-[5%] w-[600px] h-[500px] bg-violet-600/10 blur-[160px] rounded-full"></div>
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#090d16]/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand / Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d1322] rounded-[11px] flex items-center justify-center font-bold text-emerald-400 font-mono">
                SH
              </div>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white block leading-tight">
                Engr. Sabbir Hasan
              </span>
              <span className="text-xs text-emerald-400 font-mono block">Software Engineer</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
          </nav>

          {/* Terminal Launcher */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-mono text-emerald-400 transition-all hover:border-emerald-500/50"
              title="Toggle Live Shell Terminal"
            >
              <Terminal className="w-4 h-4" />
              <span>Shell</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#0d1322] px-6 py-6 space-y-4">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-emerald-400 text-base font-medium"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-emerald-400 text-base font-medium"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-emerald-400 text-base font-medium"
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-200 hover:text-emerald-400 text-base font-medium"
            >
              Experience
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => { setTerminalOpen(true); setMobileMenuOpen(false); }}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-emerald-400 font-mono text-sm"
              >
                <Terminal className="w-4 h-4" /> Open Shell Console
              </button>
            </div>
          </div>
        )}
      </header>

      <section id="hero" className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Available for High-Impact Software Engineering Projects</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Architecting <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Robust Backend</span> & Web Systems.
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
                Hi, I'm <strong className="text-slate-100">Engr. Sabbir Hasan</strong> — a Software Engineer specializing in scalable backend architecture, database systems, Node.js, C#, .NET, and full-stack web applications.
              </p>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Node.js', 'C# / .NET Core', 'PostgreSQL', 'Express', 'React', 'Docker'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono hover:border-slate-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:translate-y-[-2px]"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/SabbirHasan07"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                title="GitHub Profile"
              >
                
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Profile Image / Frame Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Animated Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700"></div>
              
              {/* Image Frame Card */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-3 shadow-2xl max-w-sm sm:max-w-md">
                <div className="overflow-hidden rounded-2xl relative aspect-square bg-slate-950 border border-slate-800">
                  <img
                    src="/logoo.png"
                    alt="Engr. Sabbir Hasan"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80"></div>

                  {/* Profile Badge Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono text-emerald-400 block font-semibold">Engr. Sabbir Hasan</span>
                      <span className="text-[11px] text-slate-400">Software Engineer</span>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {terminalOpen && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs">
            {/* Terminal Header */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setTerminalOpen(false)}></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-slate-400 font-medium">bash — sabbir@dev-node:~</span>
              </div>
              <button 
                onClick={() => setTerminalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Screen Body */}
            <div className="p-4 h-64 overflow-y-auto space-y-2 bg-[#060911]">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="whitespace-pre-wrap">
                  {item.type === 'user' && <span className="text-emerald-400 font-bold">{item.text}</span>}
                  {item.type === 'sys' && <span className="text-slate-400">{item.text}</span>}
                  {item.type === 'res' && <span className="text-cyan-300 leading-relaxed block py-1">{item.text}</span>}
                  {item.type === 'error' && <span className="text-rose-400">{item.text}</span>}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={handleTerminalSubmit} className="border-t border-slate-800 bg-slate-900/50 px-4 py-2.5 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type 'help', 'skills', 'projects', 'about'..."
                className="w-full bg-transparent text-slate-200 outline-none placeholder-slate-600 font-mono text-xs"
              />
            </form>
          </div>
        </section>
      )}

      <section id="about" className="py-20 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <User className="w-4 h-4" /> Professional Background
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Engineering high-performance applications with precision.
              </h2>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                I am a dedicated Software Engineer with deep expertise in backend infrastructure, high-concurrency architecture, and modern full-stack web applications.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                My engineering focus revolves around crafting resilient REST/GraphQL services using C# .NET and Node.js, optimizing relational databases, and designing intuitive front-end dynamic dashboards.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <Server className="w-8 h-8 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Backend Systems</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Building asynchronous microservices and scalable REST APIs with C#, .NET Core, Express, and Node.js.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <Database className="w-8 h-8 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Database Design</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Designing complex schemas, indexing strategies, and query optimizations in PostgreSQL, MongoDB, and SQL Server.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <Code2 className="w-8 h-8 text-violet-400" />
                <h3 className="text-lg font-bold text-white">Modern Frontend</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Crafting reactive, stateful web user interfaces using React, TypeScript, and modern utility-first CSS frameworks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <Layers3 className="w-8 h-8 text-blue-400" />
                <h3 className="text-lg font-bold text-white">DevOps & Tooling</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Containerizing apps with Docker, setting up automated CI/CD pipelines, and deploying with Cloudflare & Linux OS.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="skills" className="py-20 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <Cpu className="w-4 h-4" /> Technical Competencies
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Tech Stack & Expertise</h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
            {[
              { id: 'all', label: 'All Technologies' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'database', label: 'Databases & Cloud' },
              { id: 'frontend', label: 'Frontend' },
              { id: 'tools', label: 'Tools & DevOps' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, i) => {
              const IconComp = skill.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{skill.name}</h4>
                      <span className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">{skill.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-emerald-400 font-bold">{skill.level}%</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section id="projects" className="py-20 border-t border-slate-800/60 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Layers className="w-4 h-4" /> Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Engineering Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`}></div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        FEATURED
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                     Source Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="experience" className="py-20 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Briefcase className="w-4 h-4" /> Career Track
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience & Background</h2>
          </div>

          <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-10">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:scale-125 transition-transform"></div>

                <div className="space-y-2 bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    
                  </div>
                  <div className="text-xs font-mono text-slate-400">{item.company}</div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-3">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono bg-slate-800/60 text-slate-300 px-2 py-0.5 rounded border border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#060911] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#0d1322] rounded-[7px] flex items-center justify-center font-bold text-emerald-400 text-xs font-mono">
                SH
              </div>
            </div>
            <span className="text-sm font-semibold text-slate-300">Engr. Sabbir Hasan</span>
          </div>

        
        
        </div>
      </footer>

    </div>
  );
}