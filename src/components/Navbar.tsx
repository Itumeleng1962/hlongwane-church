"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (openDropdown === name) setOpenDropdown(null);
    else setOpenDropdown(name);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const navBg = isHome && !isScrolled ? "bg-transparent" : "bg-[#090011]/95 backdrop-blur-lg border-b border-white/10 shadow-xl";
  const mainNavPadding = isHome && !isScrolled ? "py-6" : "py-4";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBg} flex flex-col`}>
      
      {/* Top Header Bar */}
      <div className="bg-[#130022] border-b border-white/5 py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-end items-center space-x-6 text-xs text-gray-400 uppercase tracking-wider font-semibold">
          <Link href="/events" className="hover:text-[#d4af37] transition-colors">Events</Link>
          <Link href="/directory" className="hover:text-[#d4af37] transition-colors">Business Directory</Link>
          <Link href="/blog" className="hover:text-[#d4af37] transition-colors">Blog</Link>
          <Link href="/advertise" className="hover:text-[#d4af37] transition-colors">Advertise</Link>
          <Link href="/donate" className="hover:text-[#d4af37] transition-colors">Donate</Link>
          <Link href="/sermons" className="text-[#d4af37] font-bold flex items-center gap-1 hover:text-[#fcf6ba] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" /> Listen Live
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${mainNavPadding}`}>
        <Link href="/" className="flex items-center group" onClick={closeMenu}>
          <div className="bg-white/5 backdrop-blur-md p-1.5 md:p-2 rounded-[1rem] ring-1 ring-white/10 group-hover:ring-[#d4af37]/70 transition-all shadow-xl">
             <img src="/logo.jpeg" alt="Changing Minds Prophetic Ministries Logo" className="h-12 md:h-16 w-auto object-contain rounded-lg" />
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden xl:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#fcf6ba] transition-colors">Home</Link>
          
          {/* About Dropdown */}
          <div className="relative group">
            <Link href="/about" className="flex items-center gap-1 hover:text-[#fcf6ba] transition-colors py-2">
              About <ChevronDown size={14} className="group-hover:rotate-180 transition-transform"/>
            </Link>
            <div className="absolute top-full left-0 w-48 bg-[#130022] border border-[#d4af37]/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
              <Link href="/about#mission" className="px-4 py-3 hover:bg-white/10 transition-colors">Mission & Vision</Link>
              <Link href="/about#values" className="px-4 py-3 hover:bg-white/10 transition-colors">Core Values</Link>
              <Link href="/about#faith" className="px-4 py-3 hover:bg-white/10 transition-colors">Statement of Faith</Link>
              <Link href="/about#goal" className="px-4 py-3 hover:bg-white/10 transition-colors">Church Goal</Link>
            </div>
          </div>

          {/* Ministries Dropdown */}
          <div className="relative group">
            <Link href="/ministries" className="flex items-center gap-1 hover:text-[#fcf6ba] transition-colors py-2">
              Ministries <ChevronDown size={14} className="group-hover:rotate-180 transition-transform"/>
            </Link>
            <div className="absolute top-full left-0 w-56 bg-[#130022] border border-[#d4af37]/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
              <Link href="/ministries#worship" className="px-4 py-3 hover:bg-white/10 transition-colors">Worship & Creative Arts</Link>
              <Link href="/ministries#youth" className="px-4 py-3 hover:bg-white/10 transition-colors">Youth & Children</Link>
              <Link href="/ministries#women" className="px-4 py-3 hover:bg-white/10 transition-colors">Women & Men</Link>
              <Link href="/ministries#evangelism" className="px-4 py-3 hover:bg-white/10 transition-colors">Evangelism & Missions</Link>
            </div>
          </div>

          {/* Impact Dropdown */}
          <div className="relative group">
            <Link href="/impact" className="flex items-center gap-1 hover:text-[#fcf6ba] transition-colors py-2">
              Impact <ChevronDown size={14} className="group-hover:rotate-180 transition-transform"/>
            </Link>
            <div className="absolute top-full left-0 w-56 bg-[#130022] border border-[#d4af37]/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
              <Link href="/impact#community" className="px-4 py-3 hover:bg-white/10 transition-colors">Community Development</Link>
              <Link href="/impact#job-creation" className="px-4 py-3 hover:bg-white/10 text-[#d4af37] font-bold transition-colors">Job Creation Plan</Link>
              <Link href="/impact#courses" className="px-4 py-3 hover:bg-white/10 transition-colors">Short Courses</Link>
            </div>
          </div>

          <Link href="/leadership" className="hover:text-[#fcf6ba] transition-colors">Leadership</Link>
          <Link href="/sermons" className="hover:text-[#fcf6ba] transition-colors">Sermons</Link>
          <Link href="/contact" className="hover:text-[#fcf6ba] transition-colors">Contact</Link>
        </div>

        <div className="hidden xl:block">
          <Link href="/contact" className="gold-gradient-bg text-[#090011] px-6 py-2 rounded-full font-bold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all">
            Plan a Visit
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="xl:hidden text-[#d4af37] focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#090011] border-b border-[#d4af37]/30 py-4 px-6 flex flex-col space-y-2 max-h-[80vh] overflow-y-auto">
          <Link href="/" className="py-2 hover:text-[#d4af37] border-b border-white/5" onClick={closeMenu}>Home</Link>
          
          <button onClick={() => toggleDropdown('about')} className="flex justify-between items-center py-2 hover:text-[#d4af37] border-b border-white/5 w-full text-left">
            <span>About Us</span> <ChevronDown size={16} className={openDropdown === 'about' ? 'rotate-180' : ''}/>
          </button>
          {openDropdown === 'about' && (
            <div className="pl-4 flex flex-col space-y-2 text-gray-400 py-2">
              <Link href="/about" onClick={closeMenu}>Company Profile</Link>
              <Link href="/about#mission" onClick={closeMenu}>Mission & Vision</Link>
              <Link href="/about#values" onClick={closeMenu}>Core Values</Link>
            </div>
          )}

          <button onClick={() => toggleDropdown('ministries')} className="flex justify-between items-center py-2 hover:text-[#d4af37] border-b border-white/5 w-full text-left">
            <span>Ministries</span> <ChevronDown size={16} className={openDropdown === 'ministries' ? 'rotate-180' : ''}/>
          </button>
          {openDropdown === 'ministries' && (
            <div className="pl-4 flex flex-col space-y-2 text-gray-400 py-2">
              <Link href="/ministries" onClick={closeMenu}>All Ministries</Link>
              <Link href="/ministries#youth" onClick={closeMenu}>Youth & Children</Link>
            </div>
          )}

          <button onClick={() => toggleDropdown('impact')} className="flex justify-between items-center py-2 hover:text-[#d4af37] border-b border-white/5 w-full text-left">
            <span>Impact</span> <ChevronDown size={16} className={openDropdown === 'impact' ? 'rotate-180' : ''}/>
          </button>
          {openDropdown === 'impact' && (
            <div className="pl-4 flex flex-col space-y-2 text-gray-400 py-2">
              <Link href="/impact" onClick={closeMenu}>Community Impact</Link>
              <Link href="/impact#job-creation" onClick={closeMenu} className="text-[#d4af37]">Job Creation Plan</Link>
              <Link href="/impact#courses" onClick={closeMenu}>Short Courses</Link>
            </div>
          )}

          <Link href="/leadership" className="py-2 hover:text-[#d4af37] border-b border-white/5" onClick={closeMenu}>Leadership</Link>
          <Link href="/sermons" className="py-2 hover:text-[#d4af37] border-b border-white/5" onClick={closeMenu}>Sermons</Link>
          <Link href="/contact" className="py-2 hover:text-[#d4af37] border-b border-white/5" onClick={closeMenu}>Contact & Service Times</Link>
          
          <div className="pt-4">
            <Link href="/contact" onClick={closeMenu} className="block w-full gold-gradient-bg text-[#090011] px-6 py-3 rounded-full font-bold text-center">Plan a Visit</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
