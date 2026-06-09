import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Heart, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  Clock, 
  ChevronRight,
  Linkedin,
  HeartHandshake
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/why-us" },
    { name: "Our Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 flex flex-col font-sans selection:bg-[#E6A15C]/20 selection:text-[#1E3F20]">
      {/* Trust Indicator Banner */}
      <div className="bg-[#1E3F20] text-[#FAF9F6] py-2 px-6 text-[11px] md:text-xs font-semibold border-b border-[#1E3F20]/20 shrink-0 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E6A15C] shrink-0" />
            <span>State Licensed, Fully Bonded & CPR-Certified Professional Home Care</span>
          </div>
          <div className="flex items-center gap-4 text-[#FAF9F6]/80 font-medium">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#E6A15C]" />
              All Caregivers are W-2 Employees
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E6A15C]" />
              24/7 Dedicated Family Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E3F20] to-[#2e5230] flex items-center justify-center text-white shadow-md shadow-[#1E3F20]/10 group-hover:scale-105 transition-all duration-200">
                <HeartHandshake className="w-6 h-6 text-[#FAF9F6]" />
              </div>
              <div className="leading-none">
                <span className="font-black text-lg tracking-tight text-[#1E3F20] block">ASSURANCE CARE</span>
                <span className="text-[10px] font-bold text-[#E6A15C] uppercase tracking-widest block mt-0.5">Compassionate Excellence</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-600">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span className={`pb-1 transition-all cursor-pointer border-b-2 hover:text-[#1E3F20] ${
                    isActive 
                      ? "text-[#1E3F20] border-[#1E3F20]" 
                      : "border-transparent hover:border-[#E6A15C]/50"
                  }`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+14302570296" className="flex items-center gap-1.5 text-xs font-bold text-[#1E3F20] hover:text-[#E6A15C] transition-colors">
              <Phone className="w-4 h-4 text-[#E6A15C]" />
              <span>+1 (430) 257-0296</span>
            </a>
            <Link href="/contact">
              <button className="bg-[#1E3F20] text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-md shadow-[#1E3F20]/10 hover:bg-[#2e5230] hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 cursor-pointer">
                Free Assessment
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg absolute top-20 left-0 w-full py-6 px-6 shadow-xl flex flex-col gap-5 animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-4 text-sm font-bold text-slate-600">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span 
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-1 block transition-all cursor-pointer ${
                        isActive ? "text-[#1E3F20] border-l-4 border-[#1E3F20] pl-3" : "hover:text-[#1E3F20]"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="border-t border-slate-100 pt-4 flex flex-col gap-4">
              <a href="tel:+14302570296" className="flex items-center gap-2 text-sm font-bold text-[#1E3F20]">
                <Phone className="w-4 h-4 text-[#E6A15C]" />
                <span>+1 (430) 257-0296</span>
              </a>
              <Link href="/contact">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-[#1E3F20] text-white text-sm font-bold py-3 rounded-lg shadow-md hover:bg-[#2e5230] transition-colors cursor-pointer"
                >
                  Schedule Free Assessment
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page Content Body */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900 text-xs space-y-10 shrink-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1E3F20] flex items-center justify-center text-white shadow-sm">
                <HeartHandshake className="w-5 h-5 text-[#FAF9F6]" />
              </div>
              <span className="font-extrabold text-white tracking-tight text-base">Assurance Care LLC</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm text-[11px] md:text-xs">
              Established with a heartfelt commitment to delivering exceptional, personalized home healthcare services. We promote comfort, dignity, and independence in the familiar surroundings of home.
            </p>
            <div className="flex items-center gap-3 text-[#FAF9F6]/80 text-[10px] pt-1">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[#E6A15C] font-bold uppercase tracking-wider">
                State Licensed & Bonded
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px]">Quick Links</h4>
            <div className="flex flex-col gap-2.5 font-medium">
              <Link href="/"><span className="hover:text-white cursor-pointer transition-colors">Home</span></Link>
              <Link href="/about"><span className="hover:text-white cursor-pointer transition-colors">About Us</span></Link>
              <Link href="/why-us"><span className="hover:text-white cursor-pointer transition-colors">Why Choose Us</span></Link>
              <Link href="/services"><span className="hover:text-white cursor-pointer transition-colors">Our Services</span></Link>
              <Link href="/careers"><span className="hover:text-white cursor-pointer transition-colors">Careers</span></Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px]">Contact Info</h4>
            <div className="space-y-3 font-medium text-[11px] md:text-xs">
              <p className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#E6A15C] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Office: <a href="tel:+14302570296" className="text-white hover:text-[#E6A15C] transition-colors">+1 (430) 257-0296</a><br/>
                  Alt: <a href="tel:+16156492231" className="text-white hover:text-[#E6A15C] transition-colors">+1 (615) 649-2231</a>
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#E6A15C] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  <a href="mailto:support@assurancecarellc.com" className="text-white hover:text-[#E6A15C] transition-colors">support@assurancecarellc.com</a><br/>
                  <a href="mailto:assurancecare.24@gmail.com" className="text-white hover:text-[#E6A15C] transition-colors">assurancecare.24@gmail.com</a>
                </span>
              </p>
              <p className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E6A15C] shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Fax 1: 972-449-0760<br/>
                  Fax 2: 972-908-9082
                </span>
              </p>
            </div>
          </div>

          {/* Professional Guarantee */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px]">The Assurance Guarantee</h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Every caregiver is thoroughly vetted, background-checked, CPR/First Aid certified, and undergoes continuous advanced training to provide the highest clinical standards of in-home support.
            </p>
            <div className="pt-2 border-t border-slate-900 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-emerald-400">Accepting New Clients</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-slate-600 font-medium text-[11px]">
          <p>© 2026 Assurance Care LLC. All rights reserved. Registered & Licensed Home Care Provider.</p>
          <div className="flex items-center gap-5">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
