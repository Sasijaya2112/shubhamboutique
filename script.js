/* ===== CENTRAL CONFIG: edit only this block. Empty values are hidden automatically. ===== */
const CONFIG = {
  contact: { whatsapp: "", phone: "", email: "" },   // whatsapp: digits with country code, e.g. "91XXXXXXXXXX"
  bookingLinks: {                                     // exact property URLs only
    airbnb: "https://www.airbnb.com/users/profile/1463564571635763333", // host profile listing all Shubham rooms
    bookingcom: "", makemytrip: "", agoda: ""
  },
  reviewsUrl: "https://www.airbnb.com/rooms/575938882997841291",
  mapQuery: "Shubham Boutique Homestay White Town Pondicherry",
  img: "assets/images/"
};
/* Verified from live Airbnb listings, 28 Oct 2026. */
const ROOMS = [
  { name: "Bhumi", c: "var(--leaf)", floor: "Ground floor", beds: "1 double bed, 1 bunk bed", max: "Up to 4 guests", rating: "4.92 (170 reviews)", note: "A dip away from the pool, with a hand-painted bed from Kerala.", url: "https://www.airbnb.com/rooms/575938882997841291" },
  { name: "Anubhav", c: "var(--walnut)", floor: "First floor", beds: "1 double bed, 1 bunk bed", rating: "4.91 (159 reviews)", note: "An oriental touch in the paintings and furniture.", url: "https://mk.airbnb.com/rooms/53349890" },
  { name: "Anubhuti", c: "var(--teal)", floor: "First floor", beds: "1 double bed, 1 single bed", rating: "4.94 (185 reviews)", note: "A large, light room in shades of blue with an east balcony over the pool.", url: "https://www.airbnb.com/rooms/577434974644673655" },
  { name: "Briddhi", c: "var(--terra)", beds: "2 single beds", rating: "4.9 (120 reviews)", note: "The room where the idea of Shubham first took shape.", url: "https://www.airbnb.com/rooms/581008046906043046" },
  { name: "Astu", c: "#8B4A38", floor: "First floor", beds: "1 queen bed, 1 couch", rating: "4.91 (180 reviews)", note: "“Good wishes”: paintings, antiques and soft afternoon light.", url: "https://www.airbnb.com.au/rooms/582279790781305134" }
];
const AMEN = [["Shared lap pool", "Open year-round at set hours"], ["Wi-Fi", "Listed for every room"], ["Dedicated workspace", "In each room listing"], ["Free street parking", "Listed for every room"], ["Private bathroom", "Attached to each room"], ["Lock on bedroom door", "Listed for every room"], ["Open terrace", "Shared by all guests"], ["Two living rooms", "Ground and first floors"], ["Outdoor dining", "Shared dining areas by the pool"], ["Lift", "Two people per trip, no luggage"], ["Homemade breakfast", "South Indian breakfast praised by guests"]];
const SPACES = [["living-shared", "Shared living room with staircase and artwork"], ["patio", "Shared patio and dining beside the pool"], ["dining", "Verandah dining beneath timber beams"], ["balcony", "Terrace balcony with tiled roof"], ["living-suite", "Sitting area with antiques and paintings"], ["queenbed", "Guest room with teal bedding and French doors"]];
const PLACES = [
  { n: "Promenade Beach", i: "p-promenade", d: "About 5 min walk · per Airbnb", t: "Sea breeze, a rocky seawall shoreline and sunrise walks along the seafront.", q: "Promenade Beach Pondicherry" },
  { n: "French War Memorial", i: "p-memorial", d: "400 m · per Airbnb", t: "A white memorial to the soldiers of French India who died in 1914–1918. Quiet at sunset.", q: "French War Memorial Pondicherry" },
  { n: "Sri Aurobindo Ashram", i: "p-ashram", t: "A spiritual community in the French Quarter, visited for its calm atmosphere.", q: "Sri Aurobindo Ashram Pondicherry" },
  { n: "Manakula Vinayagar Temple", i: "p-temple", t: "A Ganesha temple known for its richly painted, ornate sculpted façade.", q: "Manakula Vinayagar Temple Pondicherry" },
  { n: "Bharathi Park & Aayi Mandapam", i: "p-bharathi", t: "A white heritage monument at the centre of a lawned park, ideal for a slow stroll.", q: "Bharathi Park Pondicherry" },
  { n: "Pondicherry Museum", i: "p-museum", t: "Sculptures, handicrafts and artefacts from the region in a colonial-era setting.", q: "Pondicherry Museum" },
  { n: "Heritage Streets", i: "p-quarter", t: "Tree-lined lanes of ochre and white villas, best explored on foot or by bicycle. Cafés and restaurants line the French Quarter.", q: "White Town Pondicherry heritage streets" },
  { n: "Serenity Beach", i: "p-serenity", d: "Short drive from town", t: "A quieter stretch of coast, popular for sunrise and surfing.", q: "Serenity Beach Pondicherry" }
];
const NEAR = [["Joan of Arc Statue", "200 m", "Joan of Arc Statue Pondicherry"], ["French War Memorial", "400 m", "French War Memorial Pondicherry"], ["Baker Street (restaurants & shopping)", "400 m", "Baker Street Pondicherry"], ["Bay of Buddha", "500 m", "Bay of Buddha Pondicherry"]];
const GAL = [["exterior", "Exterior", "Carved wooden doors set in terracotta walls"], ["pool-tall", "Pool", "Terracotta façade and carved balconies above the lap pool"], ["shared-pool", "Pool", "The shared lap pool and garden courtyard"], ["patio", "Spaces", "Shared patio and dining beside the pool"], ["living-shared", "Spaces", "Shared living room with staircase and artwork"], ["dining", "Spaces", "Verandah dining beneath timber beams"], ["balcony", "Exterior", "Terrace balcony with a tiled roof"], ["queenbed", "Rooms", "Guest room with teal bedding and French doors"], ["living-suite", "Rooms", "Sitting area with antiques and paintings"]];
const SCORES = [["Cleanliness", 4.9], ["Accuracy", 4.9], ["Check-in", 4.9], ["Communication", 4.8], ["Location", 4.9], ["Value", 4.8]];
const TAGS = [["Hospitality", 113], ["Breakfast", 80], ["Location", 69], ["Decor", 62], ["Walkability", 45], ["Pool", 44], ["Indoor spaces", 33], ["Family", 33], ["Cleanliness", 31], ["Beach", 22]];
const FAQS = [
  ["What are check-in and check-out times?", "Airbnb listings state check-in after 2:00 PM and check-out before 11:00 AM. Please confirm on your chosen listing."],
  ["Is there a pool?", "Yes, a shared lap pool open year-round at set hours. A proper swimming costume is required."],
  ["How far is the beach?", "Promenade Beach is about a 5-minute walk, per our Airbnb listing. Please wash sandy feet at the entrance bucket before using the stairs."],
  ["Can I eat in my room?", "Please use the shared dining areas. Food in rooms is not permitted."],
  ["Is there parking and Wi-Fi?", "Free street parking and Wi-Fi are listed for each room."],
  ["Is there a lift?", "Yes. It carries a maximum of two people per trip, without luggage."],
  ["How many guests per room?", "Bhumi lists a maximum of 4 guests. Please check the listing of the room you choose for its capacity."],
  ["How do I book?", "Use Book This Room on the room you like. It opens that room’s own listing, where you can check dates and prices."],
  ["Are other rooms in the same house?", "Yes. All rooms share the same house, pool, terrace and living areas."]
];
/* ===== helpers ===== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.innerHTML = h; return e; };
const ext = (text, href, cls = "btn") => { const a = el("a", cls, text); a.href = href; a.target = "_blank"; a.rel = "noopener noreferrer"; return a; };
const maps = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
const wa = m => `https://wa.me/${CONFIG.contact.whatsapp}?text=${encodeURIComponent(m)}`;
const WAMSG = "Hello, I would like to enquire about a stay at Shubham Boutique Homestay.";
const I = n => `${CONFIG.img}${n}.webp`;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===== rooms ===== */
ROOMS.forEach(r => {
  const c = el("article", "card");
  c.innerHTML = `<div class="top" style="--c:${r.c}"><span class="pill">★ ${r.rating.split(" ")[0]}</span><h3>${r.name}</h3></div><div class="body"><p class="meta">${[r.floor, r.max].filter(Boolean).join(" · ") || "Shubham Boutique Homestay"}</p><p>${r.note}</p>
   <div class="more"><div><ul><li>Bedding: ${r.beds}</li><li>Private attached bathroom</li><li>Shared pool, terrace and living rooms</li><li>Airbnb rating: ★ ${r.rating}</li></ul></div></div></div>`;
  const b = el("div", "btns"), v = el("button", "btn dk", "View Room"); v.setAttribute("aria-expanded", "false");
  v.onclick = () => { const o = c.classList.toggle("open"); v.setAttribute("aria-expanded", o); v.textContent = o ? "Hide Details" : "View Room"; };
  b.append(v, ext("Book This Room", r.url)); $(".body", c).append(b); $("#room-grid").append(c);
});

/* ===== booking, contact ===== */
const L = CONFIG.bookingLinks, C = CONFIG.contact, bb = $("#book-btns"), cb = $("#contact-btns");
[["Airbnb", L.airbnb], ["Booking.com", L.bookingcom], ["MakeMyTrip", L.makemytrip], ["Agoda", L.agoda]].forEach(([n, u]) => { if (u) bb.append(ext(n, u, "btn alt")); });
if (C.whatsapp) { bb.append(ext("Direct Enquiry on WhatsApp", wa(WAMSG), "btn alt")); cb.append(ext("WhatsApp Enquiry", wa(WAMSG), "btn")); }
if (C.phone) { const a = el("a", "btn alt", "Call Us"); a.href = "tel:" + C.phone; cb.append(a); }
if (C.email) { const a = el("a", "btn dk", "Email"); a.href = "mailto:" + C.email; cb.append(a); }
if (L.airbnb) cb.append(ext("Visit Our Airbnb Host Profile", L.airbnb, "btn dk"));
if (!C.whatsapp && !C.phone) $("#contact-note").textContent = "Phone and WhatsApp will appear here once confirmed. For now, please book or message through Airbnb.";

/* ===== amenities, spaces, places, near, faq, reviews ===== */
AMEN.forEach(([a, b]) => $("#amen").append(el("li", "reveal", `<b>${a}</b><small>${b}</small>`)));
SPACES.forEach(([i, t]) => $("#rail").append(el("figure", "", `<div><img src="${I(i)}" alt="${t}" loading="lazy" width="1500" height="1001"></div><figcaption>${t}</figcaption>`)));
PLACES.forEach(p => {
  const c = el("article", "card reveal", `<div class="imgw"><img src="${I(p.i)}" alt="${p.n}" loading="lazy">${p.d ? `<span class="dist">${p.d}</span>` : ""}</div><div class="body"><h3>${p.n}</h3><p>${p.t}</p></div>`);
  const d = el("div", "btns"); d.append(ext("Open in Maps", maps(p.q), "btn dk")); $(".body", c).append(d); $("#exp-grid").append(c);
});
NEAR.forEach(([n, d, q]) => $("#near").append(el("li", "", `<a href="${maps(q)}" target="_blank" rel="noopener noreferrer">${n}</a><b>${d}</b>`)));
$("#near").before(el("p", "meta", "Distances per our Airbnb listing"));
const rock = el("figure", "frame", `<img src="${I("p-rock")}" alt="Rocky seawall along the Promenade with the sea beyond" loading="lazy">`); rock.style.cssText = "position:relative;height:200px;margin:1.2rem 0"; $("#near").after(rock);
FAQS.forEach(([q, a]) => $("#faq-list").append(el("details", "", `<summary>${q}</summary><p>${a}</p>`)));
SCORES.forEach(([n, v]) => { const b = el("div", "bar", `<span>${n}</span><i style="--w:${v / 5}"></i><b>${v}</b>`); $("#bars").append(b); });
TAGS.forEach(([n, v]) => $("#tags").append(el("span", "", `${n}<b>${v}</b>`)));
$("#rev-btn").append(ext("Read All Reviews on Airbnb", CONFIG.reviewsUrl, "btn dk"));

/* ===== map ===== */
$("#map").src = "https://www.google.com/maps?q=" + encodeURIComponent(CONFIG.mapQuery) + "&output=embed";
$("#dir-btn").href = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(CONFIG.mapQuery);

/* ===== gallery + lightbox ===== */
const cats = ["All", ...new Set(GAL.map(g => g[1]))]; let cur = "All", vis = [], gi = 0, last;
GAL.forEach(([i, c, t], k) => { const b = el("button", "", `<img src="${I(i)}" alt="${t}" loading="lazy">`); b.dataset.cat = c; b.dataset.cap = t; b.setAttribute("aria-label", "Open photo: " + t); b.onclick = () => open(b); $("#gal-grid").append(b); });
cats.forEach(c => { const b = el("button", "chip", c); b.setAttribute("aria-pressed", c === cur); b.onclick = () => { cur = c; $$(".chip").forEach(x => x.setAttribute("aria-pressed", x === b)); $$("#gal-grid button").forEach(g => g.classList.toggle("off", c !== "All" && g.dataset.cat !== c)); }; $("#chips").append(b); });
const show = () => { const b = vis[gi]; $("#lb-img").src = b.querySelector("img").src; $("#lb-img").alt = b.dataset.cap; $("#lb-cap").textContent = b.dataset.cap; $("#lb-n2").textContent = `${gi + 1} / ${vis.length}`; };
function open(b) { vis = $$("#gal-grid button:not(.off)"); gi = vis.indexOf(b); last = b; show(); $("#lb").hidden = false; $("#lb-x").focus(); }
function close() { $("#lb").hidden = true; last && last.focus(); }
const step = d => { gi = (gi + d + vis.length) % vis.length; show(); };
$("#lb-x").onclick = close; $("#lb-p").onclick = () => step(-1); $("#lb-n").onclick = () => step(1);
$("#lb").onclick = e => { if (e.target.id === "lb") close(); };
let tx = 0; $("#lb").addEventListener("touchstart", e => tx = e.touches[0].clientX, { passive: true });
$("#lb").addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); });
document.addEventListener("keydown", e => { if ($("#lb").hidden) return; if (e.key === "Escape") close(); if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });

/* ===== motion ===== */
const pf = () => innerWidth < 900 ? .35 : 1;
const bar = $("#top-bar"), nav = $("#nav"), mb = $("#menu-btn"), prog = $("#progress"), stk = $("#sticky"), par = $$("[data-parallax]");
function frame() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  bar.classList.toggle("solid", y > 60); prog.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  const bk = $("#book").getBoundingClientRect(), ct = $("#contact").getBoundingClientRect();
  stk.classList.toggle("show", y > innerHeight * .8 && !(bk.top < innerHeight * .6 && bk.bottom > 0) && !(ct.top < innerHeight * .6));
  if (!reduce) par.forEach(p => { const r = p.getBoundingClientRect(); if (r.bottom < -100 || r.top > innerHeight + 100) return; p.style.transform = `translate3d(0,${((r.top + r.height / 2 - innerHeight / 2) * parseFloat(p.dataset.parallax) * pf()).toFixed(1)}px,0)`; });
}
let tick; addEventListener("scroll", () => { if (!tick) tick = requestAnimationFrame(() => { frame(); tick = 0; }); }, { passive: true }); addEventListener("resize", frame); frame();
mb.onclick = () => mb.setAttribute("aria-expanded", nav.classList.toggle("open"));
nav.onclick = e => { if (e.target.tagName === "A") { nav.classList.remove("open"); mb.setAttribute("aria-expanded", "false"); } };
$$(".card, .pillars article, .wrap > .eyebrow, .wrap > h2, .wrap > .sub, .host, .score, .bar, .tags").forEach((n, i) => { n.classList.add("reveal"); n.style.setProperty("--d", (i % 4) * .08 + "s"); });
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: .12 });
$$(".reveal").forEach(n => io.observe(n));
const bio = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); bio.unobserve(x.target); } }), { threshold: .3 }); bio.observe($("#bars"));
const links = $$("#nav a"), sec = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + x.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
links.forEach(a => { const s = $(a.getAttribute("href")); s && sec.observe(s); });
const cio = new IntersectionObserver(es => es.forEach(x => { if (!x.isIntersecting) return; cio.unobserve(x.target); const t = parseFloat(x.target.dataset.count), dec = +x.target.dataset.dec || 0, from = t > 1000 ? 1960 : 0, s = performance.now(); if (reduce) return; (function f(n) { const k = Math.min((n - s) / 1600, 1), e = 1 - Math.pow(1 - k, 3); x.target.textContent = (from + (t - from) * e).toFixed(dec); if (k < 1) requestAnimationFrame(f); })(s); }), { threshold: .6 });
$$("[data-count]").forEach(n => cio.observe(n));
$("#yr").textContent = new Date().getFullYear();
