"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pb-20">
      {/* ── Hero Header ── */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#2e0c4a]/60 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#d4af37]/40 bg-[#d4af37]/10 rounded-full text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            We&apos;d Love to Hear From You
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Get in <span className="gold-gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            &ldquo;This is more than a church, it&apos;s a home — and you are always welcome.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="py-20 bg-[#090011]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-10">
              
              {/* WhatsApp Community Banner */}
              <div className="glass-card p-6 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-[#25D366]/10 z-0 group-hover:bg-[#25D366]/20 transition-all"></div>
                <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                  <img src="/whatsapp group.jpeg" alt="WhatsApp Group" className="w-24 h-24 rounded-full ring-4 ring-[#25D366]/30 object-cover shadow-lg" />
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white mb-2">Join our WhatsApp Community</h3>
                    <p className="text-gray-400 text-sm mb-4">Stay updated with instant announcements, devotionals, and prayer requests.</p>
                    <a href="https://wa.me/27711219900" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all">
                      Join Group <Send size={14} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-serif mb-8 text-white">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37] shrink-0 border border-white/10">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">Church Address</h5>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        National Army Headquarters<br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37] shrink-0 border border-white/10">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">Phone / WhatsApp</h5>
                      <p className="text-gray-400 text-sm">+27 71 121 9900</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#d4af37] shrink-0 border border-white/10">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h5 className="font-bold text-lg mb-1">Email &amp; Web</h5>
                      <p className="text-gray-400 text-sm">info@changingminds.co.za</p>
                      <p className="text-[#d4af37] text-sm">www.changingminds.co.za</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div className="pt-6 border-t border-white/10">
                <h2 className="text-3xl font-bold font-serif mb-8 text-white flex items-center gap-3">
                  <Clock className="text-[#d4af37]" size={28} /> Service Times
                </h2>
                <div className="space-y-4">
                  {[
                    { day: "Sunday Worship", times: [{ label: "First Service", time: "09:00 AM" }, { label: "Second Service", time: "11:00 AM" }] },
                    { day: "Wednesday Empowerment", times: [{ label: "Evening Service", time: "06:00 PM" }] },
                    { day: "Friday Prayer Night", times: [{ label: "Night Watch", time: "07:00 PM" }] },
                  ].map((s, i) => (
                    <div key={i} className="glass-card p-6 rounded-2xl border-l-4 border-l-[#d4af37]">
                      <h4 className="font-bold font-serif text-white mb-3">{s.day}</h4>
                      <div className="space-y-1.5">
                        {s.times.map((t, j) => (
                          <div key={j} className="flex justify-between items-center text-sm text-gray-300">
                            <span>{t.label}</span>
                            <span className="font-mono text-[#d4af37] font-bold">{t.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="glass-card p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 blur-[80px] rounded-full pointer-events-none -mr-10 -mt-10" />
                <h2 className="text-3xl font-bold font-serif mb-3">Send a Message</h2>
                <p className="text-gray-400 text-sm mb-8">Seeking prayer, community, or have questions about our ministry? We&apos;d love to hear from you!</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">First Name</label>
                      <input type="text" className="w-full bg-[#090011]/80 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Last Name</label>
                      <input type="text" className="w-full bg-[#090011]/80 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white transition-all text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full bg-[#090011]/80 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white transition-all text-sm" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Subject</label>
                    <select className="w-full bg-[#090011]/80 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] text-white text-sm cursor-pointer appearance-none">
                      <option>General Inquiry</option>
                      <option>Prayer Request</option>
                      <option>Ministry Information</option>
                      <option>Partnership &amp; Giving</option>
                      <option>Short Courses Enrollment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Your Message</label>
                    <textarea rows={5} className="w-full bg-[#090011]/80 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-white transition-all resize-none text-sm"></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient-bg text-[#090011] px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
