import { motion } from "motion/react";
import { CheckCircle2, ShieldAlert, Award, Star } from "lucide-react";

const stats = [
  { 
    label: "Quality Products", 
    value: "Curated Selection", 
    desc: "Every item in our catalogue is hand-inspected for durability, energy rating, and high-tech features.",
    icon: Award,
    size: "md:col-span-6 lg:col-span-3"
  },
  { 
    label: "Trusted Service", 
    value: "Proven Track Record", 
    desc: "Over years of continuous service in Gwalior, delivering excellence, on-time installations, and reliable troubleshooting.",
    icon: CheckCircle2,
    size: "md:col-span-6 lg:col-span-3"
  },
  { 
    label: "Customer Focused", 
    value: "Satisfied Families", 
    desc: "We focus heavily on finding the ideal product for your specific domestic spaces, budgets, and comfort needs.",
    icon: Star,
    size: "md:col-span-6 lg:col-span-3"
  },
  { 
    label: "Leading Brands", 
    value: "Genuine Quality", 
    desc: "Partnered with premium authorized brands to ensure complete satisfaction and full official warranty privileges.",
    icon: ShieldAlert,
    size: "md:col-span-6 lg:col-span-3"
  },
];

export default function Highlights() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#F7F8FA] to-[#EEF2F7] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide">
            Our Metrics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 font-display tracking-tight leading-tight">
            Business Highlights
          </h2>
          <p className="text-slate-600 font-sans text-lg">
            A glance at our foundational principles and pillars that drive Shrinit Enterprises' operations.
          </p>
        </div>

        {/* Elegant Bento Grid of Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${stat.size} bg-white p-8 rounded-[28px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col justify-between min-h-[260px] group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 font-bold uppercase tracking-wider font-mono">
                      {stat.label}
                    </span>
                    <div className="text-slate-300 group-hover:text-blue-500 transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    {stat.value}
                  </h3>
                </div>

                <p className="text-slate-600 font-sans text-sm leading-relaxed mt-6">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
