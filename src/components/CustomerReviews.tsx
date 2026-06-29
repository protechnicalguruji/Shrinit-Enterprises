import { motion } from "motion/react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Sharma",
    location: "Lashkar, Gwalior",
    rating: 5,
    text: "Purchased a premium double-door refrigerator from Shrinit Enterprises. The guidance was incredibly honest, advising me on the exact energy-saving model suitable for my family's needs. Highly recommended for genuine products!",
    date: "June 2026"
  },
  {
    name: "Priyanka Gupta",
    location: "City Centre, Gwalior",
    rating: 5,
    text: "Excellent collection of LED TVs and brilliant post-purchase support. They managed the installation swiftly and explained all the smart features patiently. Excellent service standard!",
    date: "May 2026"
  },
  {
    name: "Amit Patel",
    location: "DD Nagar, Gwalior",
    rating: 5,
    text: "Highly reliable local store. I bought two inverter ACs; their pricing is very competitive, and the delivery was executed on the promised schedule. Absolutely transparent deals.",
    date: "April 2026"
  }
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 font-display tracking-tight leading-tight">
            Customer Reviews
          </h2>
          <p className="text-slate-600 font-sans text-lg">
            Hear from our satisfied customers in Gwalior who have experienced our honest guidance and dependable services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-slate-200 pointer-events-none">
                <Quote size={40} className="opacity-40" />
              </div>

              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 font-sans text-base leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/40 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 font-display text-base">
                      {review.name}
                    </h4>
                    <CheckCircle2 size={14} className="text-blue-600" title="Verified Customer" />
                  </div>
                  <p className="text-xs text-slate-500 font-sans">
                    {review.location}
                  </p>
                </div>
                <span className="text-xs text-slate-400 font-mono font-medium">
                  {review.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
