"use client";

import { motion } from "framer-motion";
import { PlayCircle, Video, Search } from "lucide-react";

export default function SermonsPage() {
  const sermons = [
    { title: "Walking in Divine Favor - Part 1", series: "Divine Favor", date: "Last Sunday", img: 1 },
    { title: "Walking in Divine Favor - Part 2", series: "Divine Favor", date: "2 Weeks Ago", img: 2 },
    { title: "The Power of the Holy Spirit", series: "Spiritual Awakening", date: "3 Weeks Ago", img: 3 },
    { title: "Understanding Grace", series: "Foundations", date: "4 Weeks Ago", img: 4 },
    { title: "Overcoming Anxiety with Faith", series: "Healing Mind", date: "1 Month Ago", img: 5 },
    { title: "Faith That Moves Mountains", series: "Faith Builders", date: "1 Month Ago", img: 6 },
  ];

  return (
    <div className="pb-20 bg-[#090011]">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#130022]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[140px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#d4af37]/40 bg-[#d4af37]/10 rounded-full text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                Digital Ministry
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold">
                Latest <span className="gold-gradient-text">Sermons</span>
              </h1>
            </div>
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search sermons, series, speakers..."
                className="w-full bg-[#090011] border border-white/10 rounded-full px-5 py-3 pl-12 focus:outline-none focus:border-[#d4af37] text-white transition-colors text-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="rounded-[2rem] overflow-hidden relative group cursor-pointer ring-1 ring-white/10 hover:ring-[#d4af37]/50 transition-all">
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all z-10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-[#d4af37]/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <PlayCircle size={48} className="text-white drop-shadow-xl" />
              </div>
            </div>
            <div className="relative" style={{ aspectRatio: "21/7" }}>
              <img
                src="/bible.png"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                alt="Featured Sermon"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-[#090011] via-[#090011]/70 to-transparent z-20">
                <div className="bg-[#d4af37] text-[#090011] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                  LIVE NOW
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold mb-2">The Fire of Revival</h2>
                <p className="text-gray-300 md:text-lg">Apostle Msizi Hlongwane &bull; Sunday Worship &bull; Streaming Live</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Grid */}
      <section className="py-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-3 mb-10">
            <Video className="text-[#d4af37]" size={24} />
            <h3 className="text-2xl font-bold font-serif">Recent Messages</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 ring-1 ring-white/10 group-hover:ring-[#d4af37]/60 transition-all">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10 flex items-center justify-center">
                    <PlayCircle
                      size={44}
                      className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all drop-shadow-xl"
                      strokeWidth={1.5}
                    />
                  </div>
                  <img
                    src={`https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop&sig=${item.img}`}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    alt={item.title}
                  />
                </div>
                <h4 className="font-bold text-lg font-serif group-hover:text-[#d4af37] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm mt-1">{item.series} &bull; {item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
