import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // account for floating nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "About Us", id: "about" },
    { label: "What We Offer", id: "offerings" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Reviews", id: "reviews" },
    { label: "Contact Us", id: "contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4`}
      >
        <div
          className={`mx-auto max-w-7xl rounded-[24px] transition-all duration-500 border ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-[0_8px_30px_rgb(15,23,42,0.03)] py-3 px-6 md:px-8"
              : "bg-transparent border-transparent py-4 px-4"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 group cursor-pointer text-left"
            >
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold font-display text-lg shadow-md shadow-blue-500/10">
                S
              </span>
              <div>
                <span className="text-lg font-bold text-slate-900 tracking-tight block font-display">
                  Shrinit Enterprises
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 block font-mono font-bold leading-none">
                  Electronics & Appliances
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="px-5 py-2 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all cursor-pointer font-sans"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => handleScrollTo("contact")}
                className="group flex items-center gap-1.5 bg-slate-900 text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-all shadow-sm active:scale-95 cursor-pointer font-sans"
              >
                Inquire Now
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100/80 hover:bg-slate-100 text-slate-800 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 z-40 p-6 md:hidden"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[24px] border border-slate-200/80 shadow-xl p-6 space-y-6">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleScrollTo("contact")}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition-all shadow-md shadow-blue-500/10 cursor-pointer"
                >
                  Inquire Now
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
