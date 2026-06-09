import React, { useState } from "react";
import Layout from "../components/Layout";
import { 
  Users, 
  Award, 
  Heart, 
  Check, 
  Send, 
  Briefcase, 
  ShieldCheck, 
  Clock,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "1-2 years",
    certifications: [] as string[],
    message: ""
  });

  const benefits = [
    { title: "W-2 Employment Status", desc: "Enjoy complete job security, structured tax withholdings, and professional legal protection.", icon: ShieldCheck },
    { title: "Higher Competitive Pay", desc: "We believe in rewarding quality. We pay above-average rates to attract and retain the best caregivers.", icon: Award },
    { title: "CPR & First Aid Training", desc: "We provide in-house certifications and continuous advanced clinical education.", icon: Heart },
    { title: "Flexible Schedules", desc: "Choose between custom part-time or full-time care programs that fit your life.", icon: Clock }
  ];

  const handleCertToggle = (cert: string) => {
    if (formData.certifications.includes(cert)) {
      setFormData({
        ...formData,
        certifications: formData.certifications.filter(c => c !== cert)
      });
    } else {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, cert]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Application submitted successfully! Our hiring specialist will contact you shortly.");
  };

  return (
    <Layout>
      {/* Careers Hero */}
      <section className="bg-[#1E3F20] text-white py-20 px-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E6A15C]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Join Our Care Family</span>
          <h1 className="text-3xl md:text-5xl font-black font-serif tracking-tight leading-tight">
            Discover Your True Calling
          </h1>
          <p className="text-slate-200 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Join our growing family of dedicated, professional caregivers and make a meaningful, positive difference in the lives of seniors in our community.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Why Work with Us</span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#1E3F20] tracking-tight">
            A Rewarding Caregiver Experience
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            We value our staff as much as our clients. We offer extensive support, legal protections, and premium industry benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((ben, idx) => {
            const IconComp = ben.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3F20]/5 flex items-center justify-center text-[#1E3F20]">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-[#1E3F20] mt-4">{ben.title}</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">{ben.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Application Form Grid */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Hiring Process</span>
            <h2 className="text-3xl font-black font-serif text-[#1E3F20] tracking-tight leading-tight">
              Start Your Caregiving Journey Today
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              We are always looking for compassionate, professional, and reliable individuals to join our care family. Once you submit your initial application, our Care Coordinator will review your credentials and contact you to schedule an interview.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-start text-xs text-slate-700">
                <div className="w-6 h-6 rounded-full bg-[#1E3F20] text-white flex items-center justify-center font-bold shrink-0 mt-0.5">1</div>
                <div>
                  <span className="font-extrabold text-[#1E3F20] block">Online Application</span>
                  <p className="text-slate-500 mt-0.5">Fill out the quick form to the right with your basic details.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start text-xs text-slate-700">
                <div className="w-6 h-6 rounded-full bg-[#1E3F20] text-white flex items-center justify-center font-bold shrink-0 mt-0.5">2</div>
                <div>
                  <span className="font-extrabold text-[#1E3F20] block">Credentials Review</span>
                  <p className="text-slate-500 mt-0.5">We verify licenses, certifications, and background checks.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start text-xs text-slate-700">
                <div className="w-6 h-6 rounded-full bg-[#1E3F20] text-white flex items-center justify-center font-bold shrink-0 mt-0.5">3</div>
                <div>
                  <span className="font-extrabold text-[#1E3F20] block">Personal Interview</span>
                  <p className="text-slate-500 mt-0.5">A friendly sit-down with our care coordination team.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Jane Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g., +1 (430) 257-0296"
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
                      placeholder="e.g., jane.doe@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Years of Experience</label>
                    <select 
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                    >
                      <option value="No experience">No experience (We provide training)</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-2 years">1-2 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>

                {/* Certifications Checklist */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Your Certifications (Select all that apply)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["CNA", "HHA", "LVN", "CPR Certified", "First Aid Certified"].map((cert) => {
                      const isChecked = formData.certifications.includes(cert);
                      return (
                        <button
                          type="button"
                          key={cert}
                          onClick={() => handleCertToggle(cert)}
                          className={`p-2.5 text-[11px] font-bold rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                            isChecked 
                              ? "border-[#1E3F20] bg-[#1E3F20]/5 text-[#1E3F20]" 
                              : "border-slate-200 hover:border-slate-300 text-slate-600"
                          }`}
                        >
                          <span>{cert}</span>
                          {isChecked && <Check className="w-3.5 h-3.5 text-[#1E3F20]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Write a Message / Cover Note</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us why you want to join Assurance Care..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#1E3F20] text-white text-xs font-bold py-4 rounded-xl shadow-lg hover:bg-[#2e5230] hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Submit Application <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#1E3F20]">Application Received!</h3>
                <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                  Thank you for applying, {formData.name}. Our Care Coordinator will review your qualifications and contact you at {formData.phone} shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="border border-slate-200 text-slate-600 text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
