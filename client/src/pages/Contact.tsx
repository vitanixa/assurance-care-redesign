import React, { useState } from "react";
import Layout from "../components/Layout";
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Send, 
  Check, 
  MapPin, 
  HeartHandshake,
  Award
} from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message submitted successfully! Our care coordinator will contact you shortly.");
  };

  return (
    <Layout>
      {/* Contact Hero */}
      <section className="bg-[#1E3F20] text-white py-20 px-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E6A15C]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-3xl md:text-5xl font-black font-serif tracking-tight leading-tight">
            Contact Assurance Care
          </h1>
          <p className="text-slate-200 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            We are here to support you 24 hours a day, 7 days a week. Speak to our Care Specialists today to begin your customized home care journey.
          </p>
        </div>
      </section>

      {/* Contact Details & Form Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Always Available</span>
            <h2 className="text-3xl font-black font-serif text-[#1E3F20] tracking-tight leading-tight">
              We're Here For You 24/7
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              Assurance Care LLC has several offices and is constantly expanding into new areas. If you are interested in home care services or have any questions, speak to a representative now.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-3">
              <h4 className="text-xs font-black text-[#1E3F20] uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4.5 h-4.5 text-[#E6A15C]" /> Talk to Sales & Support
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Main Office</span>
                  <a href="tel:+14302570296" className="text-[#1E3F20] hover:text-[#E6A15C] transition-colors">+1 (430) 257-0296</a>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Support Line</span>
                  <a href="tel:+16156492231" className="text-[#1E3F20] hover:text-[#E6A15C] transition-colors">+1 (615) 649-2231</a>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-3">
              <h4 className="text-xs font-black text-[#1E3F20] uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4.5 h-4.5 text-[#E6A15C]" /> Email Communications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Corporate Support</span>
                  <a href="mailto:support@assurancecarellc.com" className="text-[#1E3F20] hover:text-[#E6A15C] transition-colors">support@assurancecarellc.com</a>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">General Inquiries</span>
                  <a href="mailto:assurancecare.24@gmail.com" className="text-[#1E3F20] hover:text-[#E6A15C] transition-colors">assurancecare.24@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Fax Lines */}
            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-3">
              <h4 className="text-xs font-black text-[#1E3F20] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#E6A15C]" /> Secure Fax Lines
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Fax 1 (Corporate)</span>
                  <span className="text-slate-800">972-449-0760</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Fax 2 (Alt)</span>
                  <span className="text-slate-800">972-908-9082</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="text-lg font-black text-[#1E3F20] border-b border-slate-100 pb-3">Schedule Free Assessment</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">First Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="e.g., John"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Last Name</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="e.g., Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g., john.doe@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g., +1 (430) 257-0296"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Write a Message / Care Request Details</label>
                <textarea 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your loved one's needs..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#1E3F20] text-white text-xs font-bold py-4 rounded-xl shadow-lg hover:bg-[#2e5230] hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Send Request <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#1E3F20]">Message Sent!</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                Thank you for contacting us, {formData.firstName}. Our care specialist will reach out to you shortly to coordinate your complimentary in-home assessment.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="border border-slate-200 text-slate-600 text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
