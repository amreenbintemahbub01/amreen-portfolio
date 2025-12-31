import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Book,
  PenTool,
  Code,
  Sparkles,
  Mail,
  ChevronRight,
  Library,
  ScrollText,
  Coffee,
  Heart,
  Flame,
  User,
  Type,
  FileText,
  Instagram,
  Linkedin,
  Facebook,
  Send,
  Bookmark,
  X,
  Eye,
  Zap,
  ShieldCheck,
  Stethoscope,
  Briefcase,
  Snowflake,
  Activity
} from 'lucide-react';

const isMobile = typeof window !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent);

// --- COMPONENT: SPECTRAL CURSOR GLOW ---
const SpectralGlow = () => {
  if (isMobile) return null;
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ willChange: 'transform' }}
      animate={{ x: mousePos.x - 125, y: mousePos.y - 125 }}
      transition={{ type: "spring", damping: 40, stiffness: 250, mass: 0.5 }}
    >
      <div className="w-[250px] h-[250px] bg-[#F06292]/10 rounded-full blur-[80px] transform-gpu" />
    </motion.div>
  );
};

// --- COMPONENT: AMBIENT GLOW ---
const AmbientGlow = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 select-none">
    <div className="absolute -top-[10%] -left-[10%] w-[80vw] h-[80vw] bg-[#F8BBD0] rounded-full blur-[100px] transform-gpu" />
    <div className="absolute top-[40%] -right-[20%] w-[70vw] h-[70vw] bg-[#F48FB1] rounded-full blur-[90px] transform-gpu" />
  </div>
);

// --- HOME SECTION ---
const HomeSection = ({ onNavigate }) => {
  const [isPortraitTapped, setIsPortraitTapped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] px-4 pt-4 transform-gpu">
      <motion.div
        className="relative mb-8 md:mb-12 cursor-pointer"
        onClick={() => setIsPortraitTapped(!isPortraitTapped)}
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.96 }}
      >
        <div className="w-52 h-52 md:w-80 md:h-80 rounded-[45px] border-4 md:border-8 border-white shadow-2xl overflow-hidden bg-pink-100 transform-gpu transition-shadow hover:shadow-pink-200/50">
          <img
            src="https://images2.imgbox.com/ae/a1/AEcxuBao_o.jpg"
            alt="Amreen"
            className="w-full h-full object-cover"
          />
          <AnimatePresence>
            {isPortraitTapped && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#880E4F]/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-white text-center"
              >
                <Sparkles size={20} className="mb-2 text-pink-300 animate-pulse" />
                <p className="font-bold text-[10px] uppercase tracking-widest mb-1">Author | Editor | Web Builder</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute -top-4 -right-4 bg-[#D81B60] p-3 rounded-full text-white shadow-lg"
        >
          <Sparkles size={20} />
        </motion.div>
      </motion.div>

      <motion.h1 className="text-5xl md:text-9xl font-black text-[#880E4F] mb-4 tracking-tighter">
        <motion.span
          animate={{ textShadow: ["0 0 5px rgba(216,27,96,0)", "0 0 20px rgba(216,27,96,0.6)", "0 0 5px rgba(216,27,96,0)"] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="inline-block"
        >
          Amreen
        </motion.span>
        <span className="text-[#F06292] font-light italic text-2xl md:text-6xl block md:inline-block md:ml-4">Author.</span>
      </motion.h1>

      <p className="text-base md:text-2xl text-[#AD1457] max-w-xl font-medium mb-10 leading-snug">
        Storyteller & web weaver. <br className="hidden md:block" />
        Writing: <span className="text-[#D81B60] italic border-b-2 border-dotted border-[#D81B60]">Whispers & Hurtbeats.</span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs md:max-w-sm">
        <motion.button
          whileHover={{ y: -5, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('book')}
          className="bg-[#D81B60] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl w-full transition-shadow hover:shadow-pink-300/40"
        >
          Open Spellbook <ChevronRight size={18} />
        </motion.button>
        <motion.button
          whileHover={{ y: -5, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('contact')}
          className="bg-white text-[#D81B60] border-2 border-[#D81B60] py-4 rounded-2xl font-bold w-full transition-colors hover:bg-pink-50"
        >
          Send an Owl
        </motion.button>
      </div>
    </div>
  );
};

// --- ABOUT SECTION ---
const AboutSection = ({ onNavigate }) => (
  <div className="space-y-16 py-10 px-2 max-w-5xl mx-auto transform-gpu">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-black text-[#4E342E]">The Story Behind the Quill</h2>
          <div className="w-16 h-1.5 bg-[#F06292] rounded-full mt-2" />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl text-[#5D4037] leading-relaxed font-medium opacity-80">
          I've always believed that words are our most inexhaustible source of magic. I find beauty in the messy, the poetic, and the intense.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.02, rotate: -1, x: 5 }}
          className="bg-white/60 backdrop-blur-sm p-8 rounded-[40px] border-l-8 border-[#D81B60] italic text-xl shadow-lg text-[#880E4F] cursor-help transition-all"
        >
          "A girl like her does not need a man but most men need a girl like her."
        </motion.div>
      </div>

      <div className="space-y-6">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-[50px] border border-[#F8BBD0] shadow-2xl"
        >
          <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-[#880E4F]">
            <Flame className="text-[#D81B60]" size={32} /> Amreen's Lore
          </h3>
          <ul className="space-y-6">
            {[
              { icon: <ScrollText size={24} />, text: "Award-winning content writer" },
              { icon: <Coffee size={24} />, text: "Fueled by coffee and slow-burn tropes" },
              { icon: <PenTool size={24} />, text: "Current Novelist: Whispers & Hurtbeats" },
              { icon: <Heart className="text-[#D81B60]" size={24} />, text: "Gryffindor Spirit" }
            ].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-lg font-semibold text-[#5D4037] group cursor-default"
              >
                <motion.span whileHover={{ rotate: 15, scale: 1.1 }} className="p-3 bg-white rounded-2xl text-[#D81B60] shadow-sm">
                  {item.icon}
                </motion.span>
                {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>

    {/* Social Media Links */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center space-y-6 pt-12 border-t border-pink-100/50"
    >
      <h3 className="text-xl md:text-2xl font-black text-[#880E4F] uppercase tracking-widest">Connect With Me</h3>
      <div className="flex gap-8">
        {[
          { icon: <Linkedin size={28} />, url: "https://www.linkedin.com/in/amreen-binte-mahbub-72aab92a8/" },
          { icon: <Facebook size={28} />, url: "https://www.facebook.com/amreen.bintamahbub" },
          { icon: <Instagram size={28} />, url: "https://www.instagram.com/amreen_binte_/" }
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-white rounded-full text-[#D81B60] shadow-lg hover:shadow-pink-300/40 hover:bg-[#D81B60] hover:text-white transition-all duration-300"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  </div>
);

// --- BOOKSHELF SECTION ---
const BookshelfSection = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const works = [
    { id: 1, title: "Whispers & Hurtbeats", tag: "Novel", color: "bg-[#880E4F]", icon: <Book size={28} />, lore: "She built a luxury empire to hide her scars; he’s learning to heal the wounds he isn't allowed to touch." },
    { id: 2, title: "The 10MS Chronicles", tag: "Editorial", color: "bg-[#FCE4EC]", icon: <ScrollText size={28} />, lore: "Curated insights on modern storytelling and digital media." },
    { id: 3, title: "Aesthetic Web Guide", tag: "Design", color: "bg-[#F8BBD0]", icon: <Code size={28} />, lore: "A handbook for crafting interfaces that feel ethereal." },
    { id: 4, title: "Ink & Pixel", tag: "Creative", color: "bg-[#F48FB1]", icon: <PenTool size={28} />, lore: "The intersection of traditional prose and digital art." },
    { id: 5, title: "The Modern Quill", tag: "Magazine", color: "bg-[#D81B60]", icon: <Library size={28} />, lore: "Literary excellence through a contemporary lens." },
    { id: 6, title: "Critical HP Analysis", tag: "Essay", color: "bg-[#AD1457]", icon: <Sparkles size={28} />, lore: "A deep dive into the sociology of magical worlds." },
  ];

  return (
    <div className="py-8 transform-gpu">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-[#880E4F]">The Bookshelf</h2>
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {works.map((work) => (
          <motion.div
            key={work.id}
            layoutId={`book-card-${work.id}`}
            onClick={() => setSelectedBook(work)}
            whileHover={{ y: -15, scale: 1.02, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            className={`${work.color} h-60 md:h-80 rounded-[30px] p-6 flex flex-col justify-end shadow-xl cursor-pointer relative overflow-hidden transform-gpu outline-none border-none ring-0`}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className={`mb-auto transition-transform group-hover:scale-110 ${[2, 3, 4].includes(work.id) ? 'text-[#D81B60]' : 'text-white/80'}`}>{work.icon}</div>
            <div className="z-10">
              <p className={`text-[9px] uppercase font-black tracking-widest opacity-80 mb-1 ${[2, 3, 4].includes(work.id) ? 'text-[#880E4F]' : 'text-white'}`}>{work.tag}</p>
              <h3 className={`font-bold text-sm md:text-base leading-tight ${[2, 3, 4].includes(work.id) ? 'text-[#5D4037]' : 'text-white'}`}>{work.title}</h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </motion.div>
        ))}
      </div>

      {createPortal(
        <AnimatePresence>
          {selectedBook && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedBook(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />
              <motion.div
                layoutId={`book-card-${selectedBook.id}`}
                className="bg-white rounded-[40px] w-full max-w-lg overflow-hidden shadow-2xl relative z-10 transform-gpu"
                transition={{ type: "spring", damping: 25, stiffness: 400 }}
              >
                <div className={`${selectedBook.color} h-48 flex items-center justify-center text-white relative overflow-hidden`}>
                  <button onClick={(e) => { e.stopPropagation(); setSelectedBook(null); }} className="absolute top-6 right-6 p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors"><X size={24} /></button>
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 2.2, opacity: 1 }} transition={{ delay: 0.1 }} className="transform-gpu">{selectedBook.icon}</motion.div>
                </div>
                <div className="p-8 md:p-12 space-y-5">
                  <span className="text-xs font-black uppercase text-[#D81B60] tracking-widest">{selectedBook.tag}</span>
                  <h3 className="text-3xl font-black text-[#880E4F]">{selectedBook.title}</h3>
                  <p className="text-lg text-[#5D4037] leading-relaxed italic font-serif opacity-90">"{selectedBook.lore}"</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

// --- CURRENT BOOK SECTION ---
const CurrentBookSection = () => (
  <div className="py-8 px-2 max-w-5xl mx-auto space-y-12 transform-gpu">
    <div className="text-center">
      <motion.h2
        animate={{ scale: [1, 1.02, 1] }} transition={{ repeat: Infinity, duration: 3 }}
        className="text-4xl md:text-7xl font-black text-[#880E4F] tracking-tighter"
      >
        Whispers & Hurtbeats
      </motion.h2>
      <p className="text-pink-500 italic text-lg md:text-xl mt-3 flex items-center justify-center gap-3">
        The Surgeon <X size={16} /> The Silent Heiress
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[50px] border border-pink-100 shadow-2xl space-y-8">
        <div>
          <h3 className="text-2xl font-black text-[#D81B60] mb-4">The Plot Summary</h3>
          <p className="text-lg leading-relaxed text-[#5D4037] font-medium italic opacity-90">
            "Two souls orbiting the event horizon of trauma. When the surgeon who can fix any heart meets the woman who has frozen hers, the collision is inevitable."
          </p>
        </div>

        <div className="space-y-4">
          {/* Irtiaz Profile */}
          <motion.div
            whileHover={{ x: 10, scale: 1.02 }}
            className="bg-pink-50/50 p-6 rounded-3xl border border-pink-100 hover:border-[#D81B60] transition-all cursor-default transform-gpu"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-black flex items-center gap-3 text-[#880E4F] text-lg">
                <Stethoscope size={24} className="text-[#D81B60]" /> Irtiaz Ashraf
              </h4>
              <Activity size={18} className="text-[#F06292] opacity-40 animate-pulse" />
            </div>
            <p className="text-sm italic opacity-80 leading-relaxed text-[#5D4037]">
              A brooding surgeon fueled by a secret oath of revenge, navigating hospital corridors like a labyrinth of his own making.
            </p>
          </motion.div>

          {/* Yushra Profile */}
          <motion.div
            whileHover={{ x: 10, scale: 1.02 }}
            className="bg-blue-50/30 p-6 rounded-3xl border border-blue-100 hover:border-blue-400 transition-all cursor-default transform-gpu"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-black flex items-center gap-3 text-[#1A237E] text-lg">
                <Briefcase size={24} className="text-blue-600" /> Yushra Zuberi
              </h4>
              <Snowflake size={18} className="text-blue-400 opacity-40" />
            </div>
            <p className="text-sm italic opacity-80 leading-relaxed text-[#5D4037]">
              A brilliant corporate heir with a heart carved from ice, hiding scars that run deeper than any scalpel could reach.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <motion.div
          whileHover={{ scale: 1.03, rotate: -0.5 }}
          className="flex-1 bg-gradient-to-br from-[#880E4F] to-[#51082d] p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden group cursor-default transform-gpu"
        >
          <Sparkles className="text-pink-300 mb-8 w-10 h-10" />
          <p className="text-3xl md:text-4xl font-light italic leading-snug relative z-10">
            "The scalpel doesn't just cut skin—it cuts through the lies we tell ourselves to survive."
          </p>
          <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12 transition-transform duration-700 group-hover:rotate-0">
            <Book size={250} />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white p-8 rounded-[40px] flex justify-between items-center shadow-xl border border-pink-50 transform-gpu transition-all"
        >
          <div>
            <p className="text-[10px] uppercase font-black text-[#D81B60] tracking-widest mb-1">Status: Active Drafting</p>
            <p className="text-2xl font-bold text-[#880E4F]">Chapter 14</p>
          </div>
          <div className="text-right">
            <p className="text-6xl font-black text-[#D81B60]">50%</p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

// --- SKILLS SECTION ---
const SkillsSection = () => {
  const [key, setKey] = useState(0);
  return (
    <div className="py-8 text-center px-2 transform-gpu">
      <div className="flex flex-col items-center gap-4 mb-14">
        <h2 className="text-3xl md:text-5xl font-black text-[#880E4F]">Magic Abilities</h2>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setKey(k => k + 1)}
          className="group flex items-center gap-2 px-6 py-3 bg-white rounded-full text-xs font-black tracking-widest text-[#D81B60] border-2 border-pink-100 shadow-sm transition-colors hover:bg-pink-50"
        >
          <Zap size={16} fill="currentColor" /> RECHARGE MANA
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <PenTool size={30} />, name: "Creative Writing", level: "90%" },
          { icon: <FileText size={30} />, name: "Manuscript Editing", level: "90%" },
          { icon: <Book size={30} />, name: "Narrative Design", level: "50%" },
          { icon: <Type size={30} />, name: "Content Strategy", level: "95%" }
        ].map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white/80 p-8 rounded-[40px] border border-white shadow-lg transition-shadow hover:shadow-pink-100/50 transform-gpu"
          >
            <div className="text-[#D81B60] mb-6 flex justify-center">{skill.icon}</div>
            <h4 className="font-black text-base mb-4 text-[#4E342E]">{skill.name}</h4>
            <div className="h-2 bg-pink-100 rounded-full overflow-hidden">
              <motion.div key={key} initial={{ width: 0 }} animate={{ width: skill.level }} transition={{ duration: 1.5, ease: "circOut" }} className="h-full bg-gradient-to-r from-[#D81B60] to-[#F06292]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- CONTACT SECTION ---
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [isSealed, setIsSealed] = useState(false);

  const handleSend = () => {
    if (!formData.name || !formData.message) return;
    const body = encodeURIComponent(`Name: ${formData.name}\n\n${formData.message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=amreenbintemahbub@gmail.com&body=${body}`, '_blank');
  };

  return (
    <div className="py-8 max-w-2xl mx-auto px-4 transform-gpu">
      <h2 className="text-3xl md:text-6xl font-black text-center mb-12 text-[#880E4F] tracking-tighter">The Owl Post</h2>
      <div className="relative">
        <motion.div
          animate={isSealed ? { rotateY: 5, scale: 0.98, opacity: 0.95 } : {}}
          whileHover={!isSealed ? { rotateZ: -0.5 } : {}}
          className="bg-[#FFFDF9] p-8 md:p-16 rounded-[40px] shadow-2xl border-l-[20px] border-[#D81B60] relative overflow-hidden transform-gpu transition-all duration-700"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
          <div className="space-y-10 relative z-10">
            <div className="flex flex-col md:flex-row gap-4 items-center border-b border-pink-100 pb-2">
              <span className="text-sm font-black text-[#D81B60] uppercase tracking-tighter">Dear Amreen,</span>
              <input disabled={isSealed} placeholder="Type your name here..." className="w-full bg-transparent outline-none text-2xl italic font-serif text-[#5D4037]" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <textarea disabled={isSealed} placeholder="Write your magical whisper..." rows={5} className="w-full bg-transparent outline-none text-xl leading-relaxed italic font-serif resize-none text-[#5D4037]" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-12 gap-6 relative z-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSealed(!isSealed)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-black text-[10px] tracking-widest border-2 transition-all ${isSealed ? 'bg-[#D81B60] text-white border-[#D81B60]' : 'text-[#D81B60] border-pink-100 hover:bg-pink-50'}`}
            >
              {isSealed ? <ShieldCheck size={16} /> : <Zap size={16} />}
              {isSealed ? "✓ SEALED" : "○ WAX SEAL"}
            </motion.button>
            <motion.button
              whileHover={isSealed ? { scale: 1.05, x: 5 } : {}}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend} disabled={!isSealed}
              className={`bg-[#D81B60] text-white px-14 py-5 rounded-full text-base font-black shadow-xl hover:bg-[#880E4F] transition-all flex items-center gap-3 ${!isSealed ? 'opacity-30 cursor-not-allowed scale-95' : 'scale-100'}`}
            >
              DISPATCH <Send size={18} />
            </motion.button>
          </div>
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-white/50 rounded-[40px] translate-y-4 translate-x-4 border border-pink-50" />
      </div>
    </div>
  );
};

// --- MAIN APP ---
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <HomeSection onNavigate={setActiveSection} />;
      case 'about': return <AboutSection onNavigate={setActiveSection} />;
      case 'book': return <CurrentBookSection />;
      case 'bookshelf': return <BookshelfSection />;
      case 'skills': return <SkillsSection />;
      case 'contact': return <ContactSection />;
      default: return <HomeSection onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-[#5D4037] font-serif selection:bg-[#F48FB1] selection:text-white overflow-x-hidden relative">
      <AmbientGlow />
      <SpectralGlow />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#D81B60] z-[100] origin-left shadow-sm transform-gpu" style={{ scaleX }} />

      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md border border-pink-100 px-3 py-2 rounded-full shadow-2xl flex gap-1 items-center max-w-[95vw] overflow-x-auto no-scrollbar ring-1 ring-white/50 transform-gpu">
        {['home', 'about', 'book', 'bookshelf', 'skills', 'contact'].map((item) => (
          <button key={item} onClick={() => setActiveSection(item)} className={`relative px-5 py-2.5 capitalize text-[10px] md:text-xs font-black transition-all rounded-full whitespace-nowrap z-10 ${activeSection === item ? 'text-white' : 'text-[#880E4F] hover:bg-pink-50'}`}>
            {activeSection === item && (
              <motion.div layoutId="nav-pill" className="absolute inset-0 bg-[#D81B60] rounded-full z-[-1]" transition={{ type: "spring", damping: 20, stiffness: 150 }} />
            )}
            {item}
          </button>
        ))}
      </nav>

      <main className="relative z-10 pt-6 pb-40 px-4 max-w-6xl mx-auto transform-gpu min-h-[90vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
