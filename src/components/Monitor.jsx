import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import 'swiper/css';
import 'swiper/css/navigation';
import monitorCardBg from '../../assets/monitor-card.webp';

const Monitor = () => {
  return (
    <motion.section 
    variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-12 md:py-16"
      id="product"
    > 
      <motion.h2 
           variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
          Best Selling Product
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Content */}
        <motion.div 
           variants={fadeIn('right', 0.3)}
          className="w-full md:w-1/2"
        >
          <motion.span 
             variants={fadeIn('up', 0.4)}
            className="text-purple-500 font-semibold"
          >
            MONITOR
          </motion.span>
          <motion.h2 
             variants={textVariant(0.5)}
            className="text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5"
          >
            Introducing best mobile carousels
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-gray-600 mb-8 md:w-4/5"
          >
            Say goodbye to clunky sliders and hello to smooth, responsive, and touch-friendly carousels designed for today’s mobile users.
          </motion.p>
          <motion.a 
            variants={fadeIn('up', 0.7)}
            href="#" 
            className="text-lime-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            Learn more about monitoring
            <motion.svg 
              variants={fadeIn('left', 0.8)}
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Right side - Swiper with background */}
        <motion.div 
           variants={fadeIn('left', 0.3)}
          className="w-full md:w-1/2 relative"
        >
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="p-4"
          >
            <motion.img 
              variants={fadeIn('up', 0.5)}
              src={monitorCardBg}
              alt="Dashboard statistics"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Monitor 