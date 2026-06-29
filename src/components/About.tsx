import { motion } from "motion/react";
import { BadgeCheck, Heart, Users, Award, Landmark } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-[#F7F8FA] to-[#EEF2F7] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide">
              Established Trust
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 font-display tracking-tight leading-tight">
              About Shrinit Enterprises
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed font-sans">
              Based in the heart of Gwalior, Shrinit Enterprises has established itself as a beacon of trust for electronics and home appliances. We believe that technology should enhance your daily life, and our mission is to provide you with the most reliable products from leading brands.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-sans">
              With a commitment to honest customer service, quality products, and complete satisfaction, we ensure a seamless and dependable experience for every family we serve.
            </p>
            
            <div className="pt-4 flex items-center gap-3 text-slate-600">
              <Landmark size={20} className="text-blue-600" />
              <span className="text-sm font-semibold tracking-wide uppercase font-mono">Gwalior's Elite Electronic Partner</span>
            </div>
          </div>

          {/* Right Bento Grid Grid Column */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Card 1 - Quality Products */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col justify-between min-h-[200px]"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Quality Products</h3>
                  <p className="text-sm text-slate-600">Handpicked models engineered for maximum longevity and ultimate performance.</p>
                </div>
              </motion.div>

              {/* Card 2 - Trusted Brands */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col justify-between min-h-[200px]"
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Trusted Brands</h3>
                  <p className="text-sm text-slate-600">Only authorized global brands with verified warranties and official services.</p>
                </div>
              </motion.div>

              {/* Card 3 - Honest Customer Service */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col justify-between min-h-[200px]"
              >
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Honest Service</h3>
                  <p className="text-sm text-slate-600">Transparent advisory and transparent post-purchase guidance for Gwalior citizens.</p>
                </div>
              </motion.div>

              {/* Card 4 - Customer Satisfaction & Reliable Shopping */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col justify-between min-h-[200px]"
              >
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Reliable Experience</h3>
                  <p className="text-sm text-slate-600">Dedicated assistance to help each home discover products tailored to their budget.</p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
