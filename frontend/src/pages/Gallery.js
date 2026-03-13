import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { X, ZoomIn } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    src: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/e5979f4272bf2f229ef6c4109d92b735fd6320a814a55df4e166c6aa8121b0ef.png',
    category: 'office',
    caption: { en: 'Our Modern Office Space', hi: 'हमारा आधुनिक कार्यालय', mr: 'आमचे आधुनिक कार्यालय' },
  },
  {
    src: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/a77e675bc9c889cced8e0dc877a294d8b38c35aa8b3c724861068f18b31c6cb8.png',
    category: 'work',
    caption: { en: 'Client Consultation Session', hi: 'ग्राहक परामर्श सत्र', mr: 'ग्राहक सल्लामसलत सत्र' },
  },
  {
    src: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/054e21245c6ad145bb691d92c7d2c4b3cb0368a62ef6eaabd159bfafd715c95f.png',
    category: 'work',
    caption: { en: 'Document Review Process', hi: 'दस्तावेज़ समीक्षा प्रक्रिया', mr: 'दस्तऐवज पुनरावलोकन प्रक्रिया' },
  },
  {
    src: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/4da14e890f4bf43017dfe4592c31cc1c20ae811199067b7b31d6cdca8ac4f73a.png',
    category: 'success',
    caption: { en: 'Successful Claim Resolution', hi: 'सफल दावा समाधान', mr: 'यशस्वी दावा निराकरण' },
  },
  {
    src: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/ffa1856565e9893af507bedd3a7028f927ba4972b10196390cc2e4a098d78712.png',
    category: 'team',
    caption: { en: 'Our Managing Director', hi: 'हमारे प्रबंध निदेशक', mr: 'आमचे व्यवस्थापकीय संचालक' },
  },
  {
    src: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/87447e00c2f040c5a6f2bfadb1ae27a431d8b28a7e9a40f86d3b3d5a785b21c4.png',
    category: 'team',
    caption: { en: 'Our Dedicated Sales Team', hi: 'हमारी समर्पित बिक्री टीम', mr: 'आमची समर्पित विक्री टीम' },
  },
  {
    src: 'https://static.prod-images.emergentagent.com/jobs/bd5b376d-ca14-453c-bb4f-06833e2e2741/images/a75fe35cf9732eed2e87f9cab7303f4159c6a291444cd1c3688266fe8ac59960.png',
    category: 'team',
    caption: { en: 'Our Expert Legal Team', hi: 'हमारी विशेषज्ञ कानूनी टीम', mr: 'आमची तज्ञ कायदेशीर टीम' },
  },
];

const galleryText = {
  en: {
    title: 'Gallery',
    subtitle: 'A glimpse into our workspace, team, and the work we do for our clients',
    all: 'All',
    team: 'Team',
    office: 'Office',
    work: 'Our Work',
    success: 'Success Stories',
  },
  hi: {
    title: 'गैलरी',
    subtitle: 'हमारे कार्यस्थल, टीम और ग्राहकों के लिए हमारे काम की एक झलक',
    all: 'सभी',
    team: 'टीम',
    office: 'कार्यालय',
    work: 'हमारा काम',
    success: 'सफलता की कहानियां',
  },
  mr: {
    title: 'गॅलरी',
    subtitle: 'आमचे कार्यस्थळ, टीम आणि ग्राहकांसाठी आम्ही करत असलेल्या कामाची एक झलक',
    all: 'सर्व',
    team: 'टीम',
    office: 'कार्यालय',
    work: 'आमचे काम',
    success: 'यशोगाथा',
  },
};

const Gallery = () => {
  const { language } = useLanguage();
  const txt = galleryText[language];
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filters = [
    { key: 'all', label: txt.all },
    { key: 'team', label: txt.team },
    { key: 'office', label: txt.office },
    { key: 'work', label: txt.work },
    { key: 'success', label: txt.success },
  ];

  const filtered = activeFilter === 'all' ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F7A4A] via-[#0A5734] to-[#0F7A4A] text-white py-20 md:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="px-4 py-2 bg-[#F39C12] text-white rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
              {txt.title}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4" data-testid="gallery-hero-title">{txt.title}</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">{txt.subtitle}</p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#F5F7F9]" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }} />
      </section>

      {/* Filters */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3" data-testid="gallery-filters">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                data-testid={`gallery-filter-${f.key}`}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md ${
                  activeFilter === f.key
                    ? 'bg-[#0F7A4A] text-white shadow-lg scale-105'
                    : 'bg-white text-[#52606D] hover:bg-[#0F7A4A] hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
                  onClick={() => setLightboxImage(img)}
                  data-testid={`gallery-image-${index}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption[language]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-5 w-full flex items-center justify-between">
                      <p className="text-white font-medium text-base">{img.caption[language]}</p>
                      <ZoomIn className="h-6 w-6 text-white/80" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
            data-testid="gallery-lightbox"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-50"
              data-testid="gallery-lightbox-close"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption[language]}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-center text-white text-lg mt-4 font-medium">{lightboxImage.caption[language]}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
