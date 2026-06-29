import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-900/80">
          
          {/* Logo & Info column */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-display tracking-tight">
              Shrinit Enterprises
            </h3>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Your award-winning home appliance and electronics store based in Gwalior. Elevating daily living with handpicked genuine technology and premium local care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button 
                  onClick={() => handleScroll("about")} 
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll("offerings")} 
                  className="hover:text-white transition-colors text-left"
                >
                  What We Offer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll("why-choose-us")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll("reviews")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScroll("contact")} 
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Info
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-4 space-y-4 text-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 font-mono">
              Business Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0" />
                <span>Main Market, Gwalior, Madhya Pradesh, IN</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-blue-500 shrink-0" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-blue-500 shrink-0" />
                <span>info@shrinitenterprises.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright and small links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Shrinit Enterprises. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
