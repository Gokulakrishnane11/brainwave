import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets/";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from '../assets/svg/MenuSvg';
import { HambugerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block w-[12rem] xl:mr-8"
          href="#hero"
        >
          <img src={brainwave} alt="Brainwave" width={190} height={40} />
        </motion.a>

        <nav className={`${
          openNavigation ? 'flex' : 'hidden'
        } lg:flex lg:items-center lg:justify-between lg:ml-auto`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
            className="flex flex-col items-center justify-center lg:flex-row"
          >
            {navigation.map((item) => (
              <motion.a
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 lg:py-8 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-8`}
              >
                {item.title}
              </motion.a>
            ))}
          </motion.div>
        </nav>

        <div className="flex items-center ml-auto lg:ml-0">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#signup"
            className="button hidden mr-8 text-n-1/50 transition-color hover:text-n-1 lg:block"
          >
            New account
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block"
          >
            <Button className="items-center" href="#login">
              Sign in
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden ml-4"
          >
            <Button className='items-center' px='px-3' onClick={toggleNavigation}>
              <MenuSvg openNavigation={openNavigation} />
            </Button>
          </motion.div>
        </div>

        {/* Animated HamburgerMenu */}
        <AnimatePresence>
          {openNavigation && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <HambugerMenu />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;