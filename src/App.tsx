import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Menu, 
  Search, 
  ShoppingBag, 
  Diamond, 
  Timer, 
  Cpu, 
  Award, 
  ArrowRight, 
  Globe, 
  Share2 
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(19, 19, 19, 0)', 'rgba(19, 19, 19, 0.9)']
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen font-sans">
      <div className="mesh-bg" />
      
      {/* Navigation */}
      <motion.header 
        style={{ backgroundColor: headerBg }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'border-white/10 py-6' : 'border-transparent py-10'} backdrop-blur-xl`}
      >
        <div className="px-6 md:px-16 flex justify-between items-center max-w-[1920px] mx-auto">
          <div className="flex items-center gap-8 md:gap-12">
            <Menu className="text-gold w-6 h-6 cursor-pointer" />
            <nav className="hidden lg:flex gap-8">
              <a href="#" className="font-serif tracking-[0.25em] uppercase text-[10px] text-gold border-b border-gold pb-1 px-1">Collections</a>
              <a href="#" className="font-serif tracking-[0.25em] uppercase text-[10px] text-white/60 hover:text-white transition-colors duration-500">Heritage</a>
              <a href="#" className="font-serif tracking-[0.25em] uppercase text-[10px] text-white/60 hover:text-white transition-colors duration-500">Boutiques</a>
            </nav>
          </div>
          
          <h1 className="text-xl md:text-2xl font-serif tracking-[0.5em] text-white absolute left-1/2 -translate-x-1/2">HOROLOGUE</h1>
          
          <div className="flex items-center gap-6 md:gap-8">
            <Search className="text-gold w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
            <ShoppingBag className="text-gold w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/80 z-10" />
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHDhZPi60z0f6WfgQW-muL_4ik6J3coCrC9sd_eEglJ04qJhAcvVYAfjtcUSTB7yKpEzY6cei0e4Wb0lpKGmxzX_rZUQafLUiDpz3X9BHHFsBOj_ojUhZK1FXgaRX3uP_AsliAwcpDBSCVHj03fRSo7HXXG-y55HBYAu54Q5kao36K4Oq8ktNpMngfIS96_4TpEREQufi35M84Nu-QgHKiaqBmYcIEn79tJjZKOk-lDe053DA_CX5GYCuwQZsf0ttaZbKHanJ_xxW6"
            className="w-full h-full object-cover scale-105 opacity-80"
            alt="Hero Background"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[10px] font-semibold tracking-[0.3em] text-gold mb-6 block uppercase"
          >
            Established 1884
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="font-serif text-5xl md:text-8xl text-white mb-8 font-light leading-tight"
          >
            The Art of Precision
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-[1px] bg-gold mx-auto mb-10"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-sans text-lg text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Beyond the movement of hands lies a century of mastery. Each HOROLOGUE timepiece is a testament to the pursuit of absolute chronometric excellence.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gold text-charcoal font-sans text-xs font-bold tracking-[0.2em] transition-all hover:brightness-110 rounded-xl"
          >
            EXPLORE THE ARCHIVE
          </motion.button>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 md:py-40 px-6 md:px-16 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-12">
          <div>
            <span className="font-sans text-[10px] font-semibold tracking-[0.3em] text-gold mb-3 block uppercase">New Arrivals</span>
            <h3 className="font-serif text-3xl md:text-4xl text-white">Featured Collection</h3>
          </div>
          <a href="#" className="font-sans text-xs font-semibold tracking-[0.2em] text-white/50 hover:text-gold transition-colors underline underline-offset-[12px] group">
            VIEW ALL SERIES
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Card */}
          <motion.div {...fadeIn} className="md:col-span-8 group cursor-pointer glass-panel p-6 rounded-[32px] border-white/10">
            <div className="aspect-[16/10] mb-8 overflow-hidden rounded-[24px] bg-white/5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE0SDTI5XLQaGxytqRUEwdBj_mEyA76BGWUNfBdTGDUUl_QAzjgff0WQGr9O7-b_zjNCpYKP4oN0KsJ1_JAo35QPzV-cTrdmV2oQXDhZL7rBydheBFeE1fzPzY5Rom3lIYJMK0FH7F_tgHoYW6o-cm-jlxsi3NuB1H6CE8l0FyTxDuUyq8KDW1ZzCKweZC9HRNU9qOZSSjybsNdd6c6m_KeW5Kr1vwc4RClq4c6ah64ZQgYcswXRuM6DSQz1qMMJjRtwrXMuVqIbOQ"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Astrum Chronograph"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-serif text-2xl text-white mb-2">Astrum Chronograph</h4>
                <p className="font-sans text-sm text-white/40 tracking-wide uppercase">Limited Edition Gold & Deep Navy</p>
              </div>
              <span className="font-sans text-lg text-gold font-light">$24,500</span>
            </div>
          </motion.div>

          {/* Secondary Card */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="md:col-span-4 group cursor-pointer glass-panel p-6 rounded-[32px] border-white/10">
            <div className="aspect-[4/5] mb-8 overflow-hidden rounded-[24px] bg-white/5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCen66cueSX1JXbO-GogXtA5AOG5-SoSwtNv0tG1836-GI5qYM_SiT1fFU0uQT-mafuXLBHQDBfcdQ6zNgBKJL1fxO_WABYWWcHVNKPRA0JB0749C1--B0wgQM5xwNj96PiZUuAFvBBzcJoUYiuuiIk7IfwWwKY11tlf4AwVSUQmD2oHbL4IvY5p5gIM4Yqy4BrSq8HiJ4AZN1BReGg0cjlLk1lPO4KX9NS1PjQsLaJQy33113fvyZiAR8UL6FkK4IaBLRbDQuWO6kS"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Vanguard Skeleton"
              />
            </div>
            <h4 className="font-serif text-xl text-white mb-2">Vanguard Skeleton</h4>
            <p className="font-sans text-sm text-white/40">$18,200</p>
          </motion.div>

          {/* Third Card */}
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="md:col-span-4 group cursor-pointer glass-panel p-6 rounded-[32px] border-white/10">
            <div className="aspect-[4/5] mb-8 overflow-hidden rounded-[24px] bg-white/5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTGh8tfaPi4l0BU4_vgrnicGr1KM5T0O9njIkzENuKwU6hVHW91Z2Wo89q1SLRDxAuwNkkvZj09qjhSMk2DH4T-D6pK__jPa_riqMbkXTaoiljLuiwHcVykluiwZv4eB3gJgVbyOTnsLhItrZ2JCC2uSNBizNadT9TL7SCd2JNRS1rYd-Y-4-ZKFPL8ICI8LbKCza_F3fDQWdoaOn6j3RpOyYCmVX6P8piSIzF_HWiUfhOxeYR0yNQz-bm8iGbfYt9L9mtZuBZA1yB"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Oceanus Deep Sea"
              />
            </div>
            <h4 className="font-serif text-xl text-white mb-2">Oceanus Deep Sea</h4>
            <p className="font-sans text-sm text-white/40">$12,800</p>
          </motion.div>

          {/* Quote Card */}
          <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="md:col-span-8 flex flex-col justify-center p-12 lg:p-20 glass-panel rounded-[32px] border-white/10">
            <p className="font-serif text-3xl md:text-5xl text-white/70 leading-snug mb-12 italic">
              "A masterpiece doesn't just tell time; it defines the moment it captures."
            </p>
            <div className="flex flex-wrap gap-6 mt-auto">
              <button className="px-10 py-4 border border-white/20 text-white font-sans text-[10px] font-bold tracking-[0.2em] hover:border-gold hover:text-gold transition-all uppercase rounded-lg bg-white/5">
                View Specifications
              </button>
              <button className="px-10 py-4 bg-gold text-charcoal font-sans text-[10px] font-bold tracking-[0.2em] hover:brightness-110 transition-all uppercase rounded-lg">
                Pre-order Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-1/2 h-full opacity-[0.03] flex items-center justify-end pointer-events-none">
          <span className="text-[600px] font-serif text-white leading-none -translate-y-20">H</span>
        </div>
        
        <div className="px-6 md:px-16 max-w-[1440px] mx-auto glass-panel p-10 md:p-20 rounded-[48px] border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 z-10">
            <motion.span {...fadeIn} className="font-sans text-[10px] font-semibold tracking-[0.3em] text-gold mb-4 block uppercase">The Movement</motion.span>
            <motion.h2 {...fadeIn} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl text-white mb-10 leading-tight">Mastery in Motion</motion.h2>
            <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="font-sans text-lg text-white/50 mb-12 leading-relaxed">
              Every caliber is assembled by hand in our Geneva atelier. Over 300 individual components, many smaller than a grain of sand, are meticulously fitted to achieve a tolerance of 0.001mm.
            </motion.p>
            
            <ul className="space-y-8 mb-16">
              {[
                { icon: Diamond, title: "32 JEWEL RUBY ESCAPEMENT" },
                { icon: Timer, title: "72 HOUR POWER RESERVE" },
                { icon: Cpu, title: "ANTI-MAGNETIC HAIRSPRING" }
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  {...fadeIn}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  className="flex items-center gap-6 border-b border-white/5 pb-4"
                >
                  <item.icon className="text-gold w-6 h-6 stroke-1" />
                  <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">{item.title}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.button 
              {...fadeIn}
              transition={{ delay: 0.6 }}
              className="font-sans text-[10px] font-bold tracking-[0.2em] text-gold flex items-center gap-3 group uppercase"
            >
              Discover the Calibre H-01 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative z-10 glass-panel rounded-[32px] p-2 overflow-hidden border-white/10 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOeBDGWI1yG1sckqJSJk5xdviiykdrkghA3XadU-YkSaf3NoPtrofeKw4BHC8CIgDODU4-oEuhYQdbSAaz7zjez4SQMp_8R5hFswCIdSwDC4r6qg5lUBTex8IQFZ8xb2W9Uki_exU1ZCjAWUBycdq5_Aea8Sxw17i-LOnEPURYhmQwBaUxMZdOJXEZq7xB3ldFkgBAlS9kUDoVCcELr81X3wKqPBhzUZvoP1xIYi7iSkQnXPKmr6lhl74bYOLi98HMlAlkeaYjuJh"
                className="w-full aspect-square md:aspect-auto md:h-[600px] object-cover rounded-[24px]"
                alt="Watch Movement"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 border border-gold/10 hidden xl:block" />
          </motion.div>
        </div>
      </section>

      {/* Exclusive Access */}
      <section className="py-24 md:py-40 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-panel p-12 md:p-24 relative overflow-hidden rounded-[48px] shadow-2xl border-white/10"
        >
          <div className="absolute -top-6 left-1/2 -track-x-1/2 bg-indigo-900/40 backdrop-blur-md border border-white/10 p-4 rounded-full -translate-x-1/2">
            <Award className="text-gold w-10 h-10 stroke-1" />
          </div>
          
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 font-light">Exclusive Access</h2>
            <p className="font-sans text-white/50 max-w-lg mx-auto leading-relaxed">
              Join our private circle of collectors to receive early invitations to new series releases and bespoke horological events.
            </p>
          </div>

          <form className="max-w-md mx-auto space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <label className="block font-sans text-[10px] font-bold tracking-[0.3em] text-white/40 text-left uppercase">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="collector@horologue.com"
                className="w-full bg-white/5 border-b border-white/20 pb-4 px-4 pt-4 rounded-t-lg text-white font-sans focus:border-gold focus:outline-none transition-colors placeholder:text-white/10"
              />
            </div>
            <button className="w-full py-5 bg-gold text-charcoal font-sans text-xs font-bold tracking-[0.3em] hover:brightness-110 transition-all uppercase rounded-xl shadow-lg shadow-gold/10">
              Request Invite
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-black/40 pt-32 pb-16 backdrop-blur-lg">
        <div className="flex flex-col gap-16 items-center px-6 md:px-16 max-w-[1920px] mx-auto">
          <h2 className="text-xl md:text-2xl font-serif tracking-[0.5em] text-white">HOROLOGUE</h2>
          
          <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['Collections', 'Heritage', 'Boutiques', 'Service'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="font-serif text-[10px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-all hover:tracking-[0.4em]"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <div className="flex gap-10">
            <Globe className="text-gold/60 w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
            <Share2 className="text-gold/60 w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
          </div>
          
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-white/20">
              © 2024 HOROLOGUE GENÈVE. PRECISION DEFINED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
