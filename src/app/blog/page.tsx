"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "The Power of Prophetic Intercession",
      excerpt: "Understanding how targeted prayer shifts atmospheres and shapes the destiny of our communities in perilous times.",
      author: "Apostle Msizi",
      date: "August 12, 2026",
      category: "Sermon Recaps",
      image: "/worship_hero.png"
    },
    {
      title: "Community Outreach: Impacting Lives Locally",
      excerpt: "Highlights from our recent youth development drive and how your contributions provided 500 meals this past weekend.",
      author: "Church Administration",
      date: "August 05, 2026",
      category: "Outreach",
      image: "/worship_hero.png"
    },
    {
      title: "Navigating Financial Struggles with Faith",
      excerpt: "A biblical perspective on wealth, stewardship, and trusting God's provision even when the economy seems unstable.",
      author: "Pastor Sarah",
      date: "July 28, 2026",
      category: "Devotionals",
      image: "/worship_hero.png"
    }
  ];

  return (
    <div className="pb-20 bg-[#090011] min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#2e0c4a]/50 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-20 relative z-10 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Church <span className="gold-gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Inspiration, devotionals, outreach updates, and recap notes from our weekly sermons.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#130022] rounded-[2rem] overflow-hidden border border-white/5 flex flex-col group hover:border-[#d4af37]/30 transition-all shadow-xl"
              >
                <div className="h-56 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#130022] to-transparent z-10" />
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#090011]/80 backdrop-blur-md text-[#d4af37] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#fcf6ba] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs text-gray-400 font-medium">
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-[#d4af37]"/>
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#d4af37]"/>
                      {post.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="gold-gradient-bg text-[#090011] px-8 py-3 rounded-full font-bold hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
              Load More Posts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
