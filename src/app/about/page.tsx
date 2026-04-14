"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Heart, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2e0c4a]/50 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#d4af37]/40 bg-[#d4af37]/10 rounded-full text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Isaiah 52:7
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            About <span className="gold-gradient-text">Our Ministry</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light italic leading-relaxed">
            &ldquo;How beautiful on the mountains are the feet of the messenger bringing good news, proclaiming good times, announcing salvation, telling Zion, Your God reigns!&rdquo;
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-24 bg-[#090011]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative">
              <div className="rounded-[2.5rem] overflow-hidden ring-1 ring-white/10 relative z-10 w-full h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#130022] via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src="/worship_hero.png" 
                  alt="Church congregation worshiping" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#d4af37]/20 rounded-full blur-[80px] z-0" />
            </motion.div>

            {/* Text Side */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card p-10 md:p-14 rounded-[2rem] relative z-10">
              <h2 className="text-4xl font-bold mb-6 font-serif text-[#fcf6ba]">Who We Are</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                Changing Minds Prophetic Ministries (National Army) is a Christ-centered Christian ministry committed to advancing the Gospel of Jesus Christ, transforming lives, and impacting communities through spiritual growth, social development, leadership training, and practical outreach initiatives.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                The church exists to serve God, equip believers, and address both spiritual and socio-economic challenges within society. We intentionally create a welcoming, seeker-sensitive environment where non-believers can explore the Christian faith at their own pace, without pressure or judgment.
              </p>
              <div className="grid grid-cols-2 gap-6 p-6 bg-[#130022] rounded-2xl border border-white/5">
                <div>
                  <h4 className="text-[#d4af37] font-bold text-xs uppercase tracking-widest mb-1">Founded</h4>
                  <p className="text-white font-medium">10 Dec 2014</p>
                </div>
                <div>
                  <h4 className="text-[#d4af37] font-bold text-xs uppercase tracking-widest mb-1">Founder</h4>
                  <p className="text-white font-medium">Apostle Msizi</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-[#130022]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass-card p-10 rounded-2xl border-l-4 border-l-[#d4af37]">
              <Globe className="text-[#d4af37] w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4 font-serif">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To strengthen and grow the global church by supporting ministries of compassion, developing leaders, and sharing the good news. We are committed to advancing youth development across Africa by empowering young people spiritually, socially, and economically.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We conduct tent crusades, community, and school outreach programs aimed at combating poverty and crime, loving the unloved, and helping the helpless within our communities.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-10 rounded-2xl border-l-4 border-l-[#d4af37]">
              <Shield className="text-[#d4af37] w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4 font-serif">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To proclaim repentance and salvation to the lost, leading people back to God through the truth of His Word. We are committed to rebuilding and restoring God&apos;s Word within His children, equipping believers to live in obedience, faith, and righteousness.
              </p>
              <p className="text-gray-300 leading-relaxed">
                To raise spiritually mature believers who live according to biblical principles, demonstrate Christ-like character, and actively transform communities through faith, service, and love.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20 bg-[#090011]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Core <span className="gold-gradient-text">Values</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">The principles that guide everything we do as a ministry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Open Acceptance", desc: "We care about where you are going, not where you have been. Every person is welcome regardless of their past." },
              { title: "Respectful Witness", desc: "We believe we are a global covenant family united in Christ and living as incarnational Christian witnesses who are called to exist in harmony with diverse societies." },
              { title: "Long-Term Mutual Relationships", desc: "We are dependent on God, passionate about what we do, and committed to deep, meaningful partnership with those we serve." },
              { title: "Holistic Engagement", desc: "We believe in a global, reformational vision of God's kingdom in which we engage a fallen creation through the power and nature of Christ." }
            ].map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="glass-card p-8 rounded-2xl flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Heart size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-serif">{val.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section id="faith" className="py-20 bg-[#130022]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-4xl font-bold mb-10 text-center">Statement of <span className="gold-gradient-text">Faith</span></h2>
          <div className="bg-[#090011] p-8 md:p-12 rounded-3xl border border-[#d4af37]/20 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-[#fcf6ba]">We Believe In:</h3>
            <ul className="space-y-5">
              {[
                "One God, eternally existing as Father, Son, and Holy Spirit",
                "The Bible as the inspired, infallible Word of God",
                "Salvation by grace through faith in Jesus Christ",
                "The death, resurrection, and second coming of Jesus Christ",
                "The work and gifts of the Holy Spirit",
                "The importance of baptism, communion, prayer, and discipleship",
                "The Church as the body of Christ, called to serve the world"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#d4af37] shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Church Goal */}
      <section id="goal" className="py-20 bg-[#090011]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Our Church <span className="gold-gradient-text">Goal</span></h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            The primary goal of Changing Minds Prophetic Ministries is to glorify God by raising spiritually mature, socially responsible, and community-focused believers who live out the teachings of Jesus Christ.
          </p>
          <div className="inline-block p-[2px] rounded-full gold-gradient-bg">
            <div className="bg-[#090011] px-8 py-4 rounded-full">
              <span className="font-bold text-[#fcf6ba] text-lg uppercase tracking-wider">
                Ultimate Goal: Build a Christ-centered, self-sustaining community
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
