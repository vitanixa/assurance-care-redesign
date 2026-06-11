import React, { useState } from "react";
import Layout from "../components/Layout";
import { Phone, Mail, ShieldCheck, Send, Check } from "lucide-react";
import { toast } from "sonner";

const WEB3FORMS_KEY = "271240a2-1290-4b6d-b57b-6534c331623b";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email) {
      toast.error("Please fill in your first name and email address.");
      return;
    }
    setSubmitting(true);
    try {
      const data = new FormData();
      data.append("access_key", WEB3FORMS_KEY);
      data.append("subject", `New Care Inquiry from ${formData.firstName} ${formData.lastName} — Assurance Care LLC`);
      data.append("from_name", "Assurance Care Website");
      data.append("botcheck", "");
      data.append("name", `${formData.firstName} ${formData.lastName}`.trim());
      data.append("email", formData.email);
      data.append("phone", formData.phone || "Not provided");
      data.append("message", formData.message || "No message provided");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error();
      setSubmitted(true);
      toast.success("Message sent! Our care coordinator will contact you shortly.");
    } catch {
      toast.error("Could not send. Please call (430) 257-0296 or email admin@assurancecarellc.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Contact Hero */}
      <section className="bg-[#082B4D] text-white py-20 px-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F8F88]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Get In Touch</span>
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
            <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Always Available</span>
            <h2 className="text-3xl font-black font-serif text-[#082B4D] tracking-tight leading-tight">
              We're Here For You 24/7
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed">
              Assurance Care LLC has several offices and is constantly expanding into new areas. If you are interested in home care services or have any questions, speak to a representative now.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-3">
              <h4 className="text-xs font-black text-[#082B4D] uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0F8F88]" /> Talk to Sales & Support
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Main Office</span>
                  <a href="tel:+14302570296" className="text-[#082B4D] hover:text-[#0F8F88] transition-colors">+1 (430) 257-0296</a>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Support Line</span>
                  <a href="tel:+16156492231" className="text-[#082B4D] hover:text-[#0F8F88] transition-colors">+1 (615) 649-2231</a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-3">
              <h4 className="text-xs font-black text-[#082B4D] uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0F8F88]" /> Email Communications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-700">
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">Corporate Support</span>
                  <a href="mailto:support@assurancecarellc.com" className="text-[#082B4D] hover:text-[#0F8F88] transition-colors">support@assurancecarellc.com</a>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] text-slate-400 block uppercase tracking-wider">General Inquiries</span>
                  <a href="mailto:admin@assurancecarellc.com" className="text-[#082B4D] hover:text-[#0F8F88] transition-colors">admin@assurancecarellc.com</a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-sm space-y-3">
              <h4 className="text-xs font-black text-[#082B4D] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0F8F88]" /> Secure Fax Lines
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
              <h3 className="text-lg font-black text-[#082B4D] border-b border-slate-100 pb-3">Schedule Free Assessment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">First Name *</label>
                  <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                    placeholder="e.g., John"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#082B4D]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                    placeholder="e.g., Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#082B4D]" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="e.g., john.doe@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#082B4D]" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="e.g., +1 (430) 257-0296"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#082B4D]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Write a Message / Care Request Details</label>
                <textarea rows={5} name="message" value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your loved one's needs..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#082B4D]"></textarea>
              </div>
              <button type="submit" disabled={submitting}
                className="w-full bg-[#082B4D] text-white text-xs font-bold py-4 rounded-xl shadow-lg hover:bg-[#0B7772] hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60">
                {submitting ? "Sending…" : <><Send className="w-4 h-4" /> Send Request</>}
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4 animate-in fade-in duration-200">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-[#082B4D]">Message Sent!</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                Thank you for contacting us, {formData.firstName}. Our care specialist will reach out to you shortly to coordinate your complimentary in-home assessment.
              </p>
              <button onClick={() => { setSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" }); }}
                className="border border-slate-200 text-slate-600 text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer">
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
