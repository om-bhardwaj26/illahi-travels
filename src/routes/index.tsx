import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mountain, MapPin, Phone, Mail, Instagram, Star, Compass,
  Tent, Bike, Users, Calendar, ChevronRight, Menu, X, Quote, ArrowRight, Snowflake
} from "lucide-react";
import heroLadakh from "@/assets/hero-ladakh.jpg";
import kashmir from "@/assets/kashmir.jpg";
import manali from "@/assets/manali.jpg";
import spiti from "@/assets/spiti.jpg";
import goa from "@/assets/goa.jpg";
import bikeTrip from "@/assets/bike-trip.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const trips = [
  {
    title: "Leh – Ladakh Circuit",
    days: "7N / 8D",
    from: "₹24,999",
    image: heroLadakh,
    tag: "Best Seller",
    highlights: ["Pangong Lake camp", "Nubra Valley", "Khardung La pass", "Local homestays"],
  },
  {
    title: "Kashmir Great Escape",
    days: "5N / 6D",
    from: "₹18,499",
    image: kashmir,
    tag: "Family",
    highlights: ["Srinagar houseboat", "Gulmarg gondola", "Pahalgam day trip", "Shikara sunrise"],
  },
  {
    title: "Manali – Solang Snow",
    days: "4N / 5D",
    from: "₹12,999",
    image: manali,
    tag: "Weekend",
    highlights: ["Solang Valley snow", "Old Manali cafés", "Hadimba temple", "Volvo from Delhi"],
  },
  {
    title: "Spiti Winter Expedition",
    days: "9N / 10D",
    from: "₹32,500",
    image: spiti,
    tag: "Adventure",
    highlights: ["Key & Tabo monasteries", "Chandratal lake", "Frozen rivers", "Local Spitian food"],
  },
  {
    title: "Goa Beach Getaway",
    days: "3N / 4D",
    from: "₹9,999",
    image: goa,
    tag: "Chill",
    highlights: ["North + South beaches", "Sunset cruise", "Café hopping", "Beachside stay"],
  },
  {
    title: "Manali → Leh Bike Trip",
    days: "10N / 11D",
    from: "₹38,999",
    image: bikeTrip,
    tag: "Riders",
    highlights: ["Royal Enfield Himalayan", "5 high passes", "Backup mechanic", "Oxygen support"],
  },
];

const destinations = [
  { name: "Ladakh", tag: "High Himalayas", image: heroLadakh },
  { name: "Kashmir", tag: "Paradise on Earth", image: kashmir },
  { name: "Manali", tag: "Snow & Pines", image: manali },
  { name: "Spiti", tag: "Cold Desert", image: spiti },
  { name: "Goa", tag: "Beaches & Sunsets", image: goa },
];

const testimonials = [
  { name: "Rahul K.", city: "Bengaluru", text: "Booked the Ladakh trip on a whim — everything from permits to camps was handled. Pangong night was unreal." },
  { name: "Priya & Anand", city: "Mumbai", text: "Honeymoon in Kashmir, perfectly planned. The houseboat upgrade was a sweet surprise from the team." },
  { name: "Vikram R.", city: "Delhi", text: "Did the Manali–Leh ride. Bikes were spotless, mechanic was a legend, and the route was paced really well." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <Trips />
      <WhyUs />
      <Destinations />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-sunset text-sunset-foreground shadow-card">
        <Mountain className="size-5" strokeWidth={2.4} />
      </span>
      <span className={`flex flex-col leading-tight ${light ? "text-background" : "text-foreground"}`}>
        <span className="font-display text-xl">Ilahi Travels</span>
        <span className="text-[10px] uppercase tracking-[0.22em] opacity-70">Wander the Himalayas</span>
      </span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#trips", label: "Trips" },
    { href: "#why", label: "Why Us" },
    { href: "#destinations", label: "Destinations" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header id="top" className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo light />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-background/85 transition hover:text-background">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-sunset px-5 py-2.5 text-sm font-semibold text-sunset-foreground shadow-card transition hover:brightness-110">
            Plan a Trip <ArrowRight className="size-4" />
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="text-background md:hidden" aria-label="Menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="mx-4 rounded-2xl bg-card p-4 shadow-elegant md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-foreground">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="mt-2 block rounded-full bg-gradient-sunset px-4 py-2.5 text-center text-sm font-semibold text-sunset-foreground">
            Plan a Trip
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <img
        src={heroLadakh}
        alt="Pangong Lake in Ladakh at sunrise"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40">
        <div className="max-w-3xl animate-float-up">
          <p className="divider-line mb-6 text-xs uppercase tracking-[0.3em] text-background/80">
            <Snowflake className="size-3.5" /> Est. 2018 · Himalayan Specialists
          </p>
          <h1 className="text-balance font-display text-5xl leading-[1.02] text-background sm:text-6xl md:text-[5.5rem]">
            Trade your <em className="font-display italic text-gradient-sunset">routine</em><br />for a road less travelled.
          </h1>
          <p className="mt-6 max-w-xl text-base text-background/85 md:text-lg">
            Handcrafted trips across Ladakh, Kashmir, Manali, Spiti and Goa.
            Built by riders and trekkers who actually know the route.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#trips" className="inline-flex items-center gap-2 rounded-full bg-gradient-sunset px-7 py-4 text-sm font-semibold text-sunset-foreground shadow-elegant transition hover:brightness-110">
              See All Trips <ChevronRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-7 py-4 text-sm font-semibold text-background backdrop-blur transition hover:bg-background/20">
              Customise My Itinerary
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-background/85">
            <Stat value="8,500+" label="Happy Travellers" />
            <span className="hidden h-8 w-px bg-background/25 sm:block" />
            <Stat value="40+" label="Curated Trips" />
            <span className="hidden h-8 w-px bg-background/25 sm:block" />
            <Stat value="4.9★" label="Google Rated" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-background">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-background/65">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = ["Ladakh", "Kashmir", "Manali", "Spiti", "Goa", "Meghalaya", "Bhutan", "Kerala", "Andaman", "Sikkim"];
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-card py-5">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-3 font-display text-2xl text-foreground/80">
            <MapPin className="size-4 text-sunset" /> {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="divider-line mb-4 text-xs uppercase tracking-[0.3em] text-sunset">{kicker}</p>
      <h2 className="text-balance font-display text-4xl text-foreground md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Trips() {
  return (
    <section id="trips" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker="Signature Trips"
          title="Pick a journey. We'll handle the rest."
          subtitle="Fixed departures and customisable itineraries. Group, couple and solo-friendly options."
        />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((t) => (
            <article key={t.title} className="group overflow-hidden rounded-3xl bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative h-60 overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" width={1200} height={900} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-gradient-sunset px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-sunset-foreground">{t.tag}</span>
                <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">{t.days}</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-foreground">{t.title}</h3>
                <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                  {t.highlights.map((h) => (
                    <li key={h} className="flex gap-2"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sunset" />{h}</li>
                  ))}
                </ul>
                <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Starting</div>
                    <div className="font-display text-2xl text-foreground">{t.from}<span className="text-sm text-muted-foreground"> /pax</span></div>
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
                    Book Now <ChevronRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Compass, title: "Local Trip Leaders", text: "Our crew lives in the mountains. They know the shortcuts, the best dhabas, and the safe stops." },
    { icon: Tent, title: "Curated Stays", text: "Boutique homestays, lake-view camps and verified hotels — handpicked by us, not a third-party portal." },
    { icon: Bike, title: "Fully-Backed Bike Trips", text: "Royal Enfield rentals, mechanic backup, oxygen cylinders and a sweep vehicle on every ride." },
    { icon: Users, title: "Small Group Sizes", text: "Max 12 travellers per batch. More attention, less waiting, real friendships on the road." },
  ];
  return (
    <section id="why" className="relative overflow-hidden bg-gradient-mountain py-24 md:py-32">
      <div className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="divider-line mb-4 text-xs uppercase tracking-[0.3em] text-sunset">Why Ilahi</p>
          <h2 className="font-display text-4xl text-background md:text-5xl">Travel light. Travel right.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-background/10 bg-background/5 p-7 backdrop-blur transition hover:border-sunset/50 hover:bg-background/10">
              <div className="grid size-12 place-items-center rounded-xl bg-gradient-sunset text-sunset-foreground">
                <it.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-background">{it.title}</h3>
              <p className="mt-2 text-sm text-background/70 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="Where We Go" title="Pick your altitude." />
        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {destinations.map((d, i) => {
            const span =
              i === 0 ? "md:col-span-2 md:row-span-2 md:h-[640px]" :
              i === 1 ? "md:h-[310px]" :
              i === 2 ? "md:h-[310px]" :
              i === 3 ? "md:h-[310px]" :
              "md:h-[310px]";
            return (
              <a key={d.name} href="#contact" className={`group relative overflow-hidden rounded-3xl shadow-card h-72 ${span}`}>
                <img src={d.image} alt={d.name} loading="lazy" width={1200} height={900} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-background">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-background/70">{d.tag}</div>
                    <h3 className="font-display text-3xl md:text-4xl">{d.name}</h3>
                  </div>
                  <span className="grid size-10 place-items-center rounded-full bg-background/15 backdrop-blur transition group-hover:bg-sunset group-hover:text-sunset-foreground">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker="Traveller Stories" title="Real trips. Real reviews." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-card p-8 shadow-card">
              <Quote className="size-7 text-sunset" />
              <blockquote className="mt-4 leading-relaxed text-foreground/90">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.city}</div>
                </div>
                <div className="flex gap-0.5 text-sunset">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-mountain p-10 shadow-elegant md:p-16">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-gradient-sunset opacity-30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-sunset opacity-20 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="divider-line mb-4 text-xs uppercase tracking-[0.3em] text-sunset">Let's Plan</p>
              <h2 className="font-display text-4xl text-background md:text-5xl">Tell us your dream trip.</h2>
              <p className="mt-4 max-w-md text-background/80">
                Drop your dates and group size. We'll send a personalised itinerary with hotels, transport, and a transparent quote — usually within a few hours.
              </p>
              <div className="mt-8 space-y-3 text-background/90">
                <a href="tel:+919999999999" className="flex items-center gap-3 transition hover:text-sunset">
                  <Phone className="size-4 shrink-0 text-sunset" />
                  <span>+91 99999 99999</span>
                </a>
                <a href="mailto:hello@ilahitravels.com" className="flex items-center gap-3 transition hover:text-sunset">
                  <Mail className="size-4 shrink-0 text-sunset" />
                  <span>hello@ilahitravels.com</span>
                </a>
                <a href="https://instagram.com/ilahitravels_3.0" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-sunset">
                  <Instagram className="size-4 shrink-0 text-sunset" />
                  <span>@ilahitravels_3.0</span>
                </a>
              </div>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll reach out shortly with your custom itinerary."); }}
              className="rounded-2xl bg-card p-7 shadow-elegant"
            >
              <h3 className="font-display text-2xl text-foreground">Get a custom itinerary</h3>
              <div className="mt-5 grid gap-4">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Phone / WhatsApp" name="phone" placeholder="+91" type="tel" />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Destination</label>
                    <select name="dest" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
                      <option>Ladakh</option><option>Kashmir</option><option>Manali</option>
                      <option>Spiti</option><option>Goa</option><option>Surprise me</option>
                    </select>
                  </div>
                  <Field label="Travellers" name="pax" placeholder="2" type="number" />
                </div>
                <Field label="Travel month" name="month" placeholder="e.g. June 2026" />
                <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-sunset px-6 py-3.5 text-sm font-bold text-sunset-foreground transition hover:brightness-105">
                  Send Enquiry <Calendar className="size-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input {...props} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <Logo />
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ilahi Travels · Made with mountain air.</p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://instagram.com/ilahitravels_3.0" target="_blank" rel="noreferrer" className="transition hover:text-sunset"><Instagram className="size-5" /></a>
          <a href="mailto:hello@ilahitravels.com" className="transition hover:text-sunset"><Mail className="size-5" /></a>
        </div>
      </div>
    </footer>
  );
}
