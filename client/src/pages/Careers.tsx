import React, { useState } from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import {
  ShieldCheck, Award, Heart, Clock, Check,
  ChevronDown, ChevronUp, MapPin, ArrowRight,
  Users, Sparkles, HeartHandshake, BadgeCheck
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  type: string;
  category: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  descUrl: string;
}

const jobs: Job[] = [
  {
    id: "admin_pas",
    title: "Administrator of PAS",
    type: "Full Time",
    category: "Leadership",
    summary: "Oversee Personal Assistance Services operations, staff leadership, and state compliance.",
    responsibilities: [
      "Manage daily operations of Personal Assistance Services programs.",
      "Ensure full compliance with local, state, and federal healthcare regulations.",
      "Supervise, evaluate, and coordinate office staff and field caregivers.",
      "Oversee client intake, care plan audits, and quality assurance metrics."
    ],
    requirements: [
      "Prior experience in healthcare administration or PAS program management.",
      "Deep understanding of state licensing and compliance standards.",
      "Strong leadership, communication, and organizational skills.",
      "Degree in Healthcare Administration, Nursing, or related field preferred."
    ],
    descUrl: "https://618d8641-0eac-4d1b-b5ec-7c90fa09e7f7.usrfiles.com/ugd/618d86_53cf14a2f5dd4981810ecf239073b4c7.pdf"
  },
  {
    id: "alt_admin_pas",
    title: "Alternate Administrator of PAS",
    type: "Full Time",
    category: "Leadership",
    summary: "Support PAS operations and assume lead responsibility in the Administrator's absence.",
    responsibilities: [
      "Assist the Administrator in overseeing daily operations and compliance.",
      "Act as lead operational administrator in the primary Administrator's absence.",
      "Perform regular audits of client care files and employee credentials.",
      "Provide scheduling coordination and ongoing support for caregivers."
    ],
    requirements: [
      "Experience working within a licensed home care or PAS environment.",
      "Familiarity with state compliance, billing, and scheduling systems.",
      "Ability to multi-task and lead teams in a fast-paced environment.",
      "Strong attention to detail and file auditing capabilities."
    ],
    descUrl: "https://618d8641-0eac-4d1b-b5ec-7c90fa09e7f7.usrfiles.com/ugd/618d86_278f77cdff40445e99471999982fe244.pdf"
  },
  {
    id: "supervisor_pas",
    title: "Supervisor of PAS Program",
    type: "Full Time",
    category: "Supervisory",
    summary: "Supervise attendants, conduct home visits, and ensure the highest quality of care delivery.",
    responsibilities: [
      "Supervise, mentor, and schedule in-home personal care attendants.",
      "Conduct regular client home visits to evaluate care quality and satisfaction.",
      "Update and modify client care plans in response to changing health needs.",
      "Provide direct coaching and performance feedback to caregivers."
    ],
    requirements: [
      "Minimum 2 years of supervisory experience in home care or clinical settings.",
      "Strong interpersonal skills to connect with elderly clients and families.",
      "Reliable transportation to conduct in-home field supervisor visits.",
      "CPR and First Aid certification (or willingness to obtain in-house)."
    ],
    descUrl: "https://618d8641-0eac-4d1b-b5ec-7c90fa09e7f7.usrfiles.com/ugd/618d86_dc92ed64da224084a1ed850507bb6568.pdf"
  },
  {
    id: "community_care_coordinator",
    title: "Community Care Coordinator",
    type: "Full / Part Time",
    category: "Coordination",
    summary: "Bridge communication between clients, families, and caregivers while managing community resources.",
    responsibilities: [
      "Act as the primary point of contact for clients, families, and case managers.",
      "Coordinate and match caregivers with clients based on skills and preferences.",
      "Organize community outreach, health events, and family support groups.",
      "Manage real-time schedule adjustments and emergency care requests."
    ],
    requirements: [
      "Exceptional communication, empathy, and customer service skills.",
      "Experience in scheduling, case management, or social work preferred.",
      "Proficiency with digital scheduling software and office systems.",
      "Bilingual (English/Spanish) is a strong plus."
    ],
    descUrl: "https://618d8641-0eac-4d1b-b5ec-7c90fa09e7f7.usrfiles.com/ugd/618d86_d2e0e6210f594757b56bbaf9ca73db74.pdf"
  },
  {
    id: "admin_assistant",
    title: "Administrative Assistant",
    type: "Full / Part Time",
    category: "Administrative",
    summary: "Provide vital office support, manage scheduling systems, and handle client communications.",
    responsibilities: [
      "Manage incoming phone calls, emails, and client inquiries professionally.",
      "Support the coordination team with daily scheduling and data entry.",
      "Maintain organized digital and physical employee and client records.",
      "Assist with preparing weekly billing, invoicing, and payroll reports."
    ],
    requirements: [
      "Proficiency in MS Office (Word, Excel) and general computer systems.",
      "Excellent phone etiquette and professional verbal/written communication.",
      "Strong organizational skills and ability to manage multiple priorities.",
      "High school diploma or equivalent; office experience preferred."
    ],
    descUrl: "https://618d8641-0eac-4d1b-b5ec-7c90fa09e7f7.usrfiles.com/ugd/618d86_c99dc9bb05224364950a784e2a1d7e83.pdf"
  },
  {
    id: "sitter_companion",
    title: "Sitter / Companion",
    type: "Full / Part Time",
    category: "Caregiving",
    summary: "Provide meaningful companionship, light housekeeping, and non-medical support to seniors.",
    responsibilities: [
      "Engage clients in meaningful conversation, reading, games, and social activities.",
      "Assist with light housekeeping, laundry, and maintaining a clean environment.",
      "Prepare nutritious meals tailored to dietary preferences.",
      "Provide transportation for errands, shopping, and doctor appointments."
    ],
    requirements: [
      "A warm, compassionate heart and genuine desire to support seniors.",
      "Excellent communication and active listening skills.",
      "Reliable transportation and a clean driving record.",
      "Pass a comprehensive criminal background check."
    ],
    descUrl: "https://618d8641-0eac-4d1b-b5ec-7c90fa09e7f7.usrfiles.com/ugd/618d86_5beee7744e1c4deda42142ae8ae934f8.pdf"
  },
  {
    id: "home_health_aide",
    title: "Home Health Aide (HHA)",
    type: "Full / Part Time",
    category: "Caregiving",
    summary: "Assist clients with personal care, daily living activities, hygiene, and basic health monitoring.",
    responsibilities: [
      "Assist with activities of daily living including bathing, dressing, and grooming.",
      "Support clients with safe transferring, mobility, and exercise guidance.",
      "Provide medication reminders and monitor basic vital signs.",
      "Maintain detailed, accurate daily care logs for family and clinical review."
    ],
    requirements: [
      "Valid HHA certification or equivalent clinical training.",
      "Active CPR and First Aid certification.",
      "Physical ability to assist with patient transfers and mobility.",
      "Compassionate, reliable, and highly professional demeanor."
    ],
    descUrl: "https://618d8641-0eac-4d1b-b5ec-7c90fa09e7f7.usrfiles.com/ugd/618d86_a41de8e39ca34f8f819b7a0026cbb8a9.pdf"
  },
  {
    id: "personal_attendant",
    title: "Personal Attendant",
    type: "Full / Part Time",
    category: "Caregiving",
    summary: "Assist clients with daily living tasks, personal care, and maintaining safety and comfort at home.",
    responsibilities: [
      "Assist with bathing, toileting, personal hygiene, and dressing.",
      "Help with meal preparation, light housekeeping, and medication reminders.",
      "Provide safe physical assistance with transferring and movement.",
      "Report any changes in client physical or cognitive health to supervisors."
    ],
    requirements: [
      "Experience in personal care, caregiving, or nursing support.",
      "Reliable, punctual, and dedicated to client safety.",
      "Pass background checks and drug screening.",
      "Strong work ethic and professional boundaries."
    ],
    descUrl: "https://618d8641-0eac-4d1b-b5ec-7c90fa09e7f7.usrfiles.com/ugd/618d86_ba8fa21c00304a078cbcd5dff0442180.pdf"
  }
];

const benefits = [
  { icon: ShieldCheck, title: "W-2 Employment", desc: "Full legal protections, structured tax withholdings, and job security from day one." },
  { icon: Award,       title: "Competitive Pay",  desc: "Above-market rates that recognize and reward the quality of your care." },
  { icon: Heart,       title: "CPR & Training",   desc: "In-house certifications, first aid training, and continuous clinical education." },
  { icon: Clock,       title: "Flexible Hours",   desc: "Part-time and full-time schedules designed around your life and availability." },
  { icon: HeartHandshake, title: "Supportive Team", desc: "A close-knit leadership team that listens, responds, and has your back." },
  { icon: BadgeCheck,  title: "Career Growth",    desc: "Clear paths from caregiver to supervisor and coordinator roles as we grow." },
];

const categoryColors: Record<string, string> = {
  Leadership:     "bg-violet-50 text-violet-700 border-violet-100",
  Supervisory:    "bg-blue-50 text-blue-700 border-blue-100",
  Coordination:   "bg-amber-50 text-amber-700 border-amber-100",
  Administrative: "bg-slate-100 text-slate-600 border-slate-200",
  Caregiving:     "bg-emerald-50 text-emerald-700 border-emerald-100",
};

export default function Careers() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative bg-[#082B4D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576765608866-5b51046452be?auto=format&fit=crop&w=1800&q=60')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#082B4D]/80 to-[#082B4D]" />
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center space-y-5">
          <span className="inline-block text-[10px] font-black text-[#0F8F88] uppercase tracking-widest border border-[#0F8F88]/30 px-3 py-1 rounded-full">
            Now Hiring — DFW Metroplex
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Care With Us.<br />
            <span className="text-[#0F8F88]">Grow With Us.</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Join a compassionate, professional team making a real difference in the lives of seniors and families across the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 bg-[#0F8F88] text-white font-black text-sm px-6 py-3.5 rounded-xl hover:bg-[#d4904b] transition-colors shadow-lg"
            >
              View Open Positions <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+14302570296"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-white/20 transition-colors"
            >
              Call: 430-257-0296
            </a>
          </div>
        </div>

        {/* Stat bar */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-3 divide-x divide-white/10 text-center">
            {[
              ["8+", "Open Positions"],
              ["W-2", "Employment"],
              ["24–48hr", "Response Time"],
            ].map(([val, label]) => (
              <div key={label} className="px-4">
                <p className="text-xl md:text-2xl font-black text-[#0F8F88]">{val}</p>
                <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN US ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] font-black text-[#0F8F88] uppercase tracking-widest">Why Work Here</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#082B4D] tracking-tight">
              A Place Where Caregivers Thrive
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We invest in our team the same way we invest in our clients — with respect, resources, and a genuine commitment to their wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#082B4D] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#0F8F88]" />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-[#082B4D]">{b.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── JOB LISTINGS ── */}
      <section id="openings" className="py-20 px-6 bg-slate-50 border-y border-slate-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] font-black text-[#0F8F88] uppercase tracking-widest">Active Openings</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#082B4D] tracking-tight">
              {jobs.length} Open Positions
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              All positions require a background check. Select any role to view full details, then click <strong>Apply Now</strong> to complete the official employment application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jobs.map((job) => {
              const open = expandedId === job.id;
              return (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
                >
                  {/* Card header */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-black text-base text-[#082B4D] leading-snug">{job.title}</h3>
                      <span className={`shrink-0 text-[9px] font-black px-2.5 py-1 rounded-full border uppercase tracking-wider ${categoryColors[job.category]}`}>
                        {job.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> DFW Metroplex, TX</span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {job.type}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{job.summary}</p>
                  </div>

                  {/* Expandable details */}
                  {open && (
                    <div className="px-6 pb-4 space-y-4 border-t border-slate-50 pt-4">
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Key Responsibilities</p>
                        <ul className="space-y-1.5">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <Check className="w-3.5 h-3.5 text-[#0F8F88] shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Requirements</p>
                        <ul className="space-y-1.5">
                          {job.requirements.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                              <Check className="w-3.5 h-3.5 text-[#082B4D] shrink-0 mt-0.5" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {job.descUrl && (
                        <a
                          href={job.descUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#082B4D] underline underline-offset-2 hover:text-[#0F8F88] transition-colors"
                        >
                          Download Full Job Description PDF <ArrowRight className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Card footer */}
                  <div className="mt-auto px-6 py-4 border-t border-slate-50 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setExpandedId(open ? null : job.id)}
                      className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-[#082B4D] transition-colors"
                    >
                      {open ? <><ChevronUp className="w-4 h-4" /> Hide Details</> : <><ChevronDown className="w-4 h-4" /> View Details</>}
                    </button>
                    <Link href={`/apply?position=${encodeURIComponent(job.title)}`}>
                      <span className="inline-flex items-center gap-1.5 bg-[#082B4D] text-white text-xs font-black px-4 py-2.5 rounded-xl hover:bg-[#0B7772] transition-colors shadow-sm cursor-pointer">
                        Apply Now <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 px-6 bg-[#082B4D] text-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <Sparkles className="w-8 h-8 text-[#0F8F88] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-black tracking-tight">
            Don't See the Right Fit?
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            We're always looking for compassionate, dedicated people. Send us your information and we'll reach out when the right opportunity opens.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link href="/apply">
              <span className="inline-flex items-center gap-2 bg-[#0F8F88] text-white font-black text-sm px-6 py-3.5 rounded-xl hover:bg-[#d4904b] transition-colors shadow-lg cursor-pointer">
                Submit General Application <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <a
              href="mailto:info@assurancecarellc.com"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-white/20 transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}
