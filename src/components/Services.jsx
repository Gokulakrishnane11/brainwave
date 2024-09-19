import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer'; // For detecting scroll position
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

// Animation variants for scroll effects
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <InView threshold={0.2} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-n-1/20 group"
            >
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:translate-x-4">
                <img
                  className="w-full h-full object-cover md:object-right"
                  src={service1}
                  alt="Smartest AI"
                  width={800}
                  height={730}
                />
              </div>
              <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="h4 mb-4">Smartest AI</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Brainwave unlocks the potential of AI-powered applications
                </p>
                <ul className="body-2">
                  {brainwaveServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6 transition-all duration-300 hover:pl-2"
                    >
                      <img
                        width={24}
                        height={24}
                        src={check}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
            </motion.div>
          )}
        </InView>

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <InView threshold={0.2} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative min-h-[39rem] border border-n-1/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-n-1/20 group"
              >
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
                  <img
                    className="w-full h-full object-cover"
                    src={service2}
                    alt="AI-Powered"
                    width={630}
                    height={750}
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 transition-all duration-300 group-hover:bg-n-8/80">
                  <h4 className="h4 mb-4">Photo editing</h4>
                  <p className="body-2 mb-[3rem] text-n-3">
                    Automatically enhance your photos using our AI app's
                    photo editing feature. Try it now!
                  </p>
                </div>
                <PhotoChatMessage />
              </motion.div>
            )}
          </InView>

          <InView threshold={0.2} triggerOnce>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[45rem] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
              >
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="h4 mb-[2rem]">Video generation</h4>
                  <p className="body-2 mb-[2rem] text-n-3">
                    The world's most powerful AI photo and video art generation
                    engine. What will you create?
                  </p>
                  <ul className="flex items-center justify-between">
                    {brainwaveServicesIcons.map((item, index) => (
                      <li
                        key={index}
                        className={`rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                          index === 2
                            ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                            : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                        }`}
                      >
                        <div
                          className={
                            index === 2
                              ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                              : ""
                          }
                        >
                          <img
                            src={item}
                            width={24}
                            height={24}
                            alt={item}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] group">
                  <img
                    src={service3}
                    alt="Video generation"
                    width={520}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <VideoChatMessage />
                  <VideoBar />
                </div>
              </motion.div>
            )}
          </InView>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};

export default Services;
