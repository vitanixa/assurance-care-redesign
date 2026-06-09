import React from "react";
import { Link } from "wouter";
import Layout from "../components/Layout";
import {
  ArrowRight,
  Bath,
  CheckCircle2,
  Heart,
  Home as HomeIcon,
  MapPin,
  Pill,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  UserRoundCheck,
  Users,
  Phone,
} from "lucide-react";

const services = [
  {
    title: "Personal Care",
    desc: "Assistance with bathing, dressing, grooming, and daily activities.",
    icon: Bath,
  },
  {
    title: "Companion Care",
    desc: "Friendly companionship and emotional support for safer days at home.",
    icon: Heart,
  },
  {
    title: "Medication Reminders",
    desc: "Timely reminders to help maintain health and wellness routines.",
    icon: Pill,
  },
  {
    title: "Errands & Light Housekeeping",
    desc: "Help with errands, meal prep, laundry, and keeping your home safe.",
    icon: ShoppingCart,
  },
];

const trustItems = [
  { label: "We treat your family like our own.", icon: Heart },
  { label: "Personalized Care", icon: CheckCircle2 },
  { label: "Reliable Caregivers", icon: ShieldCheck },
  { label: "Peace of Mind", icon: HomeIcon },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#F9FBFC]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,143,136,0.16),transparent_34%),linear-gradient(90deg,#ffffff_0%,#ffffff_43%,rgba(8,43,77,0.05)_100%)]" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-12 lg:py-0">
          <div className="z-10 lg:col-span-5">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0F8F88]/20 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0F8F88] shadow-sm">
              <Star className="h-4 w-4 fill-[#0F8F88]" />
              Licensed • Insured • Trusted
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[0.96] tracking-tight text-[#082B4D] md:text-6xl lg:text-7xl">
              Compassionate Care.
              <span className="block text-[#0F8F88]">Trusted Support.</span>
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-[#0F8F88]" />

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 md:text-lg">
              Assurance Care LLC provides quality in-home care that helps your loved ones live safely, comfortably, and independently where they belong — at home.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/services">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F8F88] px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white shadow-xl shadow-[#0F8F88]/20 transition hover:-translate-y-0.5 hover:bg-[#0B7772]">
                  Our Services <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center justify-center rounded-lg border-2 border-[#0F8F88] bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-[#0F8F88] transition hover:-translate-y-0.5 hover:bg-[#F0FBFA]">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-7 lg:h-[620px]">
            <div className="absolute right-0 top-0 hidden h-full w-[78%] rounded-bl-[90px] bg-gradient-to-br from-[#EDF6F5] via-[#F8FAFC] to-[#DCEDEA] lg:block" />
            <div className="relative ml-auto flex min-h-[480px] max-w-3xl items-end justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F5EFE7] via-white to-[#E0F3F1] p-8 shadow-2xl lg:h-[560px] lg:rounded-none lg:rounded-bl-[5rem] lg:bg-transparent lg:shadow-none">
              <div className="relative z-10 w-full max-w-xl rounded-[2rem] border border-white/70 bg-white/70 p-7 shadow-xl backdrop-blur-md lg:ml-24 lg:mt-24">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#082B4D] to-[#0F8F88] p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                      <UserRoundCheck className="h-10 w-10" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Professional caregivers</p>
                      <h2 className="mt-1 font-serif text-3xl font-bold">Warm support at home</h2>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Daily personal care",
                      "Meal preparation",
                      "Companionship",
                      "Family communication",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 rounded-xl bg-white/12 px-3 py-3 text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-2xl font-black text-[#082B4D]">24/7</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">Support</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-2xl font-black text-[#082B4D]">PAS</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">Services</p>
                  </div>
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-2xl font-black text-[#082B4D]">DFW</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wide text-slate-500">Local Care</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-[#0F8F88]/15 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-xl bg-[#0F8F88] text-2xl font-black text-white shadow-md shadow-[#0F8F88]/20">A+</div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-wide text-[#082B4D]">Professional Care Standard</p>
                      <p className="text-xs font-semibold text-slate-500">Quality-focused support for families at home.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-[#0F8F88]" />
                    <span>Licensed • Insured • Trusted</span>
                  </div>
                </div>
              </div>
            </div>

            <a href="tel:+14302570296" className="absolute right-4 top-0 z-20 hidden items-center gap-2 rounded-full bg-[#0F8F88] px-5 py-2.5 text-sm font-black text-white shadow-xl transition hover:bg-[#0B7772] lg:flex">
              <Phone className="h-5 w-5" />
              (430) 257-0296
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#082B4D] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/20 px-6 md:grid-cols-4 md:divide-x md:divide-y-0">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center justify-center gap-3 py-5 text-sm font-bold">
                <Icon className="h-5 w-5 text-[#0F8F88]" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className={`flex gap-5 p-6 ${index !== 0 ? "lg:border-l lg:border-slate-200" : ""}`}>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0F8F88] text-white shadow-lg shadow-[#0F8F88]/20">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold leading-tight text-[#082B4D]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0F8F88] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-sm font-semibold md:flex-row md:text-left">
          <div className="flex items-center gap-3 text-lg font-extrabold">
            <MapPin className="h-6 w-6" />
            Proudly Serving DFW and Surrounding Areas
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-base">
            <span>Medicaid</span><span>•</span><span>VA Benefits</span><span>•</span><span>Private Pay</span><span>•</span><span>Long Term Care Insurance</span>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#0F8F88]">Why families choose us</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-[#082B4D]">Care that feels personal, organized, and dependable.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:col-span-2">
            {[
              ["Care Plan First", "We begin by understanding the client’s daily routine, safety needs, and family preferences."],
              ["Professional Standards", "Caregivers are selected for compassion, reliability, and professionalism."],
              ["Peace of Mind", "Families receive responsive communication and dependable support when it matters most."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
                <Sparkles className="h-8 w-8 text-[#0F8F88]" />
                <h3 className="mt-5 text-xl font-black text-[#082B4D]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center rounded-[2rem] bg-[#082B4D] p-8 text-center text-white shadow-2xl md:p-12">
          <Users className="h-10 w-10 text-[#0F8F88]" />
          <h2 className="mt-5 font-serif text-4xl font-bold">Ready to discuss care for your loved one?</h2>
          <p className="mt-4 max-w-2xl text-white/75">Start with a simple conversation. We will help you understand service options, scheduling, and the best support for your family.</p>
          <Link href="/contact">
            <button className="mt-8 rounded-lg bg-[#0F8F88] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-[#0B7772]">
              Schedule a Free Assessment
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
