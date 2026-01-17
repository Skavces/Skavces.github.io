import { Github, ExternalLink, Terminal, Folder, FileCode } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Kelimo - Dil Öğrenme Uygulaması',
      description:
        'Full stack dil öğrenme platformu. Web ve mobil uygulama ile kullanıcılar interaktif şekilde yeni diller öğrenebiliyor. Gerçek zamanlı ilerleme takibi ve oyunlaştırma özellikleri içeriyor.',
      image: '/dil.png',
      tags: ['React', 'React Native', 'Tailwind', 'Nest.js', 'PostgreSQL'],
      github: 'https://github.com/Skavces/KelimoApp',
      demo: 'https://github.com/Skavces/KelimoApp',
      type: 'fullstack',
      status: 'production',
    },
    {
      id: 2,
      title: 'SomaFM Web & Mobil',
      description:
        'SomaFM için geliştirilmiş modern web sitesi ve mobil uygulama. Canlı radyo yayını, kanal listesi ve favorileme özellikleri. Cross-platform uyumlu streaming deneyimi.',
      image: '/somafm.jpg',
      tags: ['React', 'React Native', 'Tailwind', 'Express.js', 'PostgreSQL'],
      github: 'https://github.com/berkesongul/somafm',
      demo: 'https://github.com/berkesongul/somafm',
      type: 'fullstack',
      status: 'production',
    },
    {
      id: 3,
      title: 'Yağhane Uygulaması',
      description:
        'Modern yağ istasyonu yönetim sistemi. Stok takibi, sipariş yönetimi ve müşteri ilişkileri modülleri. Gerçek zamanlı envanter kontrolü ve raporlama özellikleri.',
      image: '/yaghane.png',
      tags: ['React', 'Tailwind', 'Node.js', 'SQLite'],
      github: 'https://github.com/Skavces/Yaghane-Uygulamasi',
      demo: 'https://github.com/Skavces/Yaghane-Uygulamasi',
      type: 'fullstack',
      status: 'production',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black relative overflow-hidden py-24 scroll-mt-20"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-teal-400 font-mono text-sm">~$</span>
            <span className="text-gray-500 font-mono text-sm">ls -la ~/projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-mono">
            <span className="text-teal-400">#</span> PROJECTS
          </h2>
          <div className="mt-2 h-1 w-24 bg-linear-to-r from-teal-400 to-transparent"></div>
          
          {/* Directory info */}
          <div className="mt-4 font-mono text-xs text-gray-500">
            <span className="text-teal-400">total {projects.length}</span> projects found
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-gray-950/80 border border-gray-800 rounded-lg overflow-hidden hover:border-teal-800/50 transition-all duration-300"
            >
              {/* Project Header - Terminal Style */}
              <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Folder className="w-4 h-4 text-teal-400" />
                  <span className="text-gray-400 font-mono text-sm">
                    project_{index + 1}/
                  </span>
                  <span className={`px-2 py-0.5 rounded text-xs font-mono ${
                    project.status === 'production' 
                      ? 'bg-green-950/50 text-green-400 border border-green-800/50' 
                      : 'bg-yellow-950/50 text-yellow-400 border border-yellow-800/50'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:bg-gray-800 rounded transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="w-4 h-4 text-gray-500 hover:text-teal-400 transition-colors" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 hover:bg-gray-800 rounded transition-colors"
                    aria-label={`${project.title} Demo`}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-500 hover:text-teal-400 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 md:h-auto overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="px-2 py-1 bg-gray-950/90 border border-gray-800 rounded backdrop-blur-sm">
                      <span className="font-mono text-xs text-teal-400">{project.type}</span>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6 space-y-4">
                  {/* Project Title */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <FileCode className="w-5 h-5 text-teal-400" />
                      <h3 className="text-xl font-bold text-white font-mono group-hover:text-teal-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-teal-400" />
                      <span className="font-mono text-xs text-gray-500">TECH_STACK:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-gray-900 border border-gray-800 rounded font-mono text-xs text-gray-400 hover:border-teal-800/50 hover:text-teal-400 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 space-y-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-between px-4 py-2.5 bg-gray-900 border border-gray-800 rounded hover:border-teal-800/50 hover:bg-gray-900/50 transition-all"
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-teal-400 font-mono text-sm">$</span>
                        <span className="text-gray-400 font-mono text-sm group-hover/btn:text-teal-400 transition-colors">
                          npm run demo
                        </span>
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-600 group-hover/btn:text-teal-400 group-hover/btn:translate-x-1 transition-all" />
                    </a>
                  </div>

                  {/* Project Stats */}
                  <div className="pt-2 flex items-center space-x-4 text-xs font-mono text-gray-600">
                    <span>└─ {project.tags.length} dependencies</span>
                    <span>•</span>
                    <span>✓ tested</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gray-950/80 border border-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gray-900 border-b border-gray-800 px-4 py-2">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span className="text-gray-400 font-mono text-xs">more_projects.sh</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 font-mono text-sm mb-4">
                # Daha fazla proje için GitHub profilimi ziyaret edin
              </p>
              <a
                href="https://github.com/Skavces"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-2 px-6 py-3 bg-teal-950/50 border border-teal-800/50 rounded hover:bg-teal-950 hover:border-teal-700/50 transition-all"
              >
                <Github className="w-5 h-5 text-teal-400" />
                <span className="font-mono text-sm text-teal-400">VIEW_GITHUB_PROFILE</span>
                <ExternalLink className="w-4 h-4 text-teal-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Command Line */}
        <div className="mt-12 font-mono text-xs text-gray-600 text-center">
          <span className="text-teal-400">~$</span> cd ../contact
        </div>
      </div>
    </section>
  );
}