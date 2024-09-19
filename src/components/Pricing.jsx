import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "../components/design/Pricing";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <motion.div className="container relative z-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        
        {/* Sphere and Stars Animation */}
        <InView threshold={0.2} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="hidden relative justify-center mb-[6.5rem] lg:flex"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <img src={smallSphere} alt="sphere" className="relative z-1" width={255} height={255} />
              <motion.div
                className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img src={stars} alt="stars" className="w-full" width={950} height={400} />
              </motion.div>
            </motion.div>
          )}
        </InView>

        {/* Heading Animation */}
        <InView threshold={0.2} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ x: -100, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading tag="Get started with Brainwave" title="Pay once, use forever" />
            </motion.div>
          )}
        </InView>

        {/* Pricing List Animation */}
        <InView threshold={0.2} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="relative"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <PricingList />
              <LeftLine className="absolute left-0 -translate-x-1/2" />
              <RightLine className="absolute right-0 -translate-x-1/2" />
            </motion.div>
          )}
        </InView>

        {/* Link Animation */}
        <InView threshold={0.2} triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              className="flex justify-center mt-10"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="/pricing" className="text-xs font-code font-bold tracking-wider uppercase border-b">
                See the full details
              </a>
            </motion.div>
          )}
        </InView>
      </motion.div>
    </Section>
  );
};

export default Pricing;
