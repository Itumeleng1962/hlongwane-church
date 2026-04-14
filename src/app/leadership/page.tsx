"use client";

import { motion } from "framer-motion";
import { UserCircle2, ShieldCheck, Scale, Network } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[160px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#d4af37]/40 bg-[#d4af37]/10 rounded-full text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Servant Leaders
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gold-gradient-text">Leadership</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Guided by God&apos;s Word and a deep passion for the community, our leadership serves with wisdom, love, and accountability.
          </p>
        </div>
      </section>

      {/* Senior Leadership Section */}
      <section className="py-24 bg-[#130022]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Senior <span className="gold-gradient-text">Leadership</span></h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto font-light leading-relaxed">
              With a mandate to win souls for Christ and awaken believers to biblical truth, our senior leadership leads with practical teachings that equip believers for everyday victory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-20">
            {/* Apostle Msizi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full mb-10 group">
                <div className="absolute inset-0 rounded-full border-4 border-[#d4af37]/30 p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130022]/80 to-transparent z-10 rounded-full" />
                  <img
                    src="/msizi.jpeg"
                    alt="Apostle Msizi Hlongwane"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#090011] text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full whitespace-nowrap z-20 shadow-xl">
                  Founder
                </div>
              </div>
              <h3 className="text-3xl font-bold font-serif mb-4 text-white">Apostle Msizi Hlongwane</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Founded Changing Minds Prophetic Ministries on 10 December 2014. What began as a movement focused on rescuing struggling churches has grown into an international ministry reaching thousands.
              </p>
            </motion.div>

            {/* Mam Fundisi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full mb-10 group">
                <div className="absolute inset-0 rounded-full border-4 border-[#d4af37]/30 p-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130022]/80 to-transparent z-10 rounded-full" />
                  <img
                    src="/mam fundisi.jpeg"
                    alt="Mam Fundisi Mam Hlongwane"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#090011] text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full whitespace-nowrap z-20 shadow-xl">
                  Mam Fundisi
                </div>
              </div>
              <h3 className="text-3xl font-bold font-serif mb-4 text-white">Mam Hlongwane</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Walking alongside the Apostle, Mam Fundisi provides extraordinary pastoral support, care, and guidance, playing a critical role in the oversight, growth, and spiritual health of the community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-24 bg-[#090011]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">
              Governance <span className="gold-gradient-text">Structure</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Our operations align with biblical principles, South African NPO regulations, and stringent corporate governance standards to ensure transparency, ethical conduct, and financial accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: ShieldCheck, title: "Board of Elders & Trustees", desc: "Guiding the spiritual direction, doctrinal purity, and overarching legal governance of the ministry." },
              { Icon: Network,     title: "Management Committee",       desc: "Overseeing day-to-day administrative operations, staff, and practical logistics of the church." },
              { Icon: UserCircle2, title: "Ministry Departments",       desc: "Department Heads implementing specific programs, outreach, and discipleship initiatives." },
              { Icon: Scale,       title: "Associate Pastors",          desc: "Executing pastoral care, biblical teaching, counselling, and member support throughout the congregation." },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] mb-5">
                  <Icon size={28} />
                </div>
                <h4 className="text-lg font-bold font-serif text-white mb-3">{title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
