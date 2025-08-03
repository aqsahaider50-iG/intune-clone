import React, { useRef, useState } from "react";

/* -----------------------------------------
   Simple caret icon
------------------------------------------ */
const Caret = ({ open }) => (
  <span
    className={`ml-1 inline-block transition-transform duration-200 ${
      open ? "rotate-180" : "rotate-0"
    }`}
  >
    ▾
  </span>
);

/* -----------------------------------------
   Narrow vertical list menu (used by Services/Solutions)
   NOW ANCHORED UNDER THE TRIGGER BUTTON using fixed position
------------------------------------------ */
function NarrowMenu({ items = [], onClose, width = 420, position }) {
  // position = { left: number, top: number }
  return (
    <div className="z-50" onMouseLeave={onClose}>
      <div
        className="bg-white border border-black/10 shadow-[0_12px_30px_rgba(0,0,0,.12)] rounded-xl overflow-hidden"
        style={{
          position: "fixed",
          left: position?.left ?? 0,
          top: position?.top ?? 64,
          width,
        }}
      >
        <ul className="py-2">
          {items.map((t, i) => (
            <li key={i}>
              <a
                href="#"
                className="block px-5 py-3 text-[15px] text-[#0f172a] hover:bg-black/5"
              >
                {t}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -----------------------------------------
   PRODUCTS mega menu (wide grid)
------------------------------------------ */
function ProductsMegaMenu({ onClose }) {
  const col = (title, links) => (
    <div>
      <div className="font-semibold text-[#0f172a] mb-3">{title}</div>
      <ul className="space-y-2">
        {links.map((t, i) => (
          <li key={i}>
            <a href="#" className="text-[15px] text-[#0f172a] hover:underline">
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className="absolute left-0 right-0 top-full bg-white border-t border-black/10 shadow-[0_12px_30px_rgba(0,0,0,.08)] z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {col("Product families", [
            "Microsoft Defender",
            "Microsoft Entra",
            "Microsoft Intune",
            "Microsoft Priva",
            "Microsoft Purview",
            "Microsoft Sentinel",
          ])}
          {col("Security AI", ["Microsoft Security Copilot"])}
          {col("Identity & access", [
            "Microsoft Entra ID (Azure Active Directory)",
            "Microsoft Entra External ID",
            "Microsoft Entra ID Governance",
            "Microsoft Entra ID Protection",
            "Microsoft Entra Internet Access",
            "Microsoft Entra Private Access",
            "Microsoft Entra Permissions Management",
            "Microsoft Entra Verified ID",
            "Microsoft Entra Workload ID",
          ])}
          {col("SIEM & XDR", [
            "Microsoft Sentinel",
            "Microsoft Defender for Cloud",
            "Microsoft Defender XDR",
            "Microsoft Defender for Endpoint",
            "Microsoft Defender for Office 365",
            "Microsoft Defender for Identity",
            "Microsoft Defender for Cloud Apps",
            "Microsoft Security Exposure Management",
            "Microsoft Defender Vulnerability Management",
          ])}
          {col("Cloud security", [
            "Microsoft Defender for Cloud",
            "Microsoft Defender Cloud Security Posture Mgmt",
            "Microsoft Defender External Attack Surface Management",
            "Azure Firewall",
            "Azure Web App Firewall",
            "Azure DDoS Protection",
            "GitHub Advanced Security",
          ])}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------
   RESOURCES mega menu (wide grid)
------------------------------------------ */
function ResourcesMegaMenu({ onClose }) {
  const col = (title, links) => (
    <div>
      <div className="font-semibold text-[#0f172a] mb-3">{title}</div>
      <ul className="space-y-2">
        {links.map((t, i) => (
          <li key={i}>
            <a href="#" className="text-[15px] text-[#0f172a] hover:underline">
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className="absolute left-0 right-0 top-full bg-white border-t border-black/10 shadow-[0_12px_30px_rgba(0,0,0,.08)] z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {col("Get started", [
            "Cybersecurity awareness",
            "Customer stories",
            "Security 101",
            "Product trials",
            "How we protect Microsoft",
          ])}
          {col("Reports and analysis", [
            "Industry recognition",
            "Microsoft Security Insider",
            "Microsoft Digital Defense Report",
            "Security Response Center",
          ])}
          {col("Community", [
            "Microsoft Security Blog",
            "Microsoft Security Events",
            "Microsoft Tech Community",
          ])}
          {col("Documentation and training", [
            "Documentation",
            "Technical Content Library",
            "Training & certifications",
          ])}
          {col("Additional sites", [
            "Compliance Program for Microsoft Cloud",
            "Microsoft Trust Center",
            "Security Engineering Portal",
            "Service Trust Portal",
            "Microsoft Secure Future Initiative",
            "Business Solutions Hub",
          ])}
          {col("Business", ["Solutions"])}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------
   SERVICES & SOLUTIONS (narrow lists) — anchored
------------------------------------------ */
function ServicesMenu({ onClose, position }) {
  return (
    <NarrowMenu
      onClose={onClose}
      width={420}
      position={position}
      items={[
        "Microsoft Security Experts",
        "Microsoft Defender Experts for XDR",
        "Microsoft Defender Experts for Hunting",
        "Microsoft Incident Response",
        "Microsoft Security Enterprise Services",
      ]}
    />
  );
}

function SolutionsMenu({ onClose, position }) {
  return (
    <NarrowMenu
      onClose={onClose}
      width={420}
      position={position}
      items={[
        "AI-powered cybersecurity",
        "Cloud security",
        "Data security & governance",
        "Identity & network access",
        "Privacy & risk management",
        "Security for AI",
        "Unified SecOps",
        "Zero Trust",
      ]}
    />
  );
}

/* -----------------------------------------
   MAIN NAVBAR
------------------------------------------ */
export default function Navbar() {
  const headerRef = useRef(null);
  const [open, setOpen] = useState(null); // "solutions" | "products" | "services" | "resources" | null
  const [pos, setPos] = useState({ left: 0, top: 0 }); // for narrow menus

  const isOpen = (key) => open === key;

  const openAnchoredMenu = (key, e) => {
    const btnRect = e.currentTarget.getBoundingClientRect();
    // Use header bottom as baseline for top
    const headerBottom =
      headerRef.current?.getBoundingClientRect().bottom || btnRect.bottom;
    setPos({
      left: btnRect.left, // align left edges
      top: headerBottom + 4, // a tiny gap under header
    });
    setOpen(key);
  };

  const links = [
    { key: "solutions", label: "Solutions", type: "menu" },
    { key: "products", label: "Products", type: "menu" },
    { key: "services", label: "Services", type: "menu" },
    { key: "partners", label: "Partners", href: "#partners" },
    { key: "resources", label: "Resources", type: "menu" },
  ];

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/10 relative"
    >
      <div className="h-16">
        <div className="max-w-[1400px] mx-auto h-full px-4 md:px-6 flex items-center justify-between">
          {/* Left: logo + site name */}
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/microsoft.png"
              alt="Microsoft"
              className="h-6 w-auto"
              loading="eager"
            />
            <span className="font-semibold tracking-tight text-[18px]">
              Microsoft Security
            </span>
          </a>

          {/* Center: navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[15px] text-[#0f172a]">
            <a href="#why" className="hover:text-black">
              Why Microsoft Security
            </a>

            {links.map((l) =>
              l.type === "menu" ? (
                <button
                  key={l.key}
                  className={`relative inline-flex items-center hover:text-black ${
                    isOpen(l.key) ? "text-black" : ""
                  }`}
                  onMouseEnter={(e) =>
                    l.key === "services" || l.key === "solutions"
                      ? openAnchoredMenu(l.key, e)
                      : setOpen(l.key)
                  }
                  onFocus={(e) =>
                    l.key === "services" || l.key === "solutions"
                      ? openAnchoredMenu(l.key, e)
                      : setOpen(l.key)
                  }
                  onClick={(e) =>
                    isOpen(l.key)
                      ? setOpen(null)
                      : l.key === "services" || l.key === "solutions"
                      ? openAnchoredMenu(l.key, e)
                      : setOpen(l.key)
                  }
                >
                  {l.label}
                  <Caret open={isOpen(l.key)} />
                </button>
              ) : (
                <a key={l.key} href={l.href} className="hover:text-black">
                  {l.label}
                </a>
              )
            )}
          </nav>

          {/* Right: actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#search" className="text-[15px] hover:text-black">
              Search
            </a>
            <a href="#contact" className="text-[15px] hover:text-black">
              Contact Sales
            </a>
            <a
              href="#trial"
              className="rounded-xl text-white px-4 py-2 font-semibold shadow-[0_2px_0_#0a60ad] hover:opacity-95"
              style={{ backgroundColor: "#0078D4" }}
            >
              Start free trial
            </a>
          </div>
        </div>
      </div>

      {/* Menus */}
      {open === "solutions" && (
        <SolutionsMenu onClose={() => setOpen(null)} position={pos} />
      )}
      {open === "products" && <ProductsMegaMenu onClose={() => setOpen(null)} />}
      {open === "services" && (
        <ServicesMenu onClose={() => setOpen(null)} position={pos} />
      )}
      {open === "resources" && (
        <ResourcesMegaMenu onClose={() => setOpen(null)} />
      )}

      {/* Click-away overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(null)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
