import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Terminal, Database, Code2, Activity, Cpu, HardDrive } from 'lucide-react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const canvasRef = useRef(null);
  
  const fullText = "Backend Developer";

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f766e';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Terminal simulation
  useEffect(() => {
    const commands = [
      { cmd: 'systemctl status developer.service', delay: 1000 },
      { cmd: '● developer.service - Backend Developer Service', delay: 1500 },
      { cmd: '   Loaded: active (running)', delay: 2000 },
      { cmd: '   Status: "Ready for new projects"', delay: 2500 },
    ];

    commands.forEach(({ cmd, delay }) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, cmd]);
      }, delay);
    });
  }, []);

  const techStack = [
    { icon: <Database className="w-4 h-4" />, name: "PostgreSQL", status: "active" },
    { icon: <Cpu className="w-4 h-4" />, name: "Node.js", status: "active" },
    { icon: <HardDrive className="w-4 h-4" />, name: "MongoDB", status: "active" },
    { icon: <Code2 className="w-4 h-4" />, name: "Docker", status: "active" },
  ];

  const apiEndpoints = [
    { method: 'GET', endpoint: '/api/skills', status: 200 },
    { method: 'GET', endpoint: '/api/projects', status: 200 },
    { method: 'POST', endpoint: '/api/contact', status: 200 },
  ];

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-20"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6">

            {/* Name and Title */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl font-bold text-white font-mono">
                <span className="text-teal-400">$</span> SELİM
                <br />
                <span className="text-gray-400">KAVAKLIÇEŞME</span>
              </h1>

              <div className="flex items-center space-x-2 text-xl text-gray-500 font-mono">
                <span className="text-teal-400">{'>'}</span>
                <span className="text-teal-300">{displayText}</span>
                <span className="w-0.5 h-6 bg-teal-400 animate-pulse"></span>
              </div>
            </div>

            {/* API Endpoints Display */}
            <div className="bg-gray-950/80 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-800">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span className="text-gray-400 text-xs font-mono">API ENDPOINTS</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                {apiEndpoints.map((api, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`${
                        api.method === 'GET' ? 'text-blue-400' : 'text-green-400'
                      } font-bold`}>{api.method}</span>
                      <span className="text-gray-500">{api.endpoint}</span>
                    </div>
                    <span className="text-teal-400">{api.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Status */}
            <div className="grid grid-cols-2 gap-3">
              {techStack.map((tech, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-950/80 border border-gray-800 rounded-lg p-3 backdrop-blur-sm hover:border-teal-800/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-teal-400">{tech.icon}</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                  <div className="font-mono text-xs text-gray-400">{tech.name}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#projects"
                className="group relative px-6 py-3 font-mono text-sm text-black bg-teal-400 rounded overflow-hidden hover:bg-teal-300 transition-all"
              >
                <span>$ VIEW_PROJECTS</span>
              </a>

              <a
                href="#contact"
                className="group px-6 py-3 font-mono text-sm text-teal-400 border border-teal-800/50 rounded hover:bg-teal-950/30 transition-all"
              >
                <span>$ INIT_CONTACT</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-4">
              <span className="text-gray-600 text-xs font-mono">CONNECT:</span>
              {[
                { icon: <Github className="w-4 h-4" />, href: "https://github.com/Skavces", label: 'GitHub' },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/selim-kavakl%C4%B1%C3%A7e%C5%9Fme-a1b7b3351/", label: 'LinkedIn' },
                { icon: <Mail className="w-4 h-4" />, href: "#contact", label: 'Email' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="p-2 bg-gray-950/80 border border-gray-800 rounded hover:border-teal-800/50 hover:text-teal-400 text-gray-500 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Terminal */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <Terminal className="w-4 h-4 text-gray-500 ml-2" />
                  <span className="text-gray-500 text-xs font-mono">terminal@selim</span>
                </div>
                <div className="text-gray-600 text-xs font-mono">bash</div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono text-xs space-y-1 min-h-[400px]">
                <div className="text-gray-500">Last login: {new Date().toLocaleString()}</div>
                <div className="text-gray-500 mb-4">
                  Welcome to Selim's Development Environment
                </div>

                {terminalLines.map((line, idx) => (
                  <div key={idx} className={`${
                    line.includes('●') ? 'text-teal-400' : 
                    line.includes('Loaded') ? 'text-green-400' :
                    line.includes('Status') ? 'text-blue-400' :
                    'text-gray-400'
                  }`}>
                    {line}
                  </div>
                ))}

                <div className="pt-4 space-y-2">
                  <div className="text-gray-500">
                    <span className="text-teal-400">~$</span> cat skills.json
                  </div>
                  <div className="pl-4 text-gray-400">
                    <div>{'{'}</div>
                    <div className="pl-4">
                      <span className="text-blue-400">"backend"</span>: [
                      <span className="text-green-400">"Node.js"</span>,
                      <span className="text-green-400"> "Nest.js"</span>,
                      <span className="text-green-400"> "Express.js"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">"databases"</span>: [
                      <span className="text-green-400">"PostgreSQL"</span>,
                      <span className="text-green-400"> "MongoDB"</span>,
                      <span className="text-green-400"> "Redis"</span>
                      ],
                    </div>
                    <div className="pl-4">
                      <span className="text-blue-400">"tools"</span>: [
                      <span className="text-green-400">"Docker"</span>,
                      <span className="text-green-400"> "Git"</span>,
                      <span className="text-green-400"> "Linux"</span>
                      ]
                    </div>
                    <div>{'}'}</div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-teal-400">~$</span>
                    <span className="w-2 h-4 bg-teal-400 animate-pulse ml-1"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* System Info Card */}
            <div className="mt-4 bg-gray-950/80 border border-gray-800 rounded-lg p-4 backdrop-blur-sm">
              <div className="font-mono text-xs space-y-2">
                <div className="flex justify-between text-gray-500">
                  <span>UPTIME:</span>
                  <span className="text-teal-400">99.9%</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>RESPONSE_TIME:</span>
                  <span className="text-teal-400">&lt; 100ms</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>PROJECTS_DEPLOYED:</span>
                  <span className="text-teal-400">24+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-1">
          <span className="text-gray-700 text-xs font-mono">SCROLL_DOWN</span>
          <div className="w-5 h-8 border-2 border-teal-800/50 rounded-full p-1">
            <div className="w-1 h-2 bg-teal-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}