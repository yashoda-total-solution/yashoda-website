import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Phone, Navigation } from 'lucide-react';

const InteractiveIndiaMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);

  // Branch data structure
  const branches = {
    Maharashtra: {
      color: '#0F7A4A',
      offices: [
        {
          city: 'Nashik',
          name: 'Nashik Head Office',
          address: 'College Road, Nashik, Maharashtra',
          phone: '+91 9876543210'
        },
        {
          city: 'Mumbai',
          name: 'Mumbai Branch Office',
          address: 'Andheri East, Mumbai, Maharashtra',
          phone: '+91 9876543211'
        }
      ]
    },
    Gujarat: {
      color: '#F39C12',
      offices: [
        {
          city: 'Ahmedabad',
          name: 'Ahmedabad Office',
          address: 'SG Highway, Ahmedabad, Gujarat',
          phone: '+91 9876543212'
        }
      ]
    },
    'Madhya Pradesh': {
      color: '#2563EB',
      offices: [
        {
          city: 'Bhopal',
          name: 'Bhopal Office',
          address: 'New Market Area, Bhopal, Madhya Pradesh',
          phone: '+91 9876543213'
        }
      ]
    }
  };

  const stateNames = Object.keys(branches);

  // Simple India map SVG with major states
  const indiaMapPaths = {
    'Jammu and Kashmir': 'M200,20 L220,25 L230,40 L225,55 L210,60 L195,50 Z',
    'Himachal Pradesh': 'M220,55 L240,60 L245,70 L235,75 L225,70 Z',
    'Punjab': 'M210,60 L225,70 L230,80 L215,85 L205,75 Z',
    'Uttarakhand': 'M245,70 L260,72 L265,82 L255,87 L245,80 Z',
    'Haryana': 'M215,85 L230,90 L235,100 L220,105 L210,95 Z',
    'Delhi': 'M225,92 L230,95 L228,100 L223,98 Z',
    'Rajasthan': 'M170,95 L210,95 L220,105 L225,130 L210,150 L180,155 L165,135 L160,110 Z',
    'Uttar Pradesh': 'M235,100 L285,105 L295,120 L290,145 L270,155 L250,150 L235,135 L230,115 Z',
    'Bihar': 'M290,145 L320,148 L325,160 L315,168 L295,165 L285,155 Z',
    'Sikkim': 'M330,110 L338,112 L340,120 L335,125 L328,120 Z',
    'Arunachal Pradesh': 'M360,95 L395,100 L405,115 L400,130 L380,135 L365,125 L355,110 Z',
    'Nagaland': 'M380,135 L395,138 L398,148 L390,155 L378,150 Z',
    'Manipur': 'M390,155 L398,158 L400,168 L393,173 L385,168 Z',
    'Mizoram': 'M385,168 L393,173 L395,183 L388,188 L380,183 Z',
    'Tripura': 'M365,165 L375,168 L378,178 L370,183 L362,178 Z',
    'Meghalaya': 'M350,150 L365,153 L368,163 L358,168 L348,163 Z',
    'Assam': 'M325,130 L365,135 L375,145 L368,163 L350,165 L330,158 L320,145 Z',
    'West Bengal': 'M315,168 L340,172 L345,190 L340,210 L325,215 L310,205 L305,185 Z',
    'Jharkhand': 'M285,165 L310,170 L315,185 L305,198 L285,195 L275,180 Z',
    'Odisha': 'M285,195 L310,205 L320,225 L315,245 L295,250 L275,240 L270,220 Z',
    'Chhattisgarh': 'M250,180 L285,185 L290,210 L280,235 L260,240 L245,225 L240,200 Z',
    'Madhya Pradesh': 'M180,155 L250,150 L260,170 L265,195 L255,220 L230,230 L195,225 L175,205 L170,180 Z',
    'Gujarat': 'M115,165 L165,160 L175,185 L180,210 L170,235 L150,250 L125,245 L105,225 L95,195 L100,175 Z',
    'Maharashtra': 'M150,250 L210,245 L230,260 L235,285 L225,310 L200,325 L170,320 L145,300 L135,275 Z',
    'Goa': 'M135,310 L148,315 L150,328 L142,333 L133,328 Z',
    'Karnataka': 'M145,330 L200,335 L210,360 L205,390 L185,405 L160,400 L140,380 L135,355 Z',
    'Andhra Pradesh': 'M225,310 L265,315 L275,340 L270,370 L250,385 L225,380 L210,355 Z',
    'Telangana': 'M225,285 L255,288 L265,305 L258,325 L240,330 L225,315 Z',
    'Tamil Nadu': 'M185,405 L225,400 L235,420 L235,450 L220,470 L195,475 L170,465 L160,440 L165,420 Z',
    'Kerala': 'M160,400 L175,410 L180,435 L178,465 L168,475 L155,470 L148,445 L150,420 Z',
    'Andaman and Nicobar': 'M380,380 L388,385 L390,410 L385,425 L377,420 L375,395 Z'
  };

  const handleStateClick = (stateName) => {
    if (stateNames.includes(stateName)) {
      setSelectedState(stateName);
    }
  };

  const handleClosePopup = () => {
    setSelectedState(null);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Map Container with Glass Effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-12 shadow-2xl"
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-auto"
          style={{ maxHeight: '600px' }}
        >
          {/* Render all states */}
          {Object.entries(indiaMapPaths).map(([stateName, pathData]) => {
            const isHighlighted = stateNames.includes(stateName);
            const isHovered = hoveredState === stateName;
            const stateColor = isHighlighted
              ? branches[stateName].color
              : '#D1D5DB';
            
            return (
              <motion.path
                key={stateName}
                d={pathData}
                fill={stateColor}
                stroke="#ffffff"
                strokeWidth="1.5"
                initial={{ opacity: 0.7 }}
                whileHover={{
                  opacity: 1,
                  scale: isHighlighted ? 1.03 : 1,
                  filter: 'brightness(1.1)'
                }}
                transition={{ duration: 0.2 }}
                style={{
                  cursor: isHighlighted ? 'pointer' : 'default',
                  filter: isHovered ? 'brightness(1.2)' : 'brightness(1)'
                }}
                onMouseEnter={() => setHoveredState(stateName)}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick(stateName)}
              />
            );
          })}

          {/* Location Pins for Highlighted States */}
          {stateNames.map((stateName) => {
            // Approximate center coordinates for highlighted states
            const pinPositions = {
              'Maharashtra': { x: 185, y: 290 },
              'Gujarat': { x: 140, y: 210 },
              'Madhya Pradesh': { x: 220, y: 200 }
            };

            const position = pinPositions[stateName];
            if (!position) return null;

            return (
              <motion.g
                key={`pin-${stateName}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  type: 'spring',
                  stiffness: 200,
                  damping: 10
                }}
                onClick={() => handleStateClick(stateName)}
                style={{ cursor: 'pointer' }}
              >
                {/* Pulsing Circle Animation */}
                <motion.circle
                  cx={position.x}
                  cy={position.y}
                  r="8"
                  fill={branches[stateName].color}
                  opacity="0.3"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                
                {/* Pin Icon */}
                <motion.g
                  whileHover={{ scale: 1.2, y: -2 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="6"
                    fill="#ffffff"
                    stroke={branches[stateName].color}
                    strokeWidth="2"
                  />
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="3"
                    fill={branches[stateName].color}
                  />
                </motion.g>
              </motion.g>
            );
          })}
        </svg>

        {/* Map Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {stateNames.map((stateName) => (
            <div
              key={stateName}
              className="flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full cursor-pointer hover:bg-white/30 transition-all"
              onClick={() => handleStateClick(stateName)}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: branches[stateName].color }}
              />
              <span className="text-white text-sm font-medium">
                {stateName}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedState && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={handleClosePopup}
            />

            {/* Popup Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div
                  className="px-6 py-5 text-white relative overflow-hidden"
                  style={{ backgroundColor: branches[selectedState].color }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                  </div>
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Navigation className="h-6 w-6" />
                      <h3 className="text-2xl font-bold">{selectedState}</h3>
                    </div>
                    <button
                      onClick={handleClosePopup}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Office List */}
                <div className="p-6 max-h-96 overflow-y-auto">
                  {branches[selectedState].offices.map((office, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-6 last:mb-0 pb-6 last:pb-0 border-b last:border-b-0 border-gray-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${branches[selectedState].color}15` }}
                        >
                          <MapPin
                            className="h-6 w-6"
                            style={{ color: branches[selectedState].color }}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">
                            {office.name}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2 flex items-start">
                            <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0 text-gray-400" />
                            {office.address}
                          </p>
                          <a
                            href={`tel:${office.phone}`}
                            className="text-sm font-semibold flex items-center hover:underline"
                            style={{ color: branches[selectedState].color }}
                          >
                            <Phone className="h-4 w-4 mr-1" />
                            {office.phone}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveIndiaMap;
