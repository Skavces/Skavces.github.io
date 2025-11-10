import { Lock, Mail } from 'lucide-react';
import { useEffect } from 'react';

export default function PrivateProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 md:p-12 border-b border-slate-700/50">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-2xl shadow-lg shadow-cyan-500/20">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Gizli Proje
            </h1>
            <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
              Gizlilik anlaşması kapsamındaki özel proje
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 p-8 rounded-2xl border border-slate-700/50 mb-8">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Bu proje <span className="text-cyan-400 font-semibold">gizlilik anlaşması (NDA)</span> kapsamında olduğu için kamuya açık olarak paylaşılamıyor.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Ancak bu projede kullandığım <span className="text-cyan-400 font-semibold">teknolojiler</span>, <span className="text-cyan-400 font-semibold">mimari yapı</span> ve <span className="text-cyan-400 font-semibold">yaklaşımlar</span> hakkında daha detaylı bilgi vermekten mutluluk duyarım.
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-6 text-lg">
                Daha fazla bilgi almak isterseniz
              </p>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                İletişime Geç
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          Profesyonel gizlilik taahhüdü ile korunmaktadır
        </p>
      </div>
    </div>
  );
}
