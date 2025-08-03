import Navbar from "./components/Navbar";     // or "./components/Navbar.jsx"
import "./index.css";                         // your global styles
import hero from './assets/first.png';
import forester from './assets/forester.avif';
import idc from './assets/idc.avif';
import nhs from './assets/NHS-Logo.avif';
import feature from './assets/FeatureDiv.avif';
import microsoftLogo from './assets/microsoft.png';
import audi from './assets/audi-logo-352315.png';
// src/App.jsx

const Container = ({ className = "", children }) => (
  <div className={`max-w-[1200px] mx-auto px-4 md:px-6 ${className}`}>{children}</div>
);

/* ---------------- NAV ---------------- */
/* ---------- TOP NAV (sticky) ---------- */
const TopNav = () => {
  const links = [
    { label: "Why Microsoft Security" },
    { label: "Solutions", caret: true },
    { label: "Products", caret: true },
    { label: "Services", caret: true },
    { label: "Partners" },
    { label: "Resources", caret: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Left: Microsoft logo + brand */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img
              src={microsoftLogo}
              alt="Microsoft"
              className="h-6 w-auto"
              loading="eager"
            />
            <span className="h-6 w-px bg-black/30 hidden sm:block" />
            <span className="text-[18px] sm:text-[20px] font-semibold tracking-tight">
              Microsoft Security
            </span>
          </a>

          {/* Center: primary nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] text-[#111827]">
            {links.map((l, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-1 hover:text-black"
              >
                {l.label}
                {l.caret && (
                  <svg
                    className="w-4 h-4 opacity-80"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.3 7.3a1 1 0 011.4 0L10 10.6l3.3-3.3a1 1 0 111.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4z" />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* Right: search + actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 text-[15px]">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-3.6-3.6" />
              </svg>
              <span>Search</span>
            </a>
            <a href="#contact" className="text-[15px] hover:underline">
              Contact Sales
            </a>
            <a
              href="#trial"
              className="text-[15px] px-4 py-2 rounded-md border border-black/60 hover:bg-black/5"
            >
              Start free trial
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-black/5"
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-black mb-1.5" />
            <span className="block w-5 h-0.5 bg-black mb-1.5" />
            <span className="block w-5 h-0.5 bg-black" />
          </button>
        </div>
      </div>
    </header>
  );
};


/* ---------------- HERO ---------------- */
const Hero = () => (
  <section id="home" className="relative overflow-hidden text-white">
    <div className="absolute inset-0 bg-[#0078D4]" />
    <div
      className="
        pointer-events-none absolute right-[-16%] top-[-20%]
        h-[1200px] w-[1200px] rounded-full
        border-[44px] border-[#0067b8]
      "
    />
    <div className="relative max-w-[1400px] mx-auto grid md:grid-cols-2 items-center gap-10 px-4 md:px-8 py-14 md:py-20">
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-[56px] leading-[1.05] font-semibold mb-4">
          Microsoft Intune
        </h1>
        <p className="text-white/95 text-xl mb-8">
          Empower IT. Protect endpoints. Optimize with AI.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#pricing" className="rounded-xl bg-white text-black px-5 py-3 font-semibold shadow-sm hover:bg-white/90">
            See plans and pricing
          </a>
          <a href="#trial" className="rounded-xl border-2 border-white text-white px-5 py-3 font-semibold hover:bg-white/10">
            Try Microsoft Intune Suite for free
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-[16/9] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.25)] ring-1 ring-black/10">
          <img src={hero} alt="Team working with dashboards" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);



// put this above your App() export (same file) or in a new file and import it.
const SubNavStrip = () => {
  const items = [
    { label: "Overview", href: "#overview" },
    { label: "Products", href: "#products" },
    { label: "Plans and pricing", href: "#pricing" },
    { label: "Industry recognition", href: "#industry" },
    { label: "Customer stories", href: "#stories" },
    { label: "Additional resources", href: "#resources" },
  ];

  return (
    <nav className="bg-white border-b border-black/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
        {/* Left links */}
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-2">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href}
                className="font-semibold text-[18px] text-[#0f172a] hover:underline"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <a
          href="#trial"
          className="whitespace-nowrap rounded-md px-5 py-3 font-semibold text-white hover:opacity-95 shadow-[0_2px_0_rgba(0,0,0,.15)]"
          style={{ backgroundColor: "#0A66C2" /* Microsoft blue */ }}
        >
          Try Microsoft Intune Suite for free
        </a>
      </div>
    </nav>
  );
};



/* ---------- ANNOUNCEMENT BANNER under hero ---------- */
const Announcement = () => (
  <section className="bg-[#f3f4f6]">
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-14 text-center">
      <h3 className="text-2xl md:text-3xl font-semibold text-[#111827]">
        Microsoft Security Copilot in Intune is now generally available
      </h3>
      <p className="mt-3 md:mt-4 text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
        Optimize IT operations to efficiently manage your digital estate at scale with Copilot.
        Enhance security with AI-driven insights to speed investigation and response, accelerate
        troubleshooting, and boost business performance.
      </p>
      <a href="#" className="inline-flex items-center gap-2 mt-5 text-[18px] font-semibold text-[#0a5ea6] hover:underline">
        Read the announcement <span aria-hidden>›</span>
      </a>
    </div>
  </section>
);

/* ---------- 3-COLUMN VALUE PROPS ---------- */
const ValueProps = () => (
  <section className="bg-white">
    <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-14 md:py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0f172a]">
        Protect and manage endpoints in one place
      </h2>
      <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
        Keep your organization agile and ready for growth with a simple and secure Zero Trust approach.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
        <div className="px-4">
          <div className="flex justify-center mb-4">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-[#0a5ea6]">
              <path d="M5 12c4.5-4.5 9.5-4.5 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M15 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Strengthen security</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Apply Zero Trust principles to verify device compliance and prioritize cyberthreats with AI.
            Protect data by patching vulnerabilities and keeping apps current across all platforms.
          </p>
        </div>

        <div className="px-4">
          <div className="flex justify-center mb-4">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-[#0a5ea6]">
              <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Boost IT agility</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Simplify endpoint management by reducing tool sprawl and unifying data across Microsoft solutions.
            AI automation handles routine tasks, freeing IT teams to focus on strategic priorities.
          </p>
        </div>

        <div className="px-4">
          <div className="flex justify-center mb-4">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-[#0a5ea6]">
              <path d="M19 12c-4.5-4.5-9.5-4.5-14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 8l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold">Accelerate business performance</h3>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Stay competitive with AI-driven insights while adaptable device experiences minimize downtime
            and improve efficiency across your organization.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- EXPLORE PRODUCTS & CAPABILITIES ---------- */
const ExploreProducts = () => {
   
  const items = [
    {
      title: "Microsoft Intune core capabilities",
      desc:
        "Manage and protect cloud-connected endpoints across Windows, Android, macOS, iOS, and Linux operating systems.",
    },
    { title: "Microsoft Configuration Manager", desc: "Manage on-premises endpoints, such as Windows PCs and servers." },
    { title: "Microsoft Intune Remote Help", desc: "Enable secure, cloud-based helpdesk-to-user connections." },
    {
      title: "Microsoft Intune Endpoint Privilege Management",
      desc: "Allow standard users to perform IT-approved tasks usually reserved for administrators.",
    },
    {
      title: "Microsoft Intune Enterprise Application Management",
      desc: "Deploy and manage apps proactively, simply, and securely.",
    },
    {
      title: "Microsoft Intune Advanced Analytics",
      desc: "Elevate the end-user experience with AI, analytics, and actionable insights.",
    },
    { title: "Microsoft Cloud PKI", desc: "Simplify and automate cloud certificate management." },
    {
      title: "Microsoft Security Copilot in Intune",
      desc:
        "Streamline management decision making and resolution time with actionable recommendations and AI-powered guidance.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="bg-[#f3f4f6] ring-1 ring-black/5 py-10 md:py-12">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0f172a]">
            Explore Microsoft Intune products and capabilities
          </h2>
          <p className="mt-2 text-center text-gray-700 max-w-3xl mx-auto">
            Maximize productivity and simplify administration without compromising endpoint management and security.
          </p>

          <div className="mt-8 md:mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8 px-6 md:px-10">
            {items.map((it, i) => (
              <div key={i}>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#111827]">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-gray-700">{it.desc}</p>
                <a href="#" className="mt-3 inline-flex items-center gap-2 text-[15px] font-semibold text-[#0a5ea6] hover:underline">
                  Learn more <span aria-hidden>›</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



/* ---------- TRY MICROSOFT INTUNE SUITE TODAY ---------- */
const TryIntuneSuite = () => (
  <section className="bg-[#f5f6f8] relative z-0 overflow-visible" >
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
      {/* Left */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#111827]">
          Try Microsoft Intune Suite today
        </h2>
        <div className="mt-6 flex flex-col items-center md:items-start gap-3">
          <a
            href="#trial"
            className="bg-[#0078D4] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#106ebe]"
          >
            Start a free trial
          </a>
          <a
            href="#pricing"
            className="text-[#0a5ea6] text-[15px] font-semibold hover:underline"
          >
            See plans and pricing <span aria-hidden>›</span>
          </a>
        </div>
      </div>

      {/* Right */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-[#111827] mb-4">
          Unify mission-critical advanced endpoint management and security solutions with Intune Suite
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[15px] leading-relaxed">
          <li>
            <strong>Simplify endpoint management.</strong> Unify your endpoint management
            solutions and workflows in one place, reducing complexity for IT and security operations.
          </li>
          <li>
            <strong>Strengthen security posture.</strong> Ensure device health and compliance by
            using Microsoft Security signals and advanced endpoint management capabilities to mitigate
            cyberthreats and protect corporate data.
          </li>
          <li>
            <strong>Reduce overall cost.</strong> Increase efficiency by consolidating vendors and
            save more with cost-effective licensing. Improve end-user productivity and performance across devices.
          </li>
        </ul>
        <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
          All products in Microsoft Intune Suite work seamlessly with Microsoft 365 and Microsoft Security.
          Intune Suite includes Microsoft Intune Remote Help, Microsoft Intune Endpoint Privilege Management,
          Microsoft Intune Advanced Analytics, Microsoft Intune Enterprise Application Management,
          Microsoft Cloud PKI, and advanced capabilities in Microsoft Intune Plan 2.
        </p>
        <p className="mt-3 text-gray-700 text-[15px] leading-relaxed">
          A Microsoft Intune Plan 1 subscription is required.
        </p>
      </div>
    </div>
  </section>
);



/* ---------- INDUSTRY RECOGNITION / CUSTOMER STORIES / RESOURCES ---------- */
const RecognitionStoriesResources = () => (
  <section className="bg-white relative z-10 overflow-visible">
    <Container className="py-16 md:py-24 space-y-16">
      {/* ===================== Industry research and recognition ===================== */}
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0f172a]">
          Industry research and recognition
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              logo: forester,
              alt: "Forrester",
              title: "A Leader in Unified Endpoint Management",
              copy:
                "Microsoft is named a Leader in The Forrester Wave™: Unified Endpoint Management, Q4 2023.",
              cta: "Read the report",
            },
            {
              logo: forester,
              alt: "Forrester",
              title: "The Total Economic Impact™ of Microsoft Intune",
              copy:
                "Learn how Intune can help save money, improve productivity, and lower risk in a commissioned Forrester Consulting study.",
              cta: "Read the study",
            },
            {
              logo: idc,
              alt: "IDC",
              title: "A Leader in Unified Endpoint Management",
              copy:
                "Microsoft is named a Leader in IDC MarketScape: Worldwide Unified Endpoint Management Software 2024.",
              cta: "Read the excerpt",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-[18px] bg-white p-6 ring-1 ring-black/5 shadow-[0_8px_28px_rgba(16,24,40,.06)]"
            >
              {/* Logo area — fills & crops to keep edges clean */}
              <div className="relative aspect-[16/9] rounded-[14px] overflow-hidden bg-[#f5f6f8] mb-4">
                <img
                  src={card.logo}
                  alt={card.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="font-semibold text-lg text-[#111827]">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{card.copy}</p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-[15px] font-semibold text-[#0a5ea6] hover:underline"
              >
                {card.cta} <span aria-hidden>›</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* =============================== Customer stories =============================== */}
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0f172a]">
          Customer stories
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              logo: forester, // replace with HPE if you have it
              alt: "HPE",
              quote:
                "Cloud-native endpoint management with Intune was the right choice for us. The savings and comprehensive security free up IT to focus on other priorities.",
              name: "Kregg Nelson",
              role: "End User Compute Manager, HPE",
            },
            {
              logo: nhs,
              alt: "NHS",
              quote:
                "Intune consolidates our endpoint solutions, saves costs, and secures data. We recommend it to any organization enhancing its security posture.",
              name: "Ibrar Mahmood",
              role: "Cyber Security Manager, Milton Keynes University Hospital",
            },
            {
              logo: audi, // adjust filename if different
              alt: "Audi",
              quote:
                "Intune meets our needs for empowering employees and provides a best-in-class unified endpoint management platform.",
              name: "Florian Weissenberger",
              role: "Product Owner, Mobile Workplace iOS, AUDI AG",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-[18px] bg-white p-6 ring-1 ring-black/5 shadow-[0_8px_28px_rgba(16,24,40,.06)]"
            >
              {/* Smaller logo banner — also fills & crops */}
              <div className="relative aspect-[5/2] rounded-[10px] overflow-hidden bg-[#f5f6f8] mb-4">
                <img
                  src={c.logo}
                  alt={c.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <p className="italic text-gray-800 leading-relaxed">“{c.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">
                {c.name}, {c.role}
              </div>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-[15px] font-semibold text-[#0a5ea6] hover:underline"
              >
                Read the story <span aria-hidden>›</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ============================== Additional resources ============================== */}
      <div id="resources">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#0f172a]">
          Additional resources
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              badge: "Blog",
              title: "Explore the Intune blog",
              copy:
                "Stay up to date on product developments and announcements for Intune.",
              cta: "Read the blog",
            },
            {
              badge: "Documentation",
              title: "Refer to Intune technical documentation",
              copy:
                "Explore features and capabilities of Intune with hands-on labs, tutorials, and resources.",
              cta: "Learn more",
            },
            {
              badge: "Adoption hub",
              title: "Get started with Microsoft Intune",
              copy:
                "Empower your company’s IT and security teams with our adoption guide.",
              cta: "Learn more",
            },
          ].map((r, i) => (
            <div
              key={i}
              className="rounded-[14px] bg-white p-5 ring-1 ring-black/5 shadow-[0_6px_18px_rgba(16,24,40,.06)]"
            >
              <div className="text-xs font-semibold text-gray-600">{r.badge}</div>
              <h3 className="mt-2 font-semibold text-lg text-[#111827]">{r.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{r.copy}</p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-[15px] font-semibold text-[#0a5ea6] hover:underline"
              >
                {r.cta} <span aria-hidden>›</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);



/* ---------- PROTECT EVERYTHING CTA ---------- */
const ProtectEverythingCTA = () => (
  <section className="bg-[#0078D4]">
    <Container className="py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center text-white">
      {/* Left content */}
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Protect everything
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Make your future more secure. Explore your security options today.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact-sales"
            className="bg-white text-black px-5 py-3 font-semibold rounded-lg shadow hover:bg-white/90"
          >
            Contact Sales
          </a>
          <a
            href="#start-trial"
            className="border-2 border-white text-white px-5 py-3 font-semibold rounded-lg hover:bg-white/10"
          >
            Start a free trial
          </a>
        </div>
      </div>



      {/* Right graphic */}
      <div className="flex items-center justify-center">
        <img
          src={feature}   // <-- uses your public image
          alt="Security graphic"
          className="w-full max-w-[720px] h-auto select-none pointer-events-none"
          loading="eager"
        />
      </div>
    </Container>
  </section>
);


/* ---------- FREQUENTLY ASKED (Large) ---------- */
import { useState } from "react";

const BigFAQ = () => {
  const faqs = [
    {
      q: "What are the benefits of Microsoft Intune?",
      a: "Centralized, cloud-based endpoint management with integrated security, app protection, analytics, and automation to reduce effort and improve compliance.",
    },
    {
      q: "What is unified endpoint management (UEM)?",
      a: "A single approach to manage and secure devices, apps, and users across platforms like Windows, macOS, iOS, Android, and Linux from one console.",
    },
    {
      q: "Is Microsoft Intune a UEM platform?",
      a: "Yes. Intune delivers UEM as a cloud service and integrates with Microsoft 365 and Microsoft Security for advanced protection and insights.",
    },
    {
      q: "Why is endpoint management important?",
      a: "It standardizes device configuration, improves security posture, streamlines support, and helps ensure compliance—reducing risk and cost.",
    },
    {
      q: "What is Microsoft Intune Suite?",
      a: "An add-on that includes advanced capabilities such as Remote Help, Endpoint Privilege Management, Advanced Analytics, Enterprise App Management, and Cloud PKI.",
    },
  ];

  const [open, setOpen] = useState(Array(faqs.length).fill(false));
  const toggle = (idx) =>
    setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  const expandAll = () => setOpen(Array(faqs.length).fill(true));
  const collapseAll = () => setOpen(Array(faqs.length).fill(false));

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0f172a]">
          Frequently asked questions
        </h2>

        {/* Controls */}
        <div className="mt-4 flex items-center gap-4 text-[#0a5ea6] font-semibold">
          <button onClick={expandAll} className="hover:underline">
            Expand all
          </button>
          <span className="text-gray-300">|</span>
          <button onClick={collapseAll} className="hover:underline">
            Collapse all
          </button>
        </div>

        {/* List */}
        <div className="mt-6 divide-y divide-gray-200 border-t border-b">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center gap-4 py-6 text-left"
              >
                <span
                  className={`transition-transform duration-200 text-gray-700 ${
                    open[i] ? "rotate-90" : ""
                  }`}
                >
                  {/* Chevron icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-xl md:text-2xl font-medium text-[#0f172a]">
                  {item.q}
                </span>
              </button>

              {open[i] && (
                <div className="pb-6 pl-[38px] md:pl-[46px] pr-2 text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};




/* ---------- REFERENCES + FOLLOW BAR ---------- */
const ReferencesAndFollow = () => (
  <section className="bg-white">
    <Container className="py-10 md:py-14">
      {/* References */}
      <ol className="space-y-4 text-[15.5px] leading-7 text-[#0f172a]">
        <li>
          <span className="text-[#0a5ea6] font-semibold mr-2">[1]</span>
          <a href="#" className="text-[#0a5ea6] hover:underline">
            The Forrester Wave™: Unified Endpoint Management, Q4 2023
          </a>
          , Andrew Hewitt with Glenn O&apos;Donnell, Angela Lozada, and Rachel Birrell, November 19, 2023.
        </li>
        <li>
          <span className="text-[#0a5ea6] font-semibold mr-2">[2]</span>
          <a href="#" className="text-[#0a5ea6] hover:underline">
            The Total Economic Impact™ Of Microsoft Intune
          </a>
          , Cost Savings And Business Benefits Enabled By Intune And The Intune Suite, a commissioned study conducted by Forrester Consulting, June 2024.
        </li>
        <li>
          <span className="text-[#0a5ea6] font-semibold mr-2">[3]</span>
          <a href="#" className="text-[#0a5ea6] hover:underline">
            IDC MarketScape: Worldwide Unified Endpoint Management Software 2024 Vendor Assessment
          </a>
          , doc #US51234224, April 2024.
        </li>
      </ol>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-200" />

      {/* Follow bar */}
      <div className="flex flex-wrap items-center gap-5 md:gap-7 mt-8">
        <div className="text-[18px] md:text-[20px] text-[#0f172a]">
          Follow Microsoft Security
        </div>

        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn" className="text-[#0f172a] hover:opacity-80">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.64c0-1.58-.03-3.62-2.21-3.62-2.22 0-2.56 1.73-2.56 3.51V23h-4V8z"/>
          </svg>
        </a>

        {/* X / Twitter */}
        <a href="#" aria-label="X (Twitter)" className="text-[#0f172a] hover:opacity-80">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2H21l-6.54 7.47L22 22h-6.77l-4.73-6.2L4.9 22H2l7.11-8.12L2 2h6.86l4.3 5.73L18.244 2Zm-2.37 18h1.8L8.2 4h-1.8l9.474 16Z"/>
          </svg>
        </a>

        {/* RSS (or any third icon) */}
        <a href="#" aria-label="RSS" className="text-[#0f172a] hover:opacity-80">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4-6v3c6.075 0 11 4.925 11 11h3C16 17.85 8.15 10 2 10Zm0-6v3c10.493 0 19 8.507 19 19h3C24 9.85 14.15 0 2 0Z"/>
          </svg>
        </a>
      </div>
    </Container>
  </section>
);


/* ---------- GLOBAL FOOTER (mega menu) ---------- */
/* ---------- GLOBAL FOOTER (top link grid in one row) ---------- */
const GlobalFooter = () => (
  <footer className="bg-[#f5f6f8] text-[#0f172a]">
    <Container className="py-10 md:py-14">
      {/* 2 cols on phones, 3 on md, 6 on lg+ */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {[
          {
            h: "What's new",
            items: [
              "Surface Pro","Surface Laptop","Surface Laptop Studio 2","Surface Laptop Go 3",
              "Microsoft Copilot","AI in Windows","Explore Microsoft products","Windows 11 apps",
            ],
          },
          {
            h: "Microsoft Store",
            items: [
              "Account profile","Download Center","Microsoft Store support","Returns",
              "Order tracking","Certified Refurbished","Microsoft Store Promise","Flexible Payments",
            ],
          },
          {
            h: "Education",
            items: [
              "Microsoft in education","Devices for education","Microsoft Teams for Education",
              "Microsoft 365 Education","How to buy for your school",
              "Educator training and development","Deals for students and parents","AI for education",
            ],
          },
          {
            h: "Business",
            items: [
              "Microsoft Cloud","Microsoft Security","Dynamics 365","Microsoft 365",
              "Microsoft Power Platform","Microsoft Teams","Microsoft 365 Copilot","Small Business",
            ],
          },
          {
            h: "Developer & IT",
            items: [
              "Azure","Microsoft Developer","Microsoft Learn","Support for AI marketplace apps",
              "Microsoft Tech Community","Azure Marketplace","AppSource","Visual Studio",
            ],
          },
          {
            h: "Company",
            items: [
              "Careers","About Microsoft","Company news","Privacy at Microsoft",
              "Investors","Diversity and inclusion","Accessibility","Sustainability",
            ],
          },
        ].map((col, i) => (
          <div key={i} className="min-w-0">
            <h3 className="font-semibold mb-3">{col.h}</h3>
            <ul className="space-y-2 text-[15px]">
              {col.items.map((t, j) => (
                <li key={j}>
                  <a href="#" className="hover:underline">{t}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>

    {/* bottom bar ... keep your existing code here */}
  </footer>
);





export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SubNavStrip /> 
      <Announcement />
      <ValueProps />
      <ExploreProducts />
      <div className="h-8 md:h-12" /> 
      <TryIntuneSuite />
      <RecognitionStoriesResources /> 
      <ProtectEverythingCTA />
      <BigFAQ />
      <ReferencesAndFollow />
      <GlobalFooter />

    
      
      
     
    </div>
  );
}
