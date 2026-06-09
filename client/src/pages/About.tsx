import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { 
  Heart, 
  Award, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  HeartHandshake,
  Clock,
  Compass,
  Smile
} from "lucide-react";

export default function About() {
  const values = [
    { title: "Dignity First", desc: "We honor the life stories and independence of our seniors, ensuring they are treated with the utmost respect.", icon: Award },
    { title: "Unwavering Empathy", desc: "Compassion is at the core of everything we do. We care for your family like our own.", icon: Heart },
    { title: "Clinical Integrity", desc: "Through continuous training, background checks, and strict quality controls, we maintain the highest industry standards.", icon: ShieldCheck },
    { title: "Seamless Partnership", desc: "We build a unified circle of support between our caregivers, clients, and their families.", icon: HeartHandshake }
  ];

  return (
    <Layout>
      {/* About Hero */}
      <section className="bg-[#082B4D] text-white py-20 px-6 relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0F8F88]/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Our Legacy & Mission</span>
          <h1 className="text-3xl md:text-5xl font-black font-serif tracking-tight leading-tight">
            About Assurance Care LLC
          </h1>
          <p className="text-slate-200 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Established with a heartfelt commitment to delivering exceptional, personalized home healthcare services that promote comfort, dignity, and independence.
          </p>
        </div>
      </section>

      {/* History & Mission Statement */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Founded in 2023</span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#082B4D] tracking-tight">
            Enhancing the Quality of Life for Our Cherished Elderly
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Assurance Care LLC was established with a heartfelt commitment to delivering exceptional, personalized home healthcare services. Founded in 2023, our mission is to enhance the quality of life for our clients by promoting independence, dignity, and comfort in the familiar surroundings of their homes.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            We understand that each individual’s needs are unique, and we are dedicated to providing flexible, high-quality care that supports not only our clients but their families as well. At Assurance Care, we believe that our elderly are a cherished treasure and deserve nothing but the best. 
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            We design comprehensive care plans tailored to meet the specific needs of each client, with compassion and professionalism at the forefront of our approach. Our goal is to create a seamless partnership between our caregivers, clients, and their families to ensure a positive and enriching care experience.
          </p>
        </div>

        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-2xl overflow-hidden border border-slate-100 shadow-2xl">
            <img 
              src="https://static.wixstatic.com/media/11062b_bff140366281447b99152d6112cafd32~mv2.jpg/v1/fill/w_1265,h_1308,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_bff140366281447b99152d6112cafd32~mv2.jpg" 
              alt="Caregiver with elderly client" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-xl border border-slate-100 shadow-lg flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[8px] font-bold text-[#082B4D] uppercase tracking-widest">Active Status</span>
                <p className="text-xs font-extrabold text-[#082B4D]">Fully Licensed Provider</p>
              </div>
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-black font-serif text-[#082B4D] tracking-tight">
              Values That Guide Our Care
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              We operate under strict moral, clinical, and ethical standards to ensure your loved ones are protected and supported.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#082B4D]/5 flex items-center justify-center text-[#082B4D]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#082B4D] mt-4">{val.title}</h3>
                  <p className="text-slate-500 text-xs mt-2 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Success Stories */}
      <section className="py-20 px-6 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[10px] font-extrabold text-[#0F8F88] uppercase tracking-widest">Client Success</span>
          <h2 className="text-3xl md:text-4xl font-black font-serif text-[#082B4D] tracking-tight">
            What Families Are Saying
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            Read stories of how our dedicated caregivers have made a meaningful difference.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="flex text-amber-400 gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="space-y-3">
              <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed">
                "Working with Assurance Care LLC has been a wonderful experience. Their personalized approach to care really stood out—they took the time to understand our needs and provided a caregiver who was the perfect match for my brother. The level of attention and empathy they show is unmatched!"
              </p>
              <span className="font-extrabold text-xs text-[#082B4D] block">— Maria T.</span>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 items-start">
            <div className="flex text-amber-400 gap-0.5 shrink-0">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="space-y-3">
              <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed">
                "Assurance Care LLC has been a true blessing for our family. Their team provided exceptional care for my elderly mother, always treating her with kindness and respect. They go above and beyond to ensure her needs are met, and their communication with us has been outstanding. I can’t recommend them enough!"
              </p>
              <span className="font-extrabold text-xs text-[#082B4D] block">— Lisa R.</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
