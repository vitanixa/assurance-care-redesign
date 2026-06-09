import React, { useState, useRef } from "react";
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
  Sparkles,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar
} from "lucide-react";
import { toast } from "sonner";

interface JobPosition {
  id: string;
  title: string;
  summary: string;
  desc: string[];
  requirements: string[];
}

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "Sitter / Companion",
    experience: "1-2 years",
    message: ""
  });

  const jobPositions: JobPosition[] = [
    {
      id: "admin_pas",
      title: "Administrator of PAS",
      summary: "Responsible for overseeing Personal Assistance Services (PAS) operations, staff leadership, and strict state compliance.",
      desc: [
        "Manage daily operations of Personal Assistance Services (PAS) programs.",
        "Ensure full compliance with local, state, and federal healthcare regulations.",
        "Supervise, evaluate, and coordinate office staff and field caregivers.",
        "Oversee client intake, care plan audits, and quality assurance metrics."
      ],
      requirements: [
        "Prior experience in healthcare administration or PAS program management.",
        "Deep understanding of state licensing and compliance standards.",
        "Strong leadership, communication, and organizational skills.",
        "Degree in Healthcare Administration, Nursing, or related field preferred."
      ]
    },
    {
      id: "alt_admin_pas",
      title: "Alternate Administrator of PAS",
      summary: "Supports PAS operations, assists the administrator in compliance, and assumes leadership in their absence.",
      desc: [
        "Assist the Administrator in overseeing daily operations and compliance.",
        "Act as the lead operational administrator in the absence of the primary Administrator.",
        "Perform regular audits of client care files and employee credentials.",
        "Provide ongoing support and scheduling coordination for caregivers."
      ],
      requirements: [
        "Experience working within a licensed home care or PAS environment.",
        "Familiarity with state compliance, billing, and scheduling systems.",
        "Ability to multi-task and lead teams in a fast-paced environment.",
        "Strong attention to detail and file auditing capabilities."
      ]
    },
    {
      id: "supervisor_pas",
      title: "Supervisor of PAS Program",
      summary: "Supervises attendants, conducts home visits, and ensures the highest quality of clinical and personal care.",
      desc: [
        "Supervise, mentor, and schedule in-home personal care attendants.",
        "Conduct regular client home visits to evaluate care quality and client satisfaction.",
        "Update and modify client care plans in response to changing health needs.",
        "Provide direct coaching and performance feedback to caregivers."
      ],
      requirements: [
        "Minimum 2 years of supervisory experience in home care or clinical settings.",
        "Strong interpersonal skills to connect with elderly clients and families.",
        "Reliable transportation to conduct in-home field supervisor visits.",
        "CPR and First Aid certification (or willingness to obtain in-house)."
      ]
    },
    {
      id: "community_care_coordinator",
      title: "Community Care Coordinator",
      summary: "Coordinates care plans, bridges communication between families and caregivers, and manages community resources.",
      desc: [
        "Act as the primary point of contact for clients, families, and case managers.",
        "Coordinate and match caregivers with clients based on skills and preferences.",
        "Organize community outreach, local health events, and family support groups.",
        "Manage real-time schedule adjustments and emergency care requests."
      ],
      requirements: [
        "Exceptional communication, empathy, and customer service skills.",
        "Experience in scheduling, case management, or social work preferred.",
        "Proficiency with digital scheduling software and office systems.",
        "Bilingual (English/Spanish) is a strong plus."
      ]
    },
    {
      id: "admin_assistant",
      title: "Administrative Assistant",
      summary: "Provides vital office support, manages scheduling systems, and handles client communications.",
      desc: [
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
      ]
    },
    {
      id: "sitter_companion",
      title: "Sitter / Companion",
      summary: "Provides meaningful companionship, light housekeeping, and non-medical support to seniors in their homes.",
      desc: [
        "Engage clients in meaningful conversation, reading, games, and social activities.",
        "Assist with light housekeeping, laundry, and maintaining a clean environment.",
        "Prepare nutritious, delicious meals tailored to dietary preferences.",
        "Provide local transportation for errands, shopping, and doctor appointments."
      ],
      requirements: [
        "A warm, compassionate heart and a genuine desire to support seniors.",
        "Excellent communication and active listening skills.",
        "Reliable transportation and clean driving record.",
        "Pass a comprehensive criminal background check."
      ]
    },
    {
      id: "home_health_aide",
      title: "Home Health Aide (HHA)",
      summary: "Assists clients with personal care, daily living activities, hygiene, and basic health monitoring.",
      desc: [
        "Assist with activities of daily living (ADLs) including bathing, dressing, and grooming.",
        "Support clients with safe transferring, mobility, and exercise guidance.",
        "Provide medication reminders and monitor basic vital signs (pulse, temp).",
        "Maintain detailed, accurate daily care logs for family review."
      ],
      requirements: [
        "Valid HHA certification or equivalent clinical training.",
        "Active CPR and First Aid certification.",
        "Physical ability to assist with patient transfers and mobility.",
        "Compassionate, reliable, and highly professional demeanor."
      ]
    },
    {
      id: "personal_attendant",
      title: "Personal Attendant",
      summary: "Assists clients with daily living tasks, personal care, and maintaining safety and comfort at home.",
      desc: [
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
      ]
    }
  ];

  const benefits = [
    { title: "W-2 Employment Status", desc: "Enjoy complete job security, structured tax withholdings, and professional legal protection.", icon: ShieldCheck },
    { title: "Higher Competitive Pay", desc: "We believe in rewarding quality. We pay above-average rates to attract and retain the best caregivers.", icon: Award },
    { title: "CPR & First Aid Training", desc: "We provide in-house certifications and continuous advanced clinical education.", icon: Heart },
    { title: "Flexible Schedules", desc: "Choose between custom part-time or full-time care programs that fit your life.", icon: Clock }
  ];

  const handleApplyClick = (jobTitle: string) => {
    setFormData({
      ...formData,
      position: jobTitle
    });
    
    // Smooth scroll to the form
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const toggleJobExpansion = (jobId: string) => {
    if (expandedJobId === jobId) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(jobId);
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
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
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

      {/* Interactive Job Openings Board */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Active Openings</span>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-[#1E3F20] tracking-tight">
              Our Active Job Openings
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              All positions require a comprehensive background check and a warm, caring heart. Select a position below to view details and apply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobPositions.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div 
                  key={job.id} 
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-200"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-base font-extrabold text-[#1E3F20]">{job.title}</h3>
                      <span className="text-[9px] font-bold bg-[#1E3F20]/5 text-[#1E3F20] px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0">
                        Full/Part Time
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{job.summary}</p>
                    
                    {/* Expandable Details */}
                    {isExpanded && (
                      <div className="border-t border-slate-100 pt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Key Responsibilities</h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {job.desc.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#E6A15C] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Requirements & Skills</h4>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#1E3F20] shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 pt-6 mt-auto border-t border-slate-50">
                    <button 
                      onClick={() => toggleJobExpansion(job.id)}
                      className="text-xs font-bold text-slate-500 hover:text-[#1E3F20] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      {isExpanded ? (
                        <>Hide Description <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>View Description <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                    <button 
                      onClick={() => handleApplyClick(job.title)}
                      className="ml-auto bg-[#1E3F20] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#2e5230] shadow-sm transition-all cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} className="py-20 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="bg-white border border-slate-100 p-6 md:p-10 rounded-2xl shadow-2xl space-y-6">
          <div className="text-center space-y-2 border-b border-slate-100 pb-6">
            <span className="text-[10px] font-extrabold text-[#E6A15C] uppercase tracking-widest">Apply Online</span>
            <h2 className="text-2xl md:text-3xl font-black font-serif text-[#1E3F20]">Caregiver Application Form</h2>
            <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
              Fill out the form below and our care coordinators will reach out to you within 24-48 hours.
            </p>
          </div>

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
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Position Applied For</label>
                  <select 
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#1E3F20]"
                  >
                    {jobPositions.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Years of Caregiving Experience</label>
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

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Write a Message / Cover Note</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us why you are a great fit for the role..."
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
                Thank you for applying for the **{formData.position}** role, {formData.name}. Our hiring specialist will review your details and contact you at {formData.phone} shortly.
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
      </section>
    </Layout>
  );
}
