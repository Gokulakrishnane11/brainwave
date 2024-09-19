import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import { InView } from 'react-intersection-observer'; // Import InView to detect when an element is in view

// Define animation variants for benefits cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const Benefits = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <InView key={item.id} threshold={0.2} triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref} // Attach ref to benefit card
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  onMouseEnter={() => setHoveredBenefit(item.id)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  variants={cardVariants} // Apply card animation
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"} // Trigger animation based on scroll
                >
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] transition-all duration-300 hover:translate-y-[-0.5rem]">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        width={48}
                        height={48}
                        src={item.iconUrl}
                        alt={item.title}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                      <p className="text-n-1 ml-auto font-code text-xs font-bold uppercase tracking-wider transition-colors duration-300 hover:text-color-1">
                        Explore More
                      </p>
                      <Arrow className="transition-transform duration-300 hover:translate-x-1" />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      hoveredBenefit === item.id ? 'opacity-10' : 'opacity-0'
                    }`}>
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            hoveredBenefit === item.id ? 'scale-100' : ''
                          }`}
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
