"use client";

import { motion } from "framer-motion";
import { Megaphone, Mail, ShieldCheck } from "lucide-react";

export default function AdvertisePage() {
  return (
    <div className="pb-20 bg-[#090011] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#d4af37]/15 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-20 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af37]/10 mb-6 border border-[#d4af37]/30">
            <Megaphone className="text-[#d4af37] w-10 h-10" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Advertise <span className="gold-gradient-text">With Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Reach a dedicated, local demographic. Showcase your business or services to our growing congregation across all our media platforms.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card p-10 rounded-[2rem]">
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#fcf6ba]">Why Advertise Here?</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <ShieldCheck className="text-[#d4af37] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-bold mb-1">Targeted Audience</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Connect directly with families, professionals, and community leaders who value trust and integrity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="text-[#d4af37] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-bold mb-1">Multi-Channel Exposure</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Your adverts will feature out across our website directory, weekly newsletter, and Sunday church bulletin.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldCheck className="text-[#d4af37] shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-white font-bold mb-1">Support Kingdom Goals</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Your advertising fee goes directly into funding our local outreach and youth development programs.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-[#130022] p-10 rounded-[2rem] border border-white/5 shadow-2xl">
              <h2 className="text-2xl font-serif font-bold mb-6 text-white">Request an Ad Pack</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Business Name</label>
                  <input type="text" className="w-full bg-[#090011] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Contact Email</label>
                  <input type="email" className="w-full bg-[#090011] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Advertising Interest</label>
                  <select className="w-full bg-[#090011] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50">
                    <option>Website Banner Ads</option>
                    <option>Business Directory Premium Listing</option>
                    <option>Sunday Bulletin Print Ad</option>
                    <option>Digital Screens (In-Service)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                  <textarea rows={4} className="w-full bg-[#090011] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37]/50"></textarea>
                </div>
                <button type="submit" className="w-full gold-gradient-bg text-[#090011] py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                  <Mail size={18} /> Send Inquiry
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
