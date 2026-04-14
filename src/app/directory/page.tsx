"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Phone, Briefcase } from "lucide-react";

export default function DirectoryPage() {
  const businesses = [
    {
      name: "Kingdom Builders Construction",
      category: "Construction & Maintenance",
      owner: "John Doe",
      location: "Johannesburg",
      phone: "+27 11 000 0000",
      description: "Professional construction services, renovations, and property maintenance."
    },
    {
      name: "Grace Accounting Services",
      category: "Finance & Accounting",
      owner: "Sarah Smith",
      location: "Pretoria",
      phone: "+27 82 000 0000",
      description: "Tax consulting, bookkeeping, and financial advisory for small businesses."
    },
    {
      name: "Eternal Media Solutions",
      category: "Digital & Marketing",
      owner: "Michael Ndlovu",
      location: "Centurion",
      phone: "+27 73 000 0000",
      description: "Web development, branding, and digital marketing strategies."
    },
    {
      name: "Blessed Hands Logistics",
      category: "Transport & Logistics",
      owner: "David K.",
      location: "Midrand",
      phone: "+27 60 000 0000",
      description: "Reliable freight and transport services across the province."
    }
  ];

  return (
    <div className="pb-20 bg-[#090011] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#2e0c4a]/50 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-20 relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Business <span className="gold-gradient-text">Directory</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Support local kingdom enterprises. Discover and connect with businesses owned by members of our congregation.
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Search Bar */}
          <div className="bg-[#130022] border border-white/10 rounded-full p-2 flex items-center mb-12 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="pl-4 text-gray-400">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search for services, businesses, or owners..." 
              className="bg-transparent border-none text-white px-4 py-3 w-full focus:outline-none placeholder:text-gray-500"
            />
            <button className="gold-gradient-bg text-[#090011] px-6 py-3 rounded-full font-bold ml-2">
              Search
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businesses.map((biz, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-all flex flex-col h-full"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#d4af37] text-xs font-semibold mb-4 w-max">
                  {biz.category}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{biz.name}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{biz.description}</p>
                
                <div className="space-y-3 pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Briefcase size={16} className="text-[#d4af37]" />
                    <span>Owned by {biz.owner}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <MapPin size={16} className="text-[#d4af37]" />
                    <span>{biz.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-sm">
                    <Phone size={16} className="text-[#d4af37]" />
                    <span>{biz.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Are you a church member looking to list your business?</p>
            <a href="/advertise" className="inline-block border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 px-8 py-3 rounded-full font-semibold transition-colors">
              Submit Your Business
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
