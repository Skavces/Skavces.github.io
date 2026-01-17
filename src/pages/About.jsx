import { Download, Terminal, Database, Code2, Server } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Backend', items: ['Node.js', 'Nest.js', 'Express.js', 'REST API', 'GraphQL'], icon: <Server className="w-4 h-4" /> },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MSSQL', 'Prisma'], icon: <Database className="w-4 h-4" /> },
    { category: 'Frontend', items: ['React', 'React Native', 'Vue.js', 'Tailwind CSS', 'TypeScript'], icon: <Code2 className="w-4 h-4" /> },
    { category: 'DevOps', items: ['Git', 'Docker', 'Postman', 'Linux'], icon: <Terminal className="w-4 h-4" /> }
  ];

  const handleDownloadCV = () => {
    const cvUrl = '/Selim Kavaklıçeşme CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Selim Kavaklıçeşme CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-black relative overflow-hidden py-24 scroll-mt-20"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-teal-400 font-mono text-sm">~$</span>
            <span className="text-gray-500 font-mono text-sm">cat about.md</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-mono">
            <span className="text-teal-400">#</span> ABOUT_ME
          </h2>
          <div className="mt-2 h-1 w-24 bg-linear-to-r from-teal-400 to-transparent"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            {/* Main Info Card */}
            <div className="bg-gray-950/80 border border-gray-800 rounded-lg overflow-hidden">
              {/* Card Header */}
              <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-teal-400" />
                  <span className="text-gray-400 font-mono text-xs">bio.txt</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div className="font-mono text-sm space-y-3">
                  <div className="text-gray-500">
                    <span className="text-teal-400">1</span>  <span className="text-purple-400">class</span> <span className="text-yellow-400">Developer</span> {'{'}
                  </div>
                  <div className="text-gray-500 pl-4">
                    <span className="text-teal-400">2</span>    <span className="text-blue-400">constructor</span>() {'{'}
                  </div>
                  <div className="text-gray-500 pl-8">
                    <span className="text-teal-400">3</span>      <span className="text-cyan-400">this</span>.name = <span className="text-green-400">'Selim Kavaklıçeşme'</span>;
                  </div>
                  <div className="text-gray-500 pl-8">
                    <span className="text-teal-400">4</span>      <span className="text-cyan-400">this</span>.education = <span className="text-green-400">'Atatürk Üniversitesi'</span>;
                  </div>
                  <div className="text-gray-500 pl-8">
                    <span className="text-teal-400">5</span>      <span className="text-cyan-400">this</span>.degree = <span className="text-green-400">'Bilgisayar Programcılığı'</span>;
                  </div>
                  <div className="text-gray-500 pl-8">
                    <span className="text-teal-400">6</span>      <span className="text-cyan-400">this</span>.focus = <span className="text-green-400">'Backend Development'</span>;
                  </div>
                  <div className="text-gray-500 pl-4">
                    <span className="text-teal-400">7</span>    {'}'}
                  </div>
                  <div className="text-gray-500">
                    <span className="text-teal-400">8</span>  {'}'}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800 space-y-3 text-gray-400 text-sm leading-relaxed">
                  <p>
                    Performanslı ve ölçeklenebilir backend sistemleri geliştiriyorum. 
                    Node.js ekosistemi ve modern JavaScript teknolojileri ile çalışmayı seviyorum.
                  </p>
                  <p>
                    RESTful API tasarımı, veritabanı optimizasyonu ve mikroservis mimarisi 
                    üzerine deneyimliyim.
                  </p>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <button 
              onClick={handleDownloadCV}
              className="group w-full bg-gray-950/80 border border-gray-800 rounded-lg p-4 hover:border-teal-800/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-teal-950/50 rounded">
                    <Download className="w-5 h-5 text-teal-400 group-hover:animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="font-mono text-sm text-white">DOWNLOAD_CV</div>
                    <div className="font-mono text-xs text-gray-500">Selim_Kavakliçeşme.pdf</div>
                  </div>
                </div>
                <div className="font-mono text-xs text-gray-600 group-hover:text-teal-400 transition-colors">
                  [ENTER]
                </div>
              </div>
            </button>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            {/* Skills Terminal */}
            <div className="bg-gray-950/80 border border-gray-800 rounded-lg overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-teal-400" />
                  <span className="text-gray-400 font-mono text-xs">skills.json</span>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Skills Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-teal-400 font-mono text-sm">~$</span>
                  <span className="text-gray-500 font-mono text-sm">cat skills.json</span>
                </div>

                {skills.map((skillGroup, i) => (
                  <div key={i} className="space-y-3">
                    {/* Category Header */}
                    <div className="flex items-center space-x-2 pb-2 border-b border-gray-800">
                      <span className="text-teal-400">{skillGroup.icon}</span>
                      <span className="font-mono text-sm text-white font-bold">
                        {skillGroup.category.toUpperCase()}
                      </span>
                      <span className="text-gray-600 font-mono text-xs">
                        [{skillGroup.items.length}]
                      </span>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {skillGroup.items.map((skill, j) => (
                        <div
                          key={j}
                          className="group flex items-center space-x-2 px-3 py-2 bg-gray-900/50 border border-gray-800 rounded hover:border-teal-800/50 hover:bg-gray-900 transition-all"
                        >
                          <span className="text-teal-400 font-mono text-xs">$</span>
                          <span className="text-gray-400 text-xs font-mono group-hover:text-gray-300 transition-colors">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}