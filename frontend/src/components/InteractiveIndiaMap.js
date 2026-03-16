import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';

const InteractiveIndiaMap = () => {
  const [hoveredPin, setHoveredPin] = useState(null);

  // Branch data structure with city coordinates
  const branches = [
    {
      id: 1,
      city: 'Nashik',
      state: 'Maharashtra',
      name: 'Nashik Head Office',
      address: 'College Road, Nashik, Maharashtra',
      phone: '+91 9876543210',
      x: 400,
      y: 540
    },
    {
      id: 2,
      city: 'Mumbai',
      state: 'Maharashtra',
      name: 'Mumbai Branch Office',
      address: 'Andheri East, Mumbai, Maharashtra',
      phone: '+91 9876543211',
      x: 360,
      y: 570
    },
    {
      id: 3,
      city: 'Ahmedabad',
      state: 'Gujarat',
      name: 'Ahmedabad Office',
      address: 'SG Highway, Ahmedabad, Gujarat',
      phone: '+91 9876543212',
      x: 315,
      y: 490
    },
    {
      id: 4,
      city: 'Bhopal',
      state: 'Madhya Pradesh',
      name: 'Bhopal Office',
      address: 'New Market Area, Bhopal, Madhya Pradesh',
      phone: '+91 9876543213',
      x: 425,
      y: 485
    }
  ];

  // State fill colors based on branch presence
  const stateColors = {
    'Maharashtra': '#0F7A4A',
    'Gujarat': '#F39C12',
    'Madhya Pradesh': '#2563EB'
  };

  const handlePinClick = (branchId) => {
    setHoveredPin(hoveredPin === branchId ? null : branchId);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Map Container with Glass Effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-12 shadow-2xl relative"
      >
        <svg
          viewBox="0 0 800 900"
          className="w-full h-auto mx-auto"
          style={{ maxHeight: '750px' }}
        >
          {/* India Map - Proper Outline Style with Continuous Boundaries */}
          <g id="india-map-outline">
            
            {/* Jammu & Kashmir + Ladakh (North) */}
            <path
              d="M 340,50 L 380,45 L 420,55 L 450,75 L 465,100 L 470,125 L 465,145 L 450,160 L 420,170 L 395,175 L 370,170 L 350,155 L 335,135 L 328,110 L 330,80 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Punjab + Haryana + Delhi (Northwest) */}
            <path
              d="M 350,155 L 370,170 L 395,175 L 410,185 L 420,200 L 425,220 L 420,235 L 405,245 L 385,250 L 365,248 L 350,240 L 340,225 L 338,205 L 342,185 L 345,170 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Himachal Pradesh + Uttarakhand (North Central) */}
            <path
              d="M 395,175 L 420,170 L 445,180 L 465,195 L 475,215 L 475,235 L 465,250 L 445,260 L 425,265 L 405,260 L 390,250 L 385,235 L 390,215 L 395,195 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Uttar Pradesh (North Central) */}
            <path
              d="M 385,250 L 425,265 L 465,270 L 505,275 L 540,285 L 560,300 L 565,320 L 560,345 L 545,365 L 520,375 L 485,380 L 450,375 L 425,365 L 405,350 L 395,330 L 390,305 L 390,280 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Rajasthan (West) */}
            <path
              d="M 250,220 L 295,210 L 340,225 L 365,248 L 375,275 L 380,305 L 375,335 L 360,365 L 335,385 L 305,395 L 270,395 L 240,385 L 220,365 L 210,340 L 208,310 L 215,280 L 230,250 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Gujarat (West Coast) */}
            <path
              d="M 210,340 L 240,385 L 260,425 L 275,465 L 280,500 L 275,530 L 260,555 L 235,565 L 205,560 L 180,540 L 165,515 L 155,485 L 155,455 L 165,425 L 185,395 L 200,370 Z"
              fill={stateColors['Gujarat'] || '#E5E7EB'}
              stroke="#9CA3AF"
              strokeWidth="2"
              opacity="0.9"
            />
            
            {/* Madhya Pradesh (Central) */}
            <path
              d="M 335,385 L 380,375 L 425,380 L 470,390 L 505,405 L 530,425 L 540,450 L 535,480 L 520,510 L 490,530 L 455,540 L 420,540 L 385,530 L 355,515 L 335,495 L 325,470 L 325,440 L 328,410 Z"
              fill={stateColors['Madhya Pradesh'] || '#E5E7EB'}
              stroke="#9CA3AF"
              strokeWidth="2"
              opacity="0.9"
            />
            
            {/* Bihar (Northeast) */}
            <path
              d="M 545,365 L 580,370 L 615,380 L 640,395 L 655,415 L 658,440 L 650,465 L 630,480 L 605,490 L 575,492 L 550,485 L 530,470 L 525,450 L 530,425 L 540,400 L 545,380 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* West Bengal (East) */}
            <path
              d="M 605,490 L 630,485 L 650,495 L 665,515 L 670,540 L 665,565 L 650,585 L 625,595 L 600,600 L 575,595 L 560,580 L 555,560 L 560,535 L 575,515 L 590,500 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Assam + Northeast States (Far East) */}
            <path
              d="M 650,465 L 680,470 L 715,480 L 740,495 L 755,515 L 760,540 L 755,565 L 740,585 L 715,595 L 685,598 L 660,590 L 650,570 L 648,545 L 650,515 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Chhattisgarh (Central East) */}
            <path
              d="M 490,530 L 520,540 L 545,555 L 560,575 L 565,600 L 560,625 L 545,645 L 520,655 L 490,660 L 465,655 L 450,640 L 445,620 L 448,595 L 460,570 L 475,550 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Jharkhand (East Central) */}
            <path
              d="M 550,485 L 575,492 L 600,505 L 615,525 L 620,550 L 615,575 L 600,590 L 575,595 L 555,590 L 540,575 L 535,555 L 538,530 L 545,510 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Odisha (East Coast) */}
            <path
              d="M 560,625 L 580,635 L 600,650 L 610,675 L 612,705 L 605,730 L 585,750 L 560,760 L 535,758 L 515,745 L 505,720 L 505,690 L 515,665 L 535,645 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Maharashtra (West Central) */}
            <path
              d="M 260,555 L 305,565 L 355,580 L 395,600 L 425,625 L 445,655 L 455,690 L 450,720 L 435,745 L 410,760 L 375,768 L 340,765 L 305,750 L 275,725 L 255,695 L 245,665 L 245,630 L 250,595 Z"
              fill={stateColors['Maharashtra'] || '#E5E7EB'}
              stroke="#9CA3AF"
              strokeWidth="2"
              opacity="0.9"
            />
            
            {/* Telangana (South Central) */}
            <path
              d="M 445,655 L 470,665 L 490,680 L 500,705 L 500,730 L 490,750 L 470,760 L 450,762 L 430,755 L 420,735 L 420,710 L 428,685 L 438,670 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Andhra Pradesh (Southeast) */}
            <path
              d="M 450,720 L 470,760 L 490,790 L 500,820 L 495,850 L 480,875 L 455,890 L 425,895 L 400,888 L 385,870 L 380,845 L 385,815 L 400,785 L 420,760 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Karnataka (Southwest) */}
            <path
              d="M 305,750 L 340,765 L 375,780 L 400,805 L 410,835 L 408,870 L 395,905 L 370,930 L 335,945 L 300,948 L 270,935 L 250,910 L 240,880 L 240,845 L 250,815 L 270,785 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Goa (West Coast) */}
            <path
              d="M 245,695 L 260,705 L 270,720 L 272,738 L 265,752 L 252,758 L 240,752 L 235,738 L 237,720 L 242,708 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Kerala (Southwest Coast) */}
            <path
              d="M 240,880 L 255,895 L 268,920 L 275,950 L 275,980 L 268,1010 L 252,1030 L 230,1040 L 210,1038 L 195,1020 L 188,995 L 188,965 L 195,935 L 210,910 L 225,890 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
            
            {/* Tamil Nadu (Southeast) */}
            <path
              d="M 300,948 L 335,955 L 370,968 L 395,990 L 408,1020 L 410,1050 L 400,1080 L 380,1105 L 350,1120 L 315,1125 L 280,1115 L 255,1095 L 240,1065 L 240,1030 L 250,1000 L 270,970 Z"
              fill="#E5E7EB"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              opacity="0.9"
            />
          </g>

          {/* Location Pins - Red Google Maps Style */}
          {branches.map((branch) => (
            <motion.g
              key={branch.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.5 + branch.id * 0.15,
                type: 'spring',
                stiffness: 260,
                damping: 12
              }}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredPin(branch.id)}
              onMouseLeave={() => setHoveredPin(null)}
              onClick={() => handlePinClick(branch.id)}
            >
              {/* Pulsing Circle Background */}
              <motion.circle
                cx={branch.x}
                cy={branch.y}
                r="16"
                fill="#EF4444"
                opacity="0.15"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.15, 0, 0.15]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              
              {/* Red Location Pin - Google Maps Style */}
              <motion.g
                whileHover={{ scale: 1.2, y: -4 }}
                animate={hoveredPin === branch.id ? { y: [0, -6, 0] } : { y: [0, -3, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {/* Pin Shadow */}
                <ellipse
                  cx={branch.x}
                  cy={branch.y + 26}
                  rx="10"
                  ry="3.5"
                  fill="#000000"
                  opacity="0.25"
                />
                
                {/* Pin Body - Red Teardrop Shape */}
                <path
                  d={`M ${branch.x},${branch.y} 
                      C ${branch.x - 13},${branch.y - 6} ${branch.x - 15},${branch.y - 18} ${branch.x},${branch.y - 24}
                      C ${branch.x + 15},${branch.y - 18} ${branch.x + 13},${branch.y - 6} ${branch.x},${branch.y}
                      Z`}
                  fill="#EF4444"
                  stroke="#DC2626"
                  strokeWidth="2"
                  filter="drop-shadow(0 3px 6px rgba(0,0,0,0.35))"
                />
                
                {/* Pin Highlight Shine */}
                <ellipse
                  cx={branch.x - 4}
                  cy={branch.y - 18}
                  rx="4"
                  ry="5"
                  fill="#FCA5A5"
                  opacity="0.7"
                />
                
                {/* Inner White Circle */}
                <circle
                  cx={branch.x}
                  cy={branch.y - 12}
                  r="5"
                  fill="white"
                />
              </motion.g>

              {/* Tooltip on Hover/Click */}
              <AnimatePresence>
                {hoveredPin === branch.id && (
                  <motion.g
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Tooltip Background */}
                    <rect
                      x={branch.x - 120}
                      y={branch.y - 120}
                      width="240"
                      height="95"
                      rx="12"
                      fill="white"
                      stroke="#D1D5DB"
                      strokeWidth="2.5"
                      filter="drop-shadow(0 6px 16px rgba(0,0,0,0.2))"
                    />
                    
                    {/* Tooltip Arrow */}
                    <path
                      d={`M ${branch.x - 10},${branch.y - 25} L ${branch.x},${branch.y - 12} L ${branch.x + 10},${branch.y - 25} Z`}
                      fill="white"
                      stroke="#D1D5DB"
                      strokeWidth="2.5"
                    />
                    
                    {/* Branch Name */}
                    <text
                      x={branch.x}
                      y={branch.y - 88}
                      textAnchor="middle"
                      className="text-base font-bold"
                      fill="#111827"
                      style={{ fontSize: '15px', fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {branch.name}
                    </text>
                    
                    {/* Address Line 1 */}
                    <text
                      x={branch.x}
                      y={branch.y - 68}
                      textAnchor="middle"
                      className="text-sm"
                      fill="#6B7280"
                      style={{ fontSize: '11px', fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {branch.address.length > 50 
                        ? branch.address.substring(0, 47) + '...' 
                        : branch.address}
                    </text>
                    
                    {/* City */}
                    <text
                      x={branch.x}
                      y={branch.y - 52}
                      textAnchor="middle"
                      className="text-sm"
                      fill="#6B7280"
                      style={{ fontSize: '11px', fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      {branch.city}, {branch.state}
                    </text>
                    
                    {/* Phone */}
                    <text
                      x={branch.x}
                      y={branch.y - 32}
                      textAnchor="middle"
                      className="text-sm font-semibold"
                      fill="#EF4444"
                      style={{ fontSize: '13px', fontFamily: 'system-ui, -apple-system, sans-serif' }}
                    >
                      📞 {branch.phone}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.g>
          ))}
        </svg>

        {/* Map Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          {['Maharashtra', 'Gujarat', 'Madhya Pradesh'].map((stateName) => (
            <div
              key={stateName}
              className="flex items-center space-x-3 bg-white/20 px-5 py-3 rounded-full backdrop-blur-sm"
            >
              <div
                className="w-5 h-5 rounded-full shadow-md"
                style={{ backgroundColor: stateColors[stateName] }}
              />
              <span className="text-white text-base font-semibold">
                {stateName}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InteractiveIndiaMap;
