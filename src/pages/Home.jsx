import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code2, Server, Layers, Zap } from 'lucide-react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Web Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const skills = [
    { icon: <Code2 className="w-5 h-5" />, text: "React" },
    { icon: <Server className="w-5 h-5" />, text: "Node.js" },
    { icon: <Layers className="w-5 h-5" />, text: "Nest.js" },
    { icon: <Zap className="w-5 h-5" />, text: "Express.js" }
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden pt-24 pb-20 scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-400/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-400/5 rounded-full"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">Yeni Projelere Açık</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Selim
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Kavaklıçeşme
                </span>
              </h1>

              <div className="flex items-center space-x-2 text-2xl sm:text-3xl text-gray-400 font-mono">
                <span className="text-cyan-400">{'>'}</span>
                <span>{displayText}</span>
                <span className="w-0.5 h-8 bg-cyan-400 animate-pulse"></span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="text-cyan-400 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-gray-300 text-sm font-medium">{skill.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 font-semibold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
                aria-label="Projeler bölümüne git"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></span>
                <span className="relative flex items-center space-x-2">
                  <span>Projelerimi İncele</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 font-semibold text-gray-300 border border-slate-700 rounded-lg hover:border-cyan-400/50 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                aria-label="İletişim bölümüne git"
              >
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>İletişime Geç</span>
                </span>
              </a>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <span className="text-gray-500 text-sm">Beni Takip Et:</span>
              <div className="flex space-x-3">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/Skavces", label: 'GitHub' },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/selim-kavakl%C4%B1%C3%A7e%C5%9Fme-a1b7b3351/", label: 'LinkedIn' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group p-3 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400/50 hover:bg-slate-800 transition-all duration-300 backdrop-blur-sm"
                  >
                    <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-slate-800 rounded-t-2xl border border-slate-700 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-xs font-mono ml-4">developer.js</span>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-xl rounded-b-2xl border-x border-b border-slate-700 p-6 font-mono text-sm space-y-3 shadow-2xl shadow-cyan-500/10">
                <div className="flex space-x-2">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-yellow-400">{'{'}</span>
                </div>

                <div className="pl-4 space-y-2">
                  <div className="flex space-x-2">
                    <span className="text-cyan-400">name:</span>
                    <span className="text-green-400">'Full Stack Dev'</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex space-x-2">
                    <span className="text-cyan-400">skills:</span>
                    <span className="text-gray-400">[</span>
                  </div>

                  <div className="pl-4 space-y-1">
                    <div className="text-green-400">'React'<span className="text-gray-400">,</span></div>
                    <div className="text-green-400">'Node.js'<span className="text-gray-400">,</span></div>
                    <div className="text-green-400">'TypeScript'<span className="text-gray-400">,</span></div>
                  </div>

                  <div className="flex space-x-2">
                    <span className="text-gray-400">],</span>
                  </div>

                  <div className="flex space-x-2">
                    <span className="text-cyan-400">passion:</span>
                    <span className="text-green-400">'Building Cool Stuff'</span>
                    <span className="text-gray-400">,</span>
                  </div>

                  <div className="flex space-x-2">
                    <span className="text-cyan-400">available:</span>
                    <span className="text-orange-400">true</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <span className="text-yellow-400">{'}'}</span>
                  <span className="text-gray-400">;</span>
                </div>

                <div className="flex items-center space-x-1 pt-2">
                  <span className="text-cyan-400">{'>'}</span>
                  <span className="w-2 h-4 bg-cyan-400 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-500 text-xs font-medium">Aşağı Kaydır</span>
          <ArrowDown className="w-5 h-5 text-cyan-400" />
        </div>
      </div>
    </section>
  );
}
