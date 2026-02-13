"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Mail,
  Phone,
  FileText,
  Calendar,
  Brain,
  Sun,
  Shield,
  Server,
  Lock,
  Eye,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  ChevronRight,
  Sparkles,
  Database,
  Zap,
  Building2,
  HeartPulse,
  BarChart3,
  Star,
  MessageSquare,
  CircleDot,
  MoveRight,
} from "lucide-react";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ─── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0B1221]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E8612D] to-[#F59E0B] flex items-center justify-center">
              <Sparkles size={16} className="text-white" strokeWidth={2} />
            </div>
            <span className="text-xl font-semibold tracking-tight text-[#F1F5F9]">
              sirca
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Product", "Security", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors duration-200 tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-colors px-4 py-2">
              Log in
            </button>
            <button className="text-sm font-medium bg-[#E8612D] hover:bg-[#D4571F] text-white px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#E8612D]/20">
              Request a Demo
            </button>
          </div>

          <button
            className="md:hidden text-[#94A3B8] hover:text-[#F1F5F9] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0B1221]/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-6 space-y-4">
            {["Product", "Security", "Pricing", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-[#94A3B8] hover:text-[#F1F5F9] text-lg py-2"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <button className="w-full text-sm text-[#94A3B8] py-2">Log in</button>
              <button className="w-full text-sm font-medium bg-[#E8612D] text-white px-5 py-3 rounded-lg">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Morning Briefing Mock ───────────────────────────────────────────────────
function BriefingMock() {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    for (let i = 0; i < 5; i++) {
      timers.push(setTimeout(() => setVisibleItems(i + 1), 600 + i * 400));
    }
    return () => timers.forEach(clearTimeout);
  }, []);

  const briefingItems = [
    {
      icon: <AlertTriangle size={14} className="text-[#F59E0B]" />,
      priority: "HIGH",
      priorityColor: "text-[#F59E0B]",
      title: "Martinez v. Helix Corp — SOL expires in 12 days",
      detail:
        "No motion filed yet. Last activity was a call with co-counsel on Jan 28. Recommend immediate follow-up.",
      bgColor: "border-[#F59E0B]/20",
    },
    {
      icon: <TrendingUp size={14} className="text-[#2DD4BF]" />,
      priority: "INSIGHT",
      priorityColor: "text-[#2DD4BF]",
      title: "Cross-matter connection detected",
      detail:
        "Witness James Thornton appears in both Delacroix and Parkview matters. Deposition transcripts show conflicting statements.",
      bgColor: "border-[#2DD4BF]/20",
    },
    {
      icon: <Clock size={14} className="text-[#E8612D]" />,
      priority: "DEADLINE",
      priorityColor: "text-[#E8612D]",
      title: "3 client invoices overdue > 60 days",
      detail:
        "Total outstanding: $47,200. Historical pattern: Chen Industries pays after second reminder.",
      bgColor: "border-[#E8612D]/20",
    },
    {
      icon: <CheckCircle size={14} className="text-[#22C55E]" />,
      priority: "RESOLVED",
      priorityColor: "text-[#22C55E]",
      title: "Westbrook LLC signed engagement letter",
      detail:
        "Document received 11:42 PM. Conflicts check cleared. Ready for matter opening.",
      bgColor: "border-[#22C55E]/20",
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#E8612D]/10 via-[#2DD4BF]/5 to-[#E8612D]/10 rounded-3xl blur-2xl" />

      <div className="relative bg-[#0F1A2E] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-[#94A3B8] uppercase">
              Morning Briefing
            </span>
          </div>
          <span className="text-xs text-[#64748B]">Feb 12, 2026 · 6:42 AM</span>
        </div>

        {/* Greeting */}
        <div
          className={cn(
            "px-5 pt-4 pb-2 transition-all duration-500",
            visibleItems >= 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          )}
        >
          <p className="text-sm text-[#CBD5E1]">
            Good morning,{" "}
            <span className="text-[#F1F5F9] font-medium">Sarah</span>. I
            analyzed 142 new data points across your 38 active matters overnight.
            Here's what needs your attention:
          </p>
        </div>

        {/* Items */}
        <div className="px-5 py-3 space-y-2.5">
          {briefingItems.map((item, i) => (
            <div
              key={i}
              className={cn(
                "p-3 rounded-lg border bg-white/[0.02] transition-all duration-500",
                item.bgColor,
                visibleItems >= i + 2
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                {item.icon}
                <span
                  className={cn(
                    "text-[10px] font-semibold tracking-widest uppercase",
                    item.priorityColor
                  )}
                >
                  {item.priority}
                </span>
              </div>
              <p className="text-sm font-medium text-[#E2E8F0] mb-0.5">
                {item.title}
              </p>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="px-5 py-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-3 px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg">
            <MessageSquare size={14} className="text-[#64748B]" />
            <span className="text-sm text-[#475569]">
              Ask about any matter...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0B1221]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,97,45,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(45,212,191,0.04)_0%,_transparent_50%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
              <span className="text-xs text-[#94A3B8] tracking-wide">
                AI-powered CRM for high-stakes relationships
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tight mb-6">
              <span
                className="block text-[#F1F5F9] font-light"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Your clients' data
              </span>
              <span
                className="block text-[#F1F5F9] font-light"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                is everywhere.
              </span>
              <span
                className="block mt-2 bg-gradient-to-r from-[#E8612D] to-[#F59E0B] bg-clip-text text-transparent font-normal"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Sirca connects it.
              </span>
            </h1>

            <p className="text-lg text-[#94A3B8] leading-relaxed mb-10 max-w-md">
              Every email, call, document, and filing — captured into one secure
              system. Overnight, Sirca's AI analyzes everything and delivers a
              prioritized morning briefing. Know what matters before your first
              coffee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group inline-flex items-center justify-center gap-2 bg-[#E8612D] hover:bg-[#D4571F] text-white font-medium px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#E8612D]/20 text-sm">
                Request a Demo
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/[0.12] hover:border-white/[0.24] text-[#CBD5E1] hover:text-[#F1F5F9] px-7 py-3.5 rounded-lg transition-all duration-200 text-sm">
                Watch 2-min overview
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-[#2DD4BF]" />
                <span className="text-xs text-[#64748B]">On-premise only</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-[#2DD4BF]" />
                <span className="text-xs text-[#64748B]">SOC 2 compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={14} className="text-[#2DD4BF]" />
                <span className="text-xs text-[#64748B]">
                  Your data stays yours
                </span>
              </div>
            </div>
          </div>

          {/* Right: Briefing mock */}
          <div className="lg:pl-8">
            <BriefingMock />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      icon: <Database size={24} className="text-[#E8612D]" />,
      step: "01",
      title: "Capture",
      description:
        "Every email, call transcript, document, court filing, text message, and calendar event flows into a per-client knowledge capsule — automatically.",
      sources: [
        { icon: <Mail size={12} />, label: "Email" },
        { icon: <Phone size={12} />, label: "Calls" },
        { icon: <FileText size={12} />, label: "Docs" },
        { icon: <Calendar size={12} />, label: "Calendar" },
      ],
    },
    {
      icon: <Brain size={24} className="text-[#2DD4BF]" />,
      step: "02",
      title: "Dream",
      description:
        "Overnight, Sirca's AI runs multi-pass analysis across every client. It cross-references connections, detects risk patterns, and identifies what humans would miss.",
      sources: null,
    },
    {
      icon: <Sun size={24} className="text-[#F59E0B]" />,
      step: "03",
      title: "Brief",
      description:
        "By 6 AM, every attorney has a prioritized morning briefing — what matters today, why it matters, and what to do about it. No searching. No guessing.",
      sources: null,
    },
  ];

  return (
    <section id="product" className="relative py-24 lg:py-32 bg-[#0B1221]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(45,212,191,0.03)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#E8612D] uppercase">
            How It Works
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-[#F1F5F9] tracking-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Three steps. Zero effort.
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Sirca works while you sleep — so you start every day knowing exactly
            what needs attention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              <div className="h-full p-6 lg:p-8 bg-[#0F1A2E] border border-white/[0.06] rounded-2xl hover:border-white/[0.12] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-xs font-mono text-[#475569]">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {step.description}
                </p>

                {step.sources && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {step.sources.map((s, j) => (
                      <div
                        key={j}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-md text-[#64748B] text-xs"
                      >
                        {s.icon}
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}

                {i === 1 && (
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((j) => (
                        <div
                          key={j}
                          className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse"
                          style={{ animationDelay: `${j * 300}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#2DD4BF] tracking-wider uppercase">
                      Analyzing overnight
                    </span>
                  </div>
                )}
              </div>

              {/* Connector on larger screens */}
              {i < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-4 z-10">
                  <MoveRight size={16} className="text-[#334155]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── The Moat ──────────────────────────────────────────────────────────────────
function TheMoat() {
  const days = [
    { day: "Day 1", pct: 15, label: "Basic pattern matching" },
    { day: "Day 30", pct: 40, label: "Learning your priorities" },
    { day: "Day 60", pct: 65, label: "Predicting what matters" },
    { day: "Day 90+", pct: 90, label: "Fully personalized intelligence" },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#090E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#2DD4BF] uppercase">
              The Difference
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-[#F1F5F9] tracking-tight leading-tight"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              It gets smarter <br />
              <span className="bg-gradient-to-r from-[#2DD4BF] to-[#06B6D4] bg-clip-text text-transparent">
                every single day.
              </span>
            </h2>
            <p className="mt-6 text-lg text-[#94A3B8] leading-relaxed max-w-lg">
              After 90 days of learning which insights you act on and which you
              ignore, Sirca builds a preference model unique to your firm.
              Competitors can't replicate what they can't see.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Learns from every action and dismissal",
                "Adapts to each attorney's workflow",
                "Cross-references matters automatically",
                "Improves accuracy weekly",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle
                    size={16}
                    className="text-[#2DD4BF] flex-shrink-0"
                  />
                  <span className="text-sm text-[#CBD5E1]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Intelligence curve */}
          <div className="relative">
            <div className="p-6 lg:p-8 bg-[#0F1A2E] border border-white/[0.06] rounded-2xl">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-medium text-[#94A3B8]">
                  Intelligence Accuracy
                </span>
                <span className="text-xs text-[#475569]">
                  Personalization score over time
                </span>
              </div>

              <div className="space-y-5">
                {days.map((d, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-[#CBD5E1]">
                        {d.day}
                      </span>
                      <span className="text-xs text-[#64748B]">{d.label}</span>
                    </div>
                    <div className="w-full h-2 bg-white/[0.04] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${d.pct}%`,
                          background: `linear-gradient(90deg, #E8612D, ${
                            i >= 2 ? "#2DD4BF" : "#F59E0B"
                          })`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-[#2DD4BF]/[0.06] border border-[#2DD4BF]/[0.12] rounded-lg">
                <div className="flex items-start gap-3">
                  <Sparkles
                    size={16}
                    className="text-[#2DD4BF] mt-0.5 flex-shrink-0"
                  />
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    <span className="text-[#2DD4BF] font-medium">
                      The moat:
                    </span>{" "}
                    After 90 days, your Sirca instance knows your firm better
                    than any new hire could in their first year. This
                    intelligence is non-transferable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Security Section ──────────────────────────────────────────────────────────
function Security() {
  const features = [
    {
      icon: <Server size={20} />,
      title: "On-Premise Deployment",
      description:
        "Sirca runs on your hardware, in your office. Client data never leaves your network. Period.",
    },
    {
      icon: <Lock size={20} />,
      title: "End-to-End Encryption",
      description:
        "AES-256 at rest, TLS 1.3 in transit. Even we can't read your data — by design.",
    },
    {
      icon: <Shield size={20} />,
      title: "Compliance Ready",
      description:
        "SOC 2 Type II certified. HIPAA-ready for healthcare. State bar ethics opinion compatible.",
    },
    {
      icon: <Eye size={20} />,
      title: "Full Audit Trail",
      description:
        "Every AI decision, every data access, every briefing — logged and auditable for compliance review.",
    },
  ];

  return (
    <section id="security" className="relative py-24 lg:py-32 bg-[#0B1221]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(232,97,45,0.04)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#F59E0B] uppercase">
            Security
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-[#F1F5F9] tracking-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Your data never leaves <br />
            your building.
          </h2>
          <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl mx-auto">
            We built Sirca for industries where data breaches end careers. There
            is no cloud. There is no "trust us." There's just your server, your
            data, your control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 lg:p-8 bg-[#0F1A2E] border border-white/[0.06] rounded-2xl hover:border-[#F59E0B]/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] mb-5 group-hover:bg-[#F59E0B]/20 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#F1F5F9] mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Verticals ─────────────────────────────────────────────────────────────────
function Verticals() {
  const verticals = [
    {
      icon: <Building2 size={24} className="text-[#E8612D]" />,
      title: "Legal",
      tag: "Available now",
      tagColor: "bg-[#E8612D]/10 text-[#E8612D] border-[#E8612D]/20",
      description:
        "Built for law firms managing 50+ active matters. Deadline tracking, conflicts detection, billing insights, and malpractice risk prevention — all automated.",
      features: [
        "Statute of limitations tracking",
        "Automated conflicts checks",
        "Client communication analysis",
        "Billing anomaly detection",
      ],
    },
    {
      icon: <HeartPulse size={24} className="text-[#2DD4BF]" />,
      title: "Home Care",
      tag: "Coming Q3 2026",
      tagColor: "bg-[#2DD4BF]/10 text-[#2DD4BF] border-[#2DD4BF]/20",
      description:
        "For agencies managing patient care plans, caregiver scheduling, and compliance documentation. Sirca ensures nothing falls through the cracks.",
      features: [
        "Care plan compliance monitoring",
        "Caregiver-patient matching",
        "Documentation gap detection",
        "Regulatory audit preparation",
      ],
    },
    {
      icon: <BarChart3 size={24} className="text-[#F59E0B]" />,
      title: "Sales",
      tag: "Coming Q4 2026",
      tagColor: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
      description:
        "For revenue teams tired of CRMs that require manual data entry. Sirca captures every touchpoint and tells reps exactly who to call and why.",
      features: [
        "Deal risk scoring",
        "Relationship mapping",
        "Auto-logged activities",
        "Pipeline intelligence briefings",
      ],
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#090E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#94A3B8] uppercase">
            Verticals
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-[#F1F5F9] tracking-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Built for industries where <br />
            <span className="bg-gradient-to-r from-[#E8612D] to-[#F59E0B] bg-clip-text text-transparent">
              details are everything.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <div
              key={i}
              className="group p-6 lg:p-8 bg-[#0F1A2E] border border-white/[0.06] rounded-2xl hover:border-white/[0.12] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center">
                  {v.icon}
                </div>
                <span
                  className={cn(
                    "text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border",
                    v.tagColor
                  )}
                >
                  {v.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[#F1F5F9] mb-3 tracking-tight">
                {v.title}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {v.description}
              </p>
              <div className="mt-auto space-y-2.5">
                {v.features.map((feat, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <CircleDot
                      size={12}
                      className="text-[#475569] flex-shrink-0"
                    />
                    <span className="text-xs text-[#64748B]">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ──────────────────────────────────────────────────────────────
function SocialProof() {
  const testimonials = [
    {
      quote:
        "In 20 years of practice, I've never had a tool that actually reduced my risk of malpractice. Sirca caught a conflicts issue we'd have missed until it was too late.",
      name: "Robert Chen",
      title: "Managing Partner",
      firm: "Chen, Wallace & Associates",
    },
    {
      quote:
        "The morning briefing changed how our entire firm starts the day. We went from reactive to proactive overnight — literally.",
      name: "Patricia Alvarez",
      title: "Operations Director",
      firm: "Alvarez Legal Group",
    },
    {
      quote:
        'We evaluated every legal AI on the market. Sirca is the only one that runs on our hardware. For our clients\' data, that\'s non-negotiable.',
      name: "David Thornton",
      title: "Managing Partner",
      firm: "Thornton Blackwell LLP",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0B1221]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-[#E8612D] uppercase">
            Trusted By
          </span>
          <h2
            className="mt-4 text-3xl sm:text-4xl text-[#F1F5F9] tracking-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            What managing partners say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 lg:p-8 bg-[#0F1A2E] border border-white/[0.06] rounded-2xl"
            >
              <div className="flex gap-1 mb-5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    className="text-[#F59E0B] fill-[#F59E0B]"
                  />
                ))}
              </div>
              <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-white/[0.06] pt-5">
                <p className="text-sm font-medium text-[#F1F5F9]">{t.name}</p>
                <p className="text-xs text-[#64748B] mt-0.5">
                  {t.title}, {t.firm}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ─────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#090E1A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-[#94A3B8] uppercase">
          Pricing
        </span>
        <h2
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl text-[#F1F5F9] tracking-tight"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Tailored to your firm.
        </h2>
        <p className="mt-4 text-lg text-[#94A3B8] max-w-xl mx-auto">
          Every firm is different. Sirca pricing scales with your attorney count,
          matter volume, and deployment requirements. Let's talk about what makes
          sense for you.
        </p>

        <div className="mt-12 p-8 lg:p-12 bg-[#0F1A2E] border border-white/[0.06] rounded-2xl">
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            {[
              { value: "5-25", label: "Attorneys", sub: "Small firm" },
              { value: "25-100", label: "Attorneys", sub: "Mid-size firm" },
              { value: "100+", label: "Attorneys", sub: "Large firm" },
            ].map((tier, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-semibold text-[#F1F5F9] tracking-tight">
                  {tier.value}
                </p>
                <p className="text-sm text-[#94A3B8] mt-1">{tier.label}</p>
                <p className="text-xs text-[#475569] mt-0.5">{tier.sub}</p>
              </div>
            ))}
          </div>

          <button className="group inline-flex items-center justify-center gap-2 bg-[#E8612D] hover:bg-[#D4571F] text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#E8612D]/20">
            Talk to Us About Pricing
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <p className="mt-4 text-xs text-[#475569]">
            Includes deployment, training, and 90-day onboarding support
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0B1221] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,97,45,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl text-[#F1F5F9] tracking-tight leading-tight"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Stop starting your mornings <br />
          <span className="bg-gradient-to-r from-[#E8612D] to-[#F59E0B] bg-clip-text text-transparent">
            in the dark.
          </span>
        </h2>
        <p className="mt-6 text-lg text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          Join the firms that wake up to AI-generated briefings that actually
          prevent problems. Sirca is currently accepting early access partners.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group inline-flex items-center justify-center gap-2 bg-[#E8612D] hover:bg-[#D4571F] text-white font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-[#E8612D]/20 text-base">
            Request a Demo
            <ArrowRight
              size={18}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <button className="inline-flex items-center justify-center gap-2 text-[#94A3B8] hover:text-[#F1F5F9] text-sm transition-colors">
            Or email us at hello@sirca.ai
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          {[
            "30-day free pilot",
            "No cloud dependencies",
            "White-glove onboarding",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#2DD4BF]" />
              <span className="text-xs text-[#64748B]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="about" className="bg-[#060A14] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#E8612D] to-[#F59E0B] flex items-center justify-center">
                <Sparkles size={14} className="text-white" />
              </div>
              <span className="text-lg font-semibold text-[#F1F5F9] tracking-tight">
                sirca
              </span>
            </div>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs">
              AI-powered CRM for professionals who manage high-stakes client
              relationships. Your data, your hardware, your advantage.
            </p>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Security", "Integrations", "Changelog"],
            },
            {
              title: "Company",
              links: ["About", "Blog", "Careers", "Contact"],
            },
            {
              title: "Legal",
              links: [
                "Privacy Policy",
                "Terms of Service",
                "Security Policy",
                "DPA",
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-4">
                {col.title}
              </p>
              <div className="space-y-3">
                {col.links.map((link, j) => (
                  <a
                    key={j}
                    href="#"
                    className="block text-sm text-[#64748B] hover:text-[#CBD5E1] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} Sirca Technologies, Inc. All rights
            reserved.
          </p>
          <p className="text-xs text-[#334155]">
            Built for the professionals who can't afford to miss a thing.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function SircaHomePage() {
  return (
    <div className="min-h-screen bg-[#0B1221] text-[#F1F5F9] antialiased">
      <Nav />
      <Hero />
      <HowItWorks />
      <TheMoat />
      <Security />
      <Verticals />
      <SocialProof />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
