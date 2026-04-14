"use client";

import { motion } from "framer-motion";
import { Mic2, Users, BookOpen, Globe, Laptop, Heart, GraduationCap, ArrowRight } from "lucide-react";

export default function MinistriesPage() {
  const departments = [
    {
      id: "worship",
      icon: Mic2,
      title: "Worship & Creative Arts",
      desc: "Bringing the presence of God through anointed praise, music, and creative expression.",
      items: ["Praise and worship", "Music and choir", "Media, sound, and production"]
    },
    {
      id: "youth",
      icon: Users,
      title: "Youth & Children's Ministry",
      desc: "Raising the next generation of bold, faith-filled leaders equipped for the world.",
      items: ["Sunday school", "Youth empowerment programs", "Mentorship and leadership development"]
    },
    {
      id: "teaching",
      icon: BookOpen,
      title: "Teaching & Discipleship",
      desc: "Grounding believers in the uncompromising truth of God's Word for daily victory.",
      items: ["Bible study and doctrinal training", "Leadership and ministry training", "New believers' classes"]
    },
    {
      id: "women",
      icon: Heart,
      title: "Women's & Men's Ministry",
      desc: "Building strong, godly men and women who lead with integrity in home and society.",
      items: ["Godly leadership development", "Mentorship and accountability", "Spiritual growth and fellowship", "Family and life skills support"]
    },
    {
      id: "evangelism",
      icon: Globe,
      title: "Evangelism & Missions",
      desc: "Taking the Gospel beyond the four walls into communities, cities, and nations.",
      items: ["Local and international outreach", "Community evangelism programs", "Church planting initiatives"]
    },
    {
      id: "community",
      icon: Users,
      title: "Community Development",
      desc: "Serving the practical needs of our community with the love of Christ.",
      items: ["Poverty alleviation initiatives", "Food parcels and humanitarian aid", "Skills development and training", "Youth mentorship"]
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "Education & Skills",
      desc: "Equipping the saints practically for real-world impact through SETA-aligned training.",
      items: ["Leadership and ministry training", "Entrepreneurship workshops", "Faith-based counselling"]
    },
    {
      id: "digital",
      icon: Laptop,
      title: "Digital Ministry & Innovation",
      desc: "Spreading the Gospel through cutting-edge technology and digital platforms.",
      items: ["Online services and live streaming", "Church management systems", "Social media evangelism", "E-learning portals"]
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#d4af37]/8 rounded-full blur-[160px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#d4af37]/40 bg-[#d4af37]/10 rounded-full text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            8 Ministry Departments
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gold-gradient-text">Ministries</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Discover the different arms of our ministry — each designed to build up the church, empower communities, and impact the world with the Gospel.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-[#130022]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                id={dept.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-8 rounded-[2rem] border-t-4 border-[#d4af37] flex flex-col group hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-all">
                  <dept.icon className="text-[#d4af37] group-hover:text-[#090011] transition-all" size={26} />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif">{dept.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{dept.desc}</p>
                <ul className="space-y-2.5 mt-auto border-t border-white/8 pt-6">
                  {dept.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-[#090011] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/worship_hero.png" className="w-full h-full object-cover opacity-30" alt="Worship hands" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090011] via-[#090011]/60 to-[#090011]" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Join a <span className="gold-gradient-text">Ministry</span> Today</h2>
          <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Every believer has a calling. Find your place in the body of Christ and start making an impact in your community alongside passionate believers.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 gold-gradient-bg text-[#090011] font-bold rounded-full text-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 transition-all">
            Get Involved <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
