import Link from "next/link";
import { Mail, Phone, MapPin, Share2, Camera, Video as VideoIcon, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#090011] relative overflow-hidden pt-24 border-t border-white/5">
      {/* Background glowing effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#130022] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo & About Column (Spans 4) */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-3xl inline-block border border-white/10 mb-6 shadow-[0_0_30px_rgba(212,175,55,0.05)]">
               <img src="/logo.jpeg" alt="Changing Minds Prophetic Ministries" className="h-24 md:h-32 w-auto object-contain rounded-2xl" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 pr-4">
              A Christ-centered ministry committed to advancing the Gospel, transforming lives, and impacting communities through profound spiritual growth and social development.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#090011] hover:bg-[#d4af37] hover:border-[#d4af37] transition-all">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#090011] hover:bg-[#d4af37] hover:border-[#d4af37] transition-all">
                <Camera size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#090011] hover:bg-[#d4af37] hover:border-[#d4af37] transition-all">
                <VideoIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column (Spans 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xl font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Our Mission</Link></li>
              <li><Link href="/leadership" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Leadership</Link></li>
              <li><Link href="/sermons" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Latest Messages</Link></li>
            </ul>
          </div>

          {/* Ministries Column (Spans 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-xl font-bold text-white mb-6">Ministries</h4>
            <ul className="space-y-4">
              <li><Link href="/ministries" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Youth & Children</Link></li>
              <li><Link href="/ministries" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Women & Men</Link></li>
              <li><Link href="/impact" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Community Impact</Link></li>
              <li><Link href="/impact#courses" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Short Courses</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter Column (Spans 4) */}
          <div className="lg:col-span-4">
             <h4 className="font-serif text-xl font-bold text-white mb-6">Contact Us</h4>
             <ul className="space-y-4 mb-8">
               <li className="flex gap-3 text-gray-400 text-sm">
                 <MapPin className="text-[#d4af37] shrink-0 mt-0.5" size={18} />
                 <span>Headquarters, National Army Church<br/>South Africa</span>
               </li>
               <li className="flex items-center gap-3 text-gray-400 text-sm">
                 <Phone className="text-[#d4af37] shrink-0" size={18} />
                 <span>+27 71 121 9900</span>
               </li>
               <li className="flex items-center gap-3 text-gray-400 text-sm">
                 <Mail className="text-[#d4af37] shrink-0" size={18} />
                 <span>info@changingminds.co.za</span>
               </li>
             </ul>

             {/* Daily Devotional Newsletter */}
             <div className="glass-card p-1 rounded-full flex items-center border-white/10 ring-1 ring-white/5 focus-within:ring-[#d4af37]/50 transition-all">
                <input 
                  type="email" 
                  placeholder="Subscribe to Daily Words..." 
                  className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-white px-4 w-full"
                />
                <button aria-label="Subscribe" className="bg-[#d4af37] text-[#090011] p-3 rounded-full hover:bg-[#fcf6ba] hover:scale-105 transition-all">
                   <Send size={16} />
                </button>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Changing Minds Prophetic Ministries (National Army). All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
