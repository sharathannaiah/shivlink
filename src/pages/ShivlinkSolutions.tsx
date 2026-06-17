import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  BarChart,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  Shield,
  Smartphone,
  Star,
  Users,
  UserCheck,
  X,
} from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';
import { RainbowBorderButton } from '@/components/ui/RainbowBorderButton';
import { SmokeBackground } from '@/components/ui/smoke-background';
import Typewriter from '@/components/ui/typewriter';

const serviceCards = [
  {
    title: 'Telecom Sales & Marketing',
    description:
      "Expert direct sales for Canada's top telecom providers through high-performing field and outreach teams.",
    details: ['Provider-aligned campaigns', 'B2C outreach execution', 'Performance tracking'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    icon: Smartphone,
    glowColor: 'blue' as const,
  },
  {
    title: 'Home Security Systems',
    description:
      'Cutting-edge security solutions with professional installation partnerships built for trust and retention.',
    details: ['Smart home upgrades', 'Install partner network', 'After-sales support'],
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    icon: Shield,
    glowColor: 'purple' as const,
  },
  {
    title: 'Cold Calling & Lead Generation',
    description:
      'High-converting outbound strategies to grow your customer base with qualified pipeline opportunities.',
    details: ['Script optimization', 'Targeted audience lists', 'Sales-ready lead flow'],
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    icon: Users,
    glowColor: 'green' as const,
  },
  {
    title: 'Social Media Marketing',
    description:
      'We leverage social media platforms as powerful marketing tools, enabling brands to engage directly with their target audience, drive website traffic, and increase sales.',
    details: ['Platform strategy', 'Audience engagement', 'Traffic & sales growth'],
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80',
    icon: Facebook,
    glowColor: 'blue' as const,
  },
  {
    title: 'Direct Sales',
    description:
      'Our strategic direct sales approach enables your brand to build meaningful, personal relationships with consumers—driving increased sales and stronger brand loyalty through tailored communication and customized messaging.',
    details: ['Personal relationship building', 'Tailored communication', 'Brand loyalty growth'],
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    icon: MessageCircle,
    glowColor: 'purple' as const,
  },
  {
    title: 'Event Marketing',
    description:
      'With a comprehensive, end-to-end strategy, our events stand out as powerful branding experiences and dynamic platforms for building meaningful, long-lasting connections.',
    details: ['End-to-end strategy', 'Branding experiences', 'Long-lasting connections'],
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    icon: Calendar,
    glowColor: 'green' as const,
  },
  {
    title: 'Digital Marketing',
    description:
      'Leveraging data-driven strategies and innovative techniques, we strengthen your digital presence across all channels—driving traffic, generating leads, and positioning your business for success in today’s digital landscape.',
    details: ['Data-driven strategies', 'Multi-channel presence', 'Lead generation'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    icon: BarChart,
    glowColor: 'blue' as const,
  },
  {
    title: 'Customer Engagement',
    description:
      'Our experienced sales coaches train and mentor your team, equipping them with the skills, knowledge, and confidence needed to achieve targets and deliver strong results.',
    details: ['Sales coaching', 'Team training', 'Performance achievement'],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    icon: UserCheck,
    glowColor: 'purple' as const,
  },
];

const testimonials = [
  {
    initials: 'AR',
    name: 'Amit R.',
    role: 'Regional Sales Director',
    quote:
      'Shivlink Solutions built a reliable outreach engine for us and improved campaign consistency month after month.',
  },
  {
    initials: 'NS',
    name: 'Nina S.',
    role: 'Partnership Manager',
    quote:
      'Their team is strategic, transparent, and execution-focused. We saw a clear uplift in qualified lead flow.',
  },
  {
    initials: 'DK',
    name: 'Daniel K.',
    role: 'Business Owner',
    quote:
      'Strong communication, fast optimization, and excellent delivery. They made growth feel much more predictable.',
  },
];

const ShivlinkSolutions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [stats, setStats] = useState({
    clients: 0,
    years: 0,
    rating: 0,
    satisfaction: 0,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'telecom',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const duration = 1300;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setStats({
        clients: Math.floor(300 * p),
        years: Math.floor(5 * p),
        rating: Number((4.9 * p).toFixed(1)),
        satisfaction: Math.floor(98 * p),
      });
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...formData, submittedAt: new Date().toISOString() };
    try {
      const response = await fetch('https://n8n.srv1133458.hstgr.cloud/webhook/lead-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'telecom',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="text-slate-100">
      <SmokeBackground smokeColor="#f63b3b" />
      <div className="relative z-10">
        <header
          className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            scrolled ? 'border-b border-white/10 bg-slate-950/70 backdrop-blur-xl' : 'bg-transparent'
          }`}
        >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/shivlink-logo.png"
              alt="Shivlink Solutions logo"
              className="h-10 w-10 rounded-full ring-2 ring-blue-400/30"
            />
            <span className="text-base font-semibold tracking-wide text-white sm:text-lg">
              Shivlink Solutions
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-slate-200 hover:text-white">
              Services
            </a>
            <a href="#why-us" className="text-sm text-slate-200 hover:text-white">
              Why Us
            </a>
            <a href="#how-it-works" className="text-sm text-slate-200 hover:text-white">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm text-slate-200 hover:text-white">
              Testimonials
            </a>
            <a href="#contact" className="text-sm text-slate-200 hover:text-white">
              Contact Us
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg border border-white/15 p-2 text-white md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-white/10 bg-slate-900/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-200">
                Services
              </a>
              <a href="#why-us" onClick={() => setIsOpen(false)} className="text-slate-200">
                Why Us
              </a>
              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-slate-200">
                How It Works
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="text-slate-200"
              >
                Testimonials
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-slate-200">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden px-4 flex items-center justify-center min-h-[80vh] sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_48%)]" />
          <div className="relative mx-auto max-w-7xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center mt-32"
            >
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Canada's Trusted{" "}

                <h1 className="inline-flex text-blue-400">
                  <Typewriter 
                    text="Telecom & Home Security"
                    speed={100}
                    delay={300}
                    cursor={true}
                  />{" "}
                </h1>
                
              </h1>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"> Sales Experts      </h1>
                     <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
                From telecom sales to home security growth campaigns, we help businesses scale
                outreach, conversions, and long-term customer value.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <RainbowBorderButton
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className="h-10 rounded-xl px-7"
                >
                  Explore Services
                </RainbowBorderButton>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="trusted-clients" className="pt-32 pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Our Trusted <span className="text-blue-400">+200 Clients</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
                Trusted by leading brands across Canada for telecom and home security solutions
              </p>
            </div>
            
            <div className="mt-12">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                {/* Client Logo 1 */}
                <div className="flex items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
                  <img
                    src="/Client-Logo-09-1.png"
                    alt="Client Logo 1"
                    className="h-12 w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Client Logo 2 */}
                <div className="flex items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
                  <img
                    src="/Client-Logo-10.png"
                    alt="Client Logo 2"
                    className="h-12 w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Client Logo 3 */}
                <div className="flex items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
                  <img
                    src="/Client-Logo-12.png"
                    alt="Client Logo 3"
                    className="h-12 w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Client Logo 4 */}
                <div className="flex items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
                  <img
                    src="/Client-Logo-13.png"
                    alt="Client Logo 4"
                    className="h-12 w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Client Logo 5 */}
                <div className="flex items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
                  <img
                    src="/Client-Logo-14.png"
                    alt="Client Logo 5"
                    className="h-12 w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Client Logo 6 */}
                <div className="flex items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
                  <img
                    src="/Client-Logo-15.png"
                    alt="Client Logo 6"
                    className="h-12 w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                
                {/* Client Logo 7 */}
                <div className="flex items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
                  <img
                    src="/Client-Logo-16.png"
                    alt="Client Logo 7"
                    className="h-12 w-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-sm text-slate-400">
                  Trusted by 200+ leading brands across Canada
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-300">
              Performance-focused services designed to create predictable acquisition and revenue
              growth.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {serviceCards.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <GlowCard customSize glowColor={service.glowColor} className="h-full w-full !p-0">
                      <div className="h-full rounded-xl bg-slate-900/80">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-40 w-full rounded-t-xl object-cover"
                          loading="lazy"
                        />
                        <div className="p-5">
                          <div className="mb-4 inline-flex rounded-lg bg-white/10 p-2">
                            <Icon className="h-5 w-5 text-blue-200" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                          <p className="mt-3 text-sm leading-relaxed text-slate-300">
                            {service.description}
                          </p>
                          <ul className="mt-4 space-y-1 text-sm text-slate-300">
                            {service.details.map((item) => (
                              <li key={item}>- {item}</li>
                            ))}
                          </ul>
                          <Link
                            to="/legacy-home"
                            className="mt-5 inline-flex items-center text-sm font-semibold text-blue-300"
                          >
                            Learn more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why-us" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
              Why Shivlink Solutions
            </h2>
            
            <div className="mt-10">
              <h3 className="text-center text-xl font-bold text-white sm:text-2xl mb-6">
                Who we are
              </h3>
              <p className="text-center text-lg text-slate-300 max-w-4xl mx-auto mb-10">
                We are more than just a marketing company! With over a decade of experience, the team of experts at Shivlink solutions aims to combine creativity, technology, and integrated marketing solutions to provide businesses with a competitive edge.
              </p>
              
              <div className="grid grid-cols-1 gap-8 mb-10">
                <div className="flex flex-col items-center">
                  {/* <img
                    src="/IC.png"
                    alt="Shivlink Solutions Integrated Creativity"
                    className="w-full max-w-md rounded-2xl shadow-lg"
                  /> */}
                  {/* <p className="mt-4 text-sm text-slate-400 text-center">
                    Integrated Creativity & Technology
                  </p> */}
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/who-shivlink.png"
                    alt="Who is Shivlink Solutions"
                    className="w-full max-w-md rounded-2xl shadow-lg"
                  />
                  <p className="mt-4 text-sm text-slate-400 text-center">
                    Our Expert Team in Action
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-white/[0.03] p-4 sm:grid-cols-4 sm:gap-6 sm:p-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{stats.clients}+</p>
                <p className="text-sm text-slate-300">Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{stats.years}+</p>
                <p className="text-sm text-slate-300">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{stats.rating.toFixed(1)}★</p>
                <p className="text-sm text-slate-300">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white">{stats.satisfaction}%</p>
                <p className="text-sm text-slate-300">Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">How It Works</h2>
            <div className="relative mt-12 grid gap-8 md:grid-cols-4">
              <div className="how-line pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-blue-300/40 md:block" />
              {[
                'Free Consultation',
                'Custom Strategy',
                'Execution & Outreach',
                'Results & Growth',
              ].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 font-bold text-white ring-8 ring-blue-500/20">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-base font-semibold text-white">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">Testimonials</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.09 }}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
                >
                  <Quote className="h-6 w-6 text-blue-300" />
                  <p className="mt-4 text-slate-200">&quot;{item.quote}&quot;</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/30 font-semibold text-blue-100">
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="text-sm text-slate-400">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex text-amber-400" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Grab best offers for mobile devices.</h2>
            <Link
              to="/legacy-home"
              className="mt-6 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section id="contact" className="pb-16 pt-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
              Contact Us
            </h2>
            {successMessage && <div className="mb-6 text-center text-emerald-400">{successMessage}</div>}
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-xl border border-white/10 bg-slate-900/70 p-6"
              >
                <h3 className="mb-5 text-xl font-semibold text-white">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-2 text-white"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-2 text-white"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-2 text-white"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-2 text-white"
                  >
                    <option value="telecom">Telecom Sales & Marketing</option>
                    <option value="security">Home Security Systems</option>
                    <option value="lead-generation">Cold Calling & Lead Generation</option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    placeholder="Message"
                    className="w-full rounded-lg border border-white/15 bg-slate-950 px-4 py-2 text-white"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="mb-4 text-lg font-semibold text-white">Contact Information</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-300">Phone</p>
                      <div className="space-y-1 text-sm">
                        <a href="tel:+17784444411" className="block text-slate-300 hover:text-white">
                          +1 778 444 4411
                        </a>
                        <a href="tel:+18449007448" className="block text-slate-300 hover:text-white">
                          +1 844-900-SHIV
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-blue-300">Email</p>
                      <div className="space-y-1 text-sm">
                        <a href="mailto:info@shivlinks.com" className="block text-slate-300 hover:text-white">
                          info@shivlinks.com
                        </a>
                        <a href="mailto:hr@shivlinks.com" className="block text-slate-300 hover:text-white">
                          hr@shivlinks.com
                        </a>
                        <a href="mailto:sales@shivlinks.com" className="block text-slate-300 hover:text-white">
                          sales@shivlinks.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-5 text-slate-300">
                    <a href="https://wa.me/17784444411" target="_blank" rel="noreferrer">
                      <MessageCircle className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/shivlink_solutions/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.facebook.com/p/ShivLink-Solutions-61573008633113/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <img
                      src="/shivlink-logo.png"
                      alt="Shivlink Solutions"
                      className="h-48 w-48 rounded-full opacity-80"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="rounded-xl border border-white/10 bg-slate-900/70 p-6">
                  <img
                    src="/contact-card.jpg"
                    alt="Contact Information"
                    className="w-full rounded-lg object-contain shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/shivlink-logo.png" alt="Shivlink Solutions logo" className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-semibold text-white">Shivlink Solutions</p>
              <p className="text-sm text-slate-400">
                Connecting Canadians. Securing Homes. Driving Growth.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact Us</a>
            <Link to="/legacy-home">Old Page</Link>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">© 2025 Shivlink Solutions</p>
      </footer>
      </div>
    </div>
  );
};

export default ShivlinkSolutions;
