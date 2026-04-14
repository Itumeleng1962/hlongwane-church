"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const events = [
    {
      title: "Sunday Service & Worship",
      date: "Every Sunday",
      time: "09:00 AM - 12:00 PM",
      location: "Main Sanctuary",
      description: "Join us for a powerful time of worship, prayer, and an inspiring message from the Word of God.",
      image: "/worship_hero.png"
    },
    {
      title: "Mid-Week Bible Study",
      date: "Every Wednesday",
      time: "18:00 PM - 19:30 PM",
      location: "Fellowship Hall",
      description: "Dive deep into Scripture as we explore biblical truths and how they apply to our daily lives.",
      image: "/worship_hero.png"
    },
    {
      title: "Youth Revival Night",
      date: "August 24, 2026",
      time: "17:00 PM - 20:00 PM",
      location: "Youth Center",
      description: "A special night dedicated to youth empowerment, dynamic worship, and fellowship.",
      image: "/worship_hero.png"
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
            Upcoming <span className="gold-gradient-text">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Join our community in fellowship, worship, and spiritual growth. Discover what&apos;s happening this week at Changing Minds Prophetic Ministries.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="bg-[#130022] rounded-[2rem] overflow-hidden border border-white/5 flex flex-col md:flex-row group hover:border-[#d4af37]/30 transition-colors"
              >
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                   {/* Fallback pattern in case image doesn't load */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#2e0c4a] to-[#130022] opacity-80 z-0"/>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover relative z-10 opacity-70 group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-2xl font-serif font-bold text-[#fcf6ba] mb-4">{event.title}</h3>
                  <p className="text-gray-400 mb-6 font-light leading-relaxed">{event.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar size={16} className="text-[#d4af37]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Clock size={16} className="text-[#d4af37]" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-8">
                    <MapPin size={16} className="text-[#d4af37]" />
                    <span>{event.location}</span>
                  </div>

                  <Link href="/contact" className="inline-block gold-gradient-bg text-[#090011] px-6 py-2.5 rounded-full font-bold w-max hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all text-sm">
                    Plan to Visit
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
