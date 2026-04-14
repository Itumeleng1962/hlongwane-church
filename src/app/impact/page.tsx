"use client";

import { motion } from "framer-motion";
import { Briefcase, BookOpen, GraduationCap, Building2 } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#090011]">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-6 pt-44 pb-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#d4af37]/40 bg-[#d4af37]/10 rounded-full text-[#d4af37] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            Community Development
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Social <span className="gold-gradient-text">Impact</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            We are firmly committed to advancing youth development across Africa by empowering young people spiritually, socially, and economically.
          </p>
        </div>
      </section>

      {/* Graphic Banner */}
      <div className="container mx-auto px-6 max-w-7xl -mt-16 relative z-20 mb-16">
        <div className="rounded-[2.5rem] overflow-hidden h-[400px] ring-1 ring-white/10 relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#130022] via-[#130022]/40 to-transparent z-10" />
          <img 
            src="/impact.png" 
            alt="Community volunteers packing supplies" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute bottom-10 left-10 z-20">
            <h2 className="text-4xl font-serif font-bold text-white max-w-2xl">
              Faith Without Works is Dead. <br />
              <span className="text-[#d4af37]">We are the Hands and Feet of Jesus.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Job Creation Plan */}
      <section id="job-creation" className="py-20 bg-[#130022]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Job Creation <span className="gold-gradient-text">Plan</span></h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
              In response to high unemployment levels, the ministry has developed a practical Job Creation Plan aligned with our spiritual mandate. Goal: 50–100 jobs created over 3 years.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card p-10 rounded-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/15 flex items-center justify-center mb-6 text-[#d4af37]">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4">Direct Employment</h3>
              <ul className="space-y-3 mt-4 text-sm text-gray-400 border-t border-white/10 pt-4">
                <li className="flex gap-2 items-start"><BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />Church Administrators &amp; Bookkeepers</li>
                <li className="flex gap-2 items-start"><BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />Media, IT &amp; Technical Assistants</li>
                <li className="flex gap-2 items-start"><BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />Facility Maintenance &amp; Security Staff</li>
                <li className="flex gap-2 items-start"><BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />Community Outreach Coordinators</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card p-10 rounded-3xl">
              <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/15 flex items-center justify-center mb-6 text-[#d4af37]">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4">Skills &amp; Learnerships</h3>
              <ul className="space-y-3 mt-4 text-sm text-gray-400 border-t border-white/10 pt-4">
                <li className="flex gap-2 items-start"><BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />Office Administration &amp; Project Management</li>
                <li className="flex gap-2 items-start"><BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />Media &amp; Digital Skills</li>
                <li className="flex gap-2 items-start"><BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />Community Development Learnerships</li>
                <li className="flex gap-2 items-start"><BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />Stipend-backed placements into employment</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass-card p-10 rounded-3xl md:col-span-2">
              <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/15 flex items-center justify-center mb-6 text-[#d4af37]">
                <Building2 size={28} />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-4">Community Enterprises</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2 border-t border-white/10 pt-6">
                {[
                  { name: "Catering & Events", desc: "Cooking, coordination, and events management." },
                  { name: "Cleaning & Facilities", desc: "Maintenance of church, schools, and offices." },
                  { name: "Media & Printing", desc: "Video editing, graphic design, uniform sewing & branding." },
                ].map((e, i) => (
                  <div key={i}>
                    <strong className="text-white block mb-2 font-serif">{e.name}</strong>
                    <p className="text-gray-400 text-xs leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section id="courses" className="py-20 bg-[#090011]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-4">Empowering <span className="gold-gradient-text">Short Courses</span></h2>
              <p className="text-gray-400 text-sm leading-relaxed">Faith-based, community-focused, and skills-oriented. Designed for youth, unemployed members, and emerging leaders.</p>
            </div>
            <div className="bg-[#d4af37]/10 px-6 py-3 rounded-full text-[#d4af37] font-bold text-sm border border-[#d4af37]/20 mt-6 md:mt-0">
              SETA / NQF Aligned
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "A", title: "Spiritual & Ministry",    courses: ["Foundations of Christian Faith", "Bible Interpretation", "Discipleship & Mentorship", "Pastoral Care & Counselling"] },
              { id: "B", title: "Youth & Life Skills",     courses: ["Character Development", "Youth Leadership", "Career Guidance (CVs & Interviews)", "Emotional Intelligence"] },
              { id: "C", title: "Business & Employability",courses: ["Entrepreneurship Basics", "Financial Literacy", "Sales & Tender Readiness", "Project Management"] },
              { id: "D", title: "Digital & Tech",          courses: ["Basic Computer Literacy", "Digital Marketing", "Content Creation", "Church Media & Sound"] },
              { id: "E", title: "Community Impact",        courses: ["Community Leadership", "Non-Profit Management", "Fundraising", "Social Justice Outreach"] },
              { id: "F", title: "Practical Operations",    courses: ["Event Planning", "First Aid & Care Support", "Child Protection", "Emerging Leaders Program"] },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#130022] border border-white/5 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-colors"
              >
                <div className="text-[#d4af37] font-bold text-4xl font-serif mb-4 opacity-40">{cat.id}.</div>
                <h3 className="text-xl font-bold font-serif mb-6 text-white">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.courses.map((c, j) => (
                    <li key={j} className="flex gap-2 text-sm text-gray-400">
                      <BookOpen size={14} className="text-[#d4af37] shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
