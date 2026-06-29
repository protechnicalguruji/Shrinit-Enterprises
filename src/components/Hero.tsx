import { motion } from "motion/react";
import { ArrowRight, MapPin, Tv, Shield, Zap } from "lucide-react";

export default function Hero() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-[#F7F8FA] via-[#EEF2F7] to-[#F7F8FA]">
      {/* Premium Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-slate-200/60 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 tracking-wide font-sans">
                Trusted Local Store in Gwalior
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] font-display"
            >
              Trusted Electronics & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Home Appliance
              </span>{" "}
              Store
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 font-sans max-w-xl leading-relaxed"
            >
              Experience handpicked premium products, genuine top-tier brands, and honest expert guidance. Shrinit Enterprises brings the latest reliable home technology directly to Gwalior families.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={handleScrollToContact}
                className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-500/20 active:scale-[0.98]"
              >
                Contact Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleScrollToContact}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-md text-slate-800 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition-all border border-slate-200/80 shadow-sm active:scale-[0.98]"
              >
                <MapPin size={18} className="text-blue-600" /> View Location
              </button>
            </motion.div>
          </div>

          {/* Hero Right Bento Split Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative grid grid-cols-12 gap-4">
              {/* Main Premium Tech Appliance Mock Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-12 bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-premium hover:shadow-glow bento-card relative overflow-hidden group min-h-[280px]"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-500/5 to-transparent pointer-events-none" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold font-mono">
                      SMART APPLIANCE CONTROL
                    </span>
                    <span className="px-2.5 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-semibold">
                      Online Pro
                    </span>
                  </div>

                  {/* Aesthetic Appliance Display Simulator */}
                  <div className="my-6 py-6 border-y border-slate-100 flex items-center justify-around">
                    <div className="text-center">
                      <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">TEMP</div>
                      <div className="text-3xl font-bold text-slate-800 font-display">18°C</div>
                      <div className="text-[10px] text-green-500 font-medium">OPTIMAL</div>
                    </div>
                    <div className="w-px h-12 bg-slate-100" />
                    <div className="text-center">
                      <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">POWER</div>
                      <div className="text-3xl font-bold text-slate-800 font-display">98%</div>
                      <div className="text-[10px] text-blue-500 font-medium font-mono">INVERTER</div>
                    </div>
                    <div className="w-px h-12 bg-slate-100" />
                    <div className="text-center">
                      <div className="text-xs text-slate-400 uppercase font-mono tracking-wider">SCREEN</div>
                      <div className="text-3xl font-bold text-slate-800 font-display">OLED</div>
                      <div className="text-[10px] text-indigo-500 font-medium">ULTRA HD</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-xl text-slate-600">
                      <Tv size={18} />
                    </div>
                    <p className="text-xs text-slate-500 font-sans">
                      Top-tier Smart TVs, Inverter ACs, and highly-efficient cooling hubs.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Float Sub Card 1 - Quality */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="col-span-6 bg-white border border-slate-200/50 rounded-3xl p-5 shadow-premium hover:shadow-glow bento-card flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Shield size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">100% Genuine</h3>
                  <p className="text-xs text-slate-500">Official brand warranties</p>
                </div>
              </motion.div>

              {/* Float Sub Card 2 - Efficiency */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="col-span-6 bg-white border border-slate-200/50 rounded-3xl p-5 shadow-premium hover:shadow-glow bento-card flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">Energy Saver</h3>
                  <p className="text-xs text-slate-500">Eco inverter tech</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
