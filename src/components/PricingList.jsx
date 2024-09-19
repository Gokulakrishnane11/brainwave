import React from 'react';
import { motion } from 'framer-motion';
import { pricing } from '../constants';
import Button from './Button';
import { check } from '../assets';
import { InView } from 'react-intersection-observer'; // Import InView hook

// Define animation variants for cards and features
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut", delay: 0.1 } },
};

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <InView key={item.id} threshold={0.2} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref} // Attach ref to the pricing card
              className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 transition transform hover:scale-105 hover:shadow-xl duration-[400ms] ease-in-out"
              variants={cardVariants} // Apply card animation
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Trigger animation based on scroll position
            >
              <h4 className="h4 m-4">{item.title}</h4>
              <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>

              <div className="flex items-center h-[5.5rem] mb-6">
                {item.price && (
                  <>
                    <div className="h3">$</div>
                    <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
                  </>
                )}
              </div>

              <Button
                className="w-full mb-6"
                href={item.price ? '/pricing' : 'mailto:gokulakrishnan212004@gmail.com'}
                white={!!item.price}
              >
                {item.price ? 'Get started' : 'Contact Us'}
              </Button>

              <ul>
                {item.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start py-5 border-t border-n-6 transition transform hover:scale-105 duration-[400ms] ease-in-out"
                    variants={featureVariants} // Apply feature list animation
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"} // Trigger feature animation based on scroll position
                  >
                    <img src={check} width={24} height={24} alt="check" />
                    <p className="body-2 ml-4">{feature}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </InView>
      ))}
    </div>
  );
};

export default PricingList;
