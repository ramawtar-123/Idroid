import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronRight, Send, Play } from "lucide-react";

export default function IdroidLanding() {
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
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f9fce1e2ddc2b6a9bce3c8accd6a9b1",
    },
    {
      title: "Event Management",
      desc: "Plan & host memorable public and private events — from logistics to creative production.",
      image:
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a7e2b5b8c9f6a3d6f8d7a2b3c1d5e9f",
    },
    {
      title: "Cinema / Radio / TV",
      desc: "Multi-channel audio & video campaigns to reach mass audiences with high-impact creatives.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=e6d8a3f6b2e1b1c3aa6a1e7d2a7c8b9f",
    },
    {
      title: "Airport / Airline Branding",
      desc: "Strategic, high-visibility branding across terminal spaces and onboard media.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=98f1f8c6d4e7a2b6c8d9e3f1a2b3c4d5",
    },
  ];

  const news = [
    { img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=e6d8a3f6b2e1b1c3aa6a1e7d2a7c8b9f", title: "Best Airline / Airport Branding Agency" },
    { img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b", title: "Top Outdoor Advertising Agency in India" },
    { img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f", title: "Best Outdoor Advertising in Ahmedabad" },
  ];

  const icons = [
    "Airport / Airline",
    "Hoardings",
    "Digital Display",
    "Radio / TV / Cinema",
    "Mall Branding",
    "Transit Media",
    "Event Management",
    "Transit Ads",
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
              className={`w-44 sm:w-48 duration-300 ${progress ? "filter-none" : ""}`}
            />
          </div>

          {/* Desktop links */}
          <div className="space-x-6 hidden md:block">
            {["Home", "Services", "Clients", "About Us", "Contact"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className={`font-medium transition-colors duration-200 ${progress ? "text-gray-700 hover:text-cyan-400" : "text-white hover:text-white/90"}`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className={`px-3 py-2 rounded text-sm transition ${progress ? "bg-cyan-500 text-white hover:bg-cyan-600" : "bg-white/20 text-white hover:bg-white/30"}`}>
              CAREER
            </button>

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
                <div className="mb-3 flex gap-2 flex-wrap">
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
                </div>
                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {["Home", "Services", "Clients", "About Us", "Contact"].map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      className="flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                    >
                      <span className="w-6 h-6 bg-teal-50 text-teal-600 rounded flex items-center justify-center text-xs font-semibold">{item[0]}</span>
                      <span className="text-sm font-medium">{item}</span>
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

      <header className="relative min-h-[100vh] md:h-[100vh] overflow-hidden bg-gradient-to-r from-teal-800 to-teal-700">
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
              Idroid Beacon is an integrated advertising agency — outdoor advertising, digital campaigns and web development that move business forward.
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
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded flex items-center justify-center text-teal-600 font-bold">{title[0]}</div>
                <div className="text-xs sm:text-sm mt-2 text-teal-800">{title}</div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">OUR SERVICES.</h2>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {services.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 + idx * 0.05 }}
                  className="bg-white shadow-lg border rounded-md overflow-hidden flex flex-col"
                >
                  <div className="w-full h-40 sm:h-44 md:h-40 lg:h-44 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <p className="mt-3 text-sm text-gray-600 flex-1">{s.desc}</p>
                    <button className="mt-4 inline-block text-sm border border-teal-500 px-4 py-2 rounded self-start">EXPLORE NOW</button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* small carousel controls (non-destructive) */}
            <div className="hidden md:flex absolute inset-y-0 left-0 items-center">
              <button onClick={() => prev(setServiceIndex, serviceIndex, services.length)} className="bg-white p-3 rounded shadow border mr-4">
                <FiChevronLeft />
              </button>
            </div>
            <div className="hidden md:flex absolute inset-y-0 right-0 items-center">
              <button onClick={() => next(setServiceIndex, serviceIndex, services.length)} className="bg-white p-3 rounded shadow border ml-4">
                <FiChevronRight />
              </button>
            </div>
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
            { img: services[0].image, title: "Hoardings / Banners", desc: "High-impact billboard advertising." },
            { img: services[1].image, title: "Mobile / LED Van", desc: "On-the-ground activation & van branding." },
            { img: services[2].image, title: "Pole Kiosk / Digital Display", desc: "Targeted digital displays in high footfall zones." },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden">
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
      <section className="py-12 sm:py-20 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 sm:mb-12">Our Proud Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 max-w-7xl mx-auto">
          {["Lakme Salon", "Capri Loans", "Kangaroo Kids", "Colorshine"].map((client, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="rounded-xl overflow-hidden bg-gray-50 shadow-lg">
              <img src={services[i % services.length].image} alt={client} className="w-full h-44 sm:h-56 object-cover" />
              <div className="p-4 sm:p-6 text-left">
                <h3 className="font-bold text-lg mb-1">{client}</h3>
                <p className="text-sm text-gray-600">Sample case study showing campaign impact.</p>
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

      /* TESTIMONIALS */
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
      <footer className="bg-gray-900 text-white py-6 sm:py-8 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">© {new Date().getFullYear()} Idroid Becance — All rights reserved.</div>
          <div className="flex gap-4 text-sm">
            <a href="#privacy" className="text-gray-300 hover:text-white">Privacy</a>
            <a href="#terms" className="text-gray-300 hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
