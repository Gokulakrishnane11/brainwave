import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer'; // For triggering animations on scroll
import { brainwaveWhiteSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const Collaboration = () => {
  const [hoveredApp, setHoveredApp] = useState(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section crosses>
      <div className="container lg:flex">
        <InView threshold={0.2} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="max-w-[25rem]"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h2 className="h2 mb-4 md:mb-8">
                AI Chat App for seamless collaboration
              </h2>
              
              <ul className="max-w-[22rem] mb-10 md:mb-14">
                {collabContent.map((item) => (
                  <motion.li
                    className="mb-3 py-3"
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center">
                      <img src={check} alt="check" width={24} height={24} className="transition-transform duration-300 hover:scale-110" />
                      <h6 className="body-2 ml-5 transition-colors duration-300 hover:text-color-1">{item.title}</h6>
                    </div>
                    {item.text && (
                      <p className="body-2 mt-3 text-n-3 transition-opacity duration-300 hover:opacity-80">{item.text}</p>
                    )}
                  </motion.li>
                ))}
              </ul>
              
              <Button>Try it now</Button>
            </motion.div>
          )}
        </InView>
        
        <InView threshold={0.2} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="lg:ml-auto xl:w-[38rem] mt-4"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="body-2 mb-8 text-n-4 md:mb-16 lg:md-32 lg:w-[22rem] lg:mx-auto">
                {collabText}
              </p>
              
              <div className="relative mx-auto w-[22rem] aspect-square scale-100 transition-transform duration-500 md:hover:scale-105" id='rotating-circle'>
                <motion.div 
                  className="relative w-full h-full"
                  style={{ rotate: rotation }}
                >
                  <div className="flex w-full h-full border border-n-6 rounded-full">
                    <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full" id='rotating-circle-2'>
                      <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                        <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                          <img
                            src={brainwaveWhiteSymbol}
                            alt="brainwave"
                            width={48}
                            height={48}
                            className="transition-transform duration-500 hover:rotate-180"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    {collabApps.map((app, index) => (
                      <motion.li
                        key={app.id}
                        className="absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom"
                        style={{ rotate: index * 45 }}
                        whileHover={{ scale: 1.1 }}
                        onMouseEnter={() => setHoveredApp(app.id)}
                        onMouseLeave={() => setHoveredApp(null)}
                      >
                        <motion.div 
                          className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl items-center justify-center transition-all duration-300 ${
                            hoveredApp === app.id ? 'scale-110 md:scale-125 border-color-5' : ''
                          }`}
                          style={{ rotate: -(index * 45 + rotation) }}
                          id='app-icon-background'
                        >
                          <img
                            className="transition-transform duration-300"
                            id='app-icon'
                            width={app.width}
                            height={app.height}
                            src={app.icon}
                            alt={app.title}
                          />
                        </motion.div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <LeftCurve className="absolute -top-[23%] -left-[30%]" />
                <RightCurve className="absolute -bottom-[23%] -right-[30%]" />
              </div>
            </motion.div>
          )}
        </InView>
      </div>
    </Section>
  );
};

export default Collaboration;
