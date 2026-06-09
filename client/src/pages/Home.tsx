import React, { useState } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { 
  Heart, 
  ShieldCheck, 
  Clock, 
  Users, 
  ArrowRight, 
  Check, 
  Star, 
  Sparkles,
  Calendar,
  Activity,
  HeartHandshake,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [answers, setAssessmentAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const assessmentQuestions = [
    {
      id: "primary_need",
      question: "What is the primary care requirement?",
      options: [
        { label: "Companionship & Emotional Support", value: "companionship" },
        { label: "Daily Living Activities (Bathing, Dressing, Meals)", value: "adl" },
        { label: "Specialized Clinical Care (Alzheimer's, Dementia, Parkinson's)", value: "specialized" },
        { label: "Post-Hospitalization / Rehabilitation Support", value: "rehab" }
      ]
    },
    {
      id: "schedule",
      question: "What is the preferred care schedule?",
      options: [
        { label: "Part-time (A few hours per day / week)", value: "part_time" },
        { label: "Full-time (8-12 hours daily)", value: "full_time" },
        { label: "24/7 Live-In Care", value: "live_in" },
        { label: "Not sure / Needs assessment", value: "not_sure" }
      ]
    },
    {
      id: "mobility",
      question: "What is the current mobility level?",
      options: [
        { label: "Fully Independent / Needs minor assistance", value: "independent" },
        { label: "Needs assistance with transfers (bed/chair)", value: "assisted" },
        { label: "Wheelchair bound / High mobility support", value: "high_support" }
      ]
    }
  ];

  const handleOptionSelect = (optionValue: string) => {
    const currentQuestionId = assessmentQuestions[assessmentStep].id;
    setAssessmentAnswers({ ...answers, [currentQuestionId]: optionValue });
    
    if (assessmentStep < assessmentQuestions.length - 1) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetAssessment = () => {
    setAssessmentStep(0);
    setAssessmentAnswers({});
    setShowResult(false);
  };

  const getRecommendedCareLevel = () => {
    const need = answers.primary_need;
    if (need === "specialized") {
      return {
        level: "Level 2: Specialized Cognitive & Clinical Care",
        desc: "Tailored specifically for individuals with Alzheimer's, Dementia, Parkinson's, or advanced physical needs. Includes cognitive stimulation and blood sugar/diabetes management.",
        cta: "Schedule Specialized Assessment"
      };
    } else if (need === "rehab" || answers.schedule === "live_in") {
      return {
        level: "Level 3: Advanced Nursing & High-Support Care",
        desc: "Our highest level of care, coordinated by CNA's, LVN's, and HHA's to support complex clinical scenarios, medication administration, and structured physical recovery.",
        cta: "Request Nursing Consultation"
      };
    } else {
      return {
        level: "Level 1: Essential Companion & Custodial Care",
        desc: "Ideal for seniors seeking companionship, light housekeeping, meal preparation, medication reminders, bathing assistance, and local transportation.",
        cta: "Request Companion Care"
      };
    }
  };

  const services = [
    { title: "Companionship", desc: "Meaningful interaction, emotional support, and socialization to prevent isolation.", icon: Heart },
    { title: "Medication Reminders", desc: "Basic health monitoring and timely support with medication schedules.", icon: Activity },
    { title: "Meal Preparation", desc: "Preparing nutritious, home-cooked meals tailored specifically to dietary preferences.", icon: Sparkles },
    { title: "Bathing & Dressing", desc: "Dignified and respectful assistance with personal hygiene and dressing routines.", icon: ShieldCheck },
    { title: "Errands & Shopping", desc: "Managing local grocery shopping and daily errands to simplify your schedule.", icon: CheckCircle2 },
    { title: "Mobility & Transfers", desc: "Safe physical assistance with moving around the home, bed, or community.", icon: Users }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#1E3F20] text-[#FAF9F6] py-20 px-6 overflow-hidden">
        {/* Ambient Decorative Background Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E6A15C]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-800/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E6A15C] text-[10px] md:text-xs font-bold uppercase tracking-widest border border-white/5">
              <Star className="w-3.5 h-3.5 fill-current" /> Trust, Dignity & Professional Care
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight font-serif text-white">
              Exceptional Home Care, Tailored to Your Family.
            </h1>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl font-medium">
              We believe our elderly are a cherished treasure. Assurance Care LLC delivers compassionate, licensed, and bonded in-home care plans designed to promote comfort, safety, and independence.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact">
                <button className="bg-[#E6A15C] text-[#1E3F20] text-xs font-black px-6 py-4 rounded-xl shadow-lg hover:bg-[#f3b570] hover:scale-[1.02] active:scale-[0.98] transition-all duration-150 cursor-pointer flex items-center gap-2">
                  Schedule Free Assessment <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/services">
                <button className="bg-transparent text-white border border-white/20 text-xs font-black px-6 py-4 rounded-xl hover:bg-white/5 transition-all duration-150 cursor-pointer">
                  Explore Care Services
                </button>
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 text-slate-300">
              <div>
                <span className="text-2xl md:text-3xl font-black text-white block">100%</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#E6A15C]">W-2 Employed Staff</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black text-white block">CPR</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#E6A15C]">Certified & Bonded</span>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black text-white block">24/7</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#E6A15C]">Family Support</span>
              </div>
            </div>
          </div>

          {/* Hero Image & Interactive Needs Assessment Estimator */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl border border-slate-100 shadow-2xl p-6 md:p-8 space-y-6 relative">
              {/* Card Header */}
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[9px] font-extrabold text-[#E6A15C] uppercase tracking-widest block">Care Navigator</span>
                <h3 className="text-lg font-black text-[#1E3F20] mt-0.5">Care Needs Assessment</h3>
                <p className="text-slate-500 text-xs mt-1">Answer 3 quick questions to discover your recommended care plan.</p>
              </div>

              {/* Assessment Form Body */}
              {!showResult ? (
                <div className="space-y-5">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400">
                    <span>QUESTION {assessmentStep + 1} OF {assessmentQuestions.length}</span>
                    <span className="text-[#1E3F20]">{Math.round(((assessmentStep + 1) / assessmentQuestions.length) * 100)}% COMPLETE</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#1E3F20] h-full transition-all duration-300"
                      style={{ width: `${((assessmentStep + 1) / assessmentQuestions.length) * 100}%` }}
                    ></div>
                  </div>

                  <p className="text-xs font-bold text-[#1E3F20] leading-snug">
                    {assessmentQuestions[assessmentStep].question}
                  </p>

                  <div className="flex flex-col gap-2">
                    {assessmentQuestions[assessmentStep].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleOptionSelect(opt.value)}
                        className="w-full text-left p-3 text-xs font-semibold rounded-xl border border-slate-200 hover:border-[#1E3F20] hover:bg-[#1E3F20]/5 hover:text-[#1E3F20] active:scale-[0.99] transition-all duration-150 cursor-pointer"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl space-y-2">
                    <span className="text-[9px] font-extrabold text-emerald-800 uppercase tracking-widest block">Our Recommendation</span>
                    <h4 className="text-xs font-extrabold text-[#1E3F20] leading-tight">
                      {getRecommendedCareLevel().level}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {getRecommendedCareLevel().desc}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={resetAssessment}
                      className="flex-1 border border-slate-200 text-slate-600 text-xs font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
                    >
                      Start Over
                    </button>
                    <Link href="/contact" className="flex-1">
                      <button className="w-full bg-[#1E3F20] text-white text-xs font-bold py-3.5 rounded-xl hover:bg-[#2e5230] shadow-md shadow-[#1E3F20]/10 transition-all cursor-pointer">
                        {getRecommendedCareLevel().cta}
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="bg-white py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#1E3F20]" />
            <span>State Licensed Home Care</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-[#1E3F20]" />
            <span>100% Bonded & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#1E3F20]" />
            <span>W-2 Employed Caregivers</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#1E3F20]" />
            <span>CPR & First-Aid Certified</span>
          </div>
        </div>
      </section>

      {/* Core Mission & About Intro */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-100 shadow-2xl">
            <img 
              src="https://static.wixstatic.com/media/11062b_47edfed0487345d9b1c46dd756687641~mv2.jpg/v1/fill/w_1265,h_725,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_47edfed0487345d9b1c46dd756687641~mv2.jpg" 
              alt="Elderly care happiness" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-xl border border-slate-100 shadow-lg space-y-1">
              <span className="text-[8px] font-bold text-[#E6A15C] uppercase tracking-widest">Complimentary</span>
              <p className="text-xs font-black text-[#1E3F20]">Free In-Home Care Consultations</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#1E3F20] tracking-tight">
            Cherishing Our Elderly as a Precious Treasure.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            At Assurance Care, we believe that our seniors deserve nothing but the absolute best. Founded with a heartfelt commitment to promoting comfort, independence, and dignity, we design personalized care plans that adapt to the unique clinical and social needs of each client.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            We forge seamless partnerships between our caregivers, clients, and their families, ensuring that communication is transparent, professional, and enriching. Let us help you or your loved one achieve comfort and absolute peace of mind.
          </p>

          <div className="flex gap-4 pt-2">
            <Link href="/about">
              <button className="bg-[#1E3F20] text-white text-xs font-bold px-6 py-3.5 rounded-lg shadow-md hover:bg-[#2e5230] transition-colors cursor-pointer">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-[#1E3F20] tracking-tight">
              Comprehensive Care Services
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              We provide professional support with daily living activities, specialized memory care, and basic health monitoring to ensure a high quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1E3F20]/10 hover:translate-y-[-2px] transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1E3F20]/5 flex items-center justify-center text-[#1E3F20] group-hover:bg-[#1E3F20] group-hover:text-white transition-all duration-200">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#1E3F20] mt-4">{svc.title}</h3>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link href="/services">
              <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3F20] hover:text-[#E6A15C] transition-colors">
                View All Care Levels & Services <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials Slider/Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#1E3F20] tracking-tight">
            Stories of Compassion & Trust
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            Read what our clients' families say about their experience partnering with Assurance Care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4 relative">
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-slate-600 text-xs leading-relaxed italic">
              "Working with Assurance Care LLC has been a wonderful experience. Their personalized approach to care really stood out—they took the time to understand our needs and provided a caregiver who was the perfect match for my brother. The level of attention and empathy they show is unmatched!"
            </p>
            <div className="border-t border-slate-50 pt-3">
              <span className="font-extrabold text-xs text-[#1E3F20] block">— Maria T.</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Family Client</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4 relative">
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-slate-600 text-xs leading-relaxed italic">
              "Assurance Care LLC has been a true blessing for our family. Their team provided exceptional care for my elderly mother, always treating her with kindness and respect. They go above and beyond to ensure her needs are met, and their communication with us has been outstanding. I can’t recommend them enough!"
            </p>
            <div className="border-t border-slate-50 pt-3">
              <span className="font-extrabold text-xs text-[#1E3F20] block">— Lisa R.</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Daughter of Client</span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4 relative">
            <div className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-slate-600 text-xs leading-relaxed italic">
              "The caregivers at Assurance Care LLC are professional, compassionate, and truly dedicated to their clients. They’ve made a huge difference in my dad’s quality of life, helping him maintain his independence while ensuring he’s well cared for. We’re so grateful for their support!"
            </p>
            <div className="border-t border-slate-50 pt-3">
              <span className="font-extrabold text-xs text-[#1E3F20] block">— James M.</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Son of Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Consultation CTA Banner */}
      <section className="bg-[#1E3F20] text-white py-16 px-6 text-center space-y-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#E6A15C]/10 rounded-full blur-3xl"></div>
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <h2 className="text-2xl md:text-4xl font-black font-serif leading-tight">Ready to Customize Your Care Solution?</h2>
          <p className="text-slate-200 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Contact us today for a complimentary, in-home care consultation. Our dedicated care specialists are here to guide you and craft a personalized care plan that aligns perfectly with your needs.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="tel:+14302570296">
              <button className="bg-[#E6A15C] text-[#1E3F20] text-xs font-black px-6 py-4 rounded-xl shadow-lg hover:bg-[#f3b570] hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2">
                Call Us: +1 (430) 257-0296
              </button>
            </a>
            <Link href="/contact">
              <button className="bg-transparent border border-white/20 text-white text-xs font-black px-6 py-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer">
                Request Free Assessment Online
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
