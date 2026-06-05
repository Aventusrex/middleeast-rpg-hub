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
      { title: "Middle Eastern Border Roleplay — Join the Frontlines" },
      { name: "description", content: "Immersive Middle Eastern Border Roleplay. Enlist with Kuwait, Egypt, Lebanon, Iraq, Syria, Israel, Jordan, or Palestine. Backed by a dedicated staff team." },
      { property: "og:title", content: "Middle Eastern Border Roleplay" },
      { property: "og:description", content: "Pick your nation. Hold the border. Live the roleplay." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const countries = [
  { name: "Kuwait", flag: "🇰🇼", tag: "Gulf Sentinel", desc: "Coastal patrols and oil-corridor security." },
  { name: "Egypt", flag: "🇪🇬", tag: "Land of the Nile", desc: "Sinai checkpoints and Suez control." },
  { name: "Lebanon", flag: "🇱🇧", tag: "Cedar Coast", desc: "Mountain outposts and coastal cities." },
  { name: "Iraq", flag: "🇮🇶", tag: "Twin Rivers", desc: "Desert frontiers and urban operations." },
  { name: "Syria", flag: "🇸🇾", tag: "Northern Stand", desc: "Multi-front border defense and rebuild." },
  { name: "Israel", flag: "🇮🇱", tag: "Iron Watch", desc: "High-tech defense and rapid response." },
  { name: "Jordan", flag: "🇯🇴", tag: "Desert Kingdom", desc: "Border command and humanitarian corridors." },
  { name: "Palestine", flag: "🇵🇸", tag: "Homeland Resolve", desc: "Community defense and resistance roleplay." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mebrLogo.url} alt="MEBR logo" width={36} height={36} className="w-9 h-9 rounded-md object-cover" />
            <span className="font-display text-lg tracking-wider">MEBR</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#countries" className="hover:text-foreground transition">Countries</a>
            <a href="#government" className="hover:text-foreground transition">Government</a>
            <a href="#staff" className="hover:text-foreground transition">Staff</a>
          </nav>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-md text-primary-foreground" style={{ background: "var(--gradient-ember)" }}>
            Enlist
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
        <img
          src={mebrHero.url}
          alt="MEBR operator with Egyptian flag patch"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative max-w-6xl mx-auto px-5 w-full">
          <p className="text-ember font-semibold uppercase tracking-[0.3em] text-xs mb-4">Roleplay Server · Est. 2024</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6 max-w-5xl">
            Middle Eastern<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "var(--gradient-ember)" }}>
              Border Roleplay
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Eight nations. One contested region. Pick your flag, hold your post, and write your story alongside hundreds of dedicated players.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="px-7 py-4 rounded-md text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-[var(--shadow-ember)]" style={{ background: "var(--gradient-ember)" }}>
              Join the Discord
            </a>
            <a href="#countries" className="px-7 py-4 rounded-md border border-border bg-background/30 backdrop-blur text-foreground font-bold uppercase tracking-wider text-sm hover:bg-background/60 transition">
              View Nations
            </a>
          </div>
        </div>
      </section>

      {/* Showcase photo */}
      <section className="px-5 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border">
            <img src={mebrSquad.url} alt="MEBR squad on patrol" width={1600} height={900} className="w-full h-auto object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <p className="text-ember font-semibold uppercase tracking-[0.3em] text-xs mb-2">Real Operations · In-Game</p>
              <h3 className="font-display text-3xl md:text-5xl">Boots on the ground. Every single day.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section id="countries" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ember font-semibold uppercase tracking-[0.3em] text-xs mb-3">Choose Your Allegiance</p>
            <h2 className="font-display text-5xl md:text-6xl mb-4">Eight nations<br/>open for enlistment</h2>
            <p className="text-muted-foreground">Each nation runs its own command structure, ranks, missions and storylines. Switch allegiances or rise through the ranks of one.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {countries.map((c) => (
              <div key={c.name} className="group relative p-6 rounded-lg bg-card border border-border overflow-hidden hover:border-ember/60 transition">
                <div className="absolute -top-10 -right-10 text-9xl opacity-10 group-hover:opacity-20 transition">{c.flag}</div>
                <div className="relative">
                  <div className="text-4xl mb-4">{c.flag}</div>
                  <h3 className="font-display text-2xl mb-1">{c.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-ember mb-3">{c.tag}</p>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="py-24 px-5 bg-card/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ember font-semibold uppercase tracking-[0.3em] text-xs mb-3">The Backbone</p>
            <h2 className="font-display text-5xl md:text-6xl mb-4">Meet the high command.</h2>
            <p className="text-muted-foreground text-lg">
              Trained, active, and fair. Tickets answered in minutes, rule breakers handled fast, and events run every weekend.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {staff.map((s) => (
              <div key={s.name} className="group relative p-6 rounded-lg bg-background border border-border hover:border-ember/60 transition">
                <div className="w-16 h-16 rounded-full mb-5 flex items-center justify-center font-display text-2xl text-primary-foreground" style={{ background: "var(--gradient-ember)" }}>
                  {s.initials}
                </div>
                <h3 className="font-display text-2xl mb-1">{s.name}</h3>
                <p className="text-xs uppercase tracking-widest text-ember mb-3">{s.role}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "24/7", l: "Coverage" },
              { n: "<5m", l: "Avg Response" },
              { n: "100%", l: "Active Daily" },
              { n: "0", l: "Tolerance for Abuse" },
            ].map(s => (
              <div key={s.l} className="p-6 rounded-lg bg-background border border-border">
                <div className="font-display text-4xl md:text-5xl text-ember mb-1">{s.n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government & Elections */}
      <section id="government" className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <p className="text-ember font-semibold uppercase tracking-[0.3em] text-xs mb-3">Politics & Power</p>
            <h2 className="font-display text-5xl md:text-6xl mb-4">Run for office.<br/>Lead your nation.</h2>
            <p className="text-muted-foreground text-lg">
              Every country has its own government. Become a minister, climb the cabinet, or campaign for President — winners are decided by fair, monitored elections held for each nation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { t: "Join the Government", d: "Apply for cabinet roles, ministries and senior gov positions inside any of the eight nations." },
              { t: "Run for President", d: "Campaign, build your platform, and rally voters during official election cycles." },
              { t: "Fair Elections", d: "Every vote is verified and supervised by staff. No rigging, no favoritism — the people decide." },
            ].map(x => (
              <div key={x.t} className="p-6 rounded-lg bg-card border border-border hover:border-ember/60 transition">
                <h3 className="font-display text-2xl mb-2">{x.t}</h3>
                <p className="text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 px-5 border-y border-border bg-card/40">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shrink-0" style={{ background: "var(--gradient-ember)" }}>
            🛡️
          </div>
          <div>
            <p className="text-ember font-semibold uppercase tracking-[0.3em] text-xs mb-2">Safe & Monitored 24/7</p>
            <h2 className="font-display text-3xl md:text-4xl mb-3">A server you can actually trust.</h2>
            <p className="text-muted-foreground">
              Our staff monitors the server around the clock. Anti-cheat, active moderation, and zero tolerance for harassment keep MEBR a safe place to roleplay — day or night.
            </p>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section id="join" className="py-32 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at center, var(--ember) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-6">The border won't<br/>hold itself.</h2>
          <p className="text-muted-foreground text-lg mb-10">Join Middle Eastern Border Roleplay today. Your nation is waiting.</p>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 rounded-md text-primary-foreground font-bold uppercase tracking-wider shadow-[var(--shadow-ember)]" style={{ background: "var(--gradient-ember)" }}>
            discord.gg/mebr
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-5 text-center text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} Middle Eastern Border Roleplay
      </footer>
    </div>
  );
}
