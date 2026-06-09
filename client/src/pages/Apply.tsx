import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

const JOTFORM_URL = "https://form.jotform.com/260676874586072";
const JOTFORM_FIELD = "position4";

export default function Apply() {
  const [position, setPosition] = useState<string | null>(null);
  const [formSrc, setFormSrc] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pos = params.get("position");
    setPosition(pos);
    setFormSrc(
      pos
        ? `${JOTFORM_URL}?${JOTFORM_FIELD}=${encodeURIComponent(pos)}`
        : JOTFORM_URL
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans">

      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://static.wixstatic.com/media/618d86_89c9ddf4402143389ba68970dd50f0e0~mv2.jpg"
              alt="Assurance Care LLC"
              className="w-9 h-9 rounded-lg object-cover shadow-sm"
            />
            <div className="leading-tight">
              <p className="text-xs font-black text-[#1E3F20]">Assurance Care LLC</p>
              <p className="text-[10px] text-slate-400 font-semibold">Employment Application</p>
            </div>
          </div>
          <Link href="/careers">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#1E3F20] transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Back to Careers
            </span>
          </Link>
        </div>
      </header>

      {/* ── POSITION BANNER ── */}
      {position && (
        <div className="bg-[#1E3F20] text-white px-6 py-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <p className="text-[10px] font-black text-[#E6A15C] uppercase tracking-widest">Applying For</p>
              <p className="text-base font-black mt-0.5">{position}</p>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#E6A15C]" />
              Background check required · All information kept confidential
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-5 order-2 lg:order-1">

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
            <h3 className="text-sm font-black text-[#1E3F20]">Application Tips</h3>
            <ul className="space-y-3">
              {[
                "Complete all 5 steps for full consideration.",
                "Have your resume, government-issued ID, and SSN ready.",
                "List all previous employers, including gaps.",
                "Three professional references are required.",
                "Upload a clear photo of your government-issued ID.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <span className="w-4 h-4 rounded-full bg-[#E6A15C]/15 text-[#E6A15C] font-black text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1E3F20] rounded-2xl p-5 space-y-4 text-white">
            <h3 className="text-sm font-black">Questions?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our hiring team is available Monday–Friday, 9am–5pm.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+14302570296" className="flex items-center gap-2 text-xs font-bold text-[#E6A15C] hover:underline">
                <Phone className="w-3.5 h-3.5" /> 430-257-0296
              </a>
              <a href="tel:+16156492231" className="flex items-center gap-2 text-xs font-bold text-[#E6A15C] hover:underline">
                <Phone className="w-3.5 h-3.5" /> 615-649-2231
              </a>
              <a href="mailto:info@assurancecarellc.com" className="flex items-center gap-2 text-xs font-bold text-[#E6A15C] hover:underline">
                <Mail className="w-3.5 h-3.5" /> info@assurancecarellc.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E6A15C]" />
              <h3 className="text-sm font-black text-[#1E3F20]">Response Time</h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our hiring coordinators review all applications within <strong className="text-[#1E3F20]">24–48 business hours</strong> and reach out directly by phone or email.
            </p>
          </div>

        </aside>

        {/* JotForm embed */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-base font-black text-[#1E3F20]">Employment Application</h2>
                <p className="text-xs text-slate-400 mt-0.5">5-step application · Takes approx. 10–15 minutes</p>
              </div>
              <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wider">
                Secure Form
              </span>
            </div>
            {formSrc ? (
              <iframe
                src={formSrc}
                title="Assurance Care LLC Employment Application"
                className="w-full border-0"
                style={{ height: "2900px" }}
                scrolling="yes"
                allow="geolocation"
              />
            ) : (
              <div className="flex items-center justify-center h-64 text-slate-400 text-sm">
                Loading application form…
              </div>
            )}
          </div>
        </div>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        © 2026 Assurance Care LLC · All information submitted is kept strictly confidential.
      </footer>

    </div>
  );
}
