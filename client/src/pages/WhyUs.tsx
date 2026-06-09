import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  HeartHandshake, 
  Check, 
  ArrowRight,
  Sparkles,
  Heart,
  Activity,
  ClipboardList
} from "lucide-react";

export default function WhyUs() {
  const credentials = [
    "State Licensed",
    "All Staff are W-2 Employees",
    "All Staff are Bonded",
    "All Staff are CPR & First Aid Certified",
    "Workers’ Compensation Insurance",
    "General Liability Insurance",
    "VA Approved Contract",
    "Financial Assistance Guidance",
    "Free In-Home Care Assessments",
    "Certified as Level I or Level II Care Aides",
    "Specialized Cognitive Care Programs",
    "Comprehensive Progress & Daily Care Notes",
    "Experienced Local Management Team",
    "Higher Paid Staff for Quality Retention",
    "Over 500 Qualified Caregivers Employed",
    "Competitive, Predictable Rates",
    "Customized Care Plans for Every Client",
    "Flexible Part-Time & Full-Time Programs",
    "Transportation Services Available",
    "Top-Rated Reviews & Client Stories",
    "Care Aides are Trained & Accountable",
    "Alzheimer's & Dementia Specializations",
    "Structured Physical Stimulation Plans",
    "Direct Coordination with Family Members"
  ];

  return (
    <Layout>
      {/* Why Us Hero */}
      <section className="bg-[#082B4D] text-white py-20 px-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F8F88]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Our Credentials</span>
          <h1 className="text-3xl md:text-5xl font-black font-serif tracking-tight leading-tight">
            Why Choose Assurance Care
          </h1>
          <p className="text-slate-200 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Discover how our advanced caregiver training, licensed credentials, and comprehensive in-home protocols deliver an above-average care experience.
          </p>
        </div>
      </section>

      {/* Advanced Training Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Uncompromising Standards</span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#082B4D] tracking-tight">
            Constantly Training & Elevating Our Care Providers
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            At Assurance Care, we are constantly training and keeping our Care Providers at the highest level of knowledge and industry standards. You never know what may arise in an In-Home Care scenario, so it makes complete sense to be as prepared as possible and capable of handling any and every situation.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Through our intensive In-House Care training programs and a relentless commitment to being the absolute best, we can and do provide an above-average Elderly Care Service that families can rely on 24 hours a day.
          </p>

          <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl space-y-3">
            <h4 className="text-sm font-extrabold text-[#082B4D] flex items-center gap-2">
              <Award className="w-5 h-5 text-[#0F8F88]" /> Specialized Memory & Cognitive Support
            </h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Providing care for family members with Alzheimer’s, Memory, or Dementia needs requires specialized training. That is why our caregivers are certified in advanced cognitive support techniques to ensure safe, calm, and enriching environments.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-100 shadow-2xl">
            <img 
              src="https://static.wixstatic.com/media/11062b_bff140366281447b99152d6112cafd32~mv2.jpg/v1/fill/w_1265,h_1308,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_bff140366281447b99152d6112cafd32~mv2.jpg" 
              alt="Caregiver training" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-xl border border-slate-100 shadow-lg space-y-1">
              <span className="text-[8px] font-bold text-[#082B4D] uppercase tracking-widest">In-Depth Assessment</span>
              <p className="text-xs font-black text-[#082B4D]">Evaluating physical & social needs prior to care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Credentials Grid */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Trust Metrics</span>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-[#082B4D] tracking-tight">
              24 Points of Assurance & Quality
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              We meet and exceed strict federal, state, and insurance standards to provide unmatched peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {credentials.map((cred, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100/80 rounded-xl p-4 flex items-start gap-3 shadow-sm hover:border-[#082B4D]/10 transition-colors"
              >
                <div className="w-5 h-5 rounded bg-[#082B4D]/5 text-[#082B4D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-slate-700 leading-tight">{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Assessment Callout */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#082B4D]/5 flex items-center justify-center text-[#082B4D] mx-auto">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black font-serif text-[#082B4D]">Ready to Select the Right Caregiver?</h2>
        <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Selecting the right caregiver can be the difference that makes this a wonderful experience for everyone. Let us evaluate your needs and match your family with the perfect caregiver.
        </p>
        <div className="pt-2">
          <Link href="/contact">
            <button className="bg-[#082B4D] text-white text-xs font-bold px-6 py-4 rounded-xl shadow-lg hover:bg-[#0B7772] hover:scale-[1.02] transition-all cursor-pointer">
              Request a Complimentary Care Assessment
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
