import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle, User, MessageSquare, MessageCircle, Globe, Building2, Users, Network } from 'lucide-react';



const ACTIVE_STATES = ['Maharashtra', 'Gujarat', 'Madhya Pradesh', 'Uttar Pradesh'];

const PIN_COORDS = {
  Maharashtra: [75.7139, 19.7515],
  Gujarat: [71.1924, 22.2587],
  'Madhya Pradesh': [77.4126, 22.9734],
  'Uttar Pradesh': [80.9462, 26.8467],
};

const STATE_KEYS = {
  Maharashtra: 'map_state_maharashtra',
  Gujarat: 'map_state_gujarat',
  'Madhya Pradesh': 'map_state_madhya_pradesh',
  'Uttar Pradesh': 'map_state_uttar_pradesh',
};

/* ─── India Map Component ─── */
const IndiaMap = ({ branches, t }) => {
  const svgRef = useRef(null);
  const [popup, setPopup] = useState(null); // { stateName }
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadScripts = async () => {
      // Load D3 if not already loaded
      if (!window.d3) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js';
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }
      // Load topojson if not already loaded
      if (!window.topojson) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/topojson@3/dist/topojson.min.js';
          s.onload = resolve;
          s.onerror = reject;
          document.head.appendChild(s);
        });
      }
    };

    const renderMap = (geoData) => {
      if (cancelled || !svgRef.current) return;

      const d3 = window.d3;
      const WIDTH = 540;
      const HEIGHT = 650;

      const svg = d3
        .select(svgRef.current)
        .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

      svg.selectAll('*').remove();

      const projection = d3
        .geoMercator()
        .center([82.5, 22.5])
        .scale(1050)
        .translate([WIDTH / 2, HEIGHT / 2]);

      const pathGen = d3.geoPath().projection(projection);

      /* Draw states */
      svg
        .selectAll('.state-path')
        .data(geoData.features)
        .enter()
        .append('path')
        .attr('class', (d) => {
          const name =
            d.properties.NAME_1 ||
            d.properties.name ||
            d.properties.ST_NM ||
            d.properties.state ||
            '';
          return ACTIVE_STATES.includes(name) ? 'state-path active' : 'state-path';
        })
        .attr('d', pathGen)
        .style('fill', (d) => {
          const name =
            d.properties.NAME_1 ||
            d.properties.name ||
            d.properties.ST_NM ||
            d.properties.state ||
            '';
          return ACTIVE_STATES.includes(name) ? '#e8891a' : '#8fa8c8';
        })
        .style('stroke', '#fff')
        .style('stroke-width', '0.8')
        .style('cursor', (d) => {
          const name =
            d.properties.NAME_1 ||
            d.properties.name ||
            d.properties.ST_NM ||
            d.properties.state ||
            '';
          return ACTIVE_STATES.includes(name) ? 'pointer' : 'default';
        })
        .style('transition', 'fill 0.2s ease')
        .on('mouseover', function (event, d) {
          const name =
            d.properties.NAME_1 ||
            d.properties.name ||
            d.properties.ST_NM ||
            d.properties.state ||
            '';
          if (ACTIVE_STATES.includes(name)) {
            d3.select(this).style('fill', '#f5a030');
          }
        })
        .on('mouseout', function (event, d) {
          const name =
            d.properties.NAME_1 ||
            d.properties.name ||
            d.properties.ST_NM ||
            d.properties.state ||
            '';
          if (ACTIVE_STATES.includes(name)) {
            d3.select(this).style('fill', '#e8891a');
          }
        })
        .on('click', function (event, d) {
          const name =
            d.properties.NAME_1 ||
            d.properties.name ||
            d.properties.ST_NM ||
            d.properties.state ||
            '';
          if (ACTIVE_STATES.includes(name)) setPopup(name);
        });

      /* Draw pins */
      Object.entries(PIN_COORDS).forEach(([stateName, coords], idx) => {
        const [px, py] = projection(coords);
        const delay = idx * 0.8;

        const g = svg
          .append('g')
          .style('cursor', 'pointer')
          .on('click', () => setPopup(stateName));

        /* Image Pin */
        g.append('image')
          .attr('href', '/location.png')
          .attr('width', 40)
          .attr('height', 40)
          .attr('x', px - 20)
          .attr('y', py - 40)
          .style('filter', 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))')
          .on('mouseover', function () {
            d3.select(this).attr('transform', `translate(${px}, ${py}) scale(1.2) translate(${-px}, ${-py})`);
          })
          .on('mouseout', function () {
            d3.select(this).attr('transform', 'scale(1)');
          });

        /* Pin label */
        g.append('text')
          .attr('x', px)
          .attr('y', py)
          .style('fill', '#fff')
          .style('font-size', '9px')
          .style('font-weight', '800')
          .style('text-anchor', 'middle')
          .style('dominant-baseline', 'central')
          .style('pointer-events', 'none')
          .style('letter-spacing', '0.5px')
          .text(t(STATE_KEYS[stateName]));
      });

      setMapLoaded(true);
    };

    const fetchMap = async () => {
      try {
        await loadScripts();
        if (cancelled) return;

        const res = await fetch('/in.json'); // ✅ LOCAL FILE
        if (!res.ok) throw new Error('HTTP ' + res.status);

        const data = await res.json();
        renderMap(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) setMapError(true);
      }
    };

    fetchMap();
    return () => { cancelled = true; };
  }, [t]);

  return (
    <>
      {/* Pulse animation keyframes injected once */}
      <style>{`
        @keyframes mapPulse {
          0%   { r: 14; opacity: 0.9; }
          100% { r: 30; opacity: 0;   }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-2xl mx-auto my-8">
        {!mapLoaded && !mapError && (
          <p className="text-center text-white/60 text-sm py-10">{t('map_load')}</p>
        )}
        {mapError && (
          <p className="text-center text-orange-300 text-sm py-6">
            {t('map_load_error')}
          </p>
        )}
        <p className="text-center text-white/80 font-bold mb-2">
          {t('map_heading')}
        </p>
        <svg ref={svgRef} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>

      {/* Branch Popup */}
      {popup && (
        <div
          className="fixed inset-0 bg-black/55 z-[9999] flex items-center justify-center p-5"
          onClick={() => setPopup(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl"
            style={{ animation: 'popIn 0.2s ease' }}
            onClick={(e) => e.stopPropagation()}
          >
            <style>{`
              @keyframes popIn {
                from { transform: scale(0.88); opacity: 0; }
                to   { transform: scale(1);    opacity: 1; }
              }
            `}</style>
            <div className="bg-[#e8891a] px-5 py-4 flex items-start justify-between">
              <div>
                <div className="text-lg font-extrabold text-white">{t(STATE_KEYS[popup])}</div>
                <div className="text-xs text-white/80 mt-0.5">
                  {branches[popup]?.offices.length}{' '}
                  {branches[popup]?.offices.length === 1 ? t('map_office_single') : t('map_office_multiple')}
                </div>
              </div>
              <button
                onClick={() => setPopup(null)}
                className="bg-white/25 hover:bg-white/40 rounded-full w-7 h-7 flex items-center justify-center text-white text-base transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
              {branches[popup]?.offices.map((o, i) => (
                <div key={i} className="px-5 py-4">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="min-w-6 h-6 rounded-full bg-[#1b5e38] text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm font-bold text-[#1b5e38]">{o.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed pl-8 mb-1">{o.addr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ─── Main Contact Component ─── */
const Contact = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', location: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  };

  /* ─── Branch Data ─── */
  const BRANCHES = {
    Maharashtra: {
      offices: [
        { name: t('map_mumbai_branch'),   addr: t('map_mumbai_branch_addr') },
        { name: t('map_pune_branch'),     addr: t('map_pune_branch_addr') },
        { name: t('map_nagpur_branch'),   addr: t('map_nagpur_branch_addr') },
        { name: t('map_nashik_branch'),   addr: t('map_nashik_branch_addr') },
        { name: t('map_kolhapur_branch'), addr: t('map_kolhapur_branch_addr') },
        { name: t('map_solapur_branch'),  addr: t('map_solapur_branch_addr') },
        { name: t('map_satara_branch'),   addr: t('map_satara_branch_addr') },
      ],
    },
    Gujarat: {
      offices: [
        { name: t('map_ahmedabad_branch'), addr: t('map_ahmedabad_branch_addr') },
        { name: t('map_surat_branch'),     addr: t('map_surat_branch_addr') },
        { name: t('map_rajkot_branch'),    addr: t('map_rajkot_branch_addr') },
      ],
    },
    'Madhya Pradesh': {
      offices: [
        { name: t('map_indore_branch'), addr: t('map_indore_branch_addr') },
      ],
    },
    'Uttar Pradesh': {
      offices: [
        { name: t('map_lucknow_branch'),   addr: t('map_lucknow_branch_addr') },
        { name: t('map_varanasi_branch'),  addr: t('map_varanasi_branch_addr') },
        { name: t('map_gorakhpur_branch'), addr: t('map_gorakhpur_branch_addr') },
        { name: t('map_basti_branch'),     addr: t('map_basti_branch_addr') },
      ],
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || '';
      const response = await fetch(`${backendUrl}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', location: '', service: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppClick = () => {
    const phone = '919649647790';
    const message = 'Hello, I need help with insurance claim assistance.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="contact-hero-title">
              {t('contact_page_title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('contact_page_subtitle')}
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-[#F5F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Left Column - Office Details */}
            <motion.div {...fadeUp} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start space-x-4 mb-4 pb-4 border-b border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1F2933] mb-2">{t('contact_address_title')}</h3>
                  <p className="text-sm text-[#0F7A4A] font-semibold leading-relaxed">
                    {t('contact_address_text')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4 pb-4 border-b border-gray-100">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1F2933] mb-1">{t('contact_phone_title')}</h3>
                  <a href="tel:+919649647790" className="text-base text-[#0F7A4A] font-semibold hover:underline">
                    {t('contact_phone_number')}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F39C12] to-[#f7b547] rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1F2933] mb-1">{t('contact_email_title')}</h3>
                  <a href="mailto:info@yashodatotalsolution.com" className="text-sm text-[#0F7A4A] font-semibold hover:underline break-all">
                    {t('contact_email_address')}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Google Map */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2933]">{t('contact_map_title')}</h3>
              </div>
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.2259879430785!2d72.8879158!3d19.0851996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c78cf532c1ad%3A0x7f3adcca8ee3e06f!2sPhoenix%20Paragon%20Plaza!5e1!3m2!1sen!2sin!4v1774610376877!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR NETWORK Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div {...fadeUp} className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-[#F39C12] rounded-full mb-6"
            >
              <Globe className="h-10 w-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('our_network_title')}</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-4">
                {t('our_network_desc1')}
                <span className="font-bold text-[#F39C12]">{t('our_network_desc2')}</span> {t('our_network_desc3')}
              </p>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                {t('our_network_desc4')}
              </p>
            </div>
          </motion.div>

          {/* ── India Map ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <IndiaMap branches={BRANCHES} t={t} />
          </motion.div>

          {/* Network Stats */}
          <motion.div
            {...fadeUp}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: Globe, number: t('network_stat1_number'), label: t('network_stat1_desc') },
                { icon: Users, number: t('network_stat2_number'), label: t('network_stat2_desc') },
                { icon: Building2, number: t('network_stat3_number'), label: t('network_stat3_desc') },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-base md:text-lg text-white/90 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div {...fadeUp} className="mt-12 text-center">
            <button
              onClick={() => navigate('/partner')}
              className="inline-flex items-center space-x-3 bg-[#F39C12] px-8 py-4 rounded-full hover:bg-[#e08e0b] transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <Network className="h-6 w-6 text-white" />
              <span className="text-lg font-semibold text-white">
                {t('network_cta_button')}
              </span>
            </button>
          </motion.div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#F39C12] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full opacity-5 blur-3xl"></div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <motion.div
              {...fadeUp}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12 border-2 border-gray-100"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                  {t('contact_form_title')}
                </h2>
                <p className="text-lg text-[#52606D]">{t('contact_form_subtitle')}</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <User className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('contact_name_label')} *
                  </label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    data-testid="contact-name-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base"
                    placeholder={t('contact_name_placeholder')}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <Phone className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('contact_phone_label')} *
                  </label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    data-testid="contact-phone-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base"
                    placeholder={t('contact_phone_placeholder')}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    📍 {t('contact_location_label')} *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base"
                    placeholder={t('contact_location_placeholder')}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    🛠 {t('contact_service_label')} *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base bg-white"
                  >
                    <option value="">{t('contact_service_placeholder')}</option>
                    <option value="Mis-selling of Insurance Policy">{t('service_mis_selling1')}</option>
                    <option value="Insurance Claim Rejection">{t('service_claim_rejection1')}</option>
                    <option value="Delay in Claim Process">{t('service_claim_delay1')}</option>
                    <option value="Partial Claim Settlement">{t('service_claim_short_settled1')}</option>
                    <option value="Health Claim Reimbursement">{t('service_health_reimbursement1')}</option>
                    <option value="Pradhan Mantri Suraksha Bima Yojana (PMSBY)">{t('service_pmsby1')}</option>
                    <option value="Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)">{t('service_pmjjby1')}</option>
                    <option value="State Chief Minister Insurance Scheme">{t('service_state_cm_scheme1')}</option>
                    <option value="Banking & ATM Card Insurance Claim">{t('service_banking_atm1')}</option>
                    <option value="PF Accidental Insurance Claim">{t('service_pf_accidental1')}</option>
                    <option value="Legal Consultation">{t('service_legal_consultation1')}</option>
                    <option value="Legal Drafting & Verification Support">{t('service_legal_drafting1')}</option>
                    <option value="Consumer Protection Support">{t('service_consumer_cases1')}</option>
                    <option value="Civil Dispute Support">{t('service_civil_cases1')}</option>
                    <option value="Cheque Bounce Cases">{t('service_cheque_bounce1')}</option>
                    <option value="Other Services">{t('service_other1')}</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#1F2933] mb-2">
                    <MessageSquare className="inline h-5 w-5 mr-2 text-[#0F7A4A]" />
                    {t('contact_message_label')} *
                  </label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required rows="6"
                    data-testid="contact-message-input"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#0F7A4A] focus:outline-none transition-colors text-base resize-none"
                    placeholder={t('contact_message_placeholder')}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading || !formData.name || !formData.phone || !formData.location || !formData.service || !formData.message}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  data-testid="contact-submit-btn"
                  className="w-full bg-gradient-to-r from-[#0F7A4A] to-[#159F61] hover:from-[#0A5734] hover:to-[#0F7A4A] text-white px-8 py-5 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <span>{t('contact_submitting')}</span>
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-2" />
                      {t('contact_submit_btn')}
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(15,122,74,0.15)] p-8 md:p-12 text-center"
              data-testid="contact-success-message"
            >
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-[#0F7A4A] to-[#159F61] rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="h-12 w-12 text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-4">
                {t('contact_success_title')}
              </h2>
              <p className="text-lg text-[#52606D] mb-8">{t('contact_success_message')}</p>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center bg-[#F39C12] hover:bg-[#d68910] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                {t('contact_another_btn')}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
        data-testid="whatsapp-button"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-colors duration-300"
        initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
      >
        <MessageCircle className="h-8 w-8" />
      </motion.button>

      {/* WhatsApp Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}
        className="fixed bottom-8 right-28 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-[#1F2933] hidden md:block"
      >
        {t('contact_whatsapp_btn')}
      </motion.div>
    </div>
  );
};

export default Contact;