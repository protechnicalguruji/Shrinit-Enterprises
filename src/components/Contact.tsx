import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";

export default function Contact() {
  const handleOpenMap = () => {
    window.open("https://goo.gl/maps/embed?pb=!1m18!1m12!1m3!1d114964.53953531542!2d78.0932!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb54ef9556d81!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin", "_blank");
  };

  return (
    <section id="contact" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold tracking-wide">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 font-display tracking-tight leading-tight">
            Contact Shrinit Enterprises
          </h2>
          <p className="text-slate-600 font-sans text-lg">
            Ready to find the ideal appliance for your home? Let us assist you with top recommendations, genuine stock availability, and location support.
          </p>
        </div>

        {/* Premium Split Bento Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Details & Quick Action Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Box 1: Location */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display mb-1">Our Location</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Shrinit Enterprises, Main Market, Gwalior, Madhya Pradesh
                  </p>
                </div>
              </motion.div>

              {/* Box 2: Phone */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display mb-1">Call Us</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    +91 99999 99999
                  </p>
                </div>
              </motion.div>

              {/* Box 3: Email */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display mb-1">Email Us</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    info@shrinitenterprises.com
                  </p>
                </div>
              </motion.div>

              {/* Box 4: Hours */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-[24px] border border-slate-200/50 shadow-premium hover:shadow-glow bento-card flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display mb-1">Business Hours</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-mono">
                    Mon - Sat: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-[18px] font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-500/25 active:scale-[0.98] flex-1 min-w-[200px]"
              >
                <Phone size={18} /> Call Business
              </a>
              <a 
                href="https://wa.me/919999999999"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-[18px] font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-emerald-500/25 active:scale-[0.98] flex-1 min-w-[200px]"
              >
                <MessageCircle size={18} /> Chat via WhatsApp
              </a>
            </div>

            <button
              onClick={handleOpenMap}
              className="group flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-200 py-4 rounded-[18px] font-semibold hover:bg-slate-50 transition-all w-full shadow-sm"
            >
              Google Maps Webpage <ExternalLink size={16} />
            </button>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-6 min-h-[400px] rounded-[28px] overflow-hidden border border-slate-200/60 shadow-lg relative">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53953531542!2d78.0932!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb54ef9556d81!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Google Maps Location for Shrinit Enterprises in Gwalior"
             />
          </div>

        </div>
      </div>
    </section>
  );
}
