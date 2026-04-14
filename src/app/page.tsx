"use client";

import { motion } from "framer-motion";
import { Heart, Users, BookOpen, PlayCircle, Phone, ArrowRight, Headphones, Calendar, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#130022] text-white">

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        {/* background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/worship_hero.png"
            alt="Worship background"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#090011]/80 via-[#130022]/70 to-[#130022]" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[150px]" />
        </div>

        {/* content — top padding accounts for fixed navbar (~88px tall) */}
        <div className="relative z-10 container mx-auto px-6 pt-44 md:pt-52 pb-28 md:pb-36 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >


            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 max-w-4xl">
              Experience the <br />
              <span className="gold-gradient-text">Power of God</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed max-w-2xl">
              Changing Minds Prophetic Ministries — rebuilding and restoring the truth of His Word in every life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/sermons"
                className="px-8 py-4 gold-gradient-bg text-[#090011] font-bold rounded-full text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <PlayCircle size={22} /> Watch Live
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full text-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-all flex items-center justify-center gap-2"
              >
                Connect With Us <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── QUICK LINKS (naturally below hero, no absolute overlap) ─── */}
      <section className="bg-[#090011] py-12 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BookOpen,   title: "Our Mission",        desc: "Discover our vision",    link: "/about" },
              { icon: Headphones, title: "Sermons & Word",     desc: "Listen & be inspired",   link: "/sermons" },
              { icon: Calendar,   title: "Service Times",      desc: "Join us this Sunday",    link: "/contact" },
              { icon: FileText,   title: "Short Courses",      desc: "SETA/NQF Aligned",       link: "/impact#courses" },
            ].map((item, i) => (
              <Link href={item.link} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#130022] border border-white/10 border-t-2 border-t-[#d4af37] rounded-2xl p-6 text-center hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all group"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center text-[#d4af37] mb-4 group-hover:bg-[#d4af37] group-hover:text-[#090011] transition-all">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-bold font-serif text-white text-sm md:text-base mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs hidden md:block">{item.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LATEST MESSAGES ─── */}
      <section className="py-24 bg-[#090011]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-3">
                Latest <span className="gold-gradient-text">Messages</span>
              </h2>
              <p className="text-gray-400 max-w-xl">Deep, practical teachings designed to equip you for daily victory.</p>
            </div>
            <Link href="/sermons" className="hidden md:flex items-center gap-2 text-[#d4af37] font-semibold hover:text-[#fcf6ba] transition-colors border-b border-[#d4af37] pb-0.5 mt-6 md:mt-0">
              View All Sermons <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Walking in Divine Favor",          category: "Sunday Word",           img: "/serm1.png" },
              { title: "Spiritual Growth & Leadership",    category: "Discipleship Class",    img: "/serm2.png" },
              { title: "Christ in Me – The Hope of Glory", category: "Wednesday Empowerment", img: "/bible.png" },
            ].map((msg, i) => (
              <Link href="/sermons" key={i} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 ring-1 ring-white/10 group-hover:ring-[#d4af37]/60 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090011] via-transparent to-transparent z-10" />
                  <img
                    src={msg.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={msg.title}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#d4af37] text-[#090011] text-xs font-bold uppercase py-1 px-3 rounded-full">{msg.category}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 w-11 h-11 bg-white/10 backdrop-blur rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-all">
                    <PlayCircle className="text-white group-hover:text-[#090011]" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-serif group-hover:text-[#d4af37] transition-colors">{msg.title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">Apostle Msizi uncovers timeless truths of scripture to equip believers for daily victory.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPACT SPLIT ─── */}
      <section className="py-24 bg-[#130022] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden ring-1 ring-white/10">
                <img
                  src="/impact.png"
                  className="w-full aspect-[4/3] object-cover"
                  alt="Community Impact"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#090011] border border-[#d4af37]/30 p-6 rounded-2xl shadow-2xl max-w-[220px]">
                <p className="font-serif font-bold text-3xl gold-gradient-text">100+</p>
                <p className="text-gray-400 text-xs mt-1">Jobs created through our enterprises & learnerships</p>
              </div>
            </div>

            <div>
              <div className="inline-block px-4 py-1.5 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">Community Impact</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Empowering youth <br /><span className="gold-gradient-text">spiritually & socially</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                We conduct tent crusades, community and school outreach programs aimed at combating poverty, loving the unloved, and helping the helpless within our communities.
              </p>
              <ul className="space-y-4 mb-10">
                {["Extensive Job Creation Plan", "7 Pillars of SETA/NQF Short Courses", "Faith-Based Entrepreneurship Program"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                      <Heart size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/impact" className="inline-flex items-center gap-2 text-[#d4af37] font-semibold border-b border-[#d4af37] pb-0.5 hover:text-[#fcf6ba] transition-colors">
                Read our Full Impact Plan <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHATSAPP GROUP ─── */}
      <section className="bg-[#130022] py-20 relative z-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/30 p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm">
             <div className="absolute top-0 right-0 w-80 h-80 bg-[#25D366]/20 rounded-full blur-[100px]" />
             
             <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-white relative z-10">WhatsApp Group</h2>
             <h3 className="text-xl md:text-2xl text-[#25D366] font-semibold mb-6 relative z-10">Join our WhatsApp Community</h3>
             <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto relative z-10 font-light leading-relaxed">
               Stay updated with instant announcements, devotionals, and prayer requests.
             </p>
             <Link href="#" className="bg-[#25D366] text-[#090011] font-bold text-lg px-10 py-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all relative z-10 inline-flex items-center gap-3 mx-auto">
               Join Group
             </Link>
          </div>
        </div>
      </section>

      {/* ─── JOIN US BANNER ─── */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#1e0535] to-[#090011]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <Heart className="mx-auto text-[#d4af37] w-14 h-14 mb-6 opacity-80" />
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            "This is more than a church, <br className="hidden md:block"/>
            <span className="gold-gradient-text">it's a home."</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you're new to faith or seeking a fresh start — you belong here. Connect with us in person or online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 gold-gradient-bg text-[#090011] font-bold rounded-full text-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 transition-all flex items-center gap-2">
              <Phone size={20} /> Contact Us
            </Link>
            <Link href="/ministries" className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-full text-lg hover:border-[#d4af37] hover:text-[#d4af37] transition-all flex items-center gap-2">
              <Users size={20} /> Our Ministries
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
