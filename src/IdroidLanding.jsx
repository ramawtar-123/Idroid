import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronRight, Send, Play, Users, Plane, Signpost, Gpu, BoomBox, BusFront, FolderKanban, Bus, Layers, Info, Phone, Home} from "lucide-react"
import { BsTrello } from "react-icons/bs";

export default function IdroidLanding() {

  const slowScroll = (direction = "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const distance = 300; // kitna scroll
    const duration = 600; // jitna slow chahiye (ms)
    const start = el.scrollLeft;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = progress * (2 - progress); // easeOut
      el.scrollLeft =
        start + (direction === "right" ? distance : -distance) * ease;

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const scrollRef = useRef(null);
  const stats = [
    { value: "250+", label: "Screens Placed" },
    { value: "78k", label: "People Reached" },
    { value: "49+", label: "Cities Covered" },
  ];

  const services = [
    {
      title: "Transit Media Ads",
      desc: "Engaging transit ads for buses, trains and metros that capture attention on the move.",
      image:
        "https://www.idroidbecanceindia.com/assets/images/projects/transitmedia.webp",
    },
    {
      title: "Event Management",
      desc: "Plan & host memorable public and private events — from logistics to creative production.",
      image:
        "https://www.idroidbecanceindia.com/assets/images/projects/event.webp",
    },
    {
      title: "Cinema / Radio / TV",
      desc: "Multi-channel audio & video campaigns to reach mass audiences with high-impact creatives.",
      image:
        "https://www.idroidbecanceindia.com/assets/images/projects/cinema-radio.webp",
    },
    {
      title: "Airport / Airline Branding",
      desc: "Strategic, high-visibility branding across terminal spaces and onboard media.",
      image:
        "https://www.idroidbecanceindia.com/assets/images/projects/metro-airport-ads.webp",
    },
    {
      title: "Non-Traditional Ads",
      desc: "Innovative and unconventional media formats, such as digital, interactive, experiential, or ambient media.",
      image:
        "https://www.idroidbecanceindia.com/assets/images/projects/ntmads.webp",
    },
    {
      title: "Digital Media Ads",
      desc: "These are screens or devices that display digital content, such as images, videos, animations, or text.",
      image:
        "https://www.idroidbecanceindia.com/assets/images/projects/dmads.webp",
    },
  ];

  const clients = [
    {
      name: "Lakme Salon",
      logo: "https://promotion.lakmesalon.in/lakmeSalon_sw2023/images/lakme.png",
      description:
        "One Month Van Branding for Lakme Salon in Vadodara Gujarat.",
    },
    {
      name: "Capri Loans",
      logo: "https://play-lh.googleusercontent.com/-dTIXRjjhGxKnOIIyebjTfrjLciSk01bjtiTZsBGR0nLvTOjD-_sJ1MFXNYDCqgaoVg",
      description:
        "Mobile Van advertising for Capri Gold Loan on 50 vans across Madhya Pradesh in November & December 2025!",
    },
    {
      name: "Kangaroo Kids",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNX2QlRZ3C9ACfFcMoYGKrLHekbZNJ1KCUPQ&s",
      description:
        "Mobile Van advertising for Kangaroo kids across Lucknow for 26 Days from 23/011/2025 to 19/12/2025!",
    },
    {
      name: "Colorshine",
      logo: "https://logomoose.com/wp-content/uploads/2013/04/colorshinelogomoose.jpg",
      description:
        "Bolstered Brand Presence Across Tamil Nadu with Eye-Catching flex Board, as exemplified by our successful collaboration with Colorshine.",
    }
  ];


  const news = [
    { img: "https://www.idroidbecanceindia.com/assets/images/news/best_airport_advertising_agency.webp", title: "Best Airline / Airport Branding Agency" },
    { img: "https://www.idroidbecanceindia.com/assets/images/news/India-topadvertising-agency.webp", title: "Top Outdoor Advertising Agency in India" },
    { img: "https://www.idroidbecanceindia.com/assets/images/news/digital_marketing_agency_ahmedabad.webp", title: "Best Outdoor Advertising in Ahmedabad" },
  ];

  const icons = [
    { name: "Airport / Airline", logo: <Plane /> },
    { name: "Hoardings", logo: <Signpost /> },
    { name: "Digital Display", logo: <Gpu /> },
    { name: "Radio / TV / Cinema", logo: <BoomBox /> },
    { name: "Mall Branding", logo: <BsTrello /> },
    { name: "Transit Media", logo: <BusFront /> },
    { name: "Event Management", logo: <FolderKanban /> }
    , { name: "Non-Traditional Media", logo: <Bus /> }
  ];

  const navItems = [
    { label: "Home", id: "home", icon: <Home size={14} /> },
    { label: "Services", id: "services", icon: <Layers size={14} /> },
    { label: "Clients", id: "clients", icon: <Users size={14} /> },
    { label: "About Us", id: "aboutus", icon: <Info size={14} /> },
    { label: "Contact", id: "contact", icon: <Phone size={14} /> },
  ];


  // UI state for small carousels
  const [serviceIndex, setServiceIndex] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);

  // Scroll progress
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY || window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, Math.round((scrolled / height) * 100)) : 0;
      setProgress(pct);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // helpers
  function prev(arrIndexSetter, current, length) {
    arrIndexSetter((cur) => (cur - 1 + length) % length);
  }
  function next(arrIndexSetter, current, length) {
    arrIndexSetter((cur) => (cur + 1) % length);
  }

  return (
    <div className="font-sans w-full min-h-screen overflow-x-hidden text-gray-900">

      <div className="fixed left-0 top-0 w-full z-50">
        <div className="h-1 bg-gray-200">
          <div className="h-1 bg-[#1fb6ad] transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <nav className={`fixed left-0 right-0 z-40 transition-colors ${progress ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              onLoad={() => {
                if (window.__navScrollInitialized) return;
                window.__navScrollInitialized = true;

                const updateNav = () => {
                  const scrolled = (window.scrollY || window.pageYOffset) > 20;
                  const logo = document.querySelector('img[alt="logo"]');
                  const nav = document.querySelector('nav');

                  if (logo) {
                    logo.src = scrolled
                      ? "https://www.idroidbecanceindia.com/assets/images/logo/logo-trp.png"
                      : "https://www.idroidbecanceindia.com/assets/images/logo/logo-alt.png";
                    logo.classList.toggle("filter-none", scrolled);
                  }

                  if (nav) {
                    nav.classList.toggle("bg-white", scrolled);
                    nav.classList.toggle("shadow-md", scrolled);
                    nav.classList.toggle("bg-transparent", !scrolled);
                  }
                };

                updateNav();
                window.addEventListener("scroll", updateNav, { passive: true });
              }}
              src={`${progress ? "https://www.idroidbecanceindia.com/assets/images/logo/logo-trp.png" : "https://www.idroidbecanceindia.com/assets/images/logo/logo-alt.png"}`}
              alt="logo"
              className={`w-48 sm:w-56 duration-300 ${progress ? "filter-none" : ""}`}
            />
          </div>

          {/* Desktop links */}
          <div className="space-x-10 hidden md:block">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.id}`}
                className={`font-medium transition-colors duration-200 ${progress
                  ? "text-gray-700 hover:text-cyan-400"
                  : "text-white hover:text-white/90"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">

            <img className="h-10 w-10 shadow-lg border border-cyan-500  rounded-full p-1" src="https://cdn-icons-png.flaticon.com/512/9131/9131478.png" alt="User" />


            {/* Mobile menu (accessible details/summary, modern styles) */}
            <details className="md:hidden relative">
              <summary
                className={`list-none cursor-pointer p-2 rounded inline-flex items-center gap-2 justify-center ${progress ? "text-gray-700 bg-white/10" : "text-white bg-white/10"} hover:scale-105 transition-transform`}
                aria-haspopup="true"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="sr-only">Menu</span>
              </summary>

              <div
                id="mobile-menu"
                className={`absolute right-4 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-3 ring-1 ring-black/5 ${progress ? "text-gray-700" : "text-gray-900"}`}
              >
                {/* <div className="mb-3 flex gap-2 flex-wrap">
                  {["📱", "🎯", "📊", "🚀"].map((icon, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 text-xs bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-2 py-1 rounded font-semibold hover:shadow-lg transition-shadow"
                    >
                      <span>{icon}</span>
                      {["Campaign", "Targeting", "Analytics", "Launch"][i]}
                    </motion.button>
                  ))}
                </div> */}
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {navItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.id ? `#${item.id}` : "#"}
                      className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                    >
                      <span className="w-7 h-7 bg-teal-50 text-teal-600 rounded-md flex items-center justify-center">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </a>
                  ))}
                </nav>


                <a
                  href="#contact"
                  className="block mt-3 py-2 px-3 rounded bg-[#1fb6ad] text-white text-center font-semibold hover:bg-[#15998f] transition-colors"
                >
                  Contact
                </a>
              </div>
            </details>
          </div>
        </div>
      </nav>

      <header id="home" className="relative min-h-[100vh] md:h-[100vh] overflow-hidden bg-gradient-to-r from-teal-800 to-teal-700">
        <img
          src=" https://www.shutterstock.com/image-vector/3d-vector-conceptual-illustration-digital-600nw-1863896599.jpg"
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 pt-48 md:pt-32 sm:px-6 lg:px-12 h-full flex items-center">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white w-full md:w-2/3 lg:w-1/2 py-12"
          >
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow">
              FROM WEBSITES TO <br /> WEB PRESENCE — <br /> <span className="text-teal-300">WE MAKE IT HAPPEN</span>
            </h1>
            <p className="mt-4 text-xs sm:text-sm md:text-base text-white/90 max-w-2xl">
              Idroid Becance is an integrated advertising agency — outdoor advertising, digital campaigns and web development that move business forward.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#services"
                className="inline-flex items-center gap-3 bg-white text-teal-900 px-4 sm:px-5 py-3 rounded shadow font-semibold text-center hover:scale-105 transform transition"
              >
                <Play size={16} /> Explore Services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-4 sm:px-5 py-3 rounded text-center hover:bg-white/10 transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>

        <button
          aria-label="previous-hero"
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 border border-white/20 rounded items-center justify-center text-white hover:bg-white/20 transition"
        >
          <FiChevronLeft />
        </button>
        <button
          aria-label="next-hero"
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 border border-white/20 rounded items-center justify-center text-white hover:bg-white/20 transition"
        >
          <FiChevronRight />
        </button>
      </header>

      {/* STATS + INFO */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">FROM WEBSITES TO WEB PRESENCE — <span className="text-teal-500">WE MAKE IT HAPPEN</span></h2>
            <p className="mt-4 text-gray-600">We deliver end-to-end campaigns — outdoor, digital, transit and event experiences that drive measurable results.</p>
            <a className="inline-block mt-6 text-sm border-b border-teal-400 pb-1">WHO WE ARE</a>
          </div>
          <div className="md:w-1/2 flex flex-wrap justify-around w-full gap-6">
            {stats.map((it) => (
              <div key={it.label} className="text-center min-w-[120px]">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500">{it.value}</div>
                <div className="text-sm text-gray-600 mt-2">{it.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICON GRID */}
      <section id="services" className="bg-teal-500 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 sm:gap-6">
            {icons.map((title, idx) => (
              <motion.div key={idx} whileHover={{ y: -6 }} className="bg-white p-3 sm:p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded flex items-center justify-center text-teal-600 font-bold">{title.logo}</div>
                <div className="text-xs sm:text-sm mt-2 text-teal-800">{title.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES CAROUSEL */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-sm text-teal-500">WHAT WE DO</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">OUR  <span className="text-teal-500">SERVICES.</span></h2>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto overflow-hidden scroll-smooth no-scrollbar"
            >
              {services.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="w-[300px] bg-white border overflow-hidden rounded-lg flex-shrink-0"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full hover:scale-110 transition-all duration-700  object-cover"
                    />
                  </div>

                  <div className="p-4 flex-col">
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <p className="mt-3 text-sm text-gray-600 flex-1">
                      {s.desc}
                    </p>
                    <button className="mt-4 text-sm border border-teal-500 px-4 py-2 rounded self-start">
                      EXPLORE NOW
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <button
              onClick={() => slowScroll("left")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded shadow border"
            >
              <FiChevronLeft />
            </button>

            <button
              onClick={() => slowScroll("right")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded shadow border"
            >
              <FiChevronRight />
            </button>
          </div>

        </div>
      </section>

      {/* FLOATING CTA */}
      <a href="https://wa.me/" className="fixed left-4 bottom-20 z-40 flex items-center gap-3 bg-white/95 backdrop-blur p-3 rounded-full shadow-lg md:left-6 md:bottom-28" aria-label="whatsapp">
        <FaWhatsapp className="text-green-600 text-xl" />
        <span className="hidden sm:inline text-sm font-semibold">Message Us</span>
      </a>
      <a href="tel:+1234567890" className="fixed right-4 bottom-20 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg bg-orange-400 text-white text-xl sm:text-2xl">
        <FiPhone />
      </a>
      <a href="#feedback" className="fixed right-0 top-1/3 z-40 rotate-90 bg-orange-600 text-white px-3 py-2 rounded-l-md hidden md:block">Feedback</a>

      {/* CLIENTS / HERO SECONDARY */}
      <section className="bg-[#1fb6ad] text-white py-12 sm:py-20 text-center">
        <h3 className="uppercase text-sm tracking-wide">Trending</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-12">Top Services</h2>
        <div className="grid sm:grid-cols-3 gap-6 px-4 sm:px-8 max-w-6xl mx-auto">
          {[
            { img: services[5].image, title: services[0].title, desc: services[0].desc },
            { img: services[4].image, title: services[1].title, desc: services[1].desc },
            { img: services[3].image, title: services[2].title, desc: services[2].desc },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white text-gray-900 rounded-xl shadow-lg lg:hover:scale-150 hover:scale-105 duration-500 transition-all overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-48 sm:h-60 object-cover" />
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="mt-8 sm:mt-10 bg-white text-[#1fb6ad] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-gray-200">Explore All Services</button>
      </section>

      {/* OUTDOOR ADVERTISING */}
      <section className="bg-gray-50 py-12 sm:py-20 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-left md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Outdoor Advertising Solutions</h2>
              <p className="text-gray-700 mb-4">We combine planning, creativity and performance to deliver campaigns that work across channels.</p>
              <ul className="space-y-1 text-left text-sm">
                <li>✔ Planning — 97%</li>
                <li>✔ Strategy — 92%</li>
                <li>✔ Performance — 97%</li>
              </ul>
            </div>
            <motion.img src={services[3].image} alt="Outdoor Advertising" className="rounded-xl shadow-lg w-full md:w-1/2 h-56 sm:h-72 object-cover" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="py-12 sm:py-20 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-12">
          Our <span className="text-teal-500" > Proud Clients</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 max-w-7xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl overflow-hidden bg-gray-50 shadow-lg"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-44 sm:h-56 object-contain bg-white p-4"
              />

              <div className="p-4 sm:p-6 text-left">
                <h3 className="font-bold text-lg text-cyan-900 mb-1">{client.name}</h3>
                <p className="text-sm text-gray-600">
                  {client.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-[#1fb6ad] text-white text-center">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-4">Let's Build Something Amazing Together</h2>
        <p className="max-w-2xl mx-auto text-white/90 mb-6">Join hundreds of brands already thriving with IDroid’s creative marketing and outdoor advertising expertise.</p>
        <button className="bg-white text-[#1fb6ad] px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-gray-200 transition-all">Get Started</button>
      </section>



      {/* CAREERS SECTION */}
      <section
        id="careers"
        className="relative py-16 sm:py-14 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block mb-3 text-sm font-semibold tracking-wide text-[#1fb6ad]">
              CAREERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
              Work Where Ideas <span className="text-[#1fb6ad]">Actually Go Live</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              We build campaigns that exist in the real world — streets, cities,
              events, and screens. If you want ownership, speed, and visible impact,
              you’ll fit right in.
            </p>
          </motion.div>

          {/* Career Timeline / Perks */}
          <div className="grid lg:grid-cols-3 gap-8 mt-16">

            {[
              {
                title: "Learn by Doing",
                desc: "No shadow roles. You work on live campaigns from day one.",
                badge: "Growth",
              },
              {
                title: "Real Ownership",
                desc: "You don’t just execute tasks — you own outcomes.",
                badge: "Responsibility",
              },
              {
                title: "Visible Impact",
                desc: "Your work is seen by thousands, not hidden in folders.",
                badge: "Exposure",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition"
              >
                <span className="absolute -top-3 left-6 bg-[#1fb6ad]/10 text-[#1fb6ad] text-xs font-semibold px-3 py-1 rounded-full">
                  {item.badge}
                </span>

                <h3 className="text-lg font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Open Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="bg-gray-100/70 rounded-2xl p-8 sm:p-10">
              <h3 className="text-xl font-bold mb-4 text-center">
                Currently Hiring For
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                {[
                  "Marketing Executive",
                  "Graphic Designer",
                  "Client Servicing Executive",
                  "Digital Campaign Coordinator",
                ].map((role, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border"
                  >
                    <span className="w-2 h-2 bg-[#1fb6ad] rounded-full" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-6">
              Don’t see your role listed? If you’re good, we still want to hear from you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#1fb6ad] hover:bg-[#17a79f] text-black font-semibold px-10 py-3 rounded-full transition"
            >
              Apply Now
            </a>
          </motion.div>

        </div>
      </section>


      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 mb-8 sm:mb-12">
            <div className="bg-[#1fb6ad] text-white p-3 sm:p-4 rounded-xl text-3xl sm:text-5xl">❝</div>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gray-900">Clients <span className="text-[#1fb6ad]">Testimonial</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
              <p className="text-gray-700 mb-3">We couldn’t be more satisfied with the services provided by IDroid Beacon. Their professionalism and commitment to our brand’s success were evident throughout the collaboration.</p>
              <h4 className="font-semibold text-gray-900">Kajariya</h4>
              <p className="text-sm text-gray-500">Marketing Head</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
              <p className="text-gray-700 mb-3">IDroid Beacon’s ability to capture our brand’s essence and translate it into captivating campaigns is truly impressive. Their targeting strategy increased engagement and conversions.</p>
              <h4 className="font-semibold text-gray-900">CapriGold</h4>
              <p className="text-sm text-gray-500">Marketing Head</p>
            </motion.div>
          </div>

          <div className="mt-10 sm:mt-20 bg-[#1fb6ad] text-center py-8 sm:py-10 rounded-2xl">
            <p className="text-white text-sm tracking-widest mb-4">OVER 10K SATISFIED CLIENTS AND COUNTING — SHAPING SUCCESS TOGETHER</p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {
                ["https://media.licdn.com/dms/image/v2/C4D0BAQGJL0qa2PDw-A/company-logo_200_200/company-logo_200_200/0/1670825158426/bansalgroup_bhopal_logo?e=2147483647&v=beta&t=5IZ9KlnrgQqzKb0Raih52qgj0O6Dtk8pKBNNWh8R9R8",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfA1TPPK00ZUtAQERgHXzv-Io2z4ANlbvawQ&s",
                  "https://cdn.blume.vc/blume/media/images/startups/cashify/logo/Cashify.f1670267326.png",
                  "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png",
                  "https://1000logos.net/wp-content/uploads/2020/04/Mahindra-Logo-2012.png",
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9F_PPcMbwbSvqORMxvUQ8s-BEzmhd7DjnUA&s"].map((logo, i) => (
                    <img key={i} src={logo} alt={`client-${i}`} className="h-10 sm:h-16 rounded-md w-24 bg-white p-1 transition-all duration-300" />
                  ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16">
            <h4 className="uppercase tracking-wide text-sm text-[#1fb6ad]">What’s Going On</h4>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900">Latest <span className="text-[#1fb6ad]">News</span></h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <motion.article key={i} whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden shadow-lg group">
                <img src={n.img} alt={n.title} className="w-full h-56 sm:h-72 object-cover group-hover:opacity-80 transition" />
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6 text-white">
                  <p className="uppercase text-xs tracking-widest">Informative</p>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{n.title}</h3>
                  <button className="text-sm flex items-center gap-1 hover:underline">Read More <ChevronRight size={16} /></button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="aboutus" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
            About <span className="text-[#1fb6ad]">Us</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
            Introducing Idroid Becance – your premier advertising agency and online marketplace dedicated to elevating your brand through innovative advertising, effective promotions, and enhanced brand awareness across India. Let us help you make an unforgettable impact in the marketplace!

            By taking care of our client's Advertising and Marketing requirements, they can focus on their business more efficiently. We offer customized, uniquely suitable solutions to all our clients by understanding their specific requirements.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Our Mission", desc: "Embark on brand building through strategic excellence. Our industry expertise drives comprehensive solutions that transcend conventions." },
              { title: "Core Values", desc: "Guided by our intrinsic values, we thrive as a purposeful organization, drawing inspiration to strive beyond limits." },
              { title: "Our Philosophy", desc: "Initiate brand elevation through a strategic approach, harnessing industry expertise to create impactful solutions." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ + CONTACT */}
      <section className="bg-gray-50 py-12 sm:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 sm:px-6">
          <div>
            <h4 className="uppercase tracking-wide text-sm text-[#1fb6ad] mb-3">FAQs</h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Most Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">What Services do You Offer?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We offer full-service advertising, creative, digital marketing, media buying and event production.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">How do You Measure Success?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We measure success using KPIs like engagement, conversions, impressions and campaign ROI.</p>
              </div>
            </div>
          </div>

          <div id="contact" className="bg-white shadow-lg rounded-2xl p-6 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">Reach Out via the Form Below</h3>
            <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
              {[{ label: "Name", type: "text" }, { label: "Email", type: "email" }, { label: "Mobile", type: "tel" }, { label: "Subject", type: "text" }].map((f, i) => (
                <div key={i}>
                  <label className="block text-gray-700 text-sm font-medium mb-1">{f.label}</label>
                  <input type={f.type} className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 focus:outline-none focus:ring-2 focus:ring-[#1fb6ad]" />
                </div>
              ))}

              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#1fb6ad] text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-[#15998f] transition">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-300 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* Top Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-6">

            {/* Brand */}
            <div className="flex  flex-col items-center text-center md:items-start md:text-left">
              <h3 className="w-56 mb-8">
                <img
                  src="https://www.idroidbecanceindia.com/assets/images/logo/logo-alt.png"
                  alt="Idroid Becance"
                  className="mx-auto md:mx-0"
                />
              </h3>

              <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
                As we take care of the Advertising & Marketing Requirements of our clients,
                we offer customized, unique, and best-suitable solutions to all our clients
                by understanding their requirements.
              </p>
            </div>


            {/* Services */}
            <div className="text-center bg-gray-900/20 rounded-lg p-10 md:text-left">
              <h4 className="text-white font-semibold mb-4 md:flex md:justify-start justify-center">
                Services
              </h4>

              <ul className="space-y-2 text-sm">
                {[
                  "Outdoor Advertising",
                  "Transit Media",
                  "Event Marketing",
                  "Digital Campaigns",
                  "Brand Activations",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>


            {/* Company */}
            <div className="text-center md:bg-gray-900/30 bg-gray-900/20 rounded-lg p-10 md:text-left">
              <h4 className="text-white font-semibold mb-4">
                Company
              </h4>

              <ul className="space-y-2 text-sm">
                {[
                  { label: "About Us", link: "#aboutus" },
                  { label: "Careers", link: "#careers" },
                  { label: "Our Clients", link: "#clients" },
                  { label: "Contact", link: "#contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="hover:text-white transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>


            {/* Contact */}
            <div className="text-center bg-gray-900/20 rounded-lg p-10 md:text-left">
              <h4 className="text-white font-semibold mb-4">
                Get in Touch
              </h4>

              <ul className="space-y-2 text-sm">
                <li>📍  Plot No. 61, 3rd Floor, Near Shree Vatika Hotel, Zone-I, M.P. Nagar Bhopal, M.P.</li>
                <li>📞  +91 9131817090 | +91 9589674037 </li>
                <li>✉️  sales@idroidbecanceindia.com</li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <div>
              © {new Date().getFullYear()} Idroid Becance. All rights reserved.
            </div>

            <div className="flex gap-1">
              <a href="#privacy" className="hover:text-white transition">
                Privacy Policy |
              </a>
              <a href="#terms" className="hover:text-white transition">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
