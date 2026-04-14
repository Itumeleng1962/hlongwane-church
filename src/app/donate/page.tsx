"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Landmark, CreditCard, Smartphone } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="pb-20 bg-[#090011] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#d4af37]/15 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-20 relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#d4af37]/10 mb-6 border border-[#d4af37]/30">
            <HeartHandshake className="text-[#d4af37] w-10 h-10" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Give & <span className="gold-gradient-text">Partner</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
          </p>
        </div>
      </section>

      {/* Give Sections */}
      <section className="py-12 relative z-10 flex-grow">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass-card p-8 rounded-[2rem] text-center border-t-4 border-t-[#d4af37]">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Landmark className="text-[#d4af37]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Direct Bank Transfer</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Set up an EFT or recurring payment directly from your banking app.
              </p>
              <div className="bg-[#090011] p-4 rounded-xl border border-white/10 text-left text-sm font-mono text-gray-300">
                <p><span className="text-gray-500">Bank:</span> Standard Bank</p>
                <p><span className="text-gray-500">Acc Name:</span> CMPM</p>
                <p><span className="text-gray-500">Acc No:</span> 0000 000 000</p>
                <p><span className="text-gray-500">Branch:</span> 000000</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-[2rem] text-center border-t-4 border-t-[#d4af37]">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6">
                <CreditCard className="text-[#d4af37]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Online Payment</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Give instantly using your credit or debit card through our secure portal.
              </p>
              <button className="gold-gradient-bg text-[#090011] px-6 py-3 rounded-full font-bold w-full mt-auto hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                Give Online Now
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-8 rounded-[2rem] text-center border-t-4 border-t-[#d4af37]">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Smartphone className="text-[#d4af37]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SnapScan / Zapper</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Scan the QR code with your smartphone for a quick and completely cashless donation.
              </p>
              <div className="w-32 h-32 mx-auto bg-white rounded-xl p-2 flex items-center justify-center text-gray-800 text-xs font-bold text-center">
                QR Code Placeholder
              </div>
            </motion.div>

          </div>

          <div className="bg-[#130022] p-8 md:p-12 rounded-[2.5rem] border border-[#d4af37]/20 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[80px] -z-0" />
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold text-[#fcf6ba] mb-4">Where Does Your Seed Go?</h2>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-0 font-light">
                Your tithes, offerings, and donations empower Changing Minds Prophetic Ministries to keep the lights on, support our global outreach crusades, fund the youth empowerment programs, construct better facilities, and provide meals for the less fortunate in our immediate communities. Thank you for partnering with us to expand the Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
