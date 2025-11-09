import { Download, Zap, Sparkles } from 'lucide-react';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'React Native', 'Vue.js', 'Tailwind CSS', 'TypeScript'], color: 'cyan' },
    { category: 'Backend', items: ['Node.js', 'Nest.js', 'Express.js', 'REST API', 'GraphQL'], color: 'blue' },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'MSSQL', 'Prisma'], color: 'purple' },
    { category: 'Tools', items: ['Git', 'Docker', 'Postman'], color: 'pink' }
  ];

  const colorClasses = {
    cyan: 'from-cyan-400 to-cyan-600',
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    pink: 'from-pink-400 to-pink-600'
  };

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
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden py-24 scroll-mt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-full px-4 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300 font-medium">Hakkımda</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Ben <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Kimim?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Hakkımda</h3>
              </div>

              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Merhaba! Ben <span className="text-cyan-400 font-semibold">Selim Kavaklıçeşme</span>. 
                  Atatürk Üniversitesi Bilgisayar Programcılığı bölümünden mezunum.
                </p>
                <p>
                  Kullanıcı deneyimini ön planda tutarak, performanslı ve ölçeklenebilir web uygulamaları geliştiriyorum. 
                  React, React Native, Node.js ve modern JavaScript ekosistemi ile çalışmayı seviyorum.
                </p>
              </div>

              <button 
                onClick={handleDownloadCV}
                className="group w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>CV'mi İndir</span>
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-800 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Yetenekler</h3>
              </div>

              <div className="space-y-6">
                {skills.map((skillGroup, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Zap className={`w-5 h-5 text-${skillGroup.color}-400`} />
                      <h4 className="text-lg font-semibold text-white">{skillGroup.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, j) => (
                        <div
                          key={j}
                          className="group/skill relative px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                        >
                          <span className="text-sm text-gray-300 font-medium">{skill}</span>
                          <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[skillGroup.color]} opacity-0 group-hover/skill:opacity-5 rounded-lg transition-opacity`}></div>
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
