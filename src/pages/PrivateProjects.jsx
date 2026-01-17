import { Lock, Mail, Terminal, Shield, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

export default function PrivateProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 pt-24 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,118,110,0.03)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="w-full max-w-4xl relative z-10">
        {/* Main Terminal Window */}
        <div className="bg-gray-950/90 border border-gray-800 rounded-lg overflow-hidden backdrop-blur-sm">
          {/* Terminal Header */}
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span className="text-gray-400 font-mono text-xs">access_denied.log</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Warning Header */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-950/50 border-2 border-red-800/50 rounded-full mb-4">
                <Lock className="w-10 h-10 text-red-400" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white font-mono">
                <span className="text-red-400">[ERROR]</span> ACCESS_DENIED
              </h1>
              
              <div className="inline-block px-4 py-2 bg-red-950/50 border border-red-800/50 rounded font-mono text-sm text-red-400">
                STATUS: 403 FORBIDDEN
              </div>
            </div>

            {/* Terminal Output */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6 font-mono text-sm space-y-3">
              <div className="text-gray-500">
                <span className="text-teal-400">~$</span> cat project_info.txt
              </div>
              
              <div className="space-y-2 pl-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                  <div className="text-gray-400">
                    <span className="text-yellow-500">WARNING:</span> This project is under <span className="text-red-400">Non-Disclosure Agreement (NDA)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Shield className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                  <div className="text-gray-400">
                    <span className="text-blue-400">PROTECTED:</span> Source code and documentation are confidential
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800 space-y-2 text-gray-500">
                <div>└─ <span className="text-gray-600">Project details:</span> <span className="text-red-400">CLASSIFIED</span></div>
                <div>└─ <span className="text-gray-600">Repository:</span> <span className="text-red-400">PRIVATE</span></div>
                <div>└─ <span className="text-gray-600">Demo:</span> <span className="text-red-400">RESTRICTED</span></div>
              </div>
            </div>

            {/* Information Box */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-2 pb-2 border-b border-gray-800">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span className="font-mono text-sm text-white font-bold">AVAILABLE_INFO</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed font-mono">
                <span className="text-gray-600">//</span> Bu proje <span className="text-teal-400">gizlilik anlaşması (NDA)</span> kapsamında
                <br />
                <span className="text-gray-600">//</span> olduğu için kamuya açık olarak paylaşılamıyor.
              </p>

              <p className="text-gray-400 text-sm leading-relaxed font-mono">
                <span className="text-gray-600">//</span> Ancak kullanılan <span className="text-teal-400">teknolojiler</span>, <span className="text-teal-400">mimari yapı</span>
                <br />
                <span className="text-gray-600">//</span> ve <span className="text-teal-400">yaklaşımlar</span> hakkında detaylı bilgi verebilirim.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="text-center space-y-4 pt-4">
              <p className="text-gray-500 font-mono text-sm">
                <span className="text-gray-600">$</span> request --more-info
              </p>

              <button
                onClick={handleContactClick}
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-teal-950/50 border border-teal-800/50 rounded-lg hover:bg-teal-950 hover:border-teal-700/50 transition-all font-mono text-sm"
              >
                <Mail className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                <span className="text-teal-400">INIT_CONTACT</span>
              </button>

              <p className="text-gray-600 text-xs font-mono pt-2">
                // Profesyonel gizlilik taahhüdü ile korunmaktadır
              </p>
            </div>

            {/* Footer Command */}
            <div className="pt-4 border-t border-gray-800">
              <div className="flex items-center space-x-2 font-mono text-xs">
                <span className="text-teal-400">~$</span>
                <span className="text-gray-600">cd ../</span>
                <span className="w-2 h-3 bg-teal-400 animate-pulse ml-1"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-950/80 border border-gray-800 rounded-full">
            <Shield className="w-3 h-3 text-green-400" />
            <span className="font-mono text-xs text-gray-500">
              SECURITY_LEVEL: <span className="text-green-400">HIGH</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}