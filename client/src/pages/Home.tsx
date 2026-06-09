import React, { useState } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import {
  Activity,
  ArrowRight,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Heart,
  HeartHandshake,
  Home as HomeIcon,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export default function Home() {
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [answers, setAssessmentAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const assessmentQuestions = [
    {
      id: "primary_need",
      question: "What type of support does your loved one need most?",
      options: [
        { label: "Companionship and supervision", value: "companionship" },
        { label: "Bathing, dressing, meals, and daily routines", value: "adl" },
        { label: "Memory care or cognitive support", value: "specialized" },
        { label: "Help after a hospital stay or change in condition", value: "rehab" },
      ],
    },
    {
      id: "schedule",
      question: "What schedule are you considering?",
      options: [
        { label: "A few hours per week", value: "part_time" },
        { label: "Several hours most days", value: "full_time" },
        { label: "High-support or extended care", value: "live_in" },
        { label: "I am not sure yet", value: "not_sure" },
      ],
    },
    {
      id: "mobility",
      question: "How much mobility assistance is needed?",
      options: [
        { label: "Mostly independent", value: "independent" },
        { label: "Needs help with transfers or walking", value: "assisted" },
        { label: "Needs frequent hands-on support", value: "high_support" },
      ],
    },
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
        level: "Personalized cognitive-support care",
        desc: "A thoughtful care plan focused on safety, routine, dignity, engagement, and close family communication.",
        cta: "Request a care consultation",
      };
    }

    if (need === "rehab" || answers.schedule === "live_in" || answers.mobility === "high_support") {
      return {
        level: "High-support daily care",
        desc: "A structured plan for clients who need more frequent help with mobility, personal care, meals, reminders, and home safety.",
        cta: "Discuss advanced care needs",
      };
    }

    return {
      level: "Essential companion and personal care",
      desc: "A flexible care plan for companionship, light household support, meal preparation, medication reminders, errands, and daily living assistance.",
      cta: "Start with a free assessment",
    };
  };

  const services = [
    { title: "Companion Care", desc: "Conversation, supervision, meaningful engagement, and emotional support at home.", icon: Heart },
    { title: "Personal Care", desc: "Respectful help with bathing, dressing, grooming, toileting, and daily routines.", icon: ShieldCheck },
    { title: "Meal Support", desc: "Meal preparation, hydration reminders, light kitchen clean-up, and routine support.", icon: Sparkles },
    { title: "Medication Reminders", desc: "Timely reminders and basic wellness observation for peace of mind.", icon: Activity },
    { title: "Errands & Appointments", desc: "Support with shopping, local errands, and transportation-related routines.", icon: CheckCircle2 },
    { title: "Mobility Assistance", desc: "Careful support with walking, transfers, fall prevention, and safe movement at home.", icon: Users },
  ];

  const highlights = [
    "Texas licensed personal assistance services",
    "Care plans built around the client's routine",
    "Professional caregiver matching and supervision",
    "Clear communication with families",
  ];

  const processSteps = [
    {
      title: "Care consultation",
      desc: "We listen to your needs, schedule, home setting, and family concerns.",
      icon: Phone,
    },
    {
      title: "Personalized care plan",
      desc: "We recommend services, visit frequency, safety priorities, and caregiver fit.",
      icon: ClipboardCheck,
    },
    {
      title: "Caregiver matching",
      desc: "We match support based on the client's personality, needs, and preferred routine.",
      icon: HeartHandshake,
    },
    {
      title: "Ongoing support",
      desc: "We monitor care quality and adjust the plan as needs change.",
      icon: CalendarCheck,
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#123217] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,161,92,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-[#1E3F20]/80 to-transparent lg:block" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#F2BF82]">
              <ShieldCheck className="h-4 w-4" />
              Licensed Personal Assistance Services
            </div>

            <h1 className="max-w-4xl font-serif text-4xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Professional home care that helps your loved one feel safe, respected, and supported.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 md:text-lg">
              Assurance Care LLC provides dependable in-home personal assistance for seniors and adults who need help with daily routines, companionship, mobility, meals, errands, and reminders while remaining in the comfort of home.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E6A15C] px-7 py-4 text-sm font-black text-[#123217] shadow-xl shadow-black/20 transition hover:bg-[#f1b26f] sm:w-auto">
                  Schedule Free Assessment <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <a href="tel:+14302570296">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-black text-white transition hover:bg-white/15 sm:w-auto">
                  <Phone className="h-4 w-4" /> Call +1 (430) 257-0296
                </button>
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-sm font-semibold text-slate-100 backdrop-blur">
                  <Check className="h-4 w-4 shrink-0 text-[#E6A15C]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] border border-white/15 bg-white p-4 shadow-2xl shadow-black/30 md:p-5">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://static.wixstatic.com/media/11062b_47edfed0487345d9b1c46dd756687641~mv2.jpg/v1/fill/w_1265,h_725,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_47edfed0487345d9b1c46dd756687641~mv2.jpg"
                  alt="Compassionate caregiver supporting an older adult at home"
                  className="h-72 w-full object-cover md:h-96"
                />
              </div>
              <div className="-mt-12 ml-auto mr-3 max-w-sm rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1E3F20] text-white">
                    <HomeIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#E6A15C]">Care at Home</p>
                    <h3 className="mt-1 text-base font-black text-[#1E3F20]">Comfort, dignity, and independence.</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-500">Personalized assistance designed around the client’s home routine and family expectations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 text-center md:grid-cols-4">
          {[
            ["Licensed", "Texas PAS Provider"],
            ["Bonded", "Insured Care Team"],
            ["Flexible", "Hourly Care Options"],
            ["Local", "DFW Area Support"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-5">
              <p className="text-2xl font-black text-[#1E3F20] md:text-3xl">{value}</p>
              <p className="mt-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#E6A15C]">Why families choose Assurance Care</p>
            <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#1E3F20] md:text-5xl">
              A calmer, more organized way to arrange care for someone you love.
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
              Choosing home care can feel overwhelming. We make the process clear, respectful, and personal by helping families understand the right level of care, set expectations, and create a plan that supports daily life at home.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Care plans are tailored to the client’s health, habits, personality, and schedule.",
                "Caregivers support independence while helping reduce safety risks at home.",
                "Families receive a professional partner who communicates clearly and follows through.",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E3F20]" />
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/why-us">
                <button className="rounded-xl bg-[#1E3F20] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#2e5230]">
                  Why Choose Us
                </button>
              </Link>
              <Link href="/about">
                <button className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-[#1E3F20] transition hover:bg-slate-50">
                  Learn About Assurance Care
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E3F20]/8 text-[#1E3F20]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-black text-slate-300">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-black text-[#1E3F20]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#E6A15C]">Home care services</p>
            <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#1E3F20] md:text-5xl">
              Practical daily support, delivered with professionalism and compassion.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
              Whether your family needs a few hours of support or a more structured care routine, we help with the essential tasks that make home safer and more comfortable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => {
              const IconComp = svc.icon;
              return (
                <div key={svc.title} className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#1E3F20]/20 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E3F20]/8 text-[#1E3F20] transition group-hover:bg-[#1E3F20] group-hover:text-white">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-black text-[#1E3F20]">{svc.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{svc.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services">
              <button className="inline-flex items-center gap-2 rounded-xl border border-[#1E3F20]/20 bg-white px-6 py-3.5 text-sm font-bold text-[#1E3F20] transition hover:bg-[#1E3F20] hover:text-white">
                View All Services <ChevronRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#E6A15C]">Care Navigator</p>
            <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-[#1E3F20] md:text-5xl">
              Not sure what level of care you need?
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
              Use this quick guide to start thinking through your needs. This does not replace a professional assessment, but it can help your family prepare for the care conversation.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/60 md:p-8">
              <div className="border-b border-slate-100 pb-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#E6A15C]">Quick Care Assessment</p>
                <h3 className="mt-1 text-2xl font-black text-[#1E3F20]">Find a starting recommendation</h3>
              </div>

              {!showResult ? (
                <div className="mt-6 space-y-5">
                  <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <span>Question {assessmentStep + 1} of {assessmentQuestions.length}</span>
                    <span className="text-[#1E3F20]">{Math.round(((assessmentStep + 1) / assessmentQuestions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-[#1E3F20] transition-all" style={{ width: `${((assessmentStep + 1) / assessmentQuestions.length) * 100}%` }} />
                  </div>
                  <p className="text-lg font-black leading-7 text-[#1E3F20]">{assessmentQuestions[assessmentStep].question}</p>
                  <div className="grid gap-3">
                    {assessmentQuestions[assessmentStep].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleOptionSelect(opt.value)}
                        className="rounded-2xl border border-slate-200 p-4 text-left text-sm font-semibold text-slate-700 transition hover:border-[#1E3F20] hover:bg-[#1E3F20]/5 hover:text-[#1E3F20]"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-6 space-y-5">
                  <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">Recommended starting point</p>
                    <h4 className="mt-2 text-2xl font-black text-[#1E3F20]">{getRecommendedCareLevel().level}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{getRecommendedCareLevel().desc}</p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button onClick={resetAssessment} className="rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-600 transition hover:bg-slate-50 sm:flex-1">
                      Start Over
                    </button>
                    <Link href="/contact" className="sm:flex-1">
                      <button className="w-full rounded-xl bg-[#1E3F20] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#2e5230]">
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

      <section className="bg-[#1E3F20] px-6 py-18 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#E6A15C]">Serving families across the DFW area</p>
            <h2 className="mt-3 font-serif text-3xl font-black tracking-tight md:text-5xl">
              Start care with a conversation, not confusion.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              Tell us what is changing at home. We will help you understand care options, create a realistic plan, and move forward with confidence.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="grid gap-3">
                <a href="tel:+14302570296" className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 text-[#1E3F20] transition hover:bg-[#E6A15C]">
                  <span className="font-black">Call +1 (430) 257-0296</span>
                  <Phone className="h-5 w-5" />
                </a>
                <Link href="/contact">
                  <button className="flex w-full items-center justify-between rounded-2xl border border-white/20 px-5 py-4 text-left font-black text-white transition hover:bg-white/10">
                    Request Free Assessment Online
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
              </div>
              <div className="mt-5 flex items-start gap-3 text-sm leading-6 text-slate-200">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#E6A15C]" />
                <p>Flexible care support for daily routines, family relief, and changing home-care needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
