import { motion } from "motion/react";
import { ShieldCheck, Award, Star, Tag, Smile, Headset, CreditCard, HeartHandshake } from "lucide-react";

const reasons = [
  { 
    icon: ShieldCheck, 
    title: "Trusted Local Business", 
    desc: "A household name in Gwalior built on years of verified integrity, robust relationships, and commitment to the local community.",
    gridSpan: "md:col-span-4"
  },
  { 
    icon: Award, 
    title: "Quality Products", 
    desc: "Strictly curated electronics built to last. We focus only on top-tier specifications that deliver lasting utility and energy efficiency.",
    gridSpan: "md:col-span-4"
  },
  { 
    icon: Star, 
    title: "Genuine Brands", 
    desc: "Direct-from-manufacturer products. Every single appliance comes with authentic retail seals and comprehensive brand warranties.",
    gridSpan: "md:col-span-4"
  },
  { 
    icon: Tag, 
    title: "Competitive Pricing", 
    desc: "Premium consumer goods made accessible. Honest pricing policies with completely transparent deals and no hidden charges.",
    gridSpan: "md:col-span-6"
  },
  { 
    icon: Smile, 
    title: "Customer Satisfaction", 
    desc: "Our customers are at the core of our business. We assist with sincere guidance before and long after you make a choice.",
    gridSpan: "md:col-span-6"
  },
  { 
    icon: Headset, 
    title: "Friendly Support", 
    desc: "Always accessible. Speak directly to real local experts who understand your exact requirements without standard corporate wait lines.",
    gridSpan: "md:col-span-4"
  },
  { 
    icon: CreditCard, 
    title: "Digital Payment Options", 
    desc: "Fast, safe, and modernized checkout options including UPI, major cards, and instant EMI configurations.",
    gridSpan: "md:col-span-4"
  },
  { 
    icon: HeartHandshake, 
    title: "Reliable Service", 
    desc: "A highly dedicated delivery and consultation experience. We take absolute accountability for safety and perfect operations.",
    gridSpan: "md:col-span-4"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-32 bg-gradient-to-b from-[#EEF2F7] to-[#F7F8FA] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide">
            Our Edge
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 font-display tracking-tight leading-tight">
            Why Choose Us
          </h2>
          <p className="text-slate-600 font-sans text-lg">
            We prioritize building relationships over simple sales. Discover what sets Shrinit Enterprises apart from typical retail counters.
          </p>
        </div>

        {/* Premium Styled Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`${item.gridSpan} bg-white p-8 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col gap-5`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/50">
                  <Icon size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 font-sans text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
