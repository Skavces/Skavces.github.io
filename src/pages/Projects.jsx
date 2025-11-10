import { Github, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Dil Öğrenme Uygulaması',
      description:
        'Full stack dil öğrenme platformu. Web ve mobil uygulama ile kullanıcılar interaktif şekilde yeni diller öğrenebiliyor. Gerçek zamanlı ilerleme takibi ve oyunlaştırma özellikleri içeriyor.',
      image: '/dil.png',
      tags: ['React', 'React Native', 'Tailwind', 'Nest.js', 'PostgreSQL'],
      github: '/private-projects',
      demo: '/private-projects',
      gradient: 'from-cyan-400 to-blue-600',
    },
    {
      id: 2,
      title: 'SomaFM Web & Mobil',
      description:
        'SomaFM için geliştirilmiş modern web sitesi ve mobil uygulama. Canlı radyo yayını, kanal listesi ve favorileme özellikleri. Cross-platform uyumlu streaming deneyimi.',
      image: '/somafm.jpg',
      tags: ['React', 'React Native', 'Tailwind', 'Express.js', 'PostgreSQL'],
      github: '/private-projects',
      demo: '/private-projects',
      gradient: 'from-purple-400 to-pink-600',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-20 scroll-mt-20"
    >
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Son{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projelerim
            </span>
          </h2>
        </div>

        {/* Proje kartları */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 overflow-hidden hover:border-cyan-400/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>

                {/* Butonlar */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to={project.github}
                    className="p-2 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                  </Link>
                  <Link
                    to={project.demo}
                    className="p-2 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-slate-700 hover:border-cyan-400/50 transition-colors"
                    aria-label={`${project.title} Demo`}
                  >
                    <ExternalLink className="w-5 h-5 text-gray-300 hover:text-cyan-400" />
                  </Link>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-gray-300 font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={project.demo}
                  className="block mt-4 px-4 py-2.5 text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-lg text-cyan-400 font-medium hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm group/btn"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Code2 className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    <span>Projeyi İncele</span>
                  </span>
                </Link>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 pointer-events-none`}
              ></div>
            </div>
          ))}
        </div>

        {/* Alt GitHub butonu */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Skavces"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            <Github className="w-5 h-5" />
            <span>GitHub'da Daha Fazla Proje</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
