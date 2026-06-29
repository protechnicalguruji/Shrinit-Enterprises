import { motion } from "motion/react";
import { Tv, Refrigerator, Wind, Droplets, ChefHat, Coffee, Smartphone, Home, ArrowRight } from "lucide-react";

const offerings = [
  { 
    icon: Tv, 
    title: "LED TVs", 
    desc: "Experience cinema-grade entertainment with ultra-vivid smart screens, crisp 4K OLED HDR displays, and surround audio setups for a futuristic home theatre experience.",
    size: "lg:col-span-8 md:col-span-12",
    color: "bg-blue-50/50 text-blue-600 border-blue-100",
    label: "FEATURED PRESTIGE"
  },
  { 
    icon: Refrigerator, 
    title: "Refrigerators", 
    desc: "Energy efficient double-door and multi-door cooling setups with high-tech inverter compressors.",
    size: "lg:col-span-4 md:col-span-6",
    color: "bg-teal-50/50 text-teal-600 border-teal-100",
    label: "ECO FRIENDLY"
  },
  { 
    icon: Wind, 
    title: "Air Conditioners", 
    desc: "High-performance smart cooling units to maintain perfect temperature controls throughout the year.",
    size: "lg:col-span-4 md:col-span-6",
    color: "bg-sky-50/50 text-sky-600 border-sky-100",
    label: "CLIMATE CONTROL"
  },
  { 
    icon: Droplets, 
    title: "Washing Machines", 
    desc: "Advanced smart fabric wash technology. Front-load and top-load silent washing solutions for seamless fabric care.",
    size: "lg:col-span-8 md:col-span-12",
    color: "bg-indigo-50/50 text-indigo-600 border-indigo-100",
    label: "PREMIUM CONVENIENCE"
  },
  { 
    icon: ChefHat, 
    title: "Kitchen Appliances", 
    desc: "Make cooking effortless with high-end chimneys, cooktops, microwaves, and integrated ovens designed for modern homes.",
    size: "lg:col-span-6 md:col-span-12",
    color: "bg-amber-50/50 text-amber-600 border-amber-100",
    label: "SMART KITCHEN"
  },
  { 
    icon: Coffee, 
    title: "Small Home Appliances", 
    desc: "Blenders, high-performance coffee brewers, and daily tools for effortless living.",
    size: "lg:col-span-6 md:col-span-12",
    color: "bg-rose-50/50 text-rose-600 border-rose-100",
    label: "DAILY ESSENTIALS"
  },
  { 
    icon: Smartphone, 
    title: "Consumer Electronics", 
    desc: "The latest highly-demanded utility gadgets, tablets, soundbars, and individual electronic items for home.",
    size: "lg:col-span-4 md:col-span-6",
    color: "bg-purple-50/50 text-purple-600 border-purple-100",
    label: "PERSONAL LIVING"
  },
  { 
    icon: Home, 
    title: "Home Utility Products", 
    desc: "Water purifiers, geysers, state-of-the-art vacuum cleaners, and premium ironers. Dependable solutions crafted for every Gwalior residence.",
    size: "lg:col-span-8 md:col-span-12",
    color: "bg-emerald-50/50 text-emerald-600 border-emerald-100",
    label: "HEALTH & UTILITY"
  }
];

export default function Offerings() {
  return (
    <section id="offerings" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide">
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 font-display tracking-tight leading-tight">
            What We Offer
          </h2>
          <p className="text-slate-600 font-sans text-lg">
            Explore a meticulously curated selection of premier home appliances designed for luxury, convenience, and superior durability.
          </p>
        </div>

        {/* Dynamic Bento Grid Layout with Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`${item.size} bento-card bg-gradient-to-tr from-white via-white to-slate-50/30 p-8 rounded-[28px] border border-slate-200/50 shadow-premium hover:shadow-glow hover:border-slate-300/80 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-slate-100/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-[10deg]`}>
                      <Icon size={28} />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-950 font-display mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-sans text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100/80 flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide font-mono group-hover:text-blue-700">
                  <span>DISCOVER RANGE</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
