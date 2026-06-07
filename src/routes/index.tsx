import { createFileRoute } from "@tanstack/react-router";
import mebrHero from "@/assets/mebr-hero.jpeg.asset.json";
import mebrSquad from "@/assets/mebr-squad.jpeg.asset.json";
import mebrLogo from "@/assets/mebr-logo.jpeg.asset.json";

const DISCORD_URL = "https://discord.gg/mebr";

const staff = [
  { name: "Manos", role: "Head of Moderation", desc: "Fully trained command lead overseeing the entire moderation operation.", initials: "MA" },
  { name: "Aventus", role: "Senior Moderator · Trainer", desc: "Teaches new recruits the ropes and shapes the next generation of staff.", initials: "AV" },
  { name: "Boti", role: "Senior Moderator · Oversight", desc: "Oversees all active moderators and keeps standards sharp across the team.", initials: "BO" },
  { name: "Truff", role: "Senior Moderator · Trainee Lead", desc: "Watches over moderators-in-training and guides them through their probation.", initials: "TR" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Middle Eastern Border Roleplay — MEBR" },
      { name: "description", content: "Middle Eastern Border Roleplay (MEBR) — a nine-nation Roblox roleplay community. Enlist, rise through the ranks, and shape the region." },
      { property: "og:title", content: "Middle Eastern Border Roleplay" },
      { property: "og:description", content: "Nine nations. One contested region. Enlist in MEBR today." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

type Country = { name: string; iso: string; tag: string; desc: string; imgUrl?: string };

const countries: Country[] = [
  { name: "Kuwait 🇰🇼", iso: "kw", tag: "⚓ Gulf Sentinel", desc: "🛢️ Coastal patrols and oil-corridor security." },
  { name: "Egypt 🇪🇬", iso: "eg", tag: "🏜️ Land of the Nile", desc: "🐪 Sinai checkpoints and Suez control." },
  { name: "Lebanon 🇱🇧", iso: "lb", tag: "🌲 Cedar Coast", desc: "🏔️ Mountain outposts and coastal cities." },
  { name: "Iraq 🇮🇶", iso: "iq", tag: "🌊 Twin Rivers", desc: "🏙️ Desert frontiers and urban operations." },
  { name: "Syria 🇸🇾", iso: "sy", tag: "🛡️ Northern Stand", desc: "⚔️ Multi-front border defense and rebuild." },
  { name: "Israel 🇮🇱", iso: "il", tag: "⚙️ Iron Watch", desc: "🚁 High-tech defense and rapid response." },
  { name: "Jordan 🇯🇴", iso: "jo", tag: "👑 Desert Kingdom", desc: "🕊️ Border command and humanitarian corridors." },
  { name: "Palestine 🇵🇸", iso: "ps", tag: "🗝️ Homeland Resolve", desc: "🤝 Community defense and resistance roleplay." },
  { name: "Kurdistan ☀️", iso: "krd", tag: "⛰️ Mountain Guard", desc: "🪖 Highland frontiers, peshmerga patrols, and autonomous operations.", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Kurdistan.svg/1280px-Flag_of_Kurdistan.svg.png" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground relative">
      {/* Global themed background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${mebrSquad.url})` }}
      />
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-background/85 backdrop-blur-sm" />

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={mebrLogo.url} alt="MEBR" width={36} height={36} className="w-9 h-9 rounded-md object-cover" />
            <span className="font-display text-lg tracking-wide">Middle Eastern Border Roleplay</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
            <a href="#countries" className="hover:text-foreground transition">🌍 Nations</a>
            <a href="#tutorial" className="hover:text-foreground transition">🪖 Enlistment</a>
            <a href="#government" className="hover:text-foreground transition">🏛️ Government</a>
            <a href="#ranks" className="hover:text-foreground transition">🎖️ Ranks</a>
            <a href="#staff" className="hover:text-foreground transition">🛡️ Staff</a>
          </nav>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-md border border-border text-foreground hover:bg-card/60 transition">
            ⚔️ Enlist
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
        <img
          src={mebrHero.url}
          alt="MEBR operator with Egyptian flag patch"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-4">🎮 Roleplay Server · Established 2024</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 max-w-5xl leading-tight">
            🏜️ Middle Eastern Border Roleplay 🪖
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            🌍 Nine nations. ⚔️ One contested region. 🚩 Pick your flag, hold your post, and write your story alongside hundreds of dedicated players.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-md text-primary-foreground font-medium uppercase tracking-[0.2em] text-xs shadow-[var(--shadow-ember)]" style={{ background: "var(--gradient-ember)" }}>
              💬 Join the Discord
            </a>
            <a href="#countries" className="px-7 py-3.5 rounded-md border border-border bg-background/40 backdrop-blur text-foreground font-medium uppercase tracking-[0.2em] text-xs hover:bg-background/70 transition">
              🌍 View Nations
            </a>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="px-5 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-border">
            <img src={mebrSquad.url} alt="MEBR squad on patrol" width={1600} height={900} className="w-full h-auto object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-2">🎯 In-Game Operations</p>
              <h3 className="font-display text-2xl md:text-4xl">🪖 Boots on the ground. Every single day.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section id="countries" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-3">🚩 Choose Your Allegiance</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">🌍 Nine nations open for enlistment</h2>
            <p className="text-muted-foreground leading-relaxed">⚔️ Each nation runs its own command structure, ranks, missions and storylines. 🔁 Switch allegiances or rise through the ranks of one.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((c) => (
              <div key={c.name} className="group relative rounded-lg bg-card border border-border overflow-hidden hover:border-ember/60 transition shadow-sm hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-4">
                  <img
                    src={c.imgUrl ?? `https://flagcdn.com/w640/${c.iso}.png`}
                    srcSet={c.imgUrl ? undefined : `https://flagcdn.com/w1280/${c.iso}.png 2x`}
                    alt={`${c.name} flag`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain shadow-md ring-1 ring-border group-hover:scale-[1.03] transition duration-500"
                  />
                </div>
                <div className="p-5 border-t border-border">
                  <h3 className="font-display text-xl mb-1">{c.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ember mb-2">{c.tag}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enlistment */}
      <section id="tutorial" className="py-24 px-5 bg-card/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-3">🪖 Enlistment Process</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">👤 From civilian to soldier in four steps</h2>
            <p className="text-muted-foreground leading-relaxed">⚡ Follow this path and you will be on the frontline within minutes.</p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", t: "💬 Join the Discord", d: "Enter our Discord server — the hub for everything MEBR.", cta: { label: "Open Discord", href: DISCORD_URL } },
              { n: "02", t: "🚩 Pick Your Country", d: "Choose one of the nine nations and join its dedicated channel." },
              { n: "03", t: "🪖 Enlist in the Army", d: "Sign up to your country's military and complete the recruitment form." },
              { n: "04", t: "🎖️ Get Ranked by Staff", d: "A moderator will verify and rank you inside your nation's army." },
            ].map((s) => (
              <li key={s.n} className="relative p-6 rounded-lg bg-background border border-border hover:border-ember/60 transition flex flex-col">
                <div className="font-display text-3xl text-ember mb-4">{s.n}</div>
                <h3 className="font-display text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.d}</p>
                {s.cta && (
                  <a href={s.cta.href} target="_blank" rel="noopener noreferrer" className="mt-4 text-xs font-medium uppercase tracking-widest text-ember hover:underline">
                    🔗 {s.cta.label} →
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Government & Elections */}
      <section id="government" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-3">🏛️ Government & Elections</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">🗳️ Run for office. 👑 Lead your nation.</h2>
            <p className="text-muted-foreground leading-relaxed">
              🏛️ Every country has its own government. Become a minister, climb the cabinet, or campaign for President — winners are decided by fair, monitored elections held for each nation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "🏛️ Join the Government", d: "Apply for cabinet roles, ministries and senior government positions in any of the nine nations." },
              { t: "👑 Run for President", d: "Campaign, build your platform, and rally voters during official election cycles." },
              { t: "🗳️ Fair Elections", d: "Every vote is verified and supervised by staff. No rigging, no favoritism — the people decide." },
            ].map(x => (
              <div key={x.t} className="p-6 rounded-lg bg-card border border-border hover:border-ember/60 transition">
                <h3 className="font-display text-xl mb-2">{x.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranks */}
      <section id="ranks" className="py-24 px-5 bg-card/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-3">🎖️ Ranks & Progression</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">⬆️ From recruit to commander-in-chief</h2>
            <p className="text-muted-foreground leading-relaxed">
              🪖 Every soldier starts at the bottom. Prove yourself on patrols, events and operations to climb your nation's military ladder — and unlock the right to run for President. 👑
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {[
              { n: "01", t: "🆕 Recruit", d: "Pass enlistment and complete your first training." },
              { n: "02", t: "🪖 Soldier", d: "Active on patrols, events and squad operations." },
              { n: "03", t: "🎗️ NCO", d: "Lead squads, run drills, and mentor new recruits." },
              { n: "04", t: "🎖️ Officer", d: "Command platoons and plan nation-wide operations." },
              { n: "05", t: "⭐ High Command", d: "General staff — eligible to run for President." },
            ].map((r) => (
              <li key={r.n} className="p-6 rounded-lg bg-background border border-border hover:border-ember/60 transition">
                <div className="font-display text-3xl text-ember mb-3">{r.n}</div>
                <h3 className="font-display text-lg mb-2">{r.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </li>
            ))}
          </ol>

          <div className="p-6 md:p-8 rounded-lg border border-ember/40 bg-background">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ember mb-2">👑 Presidential Eligibility</p>
            <h3 className="font-display text-2xl mb-2">🎖️ Earn your rank, then earn your country's vote 🗳️</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              ⭐ Reach High Command in your nation's army and you unlock the right to campaign in the official Presidential elections.
            </p>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-3">🛡️ The Backbone</p>
            <h2 className="font-display text-3xl md:text-4xl mb-4">👮 Meet the high command</h2>
            <p className="text-muted-foreground leading-relaxed">
              ✅ Trained, active, and fair. 🎟️ Tickets answered in minutes, 🚫 rule breakers handled fast, and 🎉 events run every weekend.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {staff.map((s) => (
              <div key={s.name} className="group relative p-6 rounded-lg bg-card border border-border hover:border-ember/60 transition">
                <div className="w-14 h-14 rounded-full mb-5 flex items-center justify-center font-display text-xl text-primary-foreground" style={{ background: "var(--gradient-ember)" }}>
                  {s.initials}
                </div>
                <h3 className="font-display text-xl mb-1">⭐ {s.name}</h3>
                <p className="text-[10px] uppercase tracking-widest text-ember mb-3">{s.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "24/7", l: "🕒 Coverage" },
              { n: "<5m", l: "⚡ Avg Response" },
              { n: "100%", l: "🔥 Active Daily" },
              { n: "0", l: "🚫 Tolerance for Abuse" },
            ].map(s => (
              <div key={s.l} className="p-6 rounded-lg bg-card border border-border">
                <div className="font-display text-3xl md:text-4xl text-ember mb-1">{s.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth on Roblox */}
      <section className="py-20 px-5 border-y border-border bg-card/40">
        <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-xl border border-border bg-background">
          <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-3">📈 Growing on Roblox</p>
          <h2 className="font-display text-2xl md:text-4xl mb-4">🚀 Activity is climbing. ⏰ Get in early.</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mb-8">
            🎮 MEBR is steadily rising in activity on Roblox — 👥 more players, 🎉 more events, ⚔️ more action every week. Now is the time to claim your nation, lock in a rank, and grow with the community.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { n: "📈", l: "Weekly Growth" },
              { n: "🎮", l: "Live on Roblox" },
              { n: "🌍", l: "9 Nations Active" },
            ].map(s => (
              <div key={s.l} className="p-5 rounded-lg bg-card border border-border">
                <div className="text-2xl md:text-3xl mb-1">{s.n}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-16 h-16 rounded-md flex items-center justify-center text-2xl shrink-0 border border-border bg-card">
            🛡️
          </div>
          <div>
            <p className="text-ember font-medium uppercase tracking-[0.25em] text-[11px] mb-2">🛡️ Safe & Monitored 24/7</p>
            <h2 className="font-display text-2xl md:text-3xl mb-3">✅ A server you can actually trust</h2>
            <p className="text-muted-foreground leading-relaxed">
              👀 Our staff monitors the server around the clock. 🛡️ Anti-cheat, 👮 active moderation, and 🚫 zero tolerance for harassment keep MEBR a safe place to roleplay — 🌞 day or 🌙 night.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-32 px-5 text-center relative overflow-hidden border-t border-border">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(ellipse at center, var(--ember) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl mb-6">⚔️ The border won't hold itself 🛡️</h2>
          <p className="text-muted-foreground text-lg mb-10">🪖 Join Middle Eastern Border Roleplay today. 🚩 Your nation is waiting.</p>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-md text-primary-foreground font-medium uppercase tracking-[0.2em] text-sm shadow-[var(--shadow-ember)]" style={{ background: "var(--gradient-ember)" }}>
            💬 discord.gg/mebr
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-5 text-center text-[11px] text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} Middle Eastern Border Roleplay
      </footer>
    </div>
  );
}
