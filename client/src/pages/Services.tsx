import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Calendar, 
  FileText, 
  Award, 
  HeartHandshake, 
  Plus, 
  ArrowRight,
  ClipboardList,
  FlameKindling,
  UserCheck,
  Stethoscope
} from "lucide-react";

export default function Services() {
  const coreServices = [
    { title: "Companionship", desc: "Providing meaningful interaction, socialization, and deep emotional support.", category: "Companion" },
    { title: "Appointments", desc: "Assistance with scheduling and attending medical or personal appointments.", category: "Support" },
    { title: "Bathing Support", desc: "Dignified assistance with personal hygiene and bathing routines.", category: "Hygiene" },
    { title: "Cooking & Nutrition", desc: "Preparing delicious, nutritious meals tailored specifically to dietary preferences.", category: "Nutrition" },
    { title: "Dressing Assistance", desc: "Support with selecting and putting on clothing with care and respect.", category: "Hygiene" },
    { title: "Errands & Shopping", desc: "Running local errands to simplify your daily routine.", category: "Support" },
    { title: "Laundry & Linens", desc: "Managing daily laundry and linen care to maintain a clean environment.", category: "Housekeeping" },
    { title: "Medical Help Reminders", desc: "Support with medication reminders and basic vital health monitoring.", category: "Clinical" },
    { title: "Exercise Guidance", desc: "Encouraging light physical activity and movement for improved health.", category: "Wellness" },
    { title: "Mobility Assistance", desc: "Helping with safe movement around the home or community.", category: "Wellness" },
    { title: "Grooming & Styling", desc: "Assistance with personal grooming to maintain dignity and self-esteem.", category: "Hygiene" },
    { title: "Pet Care Support", desc: "Caring for your beloved furry companions as part of your care plan.", category: "Support" },
    { title: "Safe Showering", desc: "Ensuring safe, slip-free, and comfortable showering routines.", category: "Hygiene" },
    { title: "Toileting Care", desc: "Providing highly dignified assistance with bathroom needs.", category: "Hygiene" },
    { title: "Safe Transferring", desc: "Safely assisting with transfers between bed, chair, or wheelchair.", category: "Wellness" },
    { title: "Transportation", desc: "Reliable transport to appointments, outings, or local errands.", category: "Support" }
  ];

  const careTiers = [
    {
      level: "Level 1",
      title: "Essential Companion & Custodial Care",
      desc: "Perfect for seniors seeking daily companionship, light housekeeping, and assistance with standard living activities.",
      features: [
        "Companionship & Socialization",
        "Meal Preparation & Planning",
        "Light Housekeeping & Laundry",
        "Errands & Grocery Shopping",
        "Bathing & Grooming Assistance",
        "Medication Reminders",
        "Patient Advocate & Hospital Sitting"
      ],
      color: "border-[#0F8F88] bg-[#0F8F88]/5"
    },
    {
      level: "Level 2",
      title: "Specialized Memory & Cognitive Care",
      desc: "Tailored specifically for individuals with advanced physical limitations or progressive memory needs.",
      features: [
        "Alzheimer's & Dementia Support",
        "Focused Cognitive Stimulation",
        "Parkinson's Disease Care",
        "Physical Stimulation (PT Follow-up)",
        "Blood Sugar & Diabetes Monitoring",
        "Specialized Diet Planning",
        "Structured Daily Care Logs"
      ],
      color: "border-[#082B4D] bg-[#082B4D]/5"
    },
    {
      level: "Level 3",
      title: "Advanced Nursing & Clinical Support",
      desc: "Coordinated by our highly trained CNA's, LVN's, and HHA's to support complex medical and clinical requirements.",
      features: [
        "Complex Wound Care Support",
        "Advanced Medication Management",
        "Hospice & Palliative Support",
        "CNA, LVN, and HHA Coordination",
        "Continuous Post-Op Monitoring",
        "Dedicated Clinical Oversight",
        "Direct Physician Communication"
      ],
      color: "border-slate-900 bg-slate-900/5"
    }
  ];

  return (
    <Layout>
      {/* Services Hero */}
      <section className="bg-[#082B4D] text-white py-20 px-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F8F88]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Our Care Architecture</span>
          <h1 className="text-3xl md:text-5xl font-black font-serif tracking-tight leading-tight">
            Personalized Home Care Solutions
          </h1>
          <p className="text-slate-200 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            From essential daily companionship to specialized memory support and advanced nursing care, we craft comprehensive care plans tailored to meet your unique needs.
          </p>
        </div>
      </section>

      {/* Care Tiers / Levels Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Structured Care Plans</span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#082B4D] tracking-tight">
            Three Progressive Levels of Care
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            We categorize our services into three structured tiers to help families easily identify the right level of support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {careTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`border-2 rounded-2xl p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 ${tier.color}`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0F8F88] bg-[#082B4D] text-white px-3 py-1 rounded-full">
                    {tier.level}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#082B4D]">{tier.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{tier.desc}</p>
                
                <div className="border-t border-slate-200/60 pt-4 space-y-2.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Care Features</span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#082B4D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="pt-6 block">
                <button className="w-full bg-[#082B4D] text-white text-xs font-bold py-3.5 rounded-xl hover:bg-[#0B7772] shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5">
                  Request {tier.level} Assessment <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Full Service Catalog</span>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-[#082B4D] tracking-tight">
              Every Aspect of Daily Care Covered
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              We support our clients in maintaining dignity, hygiene, and a high quality of life. Explore our core services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((svc, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-3 hover:border-[#082B4D]/20 transition-all group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-extrabold text-[#0F8F88] bg-[#082B4D]/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {svc.category}
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[#082B4D]">{svc.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Assessment Callout */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#082B4D]/5 flex items-center justify-center text-[#082B4D] mx-auto">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black font-serif text-[#082B4D]">Need a Customized Assessment?</h2>
        <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Finding the right level of care can feel overwhelming. Our Care Specialists will guide you every step of the way, beginning with an in-depth, complimentary in-home care assessment.
        </p>
        <div className="pt-2">
          <Link href="/contact">
            <button className="bg-[#082B4D] text-white text-xs font-bold px-6 py-4 rounded-xl shadow-lg hover:bg-[#0B7772] hover:scale-[1.02] transition-all cursor-pointer">
              Schedule Free In-Home Assessment
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
